import { EditorState, EditorSelection, StateEffect, StateField } from '@codemirror/state';
import { basicSetup } from '@codemirror/basic-setup';
import { Decoration, EditorView } from '@codemirror/view';
import { UI } from './ui.js';
import { SettingsModule } from './settings.js';

export const EditorModule = {
  grammarEditor: null,
  inputEditor: null,

  initEditors: async function () {
    const grammarTextArea = document.getElementById('grammar');
    const inputTextArea = document.getElementById('input');

    if (!grammarTextArea || !inputTextArea) {
      console.error("Could not find 'grammar' or 'input' textarea elements.");
      return;
    }

    const grammarContainer = document.createElement('div');
    grammarContainer.className = 'cm-editor grammar-editor';
    grammarTextArea.parentNode.insertBefore(grammarContainer, grammarTextArea);
    grammarTextArea.style.display = 'none';

    const inputContainer = document.createElement('div');
    inputContainer.className = 'cm-editor input-editor';
    inputTextArea.parentNode.insertBefore(inputContainer, inputTextArea);
    inputTextArea.style.display = 'none';

    // Create the grammar editor.
    this.grammarEditor = new EditorView({
      state: EditorState.create({
        doc: grammarTextArea.value,
        extensions: [basicSetup],
      }),
      parent: grammarContainer,
    });

    // Create the input editor with an update listener that calls UI.handleCursorActivity on selection changes.
    this.inputEditor = new EditorView({
      state: EditorState.create({
        doc: inputTextArea.value,
        extensions: [
          basicSetup,
          EditorModule.highlightField,
          EditorView.updateListener.of((update) => {
            if (update.selectionSet) {
              UI.handleCursorActivity();
            }
          }),
        ],
      }),
      parent: inputContainer,
    });

    this.setupDragAndDrop(this.grammarEditor, grammarContainer, 'Grammar');
    this.setupDragAndDrop(this.inputEditor, inputContainer, 'Input');

    grammarContainer.addEventListener('keydown', UI.handleKeyShortcut);
    inputContainer.addEventListener('keydown', UI.handleKeyShortcut);

    SettingsModule.loadFromLocalStorage();
  },

  setupDragAndDrop: function (editorView, container, label) {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
      container.classList.add('drag-hover');
    });
    container.addEventListener('dragleave', () => {
      container.classList.remove('drag-hover');
    });
    container.addEventListener('drop', (e) => {
      e.preventDefault();
      container.classList.remove('drag-hover');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('text')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          editorView.dispatch({
            changes: { from: 0, to: editorView.state.doc.length, insert: event.target.result },
          });
        };
        reader.readAsText(file);
      } else {
        alert('Only text files can be dropped into the ' + label + ' editor.');
      }
    });
  },

  resizeEditors: function () {
    const container = document.querySelector('.editor-container');
    if (!container) return;

    const grammarContainer = container.querySelector('.grammar-editor');
    const inputContainer = container.querySelector('.input-editor');
    if (!grammarContainer || !inputContainer) return;

    const containerHeight = container.clientHeight;
    const divider = document.getElementById('vertical-divider');
    const dividerHeight = divider ? divider.offsetHeight : 0;

    let savedGrammarHeight = parseFloat(localStorage.getItem('grammarHeight'));
    let savedInputHeight = parseFloat(localStorage.getItem('inputHeight'));

    if (isNaN(savedGrammarHeight) || isNaN(savedInputHeight)) {
      savedGrammarHeight = (containerHeight - dividerHeight) / 2;
      savedInputHeight = containerHeight - dividerHeight - savedGrammarHeight;
    }

    grammarContainer.style.height = savedGrammarHeight + 'px';
    inputContainer.style.height = savedInputHeight + 'px';
  },

  getGrammarValue: function () {
    return this.grammarEditor.state.doc.toString();
  },

  getInputValue: function () {
    return this.inputEditor.state.doc.toString();
  },

  setValue: function (editorView, newValue) {
    editorView.dispatch({
      changes: { from: 0, to: editorView.state.doc.length, insert: newValue },
    });
  },

  // --- Highlighting Extension Setup ---
  setHighlightEffect: StateEffect.define({
    map: (value, mapping) => value.map(mapping.changes),
  }),
  highlightField: StateField.define({
    create() {
      return Decoration.none;
    },
    update(deco, tr) {
      for (let effect of tr.effects) {
        if (effect.is(EditorModule.setHighlightEffect)) {
          deco = effect.value;
        }
      }
      return deco.map(tr.changes);
    },
    provide: (f) => EditorView.decorations.from(f),
  }),

  scrollToPos: function (editorView, pos, options = { y: 'center' }) {
    const coords = editorView.coordsAtPos(pos);
    if (!coords) return;
    const scrollDOM = editorView.scrollDOM;
    const viewportHeight = scrollDOM.clientHeight;
    let targetScroll;
    if (options.y === 'center') {
      targetScroll = coords.top - viewportHeight / 2 + (coords.bottom - coords.top) / 2;
    } else if (options.y === 'start') {
      targetScroll = coords.top;
    } else if (options.y === 'end') {
      targetScroll = coords.bottom - viewportHeight;
    } else if (options.y === 'nearest') {
      const currentScroll = scrollDOM.scrollTop;
      if (coords.top < currentScroll || coords.bottom > currentScroll + viewportHeight) {
        targetScroll = coords.top - viewportHeight / 2 + (coords.bottom - coords.top) / 2;
      }
    }
    if (targetScroll !== undefined) {
      scrollDOM.scrollTop = targetScroll;
    }
  },

  setCursorAndScroll: function (pos) {
    if (this.inputEditor) {
      this.inputEditor.dispatch({
        selection: EditorSelection.single(pos),
      });
      this.scrollToPos(this.inputEditor, pos, { y: 'center' });
    }
  },
};
