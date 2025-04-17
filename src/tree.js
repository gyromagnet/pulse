import { UI } from './ui.js';
import { EditorModule } from './editor.js';

export const TreeModule = {
  lastParseTree: null,
  treeNodeList: [],

  formatTokenValue(value) {
    return `"${value.trim() === '' ? value.replace(/\n/g, '↵') : value}"`;
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

  collectTreeNodes(node) {
    if (node.startPos != null && node.endPos != null && node._domElement) {
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

    // Hover highlighting
    wrapper.addEventListener('mouseenter', (e) => {
      e.stopPropagation();
      if (node.startPos != null && node.endPos != null) {
        UI.highlightRange(node.startPos, node.endPos);
      }
    });
    wrapper.addEventListener('mouseleave', UI.clearHighlight);

    const labelRow = document.createElement('div');
    labelRow.className = 'tree-label';
    wrapper.appendChild(labelRow);

    // Compression logic for rule names
    let displayNode = node;
    let nameChain = [node.name];
    if (compress && node.type === 'rule') {
      while (displayNode.children?.length === 1 && displayNode.children[0].type === 'rule') {
        displayNode = displayNode.children[0];
        nameChain.push(displayNode.name);
      }
    }

    if (node.type === 'rule' && displayNode.children?.length > 0) {
      // Collapse icon
      const collapseIcon = document.createElement('span');
      collapseIcon.className = 'collapse-toggle-icon';
      collapseIcon.textContent = '▼';
      collapseIcon.title = 'Expand/collapse children';
      collapseIcon.style.cursor = 'pointer'; // <--- Added
      collapseIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.detail === 1) {
          wrapper.classList.toggle('collapsed');
        }
      });

      labelRow.appendChild(collapseIcon);

      // Rule name(s)
      const ruleLabel = document.createElement('span');
      ruleLabel.className = 'tree-rule';
      nameChain.forEach((n, i) => {
        const span = document.createElement('span');
        span.textContent = n;
        ruleLabel.appendChild(span);
        if (i < nameChain.length - 1) {
          const sep = document.createElement('span');
          sep.textContent = ' > ';
          sep.className = 'tree-rule-separator';
          ruleLabel.appendChild(sep);
        }
      });
      labelRow.appendChild(ruleLabel);

      // Recurse children
      const childrenContainer = document.createElement('div');
      childrenContainer.className = 'tree-children';
      displayNode.children.forEach((child, idx) => {
        childrenContainer.appendChild(
          this.renderTree(child, {
            depth: depth + 1,
            isLast: idx === displayNode.children.length - 1,
            showHidden,
            compress,
          }),
        );
      });
      wrapper.appendChild(childrenContainer);

      // Double‑click → select in editor
      labelRow.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (node.startPos != null && node.endPos != null) {
          EditorModule.moveSelection(node.startPos, node.endPos);
        }
      });
    } else if (node.type === 'token') {
      if (node.hidden && !showHidden) {
        // don’t render anything for hidden tokens
        return document.createDocumentFragment();
      }

      // Token label
      const tokenWrapper = document.createElement('span');
      tokenWrapper.className = 'tree-token';

      if (!node.name.startsWith('__ANON')) {
        const label = document.createElement('span');
        label.className = 'tree-terminal';
        label.textContent = `${node.name}:`;
        tokenWrapper.appendChild(label);
      }

      // Value wrapper with quotes + char spans
      const valueWrapper = document.createElement('span');
      valueWrapper.className = 'tree-text-wrapper';

      // Opening quote
      const openQuote = document.createElement('span');
      openQuote.className = 'tree-text';
      openQuote.textContent = '"';
      valueWrapper.appendChild(openQuote);

      // Per-character spans
      const valueSpan = document.createElement('span');
      valueSpan.className = 'tree-text';
      const tokenStart = node.startPos ?? 0;
      for (let i = 0; i < node.value.length; i++) {
        const charSpan = document.createElement('span');
        const ch = node.value[i] === '\n' && node.value.trim() === '' ? '↵' : node.value[i];
        charSpan.textContent = ch;
        charSpan.dataset.pos = tokenStart + i;
        valueSpan.appendChild(charSpan);
      }
      valueWrapper.appendChild(valueSpan);

      // Closing quote
      const closeQuote = document.createElement('span');
      closeQuote.className = 'tree-text';
      closeQuote.textContent = '"';
      valueWrapper.appendChild(closeQuote);

      node._textElement = valueSpan;
      node._textWrapper = valueWrapper;

      tokenWrapper.appendChild(valueWrapper);
      labelRow.appendChild(tokenWrapper);

      // Double‑click → select in editor
      labelRow.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (node.startPos != null && node.endPos != null) {
          EditorModule.moveSelection(node.startPos, node.endPos);
        }
      });
    } else {
      // Fallback rule with no children
      const label = document.createElement('span');
      label.className = 'tree-rule';
      label.textContent = node.name;
      labelRow.appendChild(label);
    }

    return wrapper;
  },
};
