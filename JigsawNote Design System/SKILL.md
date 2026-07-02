---
name: jigsawnote-design
description: Use this skill to generate well-branded interfaces and assets for JigsawNote, either for production or throwaway prototypes/mocks. Contains design guidelines, dark-green color system, typography, component library (37 components), and a complete note-taking app UI kit for prototyping.
user-invocable: true
---

# JigsawNote Design System Skill

This skill provides complete design and component resources for building interfaces in the JigsawNote visual language.

## Quick Start

1. **Read `readme.md`** for the full design philosophy, color system, typography, spacing, and interaction patterns.
2. **Explore the Design System tab** (in projects/Claude) to see:
   - Foundation cards: colors, type, spacing, elevation
   - Component showcase: all 37 components with variants
   - UI kit: the interactive JigsawNote app prototype
3. **Copy assets** from `assets/` (JigsawNote logo mark, icon families via Iconify)
4. **Use components** by loading the design system bundle and accessing components via `window.JigsawNoteDesignSystem_*.<ComponentName>`

## Design Principles

- **Dark-first, green-accented**: Primary accent is `#4cd36f`, backgrounds are near-black (`#161e17`), optimized for focus during long note-taking sessions
- **Subtle, purposeful motion**: Transitions at 0.15–0.3s with `ease-out`; no bounces or rapid animations
- **Action-oriented copy**: Task-focused, sentence case, direct voice; no emoji or jargon
- **Icon-driven**: Uses Vuesax (linear, 24px) and Solar (duotone) from Iconify CDN for cohesive iconography

## Component Categories

- **Actions**: Button, ButtonGroup, Link
- **Forms**: Input, Checkbox, CheckboxGroup, Radio, Switch, Select, NumberInput, Slider, InputOTP
- **Data Display**: Avatar, AvatarGroup, Badge, Chip, Card, User, Divider, Code, Kbd, Accordion, Table
- **Feedback**: Alert, Progress, Spinner, Toast, Tooltip
- **Navigation & Media**: Tabs, Calendar, Carousel, Icon

## When to Use This Skill

- **Throwaway prototypes/mocks**: Copy component examples, assets, and UI kit screens to quickly build clickable mockups
- **Production code**: Read component `.jsx` source and integrate into your codebase; all styling is driven by CSS custom properties so you can fork/customize for your product
- **Design exploration**: Use the UI kit as a starting point for customizing JigsawNote's interface or extending it with new screens

## File Structure

```
/tokens/               # CSS custom properties
  colors.css           # Brand, semantic, and surface colors
  typography.css       # Font families, sizes, weights
  spacing.css          # Spacing scale (xs–2xl)
  fonts.css            # @font-face declarations
  base.css             # Global resets and root declarations
styles.css             # Entry point; imports all tokens

/components/           # Reusable React components (37 total)
  actions/             # Button, ButtonGroup, Link
  forms/               # Input, Checkbox, Select, etc.
  data-display/        # Avatar, Card, Table, etc.
  feedback/            # Alert, Toast, Progress, etc.
  navigation/          # Tabs
  media/               # Calendar, Carousel
  icons/               # Icon wrapper for Iconify

/foundations/          # Foundation specimen cards (colors, type, spacing)

/ui_kits/
  app/                 # JigsawNote note-taking app prototype
    index.html         # Interactive prototype
    Sidebar.jsx        # Navigation sidebar
    NoteList.jsx       # Note grid with search/filter
    Editor.jsx         # Rich text editor
    CommandBar.jsx     # Cmd+K quick actions

/assets/
  jigsawnote-mark-*.png # JigsawNote logo (512px, 192px)
```

## Color Quick Reference

- **Primary Accent**: `#4cd36f` (green) — CTAs, highlights, focus states
- **Background**: `#161e17` (near-black) — page background
- **Sidebar**: `#111911` — persistent UI panels
- **Text**: `#d4ddd7` (off-white) — primary text
- **Alert/Notification**: `#fc8747` (orange) — warnings, badges
- **Borders**: `#3d5242` (dark green) — dividers, input borders

Full semantic token list in `tokens/colors.css`.

## Typography Quick Reference

- **Headings**: Inter 24px–48px, weight 600–700
- **Body**: Inter 14px–16px, weight 400–500
- **Monospace**: Fira Code 12px–14px, weight 400

Line-height: 1.5 for body, 1.2 for headings.

## Interaction Patterns

- **Hover**: 8% opacity change + 1.02x scale (buttons only)
- **Active**: 16% opacity shift + 0.98x scale
- **Focus**: `#4cd36f` outline, 2px width
- **Disabled**: 50% opacity, `cursor: not-allowed`

All transitions use `transition: all 0.15s ease-out`.

## FAQ

**Q: How do I use this in production?**
A: Copy component `.jsx` files into your codebase. All styling is CSS custom properties, so you can override tokens per your needs. See component `.d.ts` files for props and usage.

**Q: Can I customize colors or spacing?**
A: Yes. Override CSS custom properties in a custom stylesheet or directly in `tokens/`. The component library reads from `--color-*`, `--space-*`, and `--font-*` variables.

**Q: Where do I get icons?**
A: The system uses Iconify CDN for Vuesax and Solar icons. The Icon wrapper component loads them dynamically. No local icon files to manage.

**Q: What about a light theme?**
A: Not included in the current version. To add one, create `tokens/light.css` with overrides for `--color-bg`, `--color-text`, etc., and toggle it via a `data-theme="light"` attribute on `<html>`.

**Q: Is there a Figma file?**
A: The design system was built from the HeroUI Figma kit, customized for JigsawNote's dark green theme. The source Figma file is referenced in `readme.md` but not included here; the components have been fully authored in code.

---

**Namespace**: `JigsawNoteDesignSystem_94fd87`  
**Last Updated**: July 2026  
**Brand**: JigsawNote
