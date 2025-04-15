import { EditorModule } from './editor.js';
import { TreeModule } from './tree.js';
import { App } from './app.js';

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

  handleKeyShortcut: function (cm, event) {
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      App.runParser();
      event.preventDefault();
    }
  },
  handleMouseMoveOnInput: function (event) {
    if (!TreeModule.treeNodeList || TreeModule.treeNodeList.length === 0) return;
    const pos = EditorModule.inputEditor.coordsChar({ left: event.clientX, top: event.clientY }, 'window');
    const index = EditorModule.inputEditor.indexFromPos(pos);
    UI.highlightTreeNodeFromInput(index);
  },
  handleMouseLeaveOnInput: function () {
    if (UI.hoveredTreeNode && UI.hoveredTreeNode._domElement) {
      UI.hoveredTreeNode._domElement.classList.remove('highlighted-tree-node');
      UI.hoveredTreeNode = null;
    }
    if (UI.lastTreeHighlight) {
      UI.lastTreeHighlight.classList.remove('highlighted-tree-node');
      UI.lastTreeHighlight = null;
    }
  },
  handleDoubleClickOnInput: function () {
    const cursor = EditorModule.inputEditor.getCursor();
    const index = EditorModule.inputEditor.indexFromPos(cursor);
    const match = UI.findDeepestNode(TreeModule.lastParseTree, index);
    if (match && match._domElement) {
      // Scroll the focused node into view and highlight it
      match._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      match._domElement.classList.add('selected-tree-node');
      setTimeout(() => match._domElement.classList.remove('selected-tree-node'), 1000);
    }
  },
  handleCursorActivity: function () {
    document.querySelectorAll('.selected-tree-node').forEach((el) => el.classList.remove('selected-tree-node'));

    // Debounce updating the tree cursor for smoother performance.
    UI.debounce(UI.updateTreeCursor, 80)();

    // Scroll the currently selected node into view (centered)
    const selectedNode = document.querySelector('.selected-tree-node');
    if (selectedNode) {
      selectedNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const sel = EditorModule.inputEditor.listSelections()[0];
    if (!sel || sel.empty() || !TreeModule.treeNodeList) return;
    const fromIdx = EditorModule.inputEditor.indexFromPos(sel.from());
    const toIdx = EditorModule.inputEditor.indexFromPos(sel.to());
    const startIdx = Math.min(fromIdx, toIdx);
    const endIdx = Math.max(fromIdx, toIdx);
    TreeModule.treeNodeList.forEach((node) => {
      if (
        node.start_pos != null &&
        node.end_pos != null &&
        node._domElement &&
        node.start_pos >= startIdx &&
        node.end_pos <= endIdx
      ) {
        node._domElement.classList.add('selected-tree-node');
        // Scroll each selected node into view (centered)
        node._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  },
  updateTreeCursor: function () {
    if (UI.treeCursorEl) {
      UI.treeCursorEl.remove();
      UI.treeCursorEl = null;
    }
    if (!TreeModule.lastParseTree) return;
    const cursorPos = EditorModule.inputEditor.getCursor();
    const cursorIndex = EditorModule.inputEditor.indexFromPos(cursorPos);
    const focusedNode = UI.findDeepestNode(TreeModule.lastParseTree, cursorIndex);
    if (focusedNode && focusedNode._domElement) {
      document
        .querySelectorAll('.highlighted-tree-node-cursor')
        .forEach((el) => el.classList.remove('highlighted-tree-node-cursor'));

      const showHidden = document.getElementById('showHiddenCheckbox').checked;

      if (focusedNode.hidden && !showHidden) {
        const cursorLine = document.createElement('div');
        cursorLine.className = 'tree-cursor tree-cursor-line';
        focusedNode._domElement.appendChild(cursorLine);
        UI.treeCursorEl = cursorLine;
      } else {
        focusedNode._domElement.classList.add('highlighted-tree-node-cursor');
        if (
          focusedNode.type === 'token' &&
          focusedNode._domElement &&
          focusedNode._domElement.querySelector('.tree-text')
        ) {
          if (focusedNode._textWrapper && focusedNode.start_pos != null) {
            const cursorEl = document.createElement('span');
            cursorEl.className = 'tree-cursor';

            // Estimate position based on monospace character width
            const charWidth = 7; // tweak based on your font and zoom level
            const offset = Math.max(0, cursorIndex - focusedNode.start_pos);
            cursorEl.style.left = `${offset * charWidth + 12}px`; // 12px accounts for leading space/quote

            focusedNode._textWrapper.appendChild(cursorEl);
            UI.treeCursorEl = cursorEl;
          }
        }
      }
      focusedNode._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  },
  highlightTreeNodeFromInput: function (index) {
    if (!TreeModule.lastParseTree) return;
    const match = UI.findDeepestNode(TreeModule.lastParseTree, index);
    if (!match || !match._domElement) return;
    if (UI.lastTreeHighlight) {
      UI.lastTreeHighlight.classList.remove('highlighted-tree-node');
    }
    match._domElement.classList.add('highlighted-tree-node');
    UI.lastTreeHighlight = match._domElement;
  },
  findDeepestNode: function (node, index) {
    if (node.start_pos == null || node.end_pos == null) return null;
    if (index < node.start_pos || index >= node.end_pos) return null;
    let bestMatch = node;
    if (node.children) {
      node.children.forEach((child) => {
        const match = UI.findDeepestNode(child, index);
        if (match) bestMatch = match;
      });
    }
    return bestMatch;
  },
  highlightRange: function (start, end) {
    if (UI.currentHighlight) {
      UI.currentHighlight.clear();
      UI.currentHighlight = null;
    }
    if (!isNaN(start) && !isNaN(end)) {
      const from = EditorModule.inputEditor.posFromIndex(start);
      const to = EditorModule.inputEditor.posFromIndex(end);
      UI.currentHighlight = EditorModule.inputEditor.markText(from, to, {
        className: 'highlighted-text',
      });
    }
  },
  clearHighlight: function () {
    if (UI.currentHighlight) {
      UI.currentHighlight.clear();
      UI.currentHighlight = null;
    }
  },
  showToast: function (message, type = 'success', duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'toast show ' + type;
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, duration);

    if (type === 'error') {
      const submitPopover = document.getElementById('submitPopover');
      submitPopover.style.display = 'block';
    }
  },
  toggleSettings: function () {
    const popover = document.getElementById('settingsPopover');
    popover.style.display = popover.style.display === 'block' ? 'none' : 'block';
  },
};
