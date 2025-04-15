import { UI } from './ui.js';

import { TreeModule } from './tree.js';
import { EditorModule } from './editor.js';
import { App } from './app.js';

export const WorkerModule = {
  worker: null,
  isReady: false,
  parseButton: null,

  init: function () {
    this.worker = new Worker('js/parser_worker.js');

    this.worker.onerror = (e) => {
      console.error('Worker error:', e);
      UI.showToast('❌ Failed to load parser worker', 'error');
    };
    this.parseButton = document.querySelector('.output-header button');

    if (this.parseButton) {
      this.parseButton.disabled = true;
      this.parseButton.textContent = 'Loading...';
    }

    this.worker.onmessage = (event) => {
      const { type, tree, message } = event.data;

      if (type === 'ready') {
        this.isReady = true;
        UI.showToast('Pyodide loaded', 'success');

        if (this.parseButton) {
          this.parseButton.disabled = false;
          this.parseButton.textContent = 'Parse';
        }
      } else if (type === 'success') {
        TreeModule.lastParseTree = tree;
        TreeModule.renderAndDisplayTree(tree);
        UI.showToast('Parse complete', 'success');
        App._lastGrammar = EditorModule.grammarEditor.getValue();
        App._lastInput = EditorModule.inputEditor.getValue();
      } else if (type === 'error') {
        const output = document.getElementById('output');
        output.className = 'error';
        output.textContent = message;

        const match = message.match(/line (\d+)[^\d]*column (\d+)/i);
        if (match) {
          const [_, lineStr, colStr] = match;
          const line = parseInt(lineStr, 10) - 1;
          const col = parseInt(colStr, 10) - 1;
          const from = { line, ch: col };
          const to = { line, ch: col + 3 };
          EditorModule.inputEditor.setCursor(from);
          EditorModule.inputEditor.scrollIntoView(from, 100);
          if (UI.errorHighlight) UI.errorHighlight.clear();
          UI.errorHighlight = EditorModule.inputEditor.markText(from, to, {
            className: 'highlighted-error-text',
          });
        }

        // Reset to force reparse next time
        App._lastGrammar = '';
        App._lastInput = '';

        UI.showToast(message, 'error');
      }
    };
  },

  parse: function (grammar, text, start, parser, lexer, debug, strict, regex) {
    this.worker.postMessage({ grammar, text, start, parser, lexer, debug, strict, regex });
  },
};
