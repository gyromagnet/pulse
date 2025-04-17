import { UI } from './ui.js';
import { TreeModule } from './tree.js';
import { EditorModule } from './editor.js';

export const SettingsModule = {
  settingsKeys: [
    'parser',
    'lexer',
    'regex',
    'debug',
    'strict',
    'start',
    'compressTree',
    'showHidden',
    'grammarHeight',
    'inputHeight',
    'enableAdvanced',
  ],

  idMap: {
    parser: 'parser-select',
    lexer: 'lexer-select',
    regex: 'regex-select',
    debug: 'debug-checkbox',
    strict: 'strict-checkbox',
    start: 'start-input',
    compressTree: 'compress-checkbox',
    showHidden: 'show-hidden-checkbox',
    enableAdvanced: 'enable-advanced',
  },

  getSettingElement(key) {
    const id = this.idMap[key];
    return id ? document.getElementById(id) : null;
  },

  saveSettings() {
    this.settingsKeys.forEach((key) => {
      const el = this.getSettingElement(key);
      if (!el) return;
      const val = el.type === 'checkbox' ? el.checked : el.value;
      localStorage.setItem(key, val);
    });
  },

  loadSettings() {
    const defaults = {
      parser: 'earley',
      lexer: 'dynamic',
      regex: 'regex',
      debug: false,
      strict: false,
      start: 'pulseprogram',
      compressTree: true,
      showHidden: false,
      enableAdvanced: false,
    };

    this.settingsKeys.forEach((key) => {
      const el = this.getSettingElement(key);
      if (!el) return;
      const stored = localStorage.getItem(key);
      const value = stored !== null ? stored : defaults[key];

      if (el.type === 'checkbox') {
        el.checked = value === true || value === 'true';
      } else {
        el.value = value;
      }

      // highlight non-default
      const container = el.closest('.setting-item');
      function updateDirty() {
        const current = el.type === 'checkbox' ? el.checked : el.value;
        if (current.toString() !== defaults[key].toString()) {
          container?.classList.add('setting-dirty');
        } else {
          container?.classList.remove('setting-dirty');
        }
      }
      updateDirty();
      el.addEventListener('change', updateDirty);

      el.addEventListener('change', () => {
        localStorage.setItem(key, el.type === 'checkbox' ? el.checked : el.value);
        if (['compressTree', 'showHidden'].includes(key) && TreeModule.lastParseTree) {
          TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
        }
      });
    });

    // restore pane sizes
    const gh = localStorage.getItem('grammarHeight');
    const ih = localStorage.getItem('inputHeight');
    if (gh && ih) {
      document.getElementById('grammar-block').style.flex = `0 0 ${gh}px`;
      document.getElementById('input-block').style.flex = `0 0 ${ih}px`;
    }
  },

  saveToLocalStorage() {
    localStorage.setItem('grammar', EditorModule.getGrammarValue());
    localStorage.setItem('pulseCode', EditorModule.getInputValue());
  },

  async loadFromLocalStorage() {
    const g = localStorage.getItem('grammar');
    const p = localStorage.getItem('pulseCode');

    if (g !== null) {
      EditorModule.setValue(EditorModule.grammarEditor, g);
    } else {
      const res = await fetch('grammars/bruker.lark');
      const text = await res.text();
      EditorModule.setValue(EditorModule.grammarEditor, text);
      localStorage.setItem('grammar', text);
    }

    if (p !== null) {
      EditorModule.setValue(EditorModule.inputEditor, p);
    } else {
      const res = await fetch('example_code/zg');
      const text = await res.text();
      EditorModule.setValue(EditorModule.inputEditor, text);
      localStorage.setItem('pulseCode', text);
    }
  },

  resetWorkspace() {
    localStorage.clear();
    EditorModule.setValue(EditorModule.grammarEditor, '');
    EditorModule.setValue(EditorModule.inputEditor, '');
    UI.showToast('Workspace has been reset. Reloading...', 'success');
    setTimeout(() => location.reload(), 1500);
  },

  toggleSettings() {
    UI.toggleSettings();
  },
};
