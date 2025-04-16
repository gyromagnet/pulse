# Pulse Program Parser Demo

This is a web-based tool that leverages [Pyodide](https://pyodide.org/) to parse Bruker pulse code using [Lark](https://github.com/lark-parser/lark) as its parsing engine. It provides an interactive interface to visualize parse trees and inspect how the input code is tokenized and structured.

## Features

### Interactive Grammar & Code Editing

- Drag-and-drop support for text files into grammar or input editors.
- Persistent workspace via localStorage (restores code and settings automatically).
- Vertical and horizontal resizable split panes.
- Keyboard shortcut: `Ctrl+Enter` / `Cmd+Enter` triggers parsing.

### Parse Tree Visualization

- Interactive parse tree output with:
  - Expandable/collapsible rule nodes.
  - Inline syntax highlighting of corresponding input text.
  - Cursor-linked token highlighting in the tree.
  - Live selection highlighting: selecting text in code highlights matching tree nodes.
  - Double-click support: jump to code or tree elements via UI.
  - Optional **compression** of single-child rule paths for cleaner view.
  - Toggle display of **hidden tokens**.
  - Parse tree cursor that follows current editor position.

### Settings & Customization

- Settings panel with:
  - Toggleable **Advanced Settings** (parser type, lexer mode, regex engine, debug/strict mode, start rule).
  - Tree display controls (compress rule paths, show/hide hidden tokens).
  - Auto-persisted settings via localStorage.

### Help & Documentation

- Popover-based Help panel with:
  - Step-by-step usage instructions.
  - Inline icons and visual guides.
  - Auto-hide behavior for cleaner UI.

### Parsing Experience

- Parses on `Ctrl+Enter` / `Cmd+Enter` or by clicking "Parse".
- Responsive feedback and error display.
- Inline status/toast messages for parse results or workspace actions.
- Efficient update logic (re-parsing only when changes occur).
- Graceful failure handling if Pyodide fails to load.
- If an error occurs, shows the **line and column**.
- Highlights the exact text in the code editor that caused the error.
- Displays a dedicated popover to submit parsing failures (as GitHub issues).

### Other Features

- Example grammar and pulse code loaders (loaded dynamically from `examples.json`).
- Clearable/resettable workspace.
- Syntax-aware token formatting in tree display.
- Export parse tree as JSON.
- Mobile-friendly layout with media queries.

---

## Submitting Parsing Failures

If a valid Bruker pulse program fails to parse, you can report it directly through the app:

- After a failure, a **submit popover** appears.
- Clicking "Submit Parsing Failure" opens a pre-filled GitHub issue with:
  - The grammar used.
  - The input code that failed.
  - Additional explanation and instructions.

This helps improve the parser by collecting edge cases and bugs from real-world inputs.

---

## Planned Features

### Error Handling

- [ ] Show **line and column** of error (if available from Lark).
- [ ] Underline or mark erroneous text in the input editor.

### Extended Analysis Tools

- [ ] Visualize:
  - Control flow graph (CFG)
  - Pulse sequence diagram
  - Parameter catalog
  - Preprocessed source view
  - Auto-formatted version of the code
