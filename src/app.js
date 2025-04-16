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
    if (!App.hasContentChanged()) return console.log('No changes detected. Skipping parse.');

    const grammar = EditorModule.getGrammarValue();
    const text = EditorModule.getInputValue();
    const start = document.getElementById('startInput')?.value || 'start';
    const parser = document.getElementById('parserSelect')?.value;
    const lexer = document.getElementById('lexerSelect')?.value;
    const debug = document.getElementById('debugCheckbox')?.checked;
    const strict = document.getElementById('strictCheckbox')?.checked;
    const regex = document.getElementById('regexSelect')?.value === 'regex';

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
    EditorModule.inputEditor.dom.addEventListener('dblclick', UI.handleDoubleClickOnInput);
    window.addEventListener('resize', EditorModule.resizeEditors);
    EditorModule.resizeEditors();

    this._setupVerticalResize();
    this._setupHorizontalResize();
    this._bindUIActions();

    await this.populateExampleMenus();
    SettingsModule.loadFromLocalStorage();
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
      resizing = false;
      document.body.style.cursor = 'default';
    });
  },

  _setupHorizontalResize() {
    const leftPane = document.getElementById('left-pane');
    const colResizer = document.getElementById('column-divider');
    const container = document.querySelector('.split-pane');
    let dragging = false;

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
      dragging = false;
      document.body.style.cursor = 'default';
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
      // click is not on the "help" popover
      const helpPopover = document.getElementById('help-popover');
      const helpButton = document.getElementById('help-toggle');
      if (
        helpPopover?.style.display === 'block' &&
        !helpPopover.contains(e.target) &&
        !helpButton.contains(e.target)
      ) {
        helpPopover.classList.add('hidden');
      }

      // click is not on the "settings" popover
      const settingsPopover = document.getElementById('settings-popover');
      const settingsButton = document.getElementById('settings-toggle');
      if (
        settingsPopover?.style.display === 'block' &&
        !settingsPopover.contains(e.target) &&
        !settingsButton.contains(e.target)
      ) {
        settingsPopover.classList.add('hidden');
      }
    });

    document.getElementById('advanced-toggle')?.addEventListener('click', () => {
      document.getElementById('advanced-settings')?.classList.toggle('hidden');
      document.getElementById('advanced-toggle')?.classList.toggle('open');
    });

    document.getElementById('parse-button')?.addEventListener('click', () => this.runParser());

    document.getElementById('submit-download-button')?.addEventListener('click', () => {
      const grammar = EditorModule.getGrammarValue();
      const input = EditorModule.getInputValue();
      const title = encodeURIComponent('Parser failed on valid Bruker code');
      const body = `### What happened?\n\nParser failed on valid Bruker pulse code.\n\n### Pulse Code\n\n\```bruker\n${input}\n\```\n\n### Grammar Used\n\n\```lark\n${grammar}\n\```\n\n### Additional Notes\n\n(Please add any extra context here.)`;
      navigator.clipboard
        .writeText(body)
        .then(() => {
          window.open(`https://github.com/gyromagnet/pulse/issues/new?title=${title}`, '_blank');
          UI.showToast(
            'Copied full issue body to clipboard. Paste it into the GitHub issue.',
            'success',
          );
        })
        .catch(() => alert('Failed to copy to clipboard. Please copy manually.'));
    });

    document.getElementById('collapse-all-button')?.addEventListener('click', () => {
      document.querySelectorAll('.tree-node').forEach((node) => node.classList.add('collapsed'));
    });
    document.getElementById('expand-all-button')?.addEventListener('click', () => {
      document.querySelectorAll('.tree-node').forEach((node) => node.classList.remove('collapsed'));
    });

    document.getElementById('show-hidden-checkbox')?.addEventListener('change', () => {
      if (TreeModule.lastParseTree) {
        TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
      }
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
  UI.showToast('Loading Pyodide...');
  WorkerModule.init();
  await App.initialize();
});

window.App = App;
export { App };
