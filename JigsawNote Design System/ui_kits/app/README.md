# JigsawNote — UI Kit: Notes app

A high-fidelity, interactive recreation of the JigsawNote note-taking workspace, composed from the design-system components.

## Run
Open `index.html`. Everything is fake/in-memory but interactive.

## Screens & parts
- `Sidebar.jsx` — navigation rail on `--surface-sidebar` (#111911): brand lockup, ⌘K search launcher, primary nav (All notes / Pinned / Reminders / Archive), notebooks, tags, user footer.
- `NoteList.jsx` — middle column: view title, new-note button, live filter, note cards (pin marker, snippet, tag chips, timestamp).
- `Editor.jsx` — right pane: title + body editing, tag chips, top action row (pin/remind/link), bottom formatting toolbar + save state.
- `CommandBar.jsx` — ⌘K command palette overlay: fuzzy note search + "create new note".
- `data.js` — sample notebooks, tags and notes.

## Interactions
- Click a note to open it; edit title/body inline.
- **New note** button or **⌘N** prepends a note.
- **⌘K** opens the command palette; Esc closes.
- Toggle **pin**; filter with the list search; switch views/notebooks in the sidebar.

## Components used
Avatar, Badge, Button, Chip, Icon, Kbd, Tooltip — all from `window.JigsawNoteDesignSystem_94fd87`, plus Iconify (Solar family) for glyphs.
