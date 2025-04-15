import { UI } from './ui.js';
import { SettingsModule } from './settings.js';

// import CodeMirror from 'codemirror';

export const EditorModule = {
  grammarEditor: null,
  inputEditor: null,

  initEditors: async function () {
    const loadEditor = (el) =>
      new Promise((resolve) => {
        const editor = CodeMirror.fromTextArea(el, {
          lineNumbers: true,
          mode: 'text/plain',
        });
        resolve(editor);
      });

    const grammarEl = document.getElementById('grammar');
    const inputEl = document.getElementById('input');

    this.grammarEditor = await loadEditor(grammarEl);
    this.inputEditor = await loadEditor(inputEl);

    this.setupDragAndDrop(this.grammarEditor, 'Grammar');
    this.setupDragAndDrop(this.inputEditor, 'Input');

    // Events
    this.grammarEditor.on('keydown', UI.handleKeyShortcut);
    this.inputEditor.on('keydown', UI.handleKeyShortcut);
    this.inputEditor.getWrapperElement().addEventListener('mousemove', UI.handleMouseMoveOnInput);
    this.inputEditor.getWrapperElement().addEventListener('mouseleave', UI.handleMouseLeaveOnInput);
    this.inputEditor.getWrapperElement().addEventListener('dblclick', UI.handleDoubleClickOnInput);
    this.inputEditor.on('cursorActivity', UI.handleCursorActivity);

    this.grammarEditor.on('change', SettingsModule.saveToLocalStorage);
    this.inputEditor.on('change', SettingsModule.saveToLocalStorage);
  },
  setupDragAndDrop: function (cm, label) {
    const wrapper = cm.getWrapperElement();
    wrapper.addEventListener('dragover', (e) => {
      e.preventDefault();
      wrapper.classList.add('drag-hover');
    });
    wrapper.addEventListener('dragleave', () => {
      wrapper.classList.remove('drag-hover');
    });
    wrapper.addEventListener('drop', (e) => {
      e.preventDefault();
      wrapper.classList.remove('drag-hover');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('text')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          cm.setValue(event.target.result);
        };
        reader.readAsText(file);
      } else {
        alert('Only text files can be dropped into the ' + label + ' editor.');
      }
    });
  },
  resizeEditors: function () {
    const containerHeight = document.querySelector('.editor-container').clientHeight;
    const divider = document.getElementById('vertical-divider'); // Fix: get the divider element
    const dividerHeight = divider.offsetHeight;
    const grammarBlock = document.getElementById('grammar-block');
    const inputBlock = document.getElementById('input-block');

    const savedGrammarHeight = localStorage.getItem('grammarHeight');
    const savedInputHeight = localStorage.getItem('inputHeight');
    let grammarRatio =
      parseFloat(savedGrammarHeight) / (parseFloat(savedGrammarHeight) + parseFloat(savedInputHeight)) || 0.5;

    const grammarHeight = Math.max(containerHeight * grammarRatio - dividerHeight / 2, 50);
    const inputHeight = Math.max(containerHeight - grammarHeight - dividerHeight, 50);

    grammarBlock.style.flex = '0 0 ' + grammarHeight + 'px';
    inputBlock.style.flex = '0 0 ' + inputHeight + 'px';
  },
};
