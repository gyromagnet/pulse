# Pulse Program Parser Demo

This is a web-based tool that leverages [Pyodide](https://pyodide.org/) to parse Bruker pulse code using [Lark](https://github.com/lark-parser/lark) as its parsing engine. It provides an interactive interface to visualize parse trees and inspect how the input code is tokenized and structured.

## Features

### 🌐 Interactive Grammar & Code Editing

- Drag-and-drop support for text files into grammar or input editors.
- Persistent workspace via localStorage (restores code and settings automatically).
- Vertical and horizontal resizable split panes.

### 🌳 Parse Tree Visualization

- Interactive parse tree output with:
  - Expandable/collapsible rule nodes.
  - Inline syntax highlighting of corresponding input text.
  - Cursor-linked token highlighting in the tree.
  - Live selection highlighting: selecting text in code highlights matching tree nodes.
  - Double-click support: jump to code or tree elements via UI.
  - Optional **compression** of single-child rule paths for cleaner view.
  - Toggle display of **hidden tokens**.

### ⚙️ Settings & Customization

- UI panel to control:
  - Compressed node paths
  - Toggle display of "hidden" tokens
- Persistent settings and layout ratios.

### ✅ Parsing Experience

- Parses on `Ctrl+Enter` / `Cmd+Enter` or by clicking "Parse".
- Responsive feedback and error display.
- Inline status/toast messages for parse results or workspace actions.
- Efficient update logic (re-parsing only when changes occur).
- Graceful failure handling if Pyodide fails to load.

### 🔧 Other Features

- Example grammar and pulse code loaders.
- QR code linking to demo.
- Clearable/resettable workspace.

## Planned Features

### 🔄 UI/UX Improvements

- [ ] Move Parser controls to **Advanced** section
  - Parser type (`LALR`, `Earley`)
  - Lexer mode (`basic`, `contextual`, `dynamic`, `dynamic_complete`)
  - Regex engine (`re`, `regex`)
  - Debug and strict mode flags
  - Start rule override
- [ ] Add a progress bar during parsing.
- [ ] When the pulse code input is empty, display an overview indicating that the user should write, paste, or drag in code

### ❗ Error Handling

- [ ] Improved error reporting (detailed feedback on grammar/input issues).
- [ ] Inline error highlights in the input editor.
- [ ] "Submit Code" feature for collecting failed inputs for analysis.

### 📈 Extended Analysis Tools

- [ ] Visualize:
  - Control flow graph (CFG)
  - Pulse sequence diagram
  - Parameter catalog
  - Preprocessed source view
  - Auto-formatted version of the code
