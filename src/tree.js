import { UI } from './ui.js';
import { EditorModule } from './editor.js';

export const TreeModule = {
  lastParseTree: null,
  treeNodeList: [],

  formatTokenValue(value) {
    return value.trim() === '' ? value.replace(/\n/g, '↵') : value;
  },

  renderAndDisplayTree(tree) {
    const compress = document.getElementById('compress-checkbox')?.checked;
    const showHidden = document.getElementById('show-hidden-checkbox')?.checked;

    const output = document.getElementById('output');
    output.className = '';
    output.innerHTML = '';

    const treeRoot = this.renderTree(tree, {
      depth: 0,
      isLast: true,
      showHidden,
      compress,
    });

    treeRoot.classList.add('root-node');
    output.appendChild(treeRoot);

    this.treeNodeList = [];
    this.collectTreeNodes(tree);
  },

  compressTree(node) {
    if (node.type !== 'rule') return node;
    let nameChain = [node.name];
    let current = node;
    while (current.children?.length === 1 && current.children[0].type === 'rule') {
      current = current.children[0];
      nameChain.push(current.name);
    }
    const compressedChildren = current.children.map(this.compressTree.bind(this));
    const childStart = compressedChildren.map((c) => c.startPos).filter((p) => p != null);
    const childEnd = compressedChildren.map((c) => c.endPos).filter((p) => p != null);
    const startPos = Math.min(...childStart, node.startPos ?? Infinity);
    const endPos = Math.max(...childEnd, current.endPos ?? -1);
    return {
      type: 'rule',
      name: nameChain.join(' > '),
      children: compressedChildren,
      startPos,
      endPos,
    };
  },

  collectTreeNodes(node) {
    if (node?.startPos != null && node.endPos != null && node._domElement) {
      this.treeNodeList.push(node);
    }
    node.children?.forEach((child) => this.collectTreeNodes(child));
  },

  renderTree(node, { depth = 0, isLast = true, showHidden = false, compress = false }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'tree-node ' + (isLast ? 'last-child' : '');
    wrapper._startPos = node.startPos;
    wrapper._endPos = node.endPos;
    node._domElement = wrapper;

    const labelRow = document.createElement('div');
    labelRow.className = 'tree-label';

    wrapper.addEventListener('mouseenter', (e) => {
      e.stopPropagation();
      if (node.startPos != null && node.endPos != null) {
        UI.highlightRange(node.startPos, node.endPos);
      }
    });

    wrapper.addEventListener('mouseleave', UI.clearHighlight);
    labelRow.addEventListener('mouseenter', (e) => {
      e.stopPropagation();
      if (node.startPos != null && node.endPos != null) {
        UI.highlightRange(node.startPos, node.endPos);
      }
    });

    labelRow.addEventListener('mouseleave', UI.clearHighlight);

    // Apply visual path compression inline without mutating the tree
    let displayNode = node;
    let nameChain = [node.name];
    if (compress && node.type === 'rule') {
      while (displayNode.children?.length === 1 && displayNode.children[0].type === 'rule') {
        displayNode = displayNode.children[0];
        nameChain.push(displayNode.name);
      }
    }

    if (node.type === 'rule' && displayNode.children?.length) {
      labelRow.classList.add('collapse-toggle');

      const label = document.createElement('span');
      label.className = 'tree-rule';

      // Optional: render > separators between rule names
      for (let i = 0; i < nameChain.length; i++) {
        const span = document.createElement('span');
        span.textContent = nameChain[i];
        label.appendChild(span);
        if (i < nameChain.length - 1) {
          const sep = document.createElement('span');
          sep.textContent = ' > ';
          sep.className = 'tree-rule-separator';
          label.appendChild(sep);
        }
      }

      labelRow.appendChild(label);
      wrapper.appendChild(labelRow);

      const childrenContainer = document.createElement('div');
      childrenContainer.className = 'tree-children';

      displayNode.children.forEach((child, index) => {
        const childIsLast = index === displayNode.children.length - 1;
        childrenContainer.appendChild(
          this.renderTree(child, {
            depth: depth + 1,
            isLast: childIsLast,
            showHidden,
            compress,
          }),
        );
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

      const valueWrapper = document.createElement('span');
      valueWrapper.className = 'tree-text-wrapper';

      const value = document.createElement('span');
      value.className = 'tree-text';
      value.textContent = ` "${this.formatTokenValue(node.value)}"`;

      valueWrapper.appendChild(value);
      node._textElement = value;
      node._textWrapper = valueWrapper;

      value.addEventListener('dblclick', () => {
        if (node.startPos != null) {
          EditorModule.setCursorAndScroll(node.startPos);
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
