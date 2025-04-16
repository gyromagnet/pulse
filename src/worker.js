import { UI } from './ui.js';
import { TreeModule } from './tree.js';
import { EditorModule } from './editor.js';
import { App } from './app.js';
import { Decoration } from '@codemirror/view';

export const WorkerModule = {
  worker: null,
  isReady: false,
  parseButton: null,

  init() {
    this.worker = new Worker(new URL('./parser_worker.js', import.meta.url));

    this.worker.onerror = this._handleWorkerError;

    this.parseButton = document.querySelector('.output-header button');
    if (this.parseButton) {
      this.parseButton.disabled = true;
      this.parseButton.textContent = 'Loading...';
    }

    this.worker.onmessage = (event) => this._handleWorkerMessage(event);
  },

  _handleWorkerError(e) {
    console.error('Worker error:', e);
    UI.showToast('❌ Failed to load parser worker', 'error');
  },

  _handleWorkerMessage({ data }) {
    const { type, tree, message } = data;

    switch (type) {
      case 'ready':
        this.isReady = true;
        UI.showToast('Pyodide loaded', 'success');
        if (this.parseButton) {
          this.parseButton.disabled = false;
          this.parseButton.textContent = 'Parse';
        }
        break;

      case 'success':
        TreeModule.lastParseTree = tree;
        TreeModule.renderAndDisplayTree(tree);
        UI.showToast('Parse complete', 'success');
        App._lastGrammar = EditorModule.getGrammarValue();
        App._lastInput = EditorModule.getInputValue();
        break;

      case 'error':
        this._handleParseError(message);
        break;

      default:
        console.warn('Unhandled worker message type:', type);
    }
  },

  _handleParseError(message) {
    const output = document.getElementById('output');
    output.className = 'error';
    output.textContent = message;

    const match = message.match(/line (\d+)[^\d]*column (\d+)/i);
    if (match) {
      const [_lineNum, lineStr, colStr] = match;
      const lineNum = parseInt(lineStr, 10);
      const col = parseInt(colStr, 10);
      try {
        const lineObj = EditorModule.inputEditor.state.doc.line(lineNum);
        const pos = lineObj.from + col;
        EditorModule.setCursorAndScroll(pos);
      } catch (e) {
        console.error('Error converting line/column to position', e);
      }
    }

    if (UI.errorHighlight) {
      EditorModule.inputEditor.dispatch({
        effects: EditorModule.setHighlightEffect.of(Decoration.none),
      });
      UI.errorHighlight = null;
    }

    App._lastGrammar = '';
    App._lastInput = '';
    UI.showToast(message, 'error');
  },

  parse(grammar, text, start, parser, lexer, debug, strict, regex) {
    this.worker.postMessage({ grammar, text, start, parser, lexer, debug, strict, regex });
  },
};
