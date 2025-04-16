import { UI } from './ui.js';
import { EditorModule } from './editor.js';
import { TreeModule } from './tree.js';
import { WorkerModule } from './worker.js';
import { SettingsModule } from './settings.js';

const App = {
  _lastGrammar: '',
  _lastInput: '',

  runParser: function () {
    if (!WorkerModule.isReady) {
      UI.showToast('Pyodide is still loading...', 'error');
      return;
    }
    if (!App.hasContentChanged()) {
      console.log('No changes detected. Skipping parse.');
      return;
    }
    const grammar = EditorModule.getGrammarValue();
    const text = EditorModule.getInputValue();
    const start = document.getElementById('startInput').value || 'start';
    const parserType = document.getElementById('parserSelect').value;
    const lexer = document.getElementById('lexerSelect').value;
    const debug = document.getElementById('debugCheckbox').checked;
    const strict = document.getElementById('strictCheckbox').checked;
    const regex = document.getElementById('regexSelect').value === 'regex';

    document.getElementById('output').textContent = 'Parsing...';
    WorkerModule.parse(grammar, text, start, parserType, lexer, debug, strict, regex);
  },

  hasContentChanged: function () {
    const currentGrammar = EditorModule.getGrammarValue();
    const currentInput = EditorModule.getInputValue();
    return currentGrammar !== this._lastGrammar || currentInput !== this._lastInput;
  },

  initialize: async function () {
    await EditorModule.initEditors();
    // Attach double-click listener so that when text is double-clicked, the tree node scrolls into view.
    EditorModule.inputEditor.dom.addEventListener('dblclick', UI.handleDoubleClickOnInput);

    window.addEventListener('resize', EditorModule.resizeEditors);
    EditorModule.resizeEditors();

    // (The rest of your initialization code remains unchanged.)
    const grammarBlock = document.getElementById('grammar-block');
    const inputBlock = document.getElementById('input-block');
    const divider = document.getElementById('vertical-divider');
    let isResizingVert = false;
    divider.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isResizingVert = true;
      document.body.style.cursor = 'row-resize';
    });
    document.addEventListener('mousemove', (e) => {
      if (!isResizingVert) return;
      const container = grammarBlock.parentElement;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.clientHeight;
      const offset = e.clientY - containerTop;
      const dividerHeight = divider.offsetHeight;
      const minHeight = 50;
      const grammarHeight = Math.max(offset - dividerHeight / 2, minHeight);
      const inputHeight = Math.max(containerHeight - grammarHeight - dividerHeight, minHeight);
      grammarBlock.style.flex = '0 0 ' + grammarHeight + 'px';
      inputBlock.style.flex = '0 0 ' + inputHeight + 'px';
    });
    document.addEventListener('mouseup', () => {
      document.body.style.cursor = 'default';
      isResizingVert = false;
    });

    // Horizontal resizer for left pane.
    const leftPane = document.getElementById('left-pane');
    const colResizer = document.getElementById('column-divider');
    const container = document.querySelector('.split-pane');
    let isDragging = false;
    colResizer.addEventListener('mousedown', (e) => {
      e.preventDefault();
      isDragging = true;
      document.body.style.cursor = 'col-resize';
    });
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const containerRect = container.getBoundingClientRect();
      const offsetLeft = e.clientX - containerRect.left;
      const minWidth = 200;
      const maxWidth = containerRect.width - minWidth;
      const newWidth = Math.min(Math.max(offsetLeft, minWidth), maxWidth);
      leftPane.style.width = newWidth + 'px';
    });
    document.addEventListener('mouseup', () => {
      isDragging = false;
      document.body.style.cursor = 'default';
    });

    const settingsToggle = document.getElementById('settingsToggle');
    settingsToggle.addEventListener('click', () => {
      SettingsModule.toggleSettings();
    });

    await App.populateExampleMenus();

    const parseBtn = document.getElementById('parseBtn');
    if (parseBtn) {
      parseBtn.addEventListener('click', () => {
        App.runParser();
      });
    }

    const submitBtn = document.getElementById('submitDownloadBtn');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        const grammar = EditorModule.getGrammarValue();
        const input = EditorModule.getInputValue();
        const title = encodeURIComponent('Parser failed on valid Bruker code');
        const issueBody = `### What happened?

Parser failed on valid Bruker pulse code.

### Pulse Code

\`\`\`bruker
${input}
\`\`\`

### Grammar Used

\`\`\`lark
${grammar}
\`\`\`

### Additional Notes

(Please add any extra context here.)
`;
        navigator.clipboard
          .writeText(issueBody)
          .then(() => {
            const url = `https://github.com/gyromagnet/pulse/issues/new?title=${title}`;
            window.open(url, '_blank');
            UI.showToast('Copied full issue body to clipboard. Paste it into the GitHub issue.', 'success');
          })
          .catch(() => {
            alert('Failed to copy to clipboard. Please copy manually.');
          });
      });
    }

    const collapseBtn = document.getElementById('collapseAllBtn');
    if (collapseBtn) {
      collapseBtn.addEventListener('click', () => {
        document.querySelectorAll('.tree-node').forEach((node) => {
          node.classList.add('collapsed');
        });
      });
    }
    const expandBtn = document.getElementById('expandAllBtn');
    if (expandBtn) {
      expandBtn.addEventListener('click', () => {
        document.querySelectorAll('.tree-node').forEach((node) => {
          node.classList.remove('collapsed');
        });
      });
    }

    SettingsModule.loadFromLocalStorage();

    const helpToggle = document.getElementById('helpToggle');
    helpToggle.addEventListener('click', () => {
      const helpPopover = document.getElementById('helpPopover');
      helpPopover.style.display = helpPopover.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (e) {
      const help = document.getElementById('helpPopover');
      const settings = document.getElementById('settingsPopover');
      const helpToggle = document.getElementById('helpToggle');
      const settingsToggle = document.getElementById('settingsToggle');

      if (help.style.display === 'block' && !help.contains(e.target) && !helpToggle.contains(e.target)) {
        help.style.display = 'none';
      }
      if (settings.style.display === 'block' && !settings.contains(e.target) && !settingsToggle.contains(e.target)) {
        SettingsModule.saveSettingsAndClose();
      }
    });

    const advToggle = document.getElementById('advancedToggle');
    advToggle.addEventListener('click', () => {
      const section = document.getElementById('advancedSettings');
      section.classList.toggle('hidden');
      advToggle.classList.toggle('open');
    });
  },

  populateExampleMenus: async function () {
    try {
      const res = await fetch('examples.json');
      const data = await res.json();

      const grammarContainer = document.getElementById('grammarExamples');
      grammarContainer.innerHTML = '';
      data.grammars.forEach((g) => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = g.name;
        link.addEventListener('click', (e) => {
          e.preventDefault();
          fetch(g.file)
            .then((response) => {
              if (!response.ok) throw new Error(`Failed to load ${g.file}`);
              return response.text();
            })
            .then((data) => {
              EditorModule.setValue(EditorModule.grammarEditor, data);
            })
            .catch((err) => {
              alert('Could not load grammar: ' + err.message);
            });
        });
        grammarContainer.appendChild(link);
      });

      const inputContainer = document.getElementById('inputExamples');
      inputContainer.innerHTML = '';
      data.inputs.forEach((i) => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = i.name;
        link.addEventListener('click', (e) => {
          e.preventDefault();
          fetch(i.file)
            .then((response) => {
              if (!response.ok) throw new Error(`Failed to load ${i.file}`);
              return response.text();
            })
            .then((data) => {
              EditorModule.setValue(EditorModule.inputEditor, data);
            })
            .catch((err) => {
              alert('Could not load example: ' + err.message);
            });
        });
        inputContainer.appendChild(link);
      });
    } catch (error) {
      console.error('Failed to populate example menus:', error);
    }
  },
};

document.addEventListener('DOMContentLoaded', async () => {
  UI.showToast('Loading Pyodide...');
  WorkerModule.init();
  await App.initialize();

  // Listen for changes on the "Include Hidden Tokens" option
  const showHiddenCheckbox = document.getElementById('showHiddenCheckbox');
  if (showHiddenCheckbox) {
    showHiddenCheckbox.addEventListener('change', () => {
      if (TreeModule.lastParseTree) {
        TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
      }
    });
  }
});

window.App = App;
export { App };
