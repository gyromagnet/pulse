// === ide.js (Updated to use Pyodide + Lark in-browser) ===

let pyodide = null;

async function setupPyodide() {
  pyodide = await loadPyodide();
  await pyodide.loadPackage("micropip");
  try {
    await pyodide.runPythonAsync(`
import micropip
await micropip.install("regex")
`);
    console.log("✅ regex installed!");
  } catch (err) {
    console.error("❌ Failed to install regex:", err);
  }
  try {
    await pyodide.runPythonAsync(`
import micropip
await micropip.install("lark")
      `);
    console.log("✅ lark installed!");
  } catch (err) {
    console.error("❌ Failed to install lark:", err);
  }
}

setupPyodide();


const grammarEditor = CodeMirror.fromTextArea(
  document.getElementById("grammar"),
  { lineNumbers: true, mode: "text/plain" },
);
const inputEditor = CodeMirror.fromTextArea(
  document.getElementById("input"),
  { lineNumbers: true, mode: "text/plain" },
);

let currentHighlight = null;
let currentTreeHighlight = null;
let lastParseTree = null;

window._treeCursorEl = null;

grammarEditor.on("keydown", handleKeyShortcut);
inputEditor.on("keydown", handleKeyShortcut);

inputEditor.getWrapperElement().addEventListener("mousemove", (event) => {
  if (!window._treeNodeList || window._treeNodeList.length === 0) return;

  const pos = inputEditor.coordsChar(
    { left: event.clientX, top: event.clientY },
    "window",
  );
  const index = inputEditor.indexFromPos(pos);

  highlightTreeNodeFromInput(index);
});

inputEditor.getWrapperElement().addEventListener("mouseleave", () => {
  if (window._hoveredTreeNode && window._hoveredTreeNode._domElement) {
    window._hoveredTreeNode._domElement.classList.remove(
      "highlighted-tree-node",
    );
    window._hoveredTreeNode = null;
  }
});

function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

function isFullyContained(node, fromIdx, toIdx) {
  return (
    node.start_pos != null &&
    node.end_pos != null &&
    node.start_pos >= fromIdx &&
    node.end_pos <= toIdx
  );
}

function allChildrenContained(node, fromIdx, toIdx) {
  if (!node.children || node.children.length === 0) return true;

  for (const child of node.children) {
    if (!isFullyContained(child, fromIdx, toIdx)) {
      return false;
    }
    if (!allChildrenContained(child, fromIdx, toIdx)) {
      return false;
    }
  }

  return true;
}

function updateTreeCursor() {
  if (window._treeCursorEl) {
    window._treeCursorEl.remove();
    window._treeCursorEl = null;
  }

  if (!lastParseTree) return;

  const cursorPos = inputEditor.getCursor();
  const cursorIndex = inputEditor.indexFromPos(cursorPos);
  const focusedNode = findDeepestNode(lastParseTree, cursorIndex);

  if (focusedNode && focusedNode._domElement) {
    const label = focusedNode._domElement.querySelector(".tree-label");

    const showHidden =
      document.getElementById("showHiddenCheckbox").checked;
    if (
      focusedNode.type === "token" &&
      (showHidden || !focusedNode.hidden)
    ) {
      const tokenTextEl =
        focusedNode._domElement.querySelector(".tree-text");
      if (!tokenTextEl) return;

      const offset = cursorIndex - focusedNode.start_pos;
      const safeOffset = Math.max(
        0,
        Math.min(offset, focusedNode.value.length),
      );

      const cursorEl = document.createElement("span");
      cursorEl.className = "tree-cursor";

      const before = document.createTextNode(
        `"${focusedNode.value.slice(0, safeOffset).replace(/\n$/, "⮐")}`,
      );
      const after = document.createTextNode(
        `${focusedNode.value.slice(safeOffset).replace(/\n$/, "⮐")}"`,
      );

      tokenTextEl.innerHTML = "";
      tokenTextEl.append(before, cursorEl, after);

      window._treeCursorEl = cursorEl;
    } else if (label) {
      const cursorEl = document.createElement("span");
      cursorEl.className = "tree-cursor";
      label.appendChild(cursorEl);
      window._treeCursorEl = cursorEl;
    }
  }
}

const debouncedUpdateTreeCursor = debounce(updateTreeCursor, 80); // ~80ms is a good balance

inputEditor.on("cursorActivity", () => {
  // Clear previous highlights
  document
    .querySelectorAll(".selected-tree-node")
    .forEach((el) => el.classList.remove("selected-tree-node"));

  debouncedUpdateTreeCursor();

  const sel = inputEditor.listSelections()[0];
  if (!sel || sel.empty() || !window._treeNodeList) return;

  const fromIdx = inputEditor.indexFromPos(sel.from());
  const toIdx = inputEditor.indexFromPos(sel.to());

  // Normalize selection range
  const startIdx = Math.min(fromIdx, toIdx);
  const endIdx = Math.max(fromIdx, toIdx);

  for (const node of window._treeNodeList) {
    const s = node.start_pos;
    const e = node.end_pos;

    if (
      s != null &&
      e != null &&
      node._domElement &&
      s >= startIdx &&
      e <= endIdx
    ) {
      node._domElement.classList.add("selected-tree-node");
    }
  }
});

inputEditor.getWrapperElement().addEventListener("mouseleave", () => {
  if (window._lastTreeHighlight) {
    window._lastTreeHighlight.classList.remove("highlighted-tree-node");
    window._lastTreeHighlight = null;
  }
});

function findDeepestNode(node, index) {
  if (node.start_pos == null || node.end_pos == null) return null;

  if (index < node.start_pos || index >= node.end_pos) return null;

  let bestMatch = node;

  if (node.children) {
    for (const child of node.children) {
      const match = findDeepestNode(child, index);
      if (match) bestMatch = match;
    }
  }
  return bestMatch;
}

function highlightTreeNodeFromInput(index) {
  if (!lastParseTree) {
    return;
  }

  const match = findDeepestNode(lastParseTree, index);

  if (!match || !match._domElement) {
    return;
  }

  if (window._lastTreeHighlight) {
    window._lastTreeHighlight.classList.remove("highlighted-tree-node");
  }

  match._domElement.classList.add("highlighted-tree-node");
  window._lastTreeHighlight = match._domElement;
}

// Highlight helper
function highlightRange(start, end) {
  if (currentHighlight) {
    currentHighlight.clear();
    currentHighlight = null;
  }

  if (!isNaN(start) && !isNaN(end)) {
    const from = inputEditor.posFromIndex(start);
    const to = inputEditor.posFromIndex(end);
    currentHighlight = inputEditor.markText(from, to, {
      className: "highlighted-text",
    });
  }
}

function handleKeyShortcut(cm, event) {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    runParser();
    event.preventDefault();
  }
}

function toggleSettings() {
  const panel = document.getElementById("settingsPanel");
  panel.style.display =
    panel.style.display === "block" ? "none" : "block";
}

function saveSettingsAndClose() {
  localStorage.setItem(
    "parser",
    document.getElementById("parserSelect").value,
  );
  localStorage.setItem(
    "lexer",
    document.getElementById("lexerSelect").value,
  );
  localStorage.setItem(
    "regex",
    document.getElementById("regexSelect").value,
  );
  localStorage.setItem(
    "debug",
    document.getElementById("debugCheckbox").checked,
  );
  localStorage.setItem(
    "strict",
    document.getElementById("strictCheckbox").checked,
  );
  localStorage.setItem(
    "start",
    document.getElementById("startInput").value,
  );
  localStorage.setItem(
    "compress_tree",
    document.getElementById("compressCheckbox").checked,
  );
  localStorage.setItem(
    "show_hidden",
    document.getElementById("showHiddenCheckbox").checked,
  );

  const grammarBlock = document.getElementById("grammar-block");
  const inputBlock = document.getElementById("input-block");
  const grammarHeight = grammarBlock.getBoundingClientRect().height;
  const inputHeight = inputBlock.getBoundingClientRect().height;

  localStorage.setItem("grammarHeight", grammarHeight);
  localStorage.setItem("inputHeight", inputHeight);

  toggleSettings();
  rerenderLastTree();
}

function loadSettings() {
  document.getElementById("parserSelect").value =
    localStorage.getItem("parser") || "lalr";
  document.getElementById("lexerSelect").value =
    localStorage.getItem("lexer") || "basic";
  document.getElementById("regexSelect").value =
    localStorage.getItem("regex") || "re";
  document.getElementById("debugCheckbox").checked =
    localStorage.getItem("debug") === "true";
  document.getElementById("strictCheckbox").checked =
    localStorage.getItem("strict") === "true";
  document.getElementById("compressCheckbox").checked =
    localStorage.getItem("compress_tree") === "true";
  document.getElementById("showHiddenCheckbox").checked =
    localStorage.getItem("show_hidden") === "true";
  document.getElementById("startInput").value =
    localStorage.getItem("start") || "";

  const grammarBlock = document.getElementById("grammar-block");
  const inputBlock = document.getElementById("input-block");
  const savedGrammarHeight = localStorage.getItem("grammarHeight");
  const savedInputHeight = localStorage.getItem("inputHeight");

  if (savedGrammarHeight && savedInputHeight) {
    grammarBlock.style.flex = `0 0 ${savedGrammarHeight}px`;
    inputBlock.style.flex = `0 0 ${savedInputHeight}px`;
  }
}

function rerenderLastTree() {
  if (lastParseTree) {
    renderAndDisplayTree(lastParseTree);
  }
}

function saveToLocalStorage() {
  localStorage.setItem("lark_grammar", grammarEditor.getValue());
  localStorage.setItem("lark_input", inputEditor.getValue());
}

function loadFromLocalStorage() {
  const savedGrammar = localStorage.getItem("lark_grammar");
  const savedInput = localStorage.getItem("lark_input");
  if (savedGrammar) grammarEditor.setValue(savedGrammar);
  if (savedInput) inputEditor.setValue(savedInput);
  loadSettings();
}

grammarEditor.on("change", saveToLocalStorage);
inputEditor.on("change", saveToLocalStorage);
window.addEventListener("load", loadFromLocalStorage);

function setupDragAndDrop(cm, label) {
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
      alert(`Only text files can be dropped into the ${label} editor.`);
    }
  });
}

setupDragAndDrop(grammarEditor, "Grammar");
setupDragAndDrop(inputEditor, "Input");

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
  const inputHeight = Math.max(
    containerHeight - grammarHeight - dividerHeight,
    minHeight,
  );

  grammarBlock.style.flex = `0 0 ${grammarHeight}px`;
  inputBlock.style.flex = `0 0 ${inputHeight}px`;
});

document.addEventListener("mouseup", () => {
  if (isResizingVert) {
    document.body.style.cursor = "default";
    isResizingVert = false;
  }
});

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
  leftPane.style.width = `${newWidth}px`;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.cursor = "default";
});

function compressTree(node) {
  if (node.type !== "rule") return node;

  let nameChain = [node.name];
  let current = node;

  // Walk down the compression path
  while (
    current.children &&
    current.children.length === 1 &&
    current.children[0].type === "rule"
  ) {
    current = current.children[0];
    nameChain.push(current.name);
  }

  // Recursively compress children
  const compressedChildren = current.children.map(compressTree);

  // Compute min start and max end from all children
  const childStartPositions = compressedChildren
    .map((c) => c.start_pos)
    .filter((p) => p != null);
  const childEndPositions = compressedChildren
    .map((c) => c.end_pos)
    .filter((p) => p != null);

  const start_pos = Math.min(
    ...childStartPositions,
    node.start_pos ?? Infinity,
  );
  const end_pos = Math.max(...childEndPositions, current.end_pos ?? -1);

  return {
    type: "rule",
    name: nameChain.join(" > "),
    children: compressedChildren,
    start_pos,
    end_pos,
  };
}

function collectTreeNodes(node) {
  if (
    node &&
    node.start_pos != null &&
    node.end_pos != null &&
    node._domElement
  ) {
    window._treeNodeList.push(node);
  }

  if (node.children) {
    for (const child of node.children) {
      collectTreeNodes(child);
    }
  }
}

function renderAndDisplayTree(tree) {
  if (window._lastTreeHighlight) {
    window._lastTreeHighlight.classList.remove("highlighted-tree-node");
    window._lastTreeHighlight = null;
  }
  document
    .querySelectorAll(".selected-tree-node")
    .forEach((el) => el.classList.remove("selected-tree-node"));

  const compress = document.getElementById("compressCheckbox").checked;
  const showHidden =
    document.getElementById("showHiddenCheckbox").checked;

  const treeData = compress ? compressTree(tree) : tree;
  const output = document.getElementById("output");

  output.className = "";
  output.innerHTML = "";

  const treeRoot = renderTree(treeData, 0, true, showHidden);

  treeRoot.classList.add("root-node");
  output.appendChild(treeRoot);

  window._treeNodeList = [];
  collectTreeNodes(treeData);
}

function renderTree(node, depth = 0, isLast = true, showHidden = false) {
  const wrapper = document.createElement("div");
  wrapper.className = `tree-node ${isLast ? "last-child" : ""}`;

  // Attach position directly to wrapper from this specific node
  const startPos = node.start_pos ?? null;
  const endPos = node.end_pos ?? null;

  const from = inputEditor.posFromIndex(startPos);
  const to = inputEditor.posFromIndex(endPos);

  // Store these on wrapper as properties, not dataset
  wrapper._startPos = startPos;
  wrapper._endPos = endPos;

  node._domElement = wrapper; // link data ↔ dom

  const labelRow = document.createElement("div");
  labelRow.className = "tree-label";

  // ========== Highlight on wrapper ==========

  wrapper.addEventListener("mouseenter", (e) => {
    e.stopPropagation();
    const start = Number(wrapper._startPos);
    const end = Number(wrapper._endPos);
    highlightRange(start, end);
  });

  wrapper.addEventListener("mouseleave", (e) => {
    if (currentHighlight) {
      currentHighlight.clear();
      currentHighlight = null;
    }
  });

  labelRow.addEventListener("mouseenter", (e) => {
    e.stopPropagation();
    const start = Number(wrapper._startPos);
    const end = Number(wrapper._endPos);
    highlightRange(start, end);
  });

  labelRow.addEventListener("mouseleave", (e) => {
    if (currentHighlight) {
      currentHighlight.clear();
      currentHighlight = null;
    }
  });

  // ========== Now build the label ==========

  const isBranch =
    node.type === "rule" && node.children && node.children.length > 0;

  if (isBranch) {
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
      childrenContainer.appendChild(
        renderTree(child, depth + 1, childIsLast, showHidden),
      );
    });

    wrapper.appendChild(childrenContainer);

    labelRow.addEventListener("click", (e) => {
      e.stopPropagation();
      wrapper.classList.toggle("collapsed");
    });
  } else if (node.type === "token") {
    const label = document.createElement("span");
    label.className = "tree-terminal";

    const value = document.createElement("span");
    value.className = "tree-text";
    value.textContent = ` "${node.value.replace(/\n$/, "⮐")}"`;

    if (node.hidden && !node.name.startsWith("__ANON")) {
      label.classList.add("tree-hidden");
      value.classList.add("tree-hidden");
    }

    if (node.name.startsWith("__ANON")) {
      value.textContent = ` "${node.value.replace(/\n$/, "↵")}"`;
    } else {
      label.textContent = `${node.name}:`;
      labelRow.appendChild(label);
    }

    labelRow.appendChild(value);
    wrapper.appendChild(labelRow);
  } else if (node.type === "rule") {
    const label = document.createElement("span");
    label.className = "tree-rule";
    label.textContent = node.name;
    labelRow.appendChild(label);
    wrapper.appendChild(labelRow);
  }

  return wrapper;
}

async function runParser() {
  const grammar = grammarEditor.getValue();
  const text = inputEditor.getValue();
  const start = document.getElementById("startInput").value || "start";
  const parserType = document.getElementById("parserSelect").value;
  const lexer = document.getElementById("lexerSelect").value;
  const debug = document.getElementById("debugCheckbox").checked;
  const strict = document.getElementById("strictCheckbox").checked;
  const regex = document.getElementById("regexSelect").value === "regex";

  const output = document.getElementById("output");
  output.textContent = "Parsing...";

  try {
    const result = await pyodide.runPythonAsync(`

import micropip
await micropip.install("regex")
await micropip.install("lark")
from lark import Lark, Tree, Token
import json

def tree_to_dict(node):
    if isinstance(node, Tree):
        children = [tree_to_dict(c) for c in node.children]
        child_start = [c["start_pos"] for c in children if c.get("start_pos") is not None]
        child_end = [c["end_pos"] for c in children if c.get("end_pos") is not None]
        return {
            "type": "rule",
            "name": node.data,
            "children": children,
            "start_pos": min(child_start) if child_start else None,
            "end_pos": max(child_end) if child_end else None
        }
    elif isinstance(node, Token):
        return {
            "type": "token",
            "name": node.type,
            "value": node.value,
            "hidden": node.type.startswith("_"),
            "start_pos": getattr(node, "start_pos", None),
            "end_pos": getattr(node, "end_pos", None),
        }

parser = Lark(
    grammar=${JSON.stringify(grammar)},
    start=${JSON.stringify(start)},
    parser=${JSON.stringify(parserType)},
    lexer=${JSON.stringify(lexer)},
    debug=${debug ? "True" : "False"},
    strict=${strict ? "True" : "False"},
    regex=${regex ? "True" : "False"},
    keep_all_tokens=True,
    propagate_positions=True,
)

tree = parser.parse(${JSON.stringify(text)})
json.dumps(tree_to_dict(tree))
`);

    lastParseTree = JSON.parse(result);
    renderAndDisplayTree(lastParseTree);
  } catch (e) {
    output.className = "error";
    output.textContent = e.message || e;
  }
}


function loadExampleFile(path) {
  fetch(path)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${path}`);
      return response.text();
    })
    .then(data => {
      inputEditor.setValue(data);
    })
    .catch(err => {
      alert("Could not load example: " + err.message);
    });
}

function loadGrammarFile(path) {
  fetch(path)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${path}`);
      return response.text();
    })
    .then(data => {
      grammarEditor.setValue(data);
    })
    .catch(err => {
      alert("Could not load grammar: " + err.message);
    });
}
