import { EditorModule } from './editor.js';
import { TreeModule } from './tree.js';
import { App } from './app.js';
import { RangeSetBuilder } from '@codemirror/state';
import { Decoration } from '@codemirror/view';

function getEl(id) {
  return document.getElementById(id);
}
function clearSelectedTreeNodes() {
  document
    .querySelectorAll('.selected-tree-node')
    .forEach((el) => el.classList.remove('selected-tree-node'));
}
function stopTreeHighlight(match) {
  if (match && match._domElement) match._domElement.classList.remove('highlighted-tree-node');
}

export const UI = {
  currentHighlight: null,
  treeCursorEl: null,
  lastTreeHighlight: null,

  handleKeyShortcut(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      App.runParser();
      event.preventDefault();
    }
  },

  handleMouseMoveOnInput(event) {
    const pos = EditorModule.inputEditor.posAtCoords({ x: event.clientX, y: event.clientY });
    if (pos != null) UI.highlightTreeNodeFromInput(pos);
  },

  handleMouseLeaveOnInput() {
    if (UI.lastTreeHighlight) {
      stopTreeHighlight(UI.lastTreeHighlight);
      UI.lastTreeHighlight = null;
    }
  },

  handleDoubleClickOnInput() {
    const idx = EditorModule.inputEditor.state.selection.main.from;
    const match = UI.findDeepestNode(TreeModule.lastParseTree, idx);
    if (match && match._domElement) {
      // Ensure parent nodes are expanded before scrolling
      let el = match._domElement;
      while (el && el.classList) {
        el.classList.remove('collapsed');
        el = el.parentElement?.closest('.tree-node');
      }

      match._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      match._domElement.classList.add('selected-tree-node');
      setTimeout(() => match._domElement.classList.remove('selected-tree-node'), 1000);
    }
  },

  findDeepestNode(node, index) {
    if (node.startPos == null || node.endPos == null) return null;
    if (index < node.startPos || index >= node.endPos) return null;
    const showHidden = getEl('show-hidden-checkbox')?.checked;
    if (node.hidden && !showHidden) return null;

    let result = node;
    if (node.children) {
      node.children.forEach((child) => {
        const deeper = UI.findDeepestNode(child, index);
        if (deeper) {
          result = deeper;
        }
      });
    }
    return result;
  },

  getFullySelectedNodes(node, selFrom, selTo) {
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

  handleCursorActivity() {
    clearSelectedTreeNodes();
    UI.clearPartialTokenHighlights();

    const ranges = EditorModule.inputEditor.state.selection.ranges;
    if (ranges.length && !ranges[0].empty) {
      const { from: selFrom, to: selTo } = ranges[0];
      const nodesToHighlight = UI.getFullySelectedNodes(TreeModule.lastParseTree, selFrom, selTo);
      nodesToHighlight.forEach((node) => node._domElement?.classList.add('selected-tree-node'));
      nodesToHighlight.at(-1)?._domElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      UI.highlightPartialTokens(selFrom, selTo);
    }

    UI.updateTreeCursor();
  },

  updateTreeCursor() {
    // remove previous
    UI.treeCursorEl?.remove();
    UI.treeCursorEl = null;
    if (!TreeModule.lastParseTree) return;

    const sel = EditorModule.inputEditor.state.selection.main;
    const idx = sel.from;
    const node = UI.findDeepestNode(TreeModule.lastParseTree, idx);
    if (!node || !node._domElement) return;

    document
      .querySelectorAll('.highlighted-tree-node-cursor')
      .forEach((el) => el.classList.remove('highlighted-tree-node-cursor'));

    const showHidden = getEl('show-hidden-checkbox')?.checked;

    if (node.hidden && !showHidden) {
      // Find the rule‑node container that _would_ have held this token
      let anchor = node._domElement;
      // climb up until we hit a displayed .tree-node
      while (
        (anchor && !(anchor instanceof HTMLElement)) ||
        (anchor && !anchor.classList.contains('tree-node'))
      ) {
        anchor = anchor.parentElement;
      }
      // now draw the horizontal line at that anchor’s top offset
      if (anchor) {
        const rect = anchor.getBoundingClientRect();
        const parentRect = anchor.parentElement.getBoundingClientRect();
        const y = rect.top - parentRect.top;

        const cursorLine = document.createElement('div');
        cursorLine.className = 'tree-cursor tree-cursor-line';
        cursorLine.style.position = 'absolute';
        cursorLine.style.top = `${y}px`;
        cursorLine.style.left = '0';
        // make it span the full width of the tree‐children container
        cursorLine.style.width = '100%';

        // attach into the .tree-children wrapper
        anchor.parentElement.style.position = 'relative';
        anchor.parentElement.appendChild(cursorLine);
        UI.treeCursorEl = cursorLine;
      }
      return;
    }

    // visible token or rule: inline cursor
    node._domElement.classList.add('highlighted-tree-node-cursor');

    if (node.type === 'token' && node._textWrapper && node.startPos != null) {
      const wrapper = node._textWrapper;
      const spans = Array.from(wrapper.querySelectorAll('span[data-pos]'));
      const rel = idx;
      const cursorEl = document.createElement('span');
      cursorEl.className = 'tree-cursor';

      // find the exact span for this position
      let target = spans.find((s) => parseInt(s.dataset.pos, 10) === rel);
      if (target) {
        const r = target.getBoundingClientRect();
        const wr = wrapper.getBoundingClientRect();
        cursorEl.style.left = `${r.left - wr.left}px`;
      } else if (rel === node.endPos && spans.length) {
        // at end of token: place after last span
        const last = spans[spans.length - 1];
        const r = last.getBoundingClientRect();
        const wr = wrapper.getBoundingClientRect();
        cursorEl.style.left = `${r.right - wr.left}px`;
      } else {
        // fallback: start of wrapper
        cursorEl.style.left = '0px';
      }

      wrapper.appendChild(cursorEl);
      UI.treeCursorEl = cursorEl;
    }

    node._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  },

  highlightTreeNodeFromInput(index) {
    if (!TreeModule.lastParseTree) return;
    const match = UI.findDeepestNode(TreeModule.lastParseTree, index);
    if (!match || !match._domElement) return;
    stopTreeHighlight(UI.lastTreeHighlight);
    match._domElement.classList.add('highlighted-tree-node');
    UI.lastTreeHighlight = match;
  },

  highlightRange(start, end) {
    if (start == null || end == null || start >= end) return;
    const builder = new RangeSetBuilder();
    builder.add(start, end, Decoration.mark({ class: 'highlighted-text' }));
    EditorModule.inputEditor.dispatch({
      effects: EditorModule.setHighlightEffect.of(builder.finish()),
    });
    UI.currentHighlight = true;
  },

  clearHighlight() {
    if (UI.currentHighlight) {
      EditorModule.inputEditor.dispatch({
        effects: EditorModule.setHighlightEffect.of(Decoration.none),
      });
      UI.currentHighlight = null;
    }
  },

  showToast(message, type = 'success', duration = 3000) {
    const t = getEl('toast');
    if (!t) return;
    t.textContent = message;
    t.className = `toast show ${type}`;
    t.classList.remove('hidden');
    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.classList.add('hidden'), 300);
    }, duration);

    if (type === 'error') {
      const sb = getEl('submit-popover');
      if (sb) sb.classList.remove('hidden');
    }
  },

  toggleSettings() {
    getEl('settings-popover')?.classList.toggle('hidden');
  },

  highlightPartialTokens(selFrom, selTo) {
    TreeModule.treeNodeList.forEach((node) => {
      if (node.type === 'token' && node._textElement) {
        node._textElement.querySelectorAll('span[data-pos]').forEach((span) => {
          const pos = parseInt(span.dataset.pos, 10);
          if (pos >= selFrom && pos < selTo) {
            span.classList.add('highlighted-text');
          } else {
            span.classList.remove('highlighted-text');
          }
        });
      }
    });
  },

  clearPartialTokenHighlights() {
    TreeModule.treeNodeList.forEach((node) => {
      if (node._textElement) {
        node._textElement
          .querySelectorAll('.highlighted-text')
          .forEach((el) => el.classList.remove('highlighted-text'));
      }
    });
  },
};
