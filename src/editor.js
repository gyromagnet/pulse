import { basicSetup } from 'codemirror';
import { EditorState, StateEffect, StateField, EditorSelection } from '@codemirror/state';
import { EditorView, Decoration } from '@codemirror/view';
import { UI } from './ui.js';
import { SettingsModule } from './settings.js';

export const EditorModule = {
  grammarEditor: null,
  inputEditor: null,

  initEditors: async function () {
    const gramTA = document.getElementById('grammar');
    const inpTA = document.getElementById('input');
    if (!gramTA || !inpTA) return console.error("Missing 'grammar' or 'input'");

    const gramCont = this._setupEditorContainer(gramTA, 'grammar-editor');
    const inpCont = this._setupEditorContainer(inpTA, 'input-editor');

    this.grammarEditor = new EditorView({
      state: EditorState.create({
        doc: gramTA.value,
        extensions: [
          basicSetup,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) SettingsModule.saveToLocalStorage();
          }),
        ],
      }),
      parent: gramCont,
    });

    this.inputEditor = new EditorView({
      state: EditorState.create({
        doc: inpTA.value,
        extensions: [
          basicSetup,
          this.highlightField,
          EditorView.updateListener.of((update) => {
            if (update.selectionSet) UI.handleCursorActivity();
            if (update.docChanged) SettingsModule.saveToLocalStorage();
          }),
        ],
      }),
      parent: inpCont,
    });

    this._setupDragAndDrop(this.grammarEditor, gramCont, 'Grammar');
    this._setupDragAndDrop(this.inputEditor, inpCont, 'Input');

    gramCont.addEventListener('keydown', UI.handleKeyShortcut);
    inpCont.addEventListener('keydown', UI.handleKeyShortcut);

    SettingsModule.loadSettings();
  },

  _setupEditorContainer(textArea, className) {
    const container = document.createElement('div');
    container.className = `cm-editor ${className}`;
    textArea.parentNode.insertBefore(container, textArea);
    textArea.style.display = 'none';
    return container;
  },

  _setupDragAndDrop(editorView, container, label) {
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
      if (file?.type.startsWith('text')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          editorView.dispatch({
            changes: { from: 0, to: editorView.state.doc.length, insert: event.target.result },
          });
        };
        reader.readAsText(file);
      } else {
        alert(`Only text files can be dropped into the ${label} editor.`);
      }
    });
  },

  resizeEditors() {
    const container = document.querySelector('.editor-container');
    if (!container) return;
    const grammarContainer = container.querySelector('.grammar-editor');
    const inputContainer = container.querySelector('.input-editor');
    if (!grammarContainer || !inputContainer) return;

    const containerHeight = container.clientHeight;
    const dividerHeight = document.getElementById('vertical-divider')?.offsetHeight || 0;
    let grammarHeight = parseFloat(localStorage.getItem('grammarHeight'));
    let inputHeight = parseFloat(localStorage.getItem('inputHeight'));

    if (isNaN(grammarHeight) || isNaN(inputHeight)) {
      grammarHeight = (containerHeight - dividerHeight) / 2;
      inputHeight = containerHeight - dividerHeight - grammarHeight;
    }

    grammarContainer.style.height = `${grammarHeight}px`;
    inputContainer.style.height = `${inputHeight}px`;
  },

  getGrammarValue() {
    return this.grammarEditor.state.doc.toString();
  },

  getInputValue() {
    return this.inputEditor.state.doc.toString();
  },

  setValue(editorView, newValue) {
    editorView.dispatch({
      changes: { from: 0, to: editorView.state.doc.length, insert: newValue },
    });
  },

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

  scrollToPos(editorView, pos, options = { y: 'center' }) {
    const coords = editorView.coordsAtPos(pos);
    if (!coords) return;
    const scrollDOM = editorView.scrollDOM;
    const viewportHeight = scrollDOM.clientHeight;
    let targetScroll;

    switch (options.y) {
      case 'center':
        targetScroll = coords.top - viewportHeight / 2 + (coords.bottom - coords.top) / 2;
        break;
      case 'start':
        targetScroll = coords.top;
        break;
      case 'end':
        targetScroll = coords.bottom - viewportHeight;
        break;
      case 'nearest': {
        const currentScroll = scrollDOM.scrollTop;
        if (coords.top < currentScroll || coords.bottom > currentScroll + viewportHeight) {
          targetScroll = coords.top - viewportHeight / 2 + (coords.bottom - coords.top) / 2;
        }
        break;
      }
    }

    if (targetScroll !== undefined) {
      scrollDOM.scrollTop = targetScroll;
    }
  },
  moveSelection(startPos, endPos) {
    if (!this.inputEditor) return;

    const view = this.inputEditor; // or however you reference your EditorView

    // Dispatch the selection change
    view.dispatch({
      selection: EditorSelection.range(startPos, endPos),
    });

    // Allow the selection to update first
    requestAnimationFrame(() => {
      // Get the coordinates of the selection
      const coords = view.coordsAtPos((startPos + endPos) / 2);
      if (!coords) return;

      const editorDOM = view.scrollDOM;
      const editorRect = editorDOM.getBoundingClientRect();

      const selectionY = coords.top;
      const editorHeight = editorDOM.clientHeight;

      // Calculate scroll offset to center the selection
      const targetScrollTop =
        editorDOM.scrollTop + (selectionY - editorRect.top) - editorHeight / 2;

      editorDOM.scrollTo({
        top: targetScrollTop,
        behavior: 'smooth', // optional: smooth scroll
      });
    });
  },
};
