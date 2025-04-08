# Pulse Program Parser Demo

This is a web-based tool that leverages [Pyodide](https://pyodide.org/) to parse Bruker pulse code using [Lark](https://github.com/lark-parser/lark) as its parsing engine. It provides an interactive interface to visualize parse trees and inspect how the input code is tokenized and structured.

## Features

- **Interactive Grammar & Code Editing:**  
  Modify the parser grammar and the pulse program code in real time using integrated CodeMirror editors.

- **Parse Tree Visualization:**  
  View the structured parse tree with interactive elements, including:
  - Expandable and collapsible rule nodes.
  - Highlighting of tokens and syntax sections corresponding to the source code.
  - Visual cues (such as cursors and selection highlights) linking code segments with their parse tree representation.
  - Optional compression of node paths for chains of single-child nodes

## Planned Features

- **User Interface Enhancements:**

  - Add a progress bar to indicate parsing activity.
  - Introduce a help panel next to the settings menu, including context-sensitive help text.
  - Display help content automatically the first time the page is opened.
  - Implement smooth transitions across user interface interactions, especially cursor movement in the parse tree.

- **Improved Parse Error Handling:**

  - Enhance error reporting to provide more detailed feedback when parsing issues arise.
  - Add error highlighting directly in the code input area to pinpoint where parsing failures occur.
  - Add a "submit code" button to allow a user to submit pulse code that is not successfully parsed.

- **Extended Analysis Tools:**
  - Display analysis results:
    - A control flow graph.
    - A pulse sequence diagram.
    - A parameter catalog.
    - A preprocessed version of the input code.
    - An auto-formatted version of the code.
