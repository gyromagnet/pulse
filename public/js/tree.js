import { UI } from './ui.js';
import { EditorModule } from './editor.js';

export const TreeModule = {
  lastParseTree: null,
  treeNodeList: [],

  formatTokenValue: function (value) {
    // If the token value only contains whitespace, replace all newline characters with the return symbol.
    if (value.trim() === '') {
      return value.replace(/\n/g, '↵');
    }
    // Otherwise, return the original value unchanged.
    return value;
  },

  renderAndDisplayTree: function (tree) {
    document.querySelectorAll('.selected-tree-node').forEach((el) => el.classList.remove('selected-tree-node'));
    const compress = document.getElementById('compressCheckbox').checked;
    const showHidden = document.getElementById('showHiddenCheckbox').checked;
    const treeData = compress ? this.compressTree(tree) : tree;
    const output = document.getElementById('output');
    output.className = '';
    output.innerHTML = '';
    const treeRoot = this.renderTree(treeData, 0, true, showHidden);
    treeRoot.classList.add('root-node');
    output.appendChild(treeRoot);
    this.treeNodeList = [];
    this.collectTreeNodes(treeData);
  },
  compressTree: function (node) {
    if (node.type !== 'rule') return node;
    let nameChain = [node.name];
    let current = node;

    while (current.children && current.children.length === 1 && current.children[0].type === 'rule') {
      current = current.children[0];
      nameChain.push(current.name);
    }

    const compressedChildren = current.children.map(this.compressTree.bind(this));
    const childStart = compressedChildren.map((c) => c.start_pos).filter((p) => p != null);
    const childEnd = compressedChildren.map((c) => c.end_pos).filter((p) => p != null);
    const start_pos = Math.min(...childStart, node.start_pos ?? Infinity);
    const end_pos = Math.max(...childEnd, current.end_pos ?? -1);

    return {
      type: 'rule',
      name: nameChain.join(' > '),
      children: compressedChildren,
      start_pos,
      end_pos,
    };
  },
  collectTreeNodes: function (node) {
    if (node && node.start_pos != null && node.end_pos != null && node._domElement) {
      this.treeNodeList.push(node);
    }
    if (node.children) {
      node.children.forEach((child) => this.collectTreeNodes(child));
    }
  },
  renderTree: function (node, depth = 0, isLast = true, showHidden = false) {
    const wrapper = document.createElement('div');
    wrapper.className = 'tree-node ' + (isLast ? 'last-child' : '');
    const startPos = node.start_pos ?? null;
    const endPos = node.end_pos ?? null;
    wrapper._startPos = startPos;
    wrapper._endPos = endPos;
    node._domElement = wrapper;

    const labelRow = document.createElement('div');
    labelRow.className = 'tree-label';
    wrapper.addEventListener('mouseenter', (e) => {
      e.stopPropagation();
      UI.highlightRange(startPos, endPos);
    });
    wrapper.addEventListener('mouseleave', (_e) => {
      UI.clearHighlight();
    });
    labelRow.addEventListener('mouseenter', (e) => {
      e.stopPropagation();
      UI.highlightRange(startPos, endPos);
    });
    labelRow.addEventListener('mouseleave', (_e) => {
      UI.clearHighlight();
    });

    if (node.type === 'rule' && node.children && node.children.length > 0) {
      labelRow.classList.add('collapse-toggle');
      const label = document.createElement('span');
      label.className = 'tree-rule';
      const parts = node.name.split(' > ');
      parts.forEach((part, i) => {
        const span = document.createElement('span');
        span.textContent = part;
        label.appendChild(span);
        if (i < parts.length - 1) {
          const sep = document.createElement('span');
          sep.textContent = '>';
          sep.className = 'tree-rule-separator';
          label.appendChild(sep);
        }
      });
      labelRow.appendChild(label);
      wrapper.appendChild(labelRow);
      const childrenContainer = document.createElement('div');
      childrenContainer.className = 'tree-children';
      node.children.forEach((child, index) => {
        const childIsLast = index === node.children.length - 1;
        childrenContainer.appendChild(this.renderTree(child, depth + 1, childIsLast, showHidden));
      });
      wrapper.appendChild(childrenContainer);
      labelRow.addEventListener('click', (e) => {
        e.stopPropagation();
        wrapper.classList.toggle('collapsed');
      });
    } else if (node.type === 'token') {
      if (node.hidden && !showHidden) {
        wrapper.classList.add('hidden-token-placeholder');
        return wrapper;
      }

      const tokenWrapper = document.createElement('span');
      tokenWrapper.className = 'tree-token';

      if (!node.name.startsWith('__ANON')) {
        const label = document.createElement('span');
        label.className = 'tree-terminal';
        label.textContent = `${node.name}:`;
        tokenWrapper.appendChild(label);
      }

      // Container for the token text and cursor
      const valueWrapper = document.createElement('span');
      valueWrapper.className = 'tree-text-wrapper';

      const value = document.createElement('span');
      value.className = 'tree-text';
      value.textContent = ` "${this.formatTokenValue(node.value)}"`;
      valueWrapper.appendChild(value);

      // Store references for cursor logic later
      node._textElement = value;
      node._textWrapper = valueWrapper;

      // Double-click to jump to source code
      value.addEventListener('dblclick', () => {
        if (node.start_pos != null) {
          const pos = EditorModule.inputEditor.posFromIndex(node.start_pos);
          EditorModule.inputEditor.setCursor(pos);
          EditorModule.inputEditor.scrollIntoView(pos, 100);
        }
      });

      tokenWrapper.appendChild(valueWrapper);
      labelRow.appendChild(tokenWrapper);
      wrapper.appendChild(labelRow);
    } else if (node.type === 'rule') {
      const label = document.createElement('span');
      label.className = 'tree-rule';
      label.textContent = node.name;
      labelRow.appendChild(label);
      wrapper.appendChild(labelRow);
    }
    return wrapper;
  },
};
