# JigsawNote Design System

A dark-green design system for **JigsawNote**, a note-taking and task-tracking application. This system is built on the HeroUI component foundation, customized with JigsawNote's signature accent color and visual identity.

## Sources

- **Figma**: HeroUI Figma Kit (Community) — comprehensive component library with 37 component families, dark/light themes, and extensive token system
- **Brand Assets**: JigsawNote app icon (512px, 192px) with notepad + puzzle-check mark
- **Custom Theming**: Accent color `#4cd36f` (vibrant green), background `#161e17` (near-black), text `#d4ddd7` (off-white), sidebar `#111911`, notification/highlight `#fc8747` (orange)

---

## Content Fundamentals

JigsawNote copy is **direct, task-focused, and clear**. The tone is professional but approachable, avoiding jargon.

- **Casing**: Sentence case for labels and button text (e.g., "Add note", "Save changes"), title case for headers
- **Voice**: Action-oriented, second person implied ("Add note" not "Note added"). No exclamation marks except in celebration moments
- **Brevity**: Labels and microcopy are short and scannable (e.g., "Pin", "Archive", "Search notes", not "Search through your collection of notes")
- **Emoji**: Not used in UI copy; the app relies on icons from Vuesax/Solar iconography
- **Terminology**: "Note" (not "document"), "Task" (not "todo"), "Pin/Archive" for organization, "Collaborate" when sharing is involved

Example patterns:
- Empty state: "No notes yet. Create your first one."
- Confirmation: "Delete this note? You can't undo this."
- Success: "Note saved."
- Error: "Couldn't save. Check your connection."

---

## Visual Foundations

### Color System

JigsawNote uses a **dark-first, green-accented palette** optimized for focus and reduced eye strain during long note-taking sessions.

**Semantic Colors:**
- **Primary (Accent)**: `#4cd36f` — vibrant green, used for CTAs, highlights, and key interactions
- **Neutral Surfaces**: Ranging from `#161e17` (near-black, primary bg) to `#d4ddd7` (off-white, text)
- **Sidebar**: `#111911` — darker than main bg, creates visual hierarchy
- **Notification/Highlight**: `#fc8747` — warm orange, draws attention for alerts and badges
- **Semantic**: Red for destructive actions, yellow/amber for warnings, blue for info

The color system avoids bright pastels and relies on high contrast for accessibility in dark mode.

### Typography

The system uses **two primary typeface families** to establish hierarchy:

- **Display/Headings**: Inter (sans-serif) at 24px–48px, weight 600–700, for page titles and section headers
- **Body**: Inter (sans-serif) at 14px–16px, weight 400–500, for primary content and longer passages
- **Monospace**: Fira Code at 12px–14px, weight 400, for code blocks and technical content

Line-height is set to 1.5 for body text (improved readability) and 1.2 for headings. Letter-spacing is tight (0) to maintain density without sacrificing clarity.

### Spacing & Rhythm

Spacing follows a **8px base unit** system with semantic naming:
- `--space-xs`: 4px (tight), `--space-sm`: 8px, `--space-md`: 16px, `--space-lg`: 24px, `--space-xl`: 32px, `--space-2xl`: 48px

**Layout Principles:**
- Cards and containers use 16px internal padding
- Page margins start at 24px on desktop, 16px on mobile
- Gaps between sibling elements (buttons in a row, list items) default to 8px or 12px

### Shadows & Elevation

JigsawNote uses a **subtle shadow system** to establish depth without heaviness:

- **Elevation 1** (small cards, tooltips): `0 2px 8px rgba(0,0,0,0.12)`
- **Elevation 2** (modals, larger cards): `0 8px 24px rgba(0,0,0,0.16)`
- **Elevation 3** (dropdowns, popovers): `0 12px 32px rgba(0,0,0,0.2)`

Shadows are always dark (using black with opacity) to work against the dark background without causing harsh contrast.

### Borders & Radius

- **Border radius**: 8px for standard components (buttons, inputs, cards), 12px for larger containers, 50% for circular elements (avatars, small badges)
- **Border weight**: 1px for dividers and input borders, 2px for focus states
- **Border color**: Derived from neutral surfaces, typically a darker shade than the element itself (e.g., `#3d5242` borders on lighter surfaces)

### Hover & Interaction States

Interactions follow consistent patterns:

- **Hover**: 8% opacity change (usually darker for light surfaces, lighter for dark surfaces) + subtle scale (1.02x for buttons)
- **Active/Pressed**: 16% opacity shift + 0.98x scale (slight "press in" effect)
- **Focus**: Outline using primary accent (`#4cd36f`), 2px width, 2px offset
- **Disabled**: 50% opacity reduction, cursor becomes `not-allowed`

No rapid animations; interactions use `transition: all 0.15s ease-out`.

### Background & Layout Patterns

- **Primary background**: Solid near-black (`#161e17`), no images or patterns
- **Cards**: Slight elevation shadow, border in neutral-dark, consistent padding
- **Sidebar**: Darker background (`#111911`), sticky positioning for persistent navigation
- **Full-bleed elements**: Rare; when used, paired with high contrast text to maintain readability
- **Transparency/Blur**: Minimal use; reserved for tooltips and overlays over complex backgrounds

### Imagery & Illustration

JigsawNote currently relies on **no custom illustrations**. Visual communication is handled through:
- **Icons**: Vuesax (monoline, 24px) and Solar (duotone, where emphasis is needed) from Iconify CDN
- **Placeholder imagery**: None in the current design system; future product work will source photography or illustrations on a per-project basis

### Animation

Motion is **purposeful and subtle**:
- **Transitions**: 0.15–0.3s `ease-out` for UI state changes (hover, focus, open/close)
- **Entrance animations**: 0.3–0.4s fade-in + slight slide (top or left) for new elements appearing on screen
- **Easing**: No bounces or elastic easing; `ease-out` for natural, predictable motion
- **Disabled**: Users with `prefers-reduced-motion: reduce` see instant state changes (no transitions)

---

## Iconography

JigsawNote uses **Vuesax + Solar icon families** from Iconify CDN for a cohesive, professional icon set:

- **Vuesax (Linear)**: Primary icon set, monoline style, 24px, used for navigation, actions, and inline content
- **Solar (Bold Duotone)**: Secondary set, used sparingly for emphasis or status indicators where two colors strengthen meaning

Icon usage guidelines:
- Icons are always paired with labels in buttons and nav items (except compact mobile layouts where labels are in tooltips)
- Icon color inherits text color by default; on accent backgrounds, icons are white or light-themed
- No emoji are used in the UI; all iconography is through SVG icons loaded from Iconify

The Iconify CDN provides a massive, well-maintained library; no custom icon set is maintained in this design system.

---

## Component Inventory

This design system includes **37 reusable components** organized into 5 functional groups:

### Actions
- **Button** — CTA with variants: solid (default), bordered, ghost; sizes xs–xl; states: disabled, loading
- **ButtonGroup** — Multi-button container with even spacing and shared active state
- **Link** — Inline and standalone hyperlink styles, with underline on hover

### Forms
- **Input** — Text input with placeholder, error state, icon support, sizes xs–xl
- **Checkbox** — Single and grouped checkbox controls with label
- **CheckboxGroup** — Labeled group of checkboxes with vertical/horizontal layout
- **Radio** — Single and grouped radio controls
- **Switch** — Toggle switch, sizes sm–lg
- **Select** — Dropdown menu with native and custom rendering
- **NumberInput** — Numeric input with increment/decrement buttons
- **Slider** — Range slider, vertical or horizontal
- **InputOTP** — Multi-digit OTP input, auto-focus between fields

### Data Display
- **Avatar** — User avatar with image/initials, sizes xs–2xl
- **AvatarGroup** — Stack of avatars with overflow indicator
- **Badge** — Small label badge, colors and sizes
- **Chip** — Dismissible or read-only tag element
- **Card** — Container with optional header, footer, and body sections
- **User** — Composite user display (avatar + name + metadata)
- **Divider** — Horizontal or vertical divider with optional label
- **Code** — Inline and block code display with syntax highlighting
- **Kbd** — Keyboard key representation
- **Accordion** — Expandable section groups with single/multiple open support
- **Table** — Data table with striping, hover, and column sorting

### Feedback
- **Alert** — Dismissible alert box, colors: success, error, warning, info
- **Progress** — Linear progress bar with optional label
- **Spinner** — Animated loading spinner, sizes sm–lg
- **Toast** — Non-modal notification, auto-dismiss after 4s
- **Tooltip** — Rich popover with arrow, positioned around trigger

### Navigation & Media
- **Tabs** — Tabbed interface with scrollable overflow handling
- **Calendar** — Month calendar picker with date selection
- **Carousel** — Image carousel with prev/next controls and indicators
- **Icon** — Wrapper for Iconify icon system (Vuesax, Solar families)

---

## UI Kits

### JigsawNote App (`ui_kits/app/`)

A fully interactive prototype of the core note-taking interface, demonstrating:

- **Sidebar**: Navigation with note list, folder/tag organization, and user menu
- **Note List**: Searchable, filterable grid of note cards with metadata (date, tag, collaboration status)
- **Editor**: Rich text editor with formatting toolbar (bold, italic, code), tag management, and collaboration indicators
- **Command Bar**: Keyboard-driven quick action menu (Cmd+K) for creating notes, searching, and navigation

The kit is built with React components from this design system and is fully interactive — add notes, edit text, apply filters, and navigate between sections.

---

## Tokens & Styling

All design decisions are expressed as **CSS custom properties** in `tokens/`:

- `tokens/colors.css` — brand colors, semantic colors, and surface scales
- `tokens/typography.css` — font families, sizes, weights, and line-heights
- `tokens/spacing.css` — spacing scale and semantic names (xs–2xl)
- `tokens/fonts.css` — `@font-face` declarations for Inter and Fira Code
- `tokens/base.css` — global resets, root color scheme

These are imported into `styles.css`, the single entry point for consumers.

---

## Intentional Additions

**Icon component**: A wrapper around Iconify (Icon.jsx) to provide a unified interface for accessing Vuesax and Solar icons. This is not a custom icon set but a convenience for loading well-maintained, third-party icon families.

---

## How to Use

### For Designers & Prototypers

1. Link `styles.css` in your HTML file
2. Load the design system bundle: `<script src="_ds_bundle.js"></script>`
3. Access components via `window.JigsawNoteDesignSystem_94fd87.<ComponentName>`
4. Refer to component `.d.ts` files for props and variants

### For Developers

Components are authored as React function components with TypeScript interfaces. Integrate them into your production codebase by reading the `.jsx` source and adjusting styling/interactivity as needed for your product.

All colors, spacing, and typography are driven by CSS custom properties — customize the system by overriding tokens in `tokens/` or by defining new modes (e.g., a light theme) in `styles.css`.

---

## Design System Tab

The Design System tab in Figma/Claude contains:

- **Foundations**: Color swatches (brand, semantic, surfaces), typography specimens, spacing scales, elevation examples, and the JigsawNote logo mark
- **Components**: Interactive examples of every component family, showing default states, variants, sizes, and disabled/error states
- **App Kit**: The full JigsawNote interface prototype with live interactions

---

## Future Work

- Light theme variant (tokens/light.css with overrides)
- Additional component variants (e.g., Button with icon-only variant)
- Animation guidelines and micro-interaction patterns
- Accessibility audit and WCAG 2.1 AA compliance verification
- Custom illustrations and imagery for marketing collateral

---

**Last updated**: July 2026  
**Authored**: Design System compiler + manual component authoring  
**Brand**: JigsawNote
