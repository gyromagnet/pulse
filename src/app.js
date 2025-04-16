import { UI } from './ui.js';
import { EditorModule } from './editor.js';
import { TreeModule } from './tree.js';
import { WorkerModule } from './worker.js';
import { SettingsModule } from './settings.js';

function toggleHidden(id) {
  document.getElementById(id).classList.toggle('hidden');
}

const App = {
  _lastGrammar: '',
  _lastInput: '',

  runParser() {
    if (!WorkerModule.isReady) return UI.showToast('Pyodide is still loading...', 'error');
    if (!this.hasContentChanged()) return console.log('No changes detected. Skipping parse.');

    const grammar = EditorModule.getGrammarValue();
    const text = EditorModule.getInputValue();
    const start = document.getElementById('start-input')?.value || 'start';
    const parser = document.getElementById('parser-select')?.value || 'earley';
    const lexer = document.getElementById('lexer-select')?.value || 'dynamic';
    const debug = document.getElementById('debug-checkbox')?.checked || false;
    const strict = document.getElementById('strict-checkbox')?.checked || false;
    const regex = document.getElementById('regex-select')?.value === 'regex';

    document.getElementById('output').textContent = 'Parsing...';
    WorkerModule.parse(grammar, text, start, parser, lexer, debug, strict, regex);
  },

  hasContentChanged() {
    return (
      EditorModule.getGrammarValue() !== this._lastGrammar ||
      EditorModule.getInputValue() !== this._lastInput
    );
  },

  initialize: async function () {
    await EditorModule.initEditors();

    // Double‑click in editor → scroll to tree
    EditorModule.inputEditor.dom.addEventListener('dblclick', UI.handleDoubleClickOnInput);
    // Hover in editor → highlight tree
    EditorModule.inputEditor.dom.addEventListener('mousemove', UI.handleMouseMoveOnInput);
    EditorModule.inputEditor.dom.addEventListener('mouseleave', UI.handleMouseLeaveOnInput);

    window.addEventListener('resize', EditorModule.resizeEditors);
    EditorModule.resizeEditors();

    this._setupVerticalResize();
    this._setupHorizontalResize();
    this._bindUIActions();

    await this.populateExampleMenus();
    SettingsModule.loadSettings();
    await SettingsModule.loadFromLocalStorage();
  },

  _setupVerticalResize() {
    const grammarBlock = document.getElementById('grammar-block');
    const inputBlock = document.getElementById('input-block');
    const divider = document.getElementById('vertical-divider');
    let resizing = false;

    divider.addEventListener('mousedown', (e) => {
      e.preventDefault();
      resizing = true;
      document.body.style.cursor = 'row-resize';
    });

    document.addEventListener('mousemove', (e) => {
      if (!resizing) return;
      const container = grammarBlock.parentElement;
      const top = container.getBoundingClientRect().top;
      const height = container.clientHeight;
      const offset = e.clientY - top;
      const dividerHeight = divider.offsetHeight;
      const minHeight = 50;
      const grammarHeight = Math.max(offset - dividerHeight / 2, minHeight);
      const inputHeight = Math.max(height - grammarHeight - dividerHeight, minHeight);
      grammarBlock.style.flex = `0 0 ${grammarHeight}px`;
      inputBlock.style.flex = `0 0 ${inputHeight}px`;
    });

    document.addEventListener('mouseup', () => {
      if (!resizing) return;
      resizing = false;
      document.body.style.cursor = 'default';
      // **persist the final heights**
      const gh = grammarBlock.getBoundingClientRect().height;
      const ih = inputBlock.getBoundingClientRect().height;
      localStorage.setItem('grammarHeight', gh);
      localStorage.setItem('inputHeight', ih);
    });
  },

  _setupHorizontalResize() {
    const leftPane = document.getElementById('left-pane');
    const colResizer = document.getElementById('column-divider');
    const container = document.querySelector('.split-pane');
    let dragging = false;

    // on init, apply saved width:
    const saved = localStorage.getItem('leftPaneWidth');
    if (saved) leftPane.style.width = `${saved}px`;

    colResizer.addEventListener('mousedown', (e) => {
      e.preventDefault();
      dragging = true;
      document.body.style.cursor = 'col-resize';
    });

    document.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const containerRect = container.getBoundingClientRect();
      const offset = e.clientX - containerRect.left;
      const min = 200;
      const max = containerRect.width - min;
      const width = Math.min(Math.max(offset, min), max);
      leftPane.style.width = `${width}px`;
    });

    document.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false;
      document.body.style.cursor = 'default';
      // **persist the final width**
      const w = leftPane.getBoundingClientRect().width;
      localStorage.setItem('leftPaneWidth', w);
    });
  },

  _bindUIActions() {
    document.getElementById('settings-toggle')?.addEventListener('click', () => {
      toggleHidden('settings-popover');
    });
    document.getElementById('help-toggle')?.addEventListener('click', () => {
      toggleHidden('help-popover');
    });

    document.addEventListener('click', (e) => {
      // Hide help
      const hp = document.getElementById('help-popover');
      if (
        hp &&
        !hp.contains(e.target) &&
        !document.getElementById('help-toggle').contains(e.target)
      ) {
        hp.classList.add('hidden');
      }
      // Hide settings
      const sp = document.getElementById('settings-popover');
      if (
        sp &&
        !sp.contains(e.target) &&
        !document.getElementById('settings-toggle').contains(e.target)
      ) {
        sp.classList.add('hidden');
      }
      // Hide submit‑failure popover
      const sb = document.getElementById('submit-popover');
      if (sb && !sb.contains(e.target)) {
        sb.classList.add('hidden');
      }
    });

    document.getElementById('advanced-toggle')?.addEventListener('click', () => {
      document.getElementById('advanced-settings')?.classList.toggle('hidden');
      document.getElementById('advanced-toggle')?.classList.toggle('open');
    });

    document.getElementById('parse-button')?.addEventListener('click', () => this.runParser());

    // **Export JSON**
    document.getElementById('export-json-button')?.addEventListener('click', () => {
      if (TreeModule.lastParseTree) {
        const blob = new Blob([JSON.stringify(TreeModule.lastParseTree, null, 2)], {
          type: 'application/json',
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'parse-tree.json';
        a.click();
        URL.revokeObjectURL(url);
      }
    });

    document.getElementById('collapse-all-button')?.addEventListener('click', () => {
      document.querySelectorAll('.tree-node').forEach((n) => n.classList.add('collapsed'));
    });
    document.getElementById('expand-all-button')?.addEventListener('click', () => {
      document.querySelectorAll('.tree-node').forEach((n) => n.classList.remove('collapsed'));
    });

    document.getElementById('show-hidden-checkbox')?.addEventListener('change', () => {
      if (TreeModule.lastParseTree) TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
    });
    document.getElementById('compress-checkbox')?.addEventListener('change', () => {
      if (TreeModule.lastParseTree) TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
    });
  },

  async populateExampleMenus() {
    try {
      const res = await fetch('examples.json');
      const data = await res.json();
      const grammarMenu = document.getElementById('grammar-examples');
      const inputMenu = document.getElementById('input-examples');

      grammarMenu.innerHTML = '';
      data.grammars.forEach(({ name, file }) => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = name;
        link.addEventListener('click', (e) => {
          e.preventDefault();
          fetch(file)
            .then((res) => (res.ok ? res.text() : Promise.reject(`Failed to load ${file}`)))
            .then((text) => EditorModule.setValue(EditorModule.grammarEditor, text))
            .catch((err) => alert('Could not load grammar: ' + err));
        });
        grammarMenu.appendChild(link);
      });

      inputMenu.innerHTML = '';
      data.inputs.forEach(({ name, file }) => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = name;
        link.addEventListener('click', (e) => {
          e.preventDefault();
          fetch(file)
            .then((res) => (res.ok ? res.text() : Promise.reject(`Failed to load ${file}`)))
            .then((text) => EditorModule.setValue(EditorModule.inputEditor, text))
            .catch((err) => alert('Could not load example: ' + err));
        });
        inputMenu.appendChild(link);
      });
    } catch (error) {
      console.error('Failed to populate example menus:', error);
    }
  },
};

document.addEventListener('DOMContentLoaded', async () => {
  UI.showToast('Loading Pyodide…');
  WorkerModule.init();
  await App.initialize();
});

window.App = App;
export { App };
