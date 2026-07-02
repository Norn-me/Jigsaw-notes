One-line: Icon renders any Iconify glyph — use the Solar and Vuesax families to match the JigsawNote source kit.

```jsx
<Icon name="solar:notebook-bold" size={24} />
<Icon name="solar:magnifer-linear" />
<Icon name="solar:pin-bold" color="var(--color-primary)" />
```

Host HTML must include: `<script src="https://cdn.jsdelivr.net/npm/iconify-icon@2/dist/iconify-icon.min.js"></script>`. Paints with currentColor unless `color` is set. Prefer `-bold` (filled) Solar icons for primary UI, `-linear` (outline) for secondary.
