/* eslint-env worker */
/* global importScripts, loadPyodide */

import parseRunnerSource from '@py/parse_runner.py?raw';

// DEBUG: make sure the raw import actually brought in your Python source
console.log('🛠️ parseRunnerSource length:', parseRunnerSource?.length);
console.log(parseRunnerSource?.slice(0, 200));

let pyodide = null;
let isReady = false;

// forward any uncaught errors/rejections to the main thread
self.addEventListener('error', (e) => {
  self.postMessage({ type: 'error', message: e.message });
  e.preventDefault();
});
self.addEventListener('unhandledrejection', (e) => {
  const msg = e.reason?.message || String(e.reason);
  self.postMessage({ type: 'error', message: msg });
  e.preventDefault();
});

async function initializePyodide() {
  try {
    importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js');
    pyodide = await loadPyodide();
    await pyodide.loadPackage('micropip');
    await pyodide.runPythonAsync(`
      import micropip
      await micropip.install("regex")
      await micropip.install("lark")
    `);

    // this is the inlined Python module
    await pyodide.runPythonAsync(parseRunnerSource);

    isReady = true;
    self.postMessage({ type: 'ready' });
  } catch (err) {
    self.postMessage({ type: 'error', message: err.message || String(err) });
  }
}

initializePyodide();

self.onmessage = async (event) => {
  try {
    if (!isReady) {
      self.postMessage({ type: 'error', message: 'Pyodide not yet loaded.' });
      return;
    }

    const { grammar, text, start, parser, lexer, debug, strict, regex } = event.data;
    const code = `
      parse_input(
        ${JSON.stringify(grammar)},
        ${JSON.stringify(text)},
        ${JSON.stringify(start)},
        ${JSON.stringify(parser)},
        ${JSON.stringify(lexer)},
        debug=${debug ? 'True' : 'False'},
        strict=${strict ? 'True' : 'False'},
        regex=${regex ? 'True' : 'False'}
      )
    `;

    try {
      const result = await pyodide.runPythonAsync(code);
      self.postMessage({ type: 'success', tree: JSON.parse(result) });
    } catch (err) {
      const msg = await safeStringifyError(err);
      self.postMessage({ type: 'error', message: msg });
    }
  } catch (err) {
    self.postMessage({ type: 'error', message: err.message || String(err) });
  }
};

async function safeStringifyError(err) {
  try {
    return pyodide.runPython(`str(${err.name}) + ": " + str(${err})`);
  } catch {
    return err.message || String(err);
  }
}
