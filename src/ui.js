import { EditorModule } from './editor.js';
import { TreeModule } from './tree.js';
import { App } from './app.js';
import { RangeSetBuilder } from '@codemirror/state';
import { Decoration } from '@codemirror/view';

function getEl(id) {
  return document.getElementById(id);
}

function clearSelectedTreeNodes() {
  document.querySelectorAll('.selected-tree-node').forEach((el) => {
    el.classList.remove('selected-tree-node');
  });
}

function stopTreeHighlight(match) {
  if (match && match._domElement) {
    match._domElement.classList.remove('highlighted-tree-node');
  }
}

export const UI = {
  currentHighlight: null,
  lastTreeHighlight: null,
  treeCursorEl: null,
  errorHighlight: null,

  debounce: function (fn, delay) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  handleKeyShortcut: function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      App.runParser();
      event.preventDefault();
    }
  },

  handleMouseMoveOnInput: function (event) {
    const pos = EditorModule.inputEditor.posAtCoords({ x: event.clientX, y: event.clientY });
    if (pos == null) return;
    UI.highlightTreeNodeFromInput(pos);
  },

  handleMouseLeaveOnInput: function () {
    if (UI.lastTreeHighlight) {
      stopTreeHighlight(UI.lastTreeHighlight);
      UI.lastTreeHighlight = null;
    }
  },

  handleDoubleClickOnInput: function () {
    const sel = EditorModule.inputEditor.state.selection.main;
    const index = sel.from;
    const match = UI.findDeepestNode(TreeModule.lastParseTree, index);
    if (match && match._domElement) {
      match._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      match._domElement.classList.add('selected-tree-node');
      setTimeout(() => match._domElement.classList.remove('selected-tree-node'), 1000);
    }
  },

  findDeepestNode: function (node, index) {
    if (node.startPos == null || node.endPos == null) return null;
    if (index < node.startPos || index >= node.endPos) return null;

    const showHidden = getEl('showHiddenCheckbox')?.checked;
    if (showHidden && node.hidden) return node;

    let bestMatch = node;
    if (node.children) {
      node.children.forEach((child) => {
        const match = UI.findDeepestNode(child, index);
        if (match) bestMatch = match;
      });
    }
    return bestMatch;
  },

  getFullySelectedNodes: function (node, selFrom, selTo) {
    if (node.startPos == null || node.endPos == null) return [];
    if (selFrom <= node.startPos && node.endPos <= selTo) {
      if (node.children?.length > 0) {
        const allChildrenSelected = node.children.every(
          (child) =>
            child.startPos != null &&
            child.endPos != null &&
            selFrom <= child.startPos &&
            child.endPos <= selTo,
        );
        return allChildrenSelected
          ? [node]
          : node.children.flatMap((child) => UI.getFullySelectedNodes(child, selFrom, selTo));
      }
      return [node];
    }
    return node.children?.flatMap((child) => UI.getFullySelectedNodes(child, selFrom, selTo)) || [];
  },

  handleCursorActivity: function () {
    clearSelectedTreeNodes();
    const ranges = EditorModule.inputEditor.state.selection.ranges;
    if (!ranges.length || ranges[0].empty) return;
    const selRange = ranges[0];
    const fromIdx = selRange.from;
    const toIdx = selRange.to;
    const nodesToHighlight = UI.getFullySelectedNodes(TreeModule.lastParseTree, fromIdx, toIdx);
    nodesToHighlight.forEach((node) => node._domElement?.classList.add('selected-tree-node'));
    nodesToHighlight.at(-1)?._domElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },

  updateTreeCursor: function () {
    UI.treeCursorEl?.remove();
    UI.treeCursorEl = null;
    if (!TreeModule.lastParseTree) return;
    const sel = EditorModule.inputEditor.state.selection.main;
    const cursorIndex = sel.from;
    const focusedNode = UI.findDeepestNode(TreeModule.lastParseTree, cursorIndex);
    if (focusedNode && focusedNode._domElement) {
      document
        .querySelectorAll('.highlighted-tree-node-cursor')
        .forEach((el) => el.classList.remove('highlighted-tree-node-cursor'));
      const showHidden = getEl('showHiddenCheckbox')?.checked;
      if (focusedNode.hidden && !showHidden) {
        const cursorLine = document.createElement('div');
        cursorLine.className = 'tree-cursor tree-cursor-line';
        focusedNode._domElement.appendChild(cursorLine);
        UI.treeCursorEl = cursorLine;
      } else {
        focusedNode._domElement.classList.add('highlighted-tree-node-cursor');
        if (
          focusedNode.type === 'token' &&
          focusedNode._textWrapper &&
          focusedNode.startPos != null
        ) {
          const cursorEl = document.createElement('span');
          cursorEl.className = 'tree-cursor';
          const charWidth = 7;
          const offset = Math.max(0, cursorIndex - focusedNode.startPos);
          cursorEl.style.left = `${offset * charWidth + 12}px`;
          focusedNode._textWrapper.appendChild(cursorEl);
          UI.treeCursorEl = cursorEl;
        }
      }
      focusedNode._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },

  highlightTreeNodeFromInput: function (index) {
    if (!TreeModule.lastParseTree) return;
    const match = UI.findDeepestNode(TreeModule.lastParseTree, index);
    if (!match || !match._domElement) return;
    stopTreeHighlight(UI.lastTreeHighlight);
    match._domElement.classList.add('highlighted-tree-node');
    UI.lastTreeHighlight = match;
  },

  highlightRange: function (start, end) {
    if (start == null || end == null || start >= end) return;
    const builder = new RangeSetBuilder();
    builder.add(start, end, Decoration.mark({ class: 'highlighted-text' }));
    EditorModule.inputEditor.dispatch({
      effects: EditorModule.setHighlightEffect.of(builder.finish()),
    });
    UI.currentHighlight = true;
  },

  clearHighlight: function () {
    if (UI.currentHighlight) {
      EditorModule.inputEditor.dispatch({
        effects: EditorModule.setHighlightEffect.of(Decoration.none),
      });
      UI.currentHighlight = null;
    }
  },

  showToast: function (message, type = 'success', duration = 3000) {
    const toast = getEl('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'toast show ' + type;
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, duration);

    if (type === 'error') {
      getEl('submit-popover').style.display = 'block';
    }
  },

  toggleSettings: function () {
    document.getElementById('settings-popover').classList.toggle('hidden');
  },
};
