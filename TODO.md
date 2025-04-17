# TODO: Parser Demo Roadmap

This file tracks prioritized improvements and known issues for the Pulse Program Parser Demo.

## Bugs

- [ ] Improve error message parsing; replace fragile regex with structured output from Python.
- [ ] Fix pane resizing layout glitches on smaller screens (mobile-safe).

## Enhancements

- [ ] Ensure selection-based highlighting correctly handles surrogate pairs (multi-byte Unicode).
- [ ] Auto-reparse on grammar/input changes (optional setting).
- [ ] Add breadcrumb or minimap view for parse tree navigation.
- [ ] Add keyboard shortcuts for collapse/expand all.
- [ ] Add token search/filter tool (regex-enabled).
- [ ] Display parser diagnostics (unused rules, left recursion, etc).
- [ ] Automatically expand parent branches when navigating by double‑click in the editor so the target node is never hidden.
- [ ] Offer a user setting to restrict selection‐based highlighting to exact‐match leaf tokens rather than all ancestor nodes.
- [ ] Add touch event support (`touchstart`, `touchmove`, `touchend`) to the vertical and horizontal pane resizers for mobile/tablet.
- [ ] Implement responsive pane behavior or adjustable min‐pane constraints (rather than hard‑coded 50 px/200 px) to prevent breakage on very small viewports.
- [ ] Investigate incremental or virtualized rendering of off-screen tree nodes for large parse trees to reduce re‑render cost.
- [ ] Add proper ARIA roles (e.g. `role="tooltip"`) and keyboard‐focus support to all tooltip triggers.
- [ ] Audit and improve color contrast for parse tree highlighting to meet WCAG 2.1 contrast ratios.

## Features

- [ ] Control Flow Graph (CFG) visualization.
- [ ] Pulse sequence diagram based on parse structure.
- [ ] Parameter catalog view (extracted variables/constants).
- [ ] Beautified/auto-formatted output view.
- [ ] Preprocessed source viewer.
- [ ] Tree diff viewer to show changes between parses.
