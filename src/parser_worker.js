/* eslint-env worker */
/* global importScripts, loadPyodide */

let pyodide = null;
let isReady = false;

async function safeStringifyError(err) {
  try {
    return pyodide.runPython(`str(${err.name}) + ": " + str(${err})`);
  } catch {
    return err.message || String(err);
  }
}

async function initializePyodide() {
  importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.5/full/pyodide.js');
  pyodide = await loadPyodide();
  await pyodide.loadPackage('micropip');
  await pyodide.runPythonAsync(`
    import micropip
    await micropip.install("regex")
    await micropip.install("lark")
  `);

  const parseRunnerCode = await fetch('./py/parse_runner.py').then((res) => res.text());
  await pyodide.runPythonAsync(parseRunnerCode);

  isReady = true;
  self.postMessage({ type: 'ready' });
}

initializePyodide();

self.onmessage = async (event) => {
  if (!isReady) {
    self.postMessage({ type: 'error', message: 'Pyodide not yet loaded.' });
    return;
  }

  const { grammar, text, start, parser, lexer, debug, strict, regex } = event.data;

  try {
    const result = await pyodide.runPythonAsync(`
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
    `);
    self.postMessage({ type: 'success', tree: JSON.parse(result) });
  } catch (err) {
    const message = await safeStringifyError(err);
    self.postMessage({ type: 'error', message });
  }
};
