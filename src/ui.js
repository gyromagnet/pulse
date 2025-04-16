import { EditorModule } from './editor.js';
import { TreeModule } from './tree.js';
import { App } from './app.js';
import { RangeSetBuilder } from '@codemirror/rangeset';
import { Decoration } from '@codemirror/view';

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

  // Converts mouse coordinates into a document position using posAtCoords.
  handleMouseMoveOnInput: function (event) {
    const pos = EditorModule.inputEditor.posAtCoords({ x: event.clientX, y: event.clientY });
    if (pos == null) return;
    UI.highlightTreeNodeFromInput(pos);
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
    const sel = EditorModule.inputEditor.state.selection.main;
    const index = sel.from;
    const match = UI.findDeepestNode(TreeModule.lastParseTree, index);
    if (match && match._domElement) {
      match._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      match._domElement.classList.add('selected-tree-node');
      setTimeout(() => match._domElement.classList.remove('selected-tree-node'), 1000);
    }
  },

  // This function finds the deepest node for a given document index.
  // If the "Include Hidden Tokens" option is enabled and the node is hidden,
  // then that hidden node is immediately returned.
  findDeepestNode: function (node, index) {
    if (node.start_pos == null || node.end_pos == null) return null;
    if (index < node.start_pos || index >= node.end_pos) return null;

    // Check if "Include Hidden Tokens" is enabled.
    const showHidden =
      !!document.getElementById('showHiddenCheckbox') && document.getElementById('showHiddenCheckbox').checked;
    // If hidden tokens are enabled and this node is hidden, return it.
    if (showHidden && node.hidden) {
      return node;
    }

    let bestMatch = node;
    if (node.children) {
      node.children.forEach((child) => {
        const match = UI.findDeepestNode(child, index);
        if (match) bestMatch = match;
      });
    }
    return bestMatch;
  },

  // Returns an array containing the minimal set of leaf nodes that are fully selected.
  // A parent is included only if all its characters (its entire range) are selected.
  getFullySelectedNodes: function (node, selFrom, selTo) {
    if (node.start_pos == null || node.end_pos == null) return [];
    // Check if the node is fully selected.
    if (selFrom <= node.start_pos && node.end_pos <= selTo) {
      if (node.children && node.children.length > 0) {
        // If every child is fully selected, then include the parent.
        const allChildrenSelected = node.children.every(
          (child) =>
            child.start_pos != null && child.end_pos != null && selFrom <= child.start_pos && child.end_pos <= selTo,
        );
        if (allChildrenSelected) {
          return [node];
        } else {
          // Otherwise, descend into children.
          let selectedNodes = [];
          for (let child of node.children) {
            selectedNodes = selectedNodes.concat(UI.getFullySelectedNodes(child, selFrom, selTo));
          }
          return selectedNodes;
        }
      } else {
        // Leaf node is fully selected.
        return [node];
      }
    }
    // Not fully selected: check children.
    if (node.children && node.children.length > 0) {
      let selectedNodes = [];
      for (let child of node.children) {
        selectedNodes = selectedNodes.concat(UI.getFullySelectedNodes(child, selFrom, selTo));
      }
      return selectedNodes;
    }
    return [];
  },

  // Highlights the minimal set of nodes that are fully selected.
  handleCursorActivity: function () {
    document.querySelectorAll('.selected-tree-node').forEach((el) => el.classList.remove('selected-tree-node'));
    const ranges = EditorModule.inputEditor.state.selection.ranges;
    if (!ranges.length || ranges[0].empty) return;
    const selRange = ranges[0];
    const fromIdx = selRange.from;
    const toIdx = selRange.to;
    const nodesToHighlight = UI.getFullySelectedNodes(TreeModule.lastParseTree, fromIdx, toIdx);
    nodesToHighlight.forEach((node) => {
      if (node._domElement) {
        node._domElement.classList.add('selected-tree-node');
      }
    });
    if (nodesToHighlight.length > 0) {
      const lowest = nodesToHighlight[nodesToHighlight.length - 1];
      if (lowest._domElement) {
        lowest._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  },

  updateTreeCursor: function () {
    if (UI.treeCursorEl) {
      UI.treeCursorEl.remove();
      UI.treeCursorEl = null;
    }
    if (!TreeModule.lastParseTree) return;
    const sel = EditorModule.inputEditor.state.selection.main;
    const cursorIndex = sel.from;
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
            const charWidth = 7;
            const offset = Math.max(0, cursorIndex - focusedNode.start_pos);
            cursorEl.style.left = `${offset * charWidth + 12}px`;
            focusedNode._textWrapper.appendChild(cursorEl);
            UI.treeCursorEl = cursorEl;
          }
        }
      }
      focusedNode._domElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  },

  // When hovering over the input editor, highlight the matching tree node.
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

  highlightRange: function (start, end) {
    const builder = new RangeSetBuilder();
    builder.add(start, end, Decoration.mark({ class: 'highlighted-text' }));
    const decorations = builder.finish();
    EditorModule.inputEditor.dispatch({
      effects: EditorModule.setHighlightEffect.of(decorations),
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
