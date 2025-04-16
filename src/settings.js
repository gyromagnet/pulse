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
    'compress_tree',
    'show_hidden',
    'grammarHeight',
    'inputHeight',
    'enableAdvanced',
  ],
  saveSettings: function () {
    this.settingsKeys.forEach((key) => {
      const el =
        document.getElementById(key + 'Input') ||
        document.getElementById(key + 'Select') ||
        document.getElementById(key + 'Checkbox');
      if (!el) return;
      const value = el.type === 'checkbox' ? el.checked : el.value;
      localStorage.setItem(key, value);
    });
  },
  saveSettingsAndClose: function () {
    this.saveSettings();
    UI.toggleSettings();
    if (TreeModule.lastParseTree) {
      TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
    }
  },
  loadSettings: function () {
    this.settingsKeys.forEach((key) => {
      const el =
        document.getElementById(key + 'Input') ||
        document.getElementById(key + 'Select') ||
        document.getElementById(key + 'Checkbox');
      if (!el) return;

      const value = localStorage.getItem(key);
      if (value !== null) {
        if (el.type === 'checkbox') el.checked = value === 'true';
        else el.value = value;
      } else {
        const defaults = {
          parser: 'earley',
          lexer: 'dynamic',
          regex: 'regex',
          debug: false,
          strict: false,
          start: 'pulseprogram',
          compress_tree: true,
          show_hidden: false,
        };
        const defaultVal = defaults[key];
        if (el.type === 'checkbox') el.checked = defaultVal === true;
        else if (defaultVal != null) el.value = defaultVal;

        // Add listener for immediate save
        el.addEventListener('change', () => {
          const val = el.type === 'checkbox' ? el.checked : el.value;
          localStorage.setItem(key, val);

          if (['compress_tree', 'show_hidden'].includes(key) && TreeModule.lastParseTree) {
            TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
          }
        });
      }
    });

    // Handle layout restoration
    const grammarBlock = document.getElementById('grammar-block');
    const inputBlock = document.getElementById('input-block');
    const savedGrammarHeight = localStorage.getItem('grammarHeight');
    const savedInputHeight = localStorage.getItem('inputHeight');
    if (savedGrammarHeight && savedInputHeight) {
      grammarBlock.style.flex = '0 0 ' + savedGrammarHeight + 'px';
      inputBlock.style.flex = '0 0 ' + savedInputHeight + 'px';
    }
  },
  saveToLocalStorage: function () {
    localStorage.setItem('lark_grammar', EditorModule.getGrammarValue());
    localStorage.setItem('lark_input', EditorModule.getInputValue());
  },
  loadFromLocalStorage: async function () {
    const savedGrammar = localStorage.getItem('grammar');
    const savedPulseCode = localStorage.getItem('pulseCode');

    // If both are already stored, just load them
    if (savedGrammar !== null) {
      // Update the grammar editor via dispatch change.
      EditorModule.grammarEditor.dispatch({
        changes: { from: 0, to: EditorModule.grammarEditor.state.doc.length, insert: savedGrammar },
      });
      console.log('Loaded grammar from localStorage');
    } else {
      // Fetch and load default grammar
      const res = await fetch('grammars/bruker.lark'); // adjust path if needed
      const defaultGrammar = await res.text();
      EditorModule.grammarEditor.dispatch({
        changes: { from: 0, to: EditorModule.grammarEditor.state.doc.length, insert: defaultGrammar },
      });
      localStorage.setItem('grammar', defaultGrammar);
      console.log('Loaded default grammar');
    }

    if (savedPulseCode !== null) {
      EditorModule.inputEditor.dispatch({
        changes: { from: 0, to: EditorModule.inputEditor.state.doc.length, insert: savedPulseCode },
      });
      console.log('Loaded pulse code from localStorage');
    } else {
      // Fetch and load default pulse code
      const res = await fetch('example_code/zg'); // adjust path if needed
      const defaultPulseCode = await res.text();
      EditorModule.inputEditor.dispatch({
        changes: { from: 0, to: EditorModule.inputEditor.state.doc.length, insert: defaultPulseCode },
      });
      localStorage.setItem('pulseCode', defaultPulseCode);
      console.log('Loaded default pulse code');
    }
  },
  resetWorkspace: function () {
    localStorage.clear();
    EditorModule.setValue(EditorModule.grammarEditor, '');
    EditorModule.setValue(EditorModule.inputEditor, '');
    UI.showToast('Workspace has been reset. Reloading...', 'success');
    setTimeout(() => location.reload(), 1500);
  },
  toggleSettings: function () {
    UI.toggleSettings();
  },
};
