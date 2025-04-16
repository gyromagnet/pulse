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

  getSettingElement(key) {
    return (
      document.getElementById(`${key}Input`) ||
      document.getElementById(`${key}Select`) ||
      document.getElementById(`${key}Checkbox`)
    );
  },

  saveSettings() {
    this.settingsKeys.forEach((key) => {
      const el = this.getSettingElement(key);
      if (!el) return;
      const value = el.type === 'checkbox' ? el.checked : el.value;
      localStorage.setItem(key, value);
    });
  },

  saveSettingsAndClose() {
    this.saveSettings();
    UI.toggleSettings();
    if (TreeModule.lastParseTree) {
      TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
    }
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
    };

    this.settingsKeys.forEach((key) => {
      const el = this.getSettingElement(key);
      if (!el) return;

      const stored = localStorage.getItem(key);
      const value = stored !== null ? stored : defaults[key];

      if (el.type === 'checkbox') {
        el.checked = value === true || value === 'true';
      } else if (value != null) {
        el.value = value;
      }

      this._attachChangeListener(key, el);
    });

    // Restore layout sizes
    const grammarBlock = document.getElementById('grammar-block');
    const inputBlock = document.getElementById('input-block');
    const savedGrammarHeight = localStorage.getItem('grammarHeight');
    const savedInputHeight = localStorage.getItem('inputHeight');

    if (savedGrammarHeight && savedInputHeight) {
      grammarBlock.style.flex = `0 0 ${savedGrammarHeight}px`;
      inputBlock.style.flex = `0 0 ${savedInputHeight}px`;
    }
  },

  _attachChangeListener(key, el) {
    el.addEventListener('change', () => {
      const val = el.type === 'checkbox' ? el.checked : el.value;
      localStorage.setItem(key, val);

      if (['compressTree', 'showHidden'].includes(key) && TreeModule.lastParseTree) {
        TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
      }
    });
  },

  saveToLocalStorage() {
    localStorage.setItem('larkGrammar', EditorModule.getGrammarValue());
    localStorage.setItem('larkInput', EditorModule.getInputValue());
  },

  async loadFromLocalStorage() {
    const savedGrammar = localStorage.getItem('grammar');
    const savedPulseCode = localStorage.getItem('pulseCode');

    if (savedGrammar !== null) {
      EditorModule.setValue(EditorModule.grammarEditor, savedGrammar);
    } else {
      const res = await fetch('grammars/bruker.lark');
      const defaultGrammar = await res.text();
      EditorModule.setValue(EditorModule.grammarEditor, defaultGrammar);
      localStorage.setItem('grammar', defaultGrammar);
    }

    if (savedPulseCode !== null) {
      EditorModule.setValue(EditorModule.inputEditor, savedPulseCode);
    } else {
      const res = await fetch('example_code/zg');
      const defaultPulseCode = await res.text();
      EditorModule.setValue(EditorModule.inputEditor, defaultPulseCode);
      localStorage.setItem('pulseCode', defaultPulseCode);
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
