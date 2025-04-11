(function () {
  // --- Utility Module ---
  const Utils = {
    debounce: function (fn, delay) {
      let timeout;
      return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
      };
    },
  };

  // --- Helper Function for Token Formatting ---
  function formatTokenValue(value) {
    // If the token value only contains whitespace, replace all newline characters with the return symbol.
    if (value.trim() === "") {
      return value.replace(/\n/g, "↵");
    }
    // Otherwise, return the original value unchanged.
    return value;
  }

  // --- Pyodide Module ---
  const PyodideModule = {
    pyodide: null,
    isReady: false,
  };

  // --- Editor Module ---
  const EditorModule = {
    grammarEditor: null,
    inputEditor: null,
    initEditors: function () {
      this.grammarEditor = CodeMirror.fromTextArea(
        document.getElementById("grammar"),
        { lineNumbers: true, mode: "text/plain" }
      );
      this.inputEditor = CodeMirror.fromTextArea(
        document.getElementById("input"),
        { lineNumbers: true, mode: "text/plain" }
      );
      this.setupDragAndDrop(this.grammarEditor, "Grammar");
      this.setupDragAndDrop(this.inputEditor, "Input");

      // Event listeners for key shortcuts and cursor/mouse events
      this.grammarEditor.on("keydown", UI.handleKeyShortcut);
      this.inputEditor.on("keydown", UI.handleKeyShortcut);
      this.inputEditor.getWrapperElement().addEventListener(
        "mousemove",
        UI.handleMouseMoveOnInput
      );
      this.inputEditor.getWrapperElement().addEventListener(
        "mouseleave",
        UI.handleMouseLeaveOnInput
      );
      this.inputEditor.getWrapperElement().addEventListener(
        "dblclick",
        UI.handleDoubleClickOnInput
      );
      this.inputEditor.on("cursorActivity", UI.handleCursorActivity);

      // Save changes to local storage
      this.grammarEditor.on("change", SettingsModule.saveToLocalStorage);
      this.inputEditor.on("change", SettingsModule.saveToLocalStorage);
    },
    setupDragAndDrop: function (cm, label) {
      const wrapper = cm.getWrapperElement();
      wrapper.addEventListener("dragover", (e) => {
        e.preventDefault();
        wrapper.classList.add("drag-hover");
      });
      wrapper.addEventListener("dragleave", () => {
        wrapper.classList.remove("drag-hover");
      });
      wrapper.addEventListener("drop", (e) => {
        e.preventDefault();
        wrapper.classList.remove("drag-hover");
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("text")) {
          const reader = new FileReader();
          reader.onload = (event) => {
            cm.setValue(event.target.result);
          };
          reader.readAsText(file);
        } else {
          alert("Only text files can be dropped into the " + label + " editor.");
        }
      });
    },
    resizeEditors: function () {
      const containerHeight = document.querySelector(".editor-container").clientHeight;
      const divider = document.getElementById("vertical-divider"); // Fix: get the divider element
      const dividerHeight = divider.offsetHeight;
      const grammarBlock = document.getElementById("grammar-block");
      const inputBlock = document.getElementById("input-block");

      const savedGrammarHeight = localStorage.getItem("grammarHeight");
      const savedInputHeight = localStorage.getItem("inputHeight");
      let grammarRatio =
        parseFloat(savedGrammarHeight) /
        (parseFloat(savedGrammarHeight) + parseFloat(savedInputHeight)) || 0.5;

      const grammarHeight = Math.max(containerHeight * grammarRatio - dividerHeight / 2, 50);
      const inputHeight = Math.max(containerHeight - grammarHeight - dividerHeight, 50);

      grammarBlock.style.flex = "0 0 " + grammarHeight + "px";
      inputBlock.style.flex = "0 0 " + inputHeight + "px";
    },
  };

  // --- Tree Module ---
  const TreeModule = {
    lastParseTree: null,
    treeNodeList: [],
    renderAndDisplayTree: function (tree) {
      document.querySelectorAll(".selected-tree-node").forEach((el) => el.classList.remove("selected-tree-node"));
      const compress = document.getElementById("compressCheckbox").checked;
      const showHidden = document.getElementById("showHiddenCheckbox").checked;
      const treeData = compress ? this.compressTree(tree) : tree;
      const output = document.getElementById("output");
      output.className = "";
      output.innerHTML = "";
      const treeRoot = this.renderTree(treeData, 0, true, showHidden);
      treeRoot.classList.add("root-node");
      output.appendChild(treeRoot);
      this.treeNodeList = [];
      this.collectTreeNodes(treeData);
    },
    compressTree: function (node) {
      if (node.type !== "rule") return node;
      let nameChain = [node.name];
      let current = node;

      while (
        current.children &&
        current.children.length === 1 &&
        current.children[0].type === "rule"
      ) {
        current = current.children[0];
        nameChain.push(current.name);
      }

      const compressedChildren = current.children.map(this.compressTree.bind(this));
      const childStart = compressedChildren.map((c) => c.start_pos).filter((p) => p != null);
      const childEnd = compressedChildren.map((c) => c.end_pos).filter((p) => p != null);
      const start_pos = Math.min(...childStart, node.start_pos ?? Infinity);
      const end_pos = Math.max(...childEnd, current.end_pos ?? -1);

      return {
        type: "rule",
        name: nameChain.join(" > "),
        children: compressedChildren,
        start_pos,
        end_pos,
      };
    },
    collectTreeNodes: function (node) {
      if (
        node &&
        node.start_pos != null &&
        node.end_pos != null &&
        node._domElement
      ) {
        this.treeNodeList.push(node);
      }
      if (node.children) {
        node.children.forEach((child) => this.collectTreeNodes(child));
      }
    },
    renderTree: function (node, depth = 0, isLast = true, showHidden = false) {
      const wrapper = document.createElement("div");
      wrapper.className = "tree-node " + (isLast ? "last-child" : "");
      const startPos = node.start_pos ?? null;
      const endPos = node.end_pos ?? null;
      wrapper._startPos = startPos;
      wrapper._endPos = endPos;
      node._domElement = wrapper;

      const labelRow = document.createElement("div");
      labelRow.className = "tree-label";
      wrapper.addEventListener("mouseenter", (e) => { e.stopPropagation(); UI.highlightRange(startPos, endPos); });
      wrapper.addEventListener("mouseleave", (e) => { UI.clearHighlight(); });
      labelRow.addEventListener("mouseenter", (e) => { e.stopPropagation(); UI.highlightRange(startPos, endPos); });
      labelRow.addEventListener("mouseleave", (e) => { UI.clearHighlight(); });

      if (node.type === "rule" && node.children && node.children.length > 0) {
        labelRow.classList.add("collapse-toggle");
        const label = document.createElement("span");
        label.className = "tree-rule";
        const parts = node.name.split(" > ");
        parts.forEach((part, i) => {
          const span = document.createElement("span");
          span.textContent = part;
          label.appendChild(span);
          if (i < parts.length - 1) {
            const sep = document.createElement("span");
            sep.textContent = ">";
            sep.className = "tree-rule-separator";
            label.appendChild(sep);
          }
        });
        labelRow.appendChild(label);
        wrapper.appendChild(labelRow);
        const childrenContainer = document.createElement("div");
        childrenContainer.className = "tree-children";
        node.children.forEach((child, index) => {
          const childIsLast = index === node.children.length - 1;
          childrenContainer.appendChild(this.renderTree(child, depth + 1, childIsLast, showHidden));
        });
        wrapper.appendChild(childrenContainer);
        labelRow.addEventListener("click", (e) => {
          e.stopPropagation();
          wrapper.classList.toggle("collapsed");
        });
      } else if (node.type === "token") {
        if (node.hidden && !showHidden) {
          wrapper.classList.add("hidden-token-placeholder");
          return wrapper;
        }

        const tokenWrapper = document.createElement("span");
        tokenWrapper.className = "tree-token";

        if (!node.name.startsWith("__ANON")) {
          const label = document.createElement("span");
          label.className = "tree-terminal";
          label.textContent = `${node.name}:`;
          tokenWrapper.appendChild(label);
        }

        // Container for the token text and cursor
        const valueWrapper = document.createElement("span");
        valueWrapper.className = "tree-text-wrapper";

        const value = document.createElement("span");
        value.className = "tree-text";
        value.textContent = ` "${formatTokenValue(node.value)}"`;
        valueWrapper.appendChild(value);

        // Store references for cursor logic later
        node._textElement = value;
        node._textWrapper = valueWrapper;

        // Double-click to jump to source code
        value.addEventListener("dblclick", () => {
          if (node.start_pos != null) {
            const pos = EditorModule.inputEditor.posFromIndex(node.start_pos);
            EditorModule.inputEditor.setCursor(pos);
            EditorModule.inputEditor.scrollIntoView(pos, 100);
          }
        });

        tokenWrapper.appendChild(valueWrapper);
        labelRow.appendChild(tokenWrapper);
        wrapper.appendChild(labelRow);
      } else if (node.type === "rule") {
        const label = document.createElement("span");
        label.className = "tree-rule";
        label.textContent = node.name;
        labelRow.appendChild(label);
        wrapper.appendChild(labelRow);
      }
      return wrapper;
    },
  };

  // --- UI Module ---
  const UI = {
    currentHighlight: null,
    lastTreeHighlight: null,
    treeCursorEl: null,
    handleKeyShortcut: function (cm, event) {
      if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
        App.runParser();
        event.preventDefault();
      }
    },
    handleMouseMoveOnInput: function (event) {
      if (!TreeModule.treeNodeList || TreeModule.treeNodeList.length === 0) return;
      const pos = EditorModule.inputEditor.coordsChar(
        { left: event.clientX, top: event.clientY },
        "window"
      );
      const index = EditorModule.inputEditor.indexFromPos(pos);
      UI.highlightTreeNodeFromInput(index);
    },
    handleMouseLeaveOnInput: function () {
      if (UI.hoveredTreeNode && UI.hoveredTreeNode._domElement) {
        UI.hoveredTreeNode._domElement.classList.remove("highlighted-tree-node");
        UI.hoveredTreeNode = null;
      }
      if (UI.lastTreeHighlight) {
        UI.lastTreeHighlight.classList.remove("highlighted-tree-node");
        UI.lastTreeHighlight = null;
      }
    },
    handleDoubleClickOnInput: function () {
      const cursor = EditorModule.inputEditor.getCursor();
      const index = EditorModule.inputEditor.indexFromPos(cursor);
      const match = UI.findDeepestNode(TreeModule.lastParseTree, index);
      if (match && match._domElement) {
        // Scroll the focused node into view and highlight it
        match._domElement.scrollIntoView({ behavior: "smooth", block: "center" });
        match._domElement.classList.add("selected-tree-node");
        setTimeout(() => match._domElement.classList.remove("selected-tree-node"), 1000);
      }
    },
    handleCursorActivity: function () {
      document.querySelectorAll(".selected-tree-node").forEach((el) =>
        el.classList.remove("selected-tree-node")
      );

      // Debounce updating the tree cursor for smoother performance.
      Utils.debounce(UI.updateTreeCursor, 80)();

      // Scroll the currently selected node into view (centered)
      const selectedNode = document.querySelector(".selected-tree-node");
      if (selectedNode) {
        selectedNode.scrollIntoView({ behavior: "smooth", block: "center" });
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
          node._domElement.classList.add("selected-tree-node");
          // Scroll each selected node into view (centered)
          node._domElement.scrollIntoView({ behavior: "smooth", block: "center" });
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
          .querySelectorAll(".highlighted-tree-node-cursor")
          .forEach((el) => el.classList.remove("highlighted-tree-node-cursor"));

        const showHidden = document.getElementById("showHiddenCheckbox").checked;

        if (focusedNode.hidden && !showHidden) {
          const cursorLine = document.createElement("div");
          cursorLine.className = "tree-cursor tree-cursor-line";
          focusedNode._domElement.appendChild(cursorLine);
          UI.treeCursorEl = cursorLine;
        } else {
          focusedNode._domElement.classList.add("highlighted-tree-node-cursor");
          if (
            focusedNode.type === "token" &&
            focusedNode._domElement &&
            focusedNode._domElement.querySelector(".tree-text")
          ) {

            if (focusedNode._textWrapper && focusedNode.start_pos != null) {
              const cursorEl = document.createElement("span");
              cursorEl.className = "tree-cursor";

              // Estimate position based on monospace character width
              const charWidth = 7; // tweak based on your font and zoom level
              const offset = Math.max(0, cursorIndex - focusedNode.start_pos);
              cursorEl.style.left = `${offset * charWidth + 12}px`; // 12px accounts for leading space/quote

              focusedNode._textWrapper.appendChild(cursorEl);
              UI.treeCursorEl = cursorEl;
            }
          }
        }
        focusedNode._domElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
    highlightTreeNodeFromInput: function (index) {
      if (!TreeModule.lastParseTree) return;
      const match = UI.findDeepestNode(TreeModule.lastParseTree, index);
      if (!match || !match._domElement) return;
      if (UI.lastTreeHighlight) {
        UI.lastTreeHighlight.classList.remove("highlighted-tree-node");
      }
      match._domElement.classList.add("highlighted-tree-node");
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
          className: "highlighted-text",
        });
      }
    },
    clearHighlight: function () {
      if (UI.currentHighlight) {
        UI.currentHighlight.clear();
        UI.currentHighlight = null;
      }
    },
    showToast: function (message, type = "success", duration = 3000) {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.className = "toast show " + type;
      toast.classList.remove("hidden");
      setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
          toast.classList.add("hidden");
        }, 300);
      }, duration);
    },
    toggleSettings: function () {
      const popover = document.getElementById("settingsPopover");
      popover.style.display = popover.style.display === "block" ? "none" : "block";
    },
  };

  // --- Settings Module ---
  const SettingsModule = {
    settingsKeys: [
      "parser",
      "lexer",
      "regex",
      "debug",
      "strict",
      "start",
      "compress_tree",
      "show_hidden",
      "grammarHeight",
      "inputHeight",
      "enableAdvanced",
    ],
    saveSettings: function () {
      this.settingsKeys.forEach((key) => {
        const el =
          document.getElementById(key + "Input") ||
          document.getElementById(key + "Select") ||
          document.getElementById(key + "Checkbox");
        if (!el) return;
        const value = el.type === "checkbox" ? el.checked : el.value;
        localStorage.setItem(key, value);
      });
    },
    saveSettingsAndClose: function () {
      this.saveSettings();
      UI.toggleSettings();
      if (TreeModule.lastParseTree) {
        TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
      }
    },
    loadSettings: function () {
      this.settingsKeys.forEach((key) => {
        const el =
          document.getElementById(key + "Input") ||
          document.getElementById(key + "Select") ||
          document.getElementById(key + "Checkbox");
        if (!el) return;

        const value = localStorage.getItem(key);
        if (value !== null) {
          if (el.type === "checkbox") el.checked = value === "true";
          else el.value = value;
        } else {
          const defaults = {
            parser: "earley",
            lexer: "dynamic",
            regex: "regex",
            debug: false,
            strict: false,
            start: "pulseprogram",
            compress_tree: true,
            show_hidden: false,
          };
          const defaultVal = defaults[key];
          if (el.type === "checkbox") el.checked = defaultVal === true;
          else if (defaultVal != null) el.value = defaultVal;

          // Add listener for immediate save
          el.addEventListener("change", () => {
            const val = el.type === "checkbox" ? el.checked : el.value;
            localStorage.setItem(key, val);

            if (["compress_tree", "show_hidden"].includes(key) && TreeModule.lastParseTree) {
              TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
            }
          });
        }
      });

      // Handle layout restoration
      const grammarBlock = document.getElementById("grammar-block");
      const inputBlock = document.getElementById("input-block");
      const savedGrammarHeight = localStorage.getItem("grammarHeight");
      const savedInputHeight = localStorage.getItem("inputHeight");
      if (savedGrammarHeight && savedInputHeight) {
        grammarBlock.style.flex = "0 0 " + savedGrammarHeight + "px";
        inputBlock.style.flex = "0 0 " + savedInputHeight + "px";
      }
    },
    saveToLocalStorage: function () {
      localStorage.setItem("lark_grammar", EditorModule.grammarEditor.getValue());
      localStorage.setItem("lark_input", EditorModule.inputEditor.getValue());
    },
    loadFromLocalStorage: async function () {
      const grammarInput = document.getElementById('grammar');
      const pulseCodeInput = document.getElementById('input');

      const savedGrammar = localStorage.getItem('grammar');
      const savedPulseCode = localStorage.getItem('pulseCode');

      // If both are already stored, just load them
      if (savedGrammar !== null) {
        EditorModule.grammarEditor.setValue(savedGrammar);
        console.log('Loaded grammar from localStorage');
      } else {
        // Fetch and load default grammar
        const res = await fetch('grammars/bruker.lark'); // adjust path if needed
        const defaultGrammar = await res.text();
        EditorModule.grammarEditor.setValue(defaultGrammar);
        localStorage.setItem('grammar', defaultGrammar);
        console.log('Loaded default grammar');
      }

      if (savedPulseCode !== null) {
        EditorModule.inputEditor.setValue(savedPulseCode);
        console.log('Loaded pulse code from localStorage');
      } else {
        // Fetch and load default pulse code
        const res = await fetch('example_code/zg'); // adjust path if needed
        const defaultPulseCode = await res.text();
        EditorModule.inputEditor.setValue(defaultPulseCode);
        localStorage.setItem('pulseCode', defaultPulseCode);
        console.log('Loaded default pulse code');
      }
    },
    resetWorkspace: function () {
      localStorage.clear();
      EditorModule.grammarEditor.setValue("");
      EditorModule.inputEditor.setValue("");
      UI.showToast("Workspace has been reset. Reloading...", "success");
      setTimeout(() => location.reload(), 1500);
    },
    toggleSettings: function () {
      UI.toggleSettings();
    },
  };

  // --- Main Application ---
  const App = {
    runParser: async function () {

      if (!PyodideModule.isReady) {
        UI.showToast("⏳ Pyodide is still loading, please wait...", "error");
        return;
      }
      if (!App.hasContentChanged()) {
        console.log("No changes detected. Skipping parse.");
        return;
      }

      const grammar = EditorModule.grammarEditor.getValue();
      const text = EditorModule.inputEditor.getValue();
      const start = document.getElementById("startInput").value || "start";
      const parserType = document.getElementById("parserSelect").value;
      const lexer = document.getElementById("lexerSelect").value;
      const debug = document.getElementById("debugCheckbox").checked;
      const strict = document.getElementById("strictCheckbox").checked;
      const regex = document.getElementById("regexSelect").value === "regex";
      const output = document.getElementById("output");
      output.textContent = "Parsing...";

      try {
        const pyCode = `
    parse_input(
        ${JSON.stringify(grammar)},
        ${JSON.stringify(text)},
        ${JSON.stringify(start)},
        ${JSON.stringify(parserType)},
        ${JSON.stringify(lexer)},
        ${debug ? "True" : "False"},
        ${strict ? "True" : "False"},
        ${regex ? "True" : "False"}
    )
        `;
        const result = await PyodideModule.pyodide.runPythonAsync(pyCode);
        TreeModule.lastParseTree = JSON.parse(result);
        UI.showToast("✅ Parse complete", "success");
        _lastGrammar = grammar;
        _lastInput = text;
        TreeModule.renderAndDisplayTree(TreeModule.lastParseTree);
      } catch (e) {
        output.className = "error";
        output.textContent = e.message || e;
        UI.showToast("❌ Parsing failed", "error");
      } finally {
      }

    },
    hasContentChanged: function () {
      const currentGrammar = EditorModule.grammarEditor.getValue();
      const currentInput = EditorModule.inputEditor.getValue();
      return currentGrammar !== _lastGrammar || currentInput !== _lastInput;
    },
    initialize: async function () {
      EditorModule.initEditors();
      window.addEventListener("resize", EditorModule.resizeEditors);

      // Call the resize function once after initialization.
      EditorModule.resizeEditors();

      // Set up vertical resizer for editors
      const grammarBlock = document.getElementById("grammar-block");
      const inputBlock = document.getElementById("input-block");
      const divider = document.getElementById("vertical-divider");
      let isResizingVert = false;
      divider.addEventListener("mousedown", (e) => {
        e.preventDefault();
        isResizingVert = true;
        document.body.style.cursor = "row-resize";
      });
      document.addEventListener("mousemove", (e) => {
        if (!isResizingVert) return;
        const container = grammarBlock.parentElement;
        const containerTop = container.getBoundingClientRect().top;
        const containerHeight = container.clientHeight;
        const offset = e.clientY - containerTop;
        const dividerHeight = divider.offsetHeight;
        const minHeight = 50;
        const grammarHeight = Math.max(offset - dividerHeight / 2, minHeight);
        const inputHeight = Math.max(containerHeight - grammarHeight - dividerHeight, minHeight);
        grammarBlock.style.flex = "0 0 " + grammarHeight + "px";
        inputBlock.style.flex = "0 0 " + inputHeight + "px";
      });
      document.addEventListener("mouseup", () => {
        document.body.style.cursor = "default";
        isResizingVert = false;
      });

      // Set up horizontal column resizer
      const leftPane = document.getElementById("left-pane");
      const resizer = document.getElementById("column-divider");
      const container = document.querySelector(".split-pane");
      let isDragging = false;
      resizer.addEventListener("mousedown", (e) => {
        e.preventDefault();
        isDragging = true;
        document.body.style.cursor = "col-resize";
      });
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const containerRect = container.getBoundingClientRect();
        const offsetLeft = e.clientX - containerRect.left;
        const minWidth = 200;
        const maxWidth = containerRect.width - minWidth;
        const newWidth = Math.min(Math.max(offsetLeft, minWidth), maxWidth);
        leftPane.style.width = newWidth + "px";
      });
      document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.cursor = "default";
      });

      // Settings toggle
      document.getElementById("settingsToggle").addEventListener("click", () => {
        SettingsModule.toggleSettings();
      });

      // Expose file loading functions globally
      window.loadExampleFile = function (path) {
        fetch(path)
          .then((response) => {
            if (!response.ok)
              throw new Error(`Failed to load ${path}`);
            return response.text();
          })
          .then((data) => {
            EditorModule.inputEditor.setValue(data);
          })
          .catch((err) => {
            alert("Could not load example: " + err.message);
          });
      };
      window.loadGrammarFile = function (path) {
        fetch(path)
          .then((response) => {
            if (!response.ok)
              throw new Error(`Failed to load ${path}`);
            return response.text();
          })
          .then((data) => {
            EditorModule.grammarEditor.setValue(data);
          })
          .catch((err) => {
            alert("Could not load grammar: " + err.message);
          });
      };
      window.collapseAll = function () {
        document.querySelectorAll(".tree-node").forEach((node) => {
          node.classList.add("collapsed");
        });
      };
      window.expandAll = function () {
        document.querySelectorAll(".tree-node").forEach((node) => {
          node.classList.remove("collapsed");
        });
      };
      window.resetWorkspace = function () {
        SettingsModule.resetWorkspace();
      };

      SettingsModule.loadFromLocalStorage();

      // Help toggle
      document.getElementById("helpToggle").addEventListener("click", () => {
        const helpPopover = document.getElementById("helpPopover");
        helpPopover.style.display = helpPopover.style.display === "block" ? "none" : "block";
      });

      // Close popovers on outside click
      document.addEventListener("click", function (e) {
        const help = document.getElementById("helpPopover");
        const settings = document.getElementById("settingsPopover");
        const helpToggle = document.getElementById("helpToggle");
        const settingsToggle = document.getElementById("settingsToggle");

        // If click is outside help and not on help toggle
        if (
          help.style.display === "block" &&
          !help.contains(e.target) &&
          !helpToggle.contains(e.target)
        ) {
          help.style.display = "none";
        }

        // If click is outside settings and not on settings toggle
        if (
          settings.style.display === "block" &&
          !settings.contains(e.target) &&
          !settingsToggle.contains(e.target)
        ) {
          SettingsModule.saveSettingsAndClose()
          // settings.style.display = "none";
        }
      });

      document.getElementById("advancedToggle").addEventListener("click", () => {
        const section = document.getElementById("advancedSettings");
        section.classList.toggle("hidden");
        document.getElementById("advancedToggle").classList.toggle("open");
      });

    },
  };

  // --- Private state ---
  let _lastGrammar = "";
  let _lastInput = "";

  // Expose App for external use
  window.App = App;
  window.SettingsModule = SettingsModule;

  // --- Initialization with Error Handlers ---
  async function init() {
    document.getElementById("pyodideStatus").textContent = "Loading Pyodide...";
    try {
      PyodideModule.pyodide = await loadPyodide();
      await PyodideModule.pyodide.loadPackage("micropip");
      await PyodideModule.pyodide.runPythonAsync("import micropip");
      await PyodideModule.pyodide.runPythonAsync("await micropip.install('regex')");
      await PyodideModule.pyodide.runPythonAsync("await micropip.install('lark')");
    } catch (e) {
      handleLoadError("Failed to load Pyodide. Please refresh or try again later.");
      return;
    }
    try {
      const pyCode = await (await fetch("parse_runner.py")).text();
      await PyodideModule.pyodide.runPythonAsync(pyCode);
      document.getElementById("pyodideStatus").classList.add("hidden");
      PyodideModule.isReady = true;
      await App.initialize();
    } catch (e) {
      handleLoadError("Pyodide initialized but failed setting up the parser.");
      return;
    }
  }
  init();


})();

