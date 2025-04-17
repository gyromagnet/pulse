# TODO: Parser Demo Roadmap

This file tracks prioritized improvements and known issues for the Pulse Program Parser Demo.

## Bugs

- [x] Help/About does not contain any explanation of what this page is, who made it, who to contact, etc.
- [ ] Fix tree cursor visibility when text cursor is moving.
- [ ] Insert horizontal tree cursor between visible nodes when hidden token is filtered.
- [ ] Correct misalignment or absence of horizontal tree cursor for hidden tokens.
- [ ] Improve error message parsing; replace fragile regex with structured output from Python.
- [ ] Ensure selection-based highlighting correctly handles surrogate pairs (multi-byte Unicode).
- [x] Ensure scrollIntoView works reliably for collapsed/hidden nodes.
- [ ] Fix pane resizing layout glitches on smaller screens (mobile-safe).
- [x] Define missing CSS variables:
  - [x] `--theme-popup-bg`
  - [x] `--theme-popup-border`
  - [x] `--theme-toast-shadow`
  - [x] `--theme-text-color`
- [ ] Fix help popover example name mismatch: help text says `<code>hcno</code>` but actual example is “HNCO” (loaded via `hnco`).
- [ ] Normalize example‐link casing: examples.json uses “HNCO” and “zg” but help text shows lowercase `zg` and incorrect `hcno`.
- [ ] Documentation mismatch: help instructs “reload grammar” to reimport default Bruker.lark, yet no such control exists (only “Reset Workspace”).

## Polish

- [ ] Improve error feedback:
  - [ ] Differentiate Lark grammar errors vs Pyodide/runtime errors.
  - [ ] Add expandable error details.
- [x] Improve interactivity of expand/collapse triangle:
  - [x] Show only when child nodes are present.
  - [x] Add `cursor: pointer` and hover styling.
- [x] Convert "parse" button label to title case: "Parse"
- [ ] Highlight setting controls that are not at default values.
- [ ] Improve tooltip readability (width, wrapping, clipping).
- [x] Fix visual layering of toast messages (avoid overlap with editor/footer).
- [x] Add hover feedback to top-right icons (settings/help).
- [ ] Persist advanced settings toggle state (optional / needs UX decision).
- [ ] Standardize button‐label capitalization across the UI (e.g. “Parse”, “Collapse All”, “Expand All”).
- [ ] Add a visible close (“×”) button and ESC‐key listener to help/settings popovers for better discoverability and accessibility.
- [ ] Improve “advanced settings” heading affordance with an explicit expand/collapse icon (not just text rotation).
- [ ] Show a confirmation toast (e.g. “Export complete”) when the JSON export finishes.

## Enhancements

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

## Features

- [ ] Control Flow Graph (CFG) visualization.
- [ ] Pulse sequence diagram based on parse structure.
- [ ] Parameter catalog view (extracted variables/constants).
- [ ] Beautified/auto-formatted output view.
- [ ] Preprocessed source viewer.
- [ ] Tree diff viewer to show changes between parses.
