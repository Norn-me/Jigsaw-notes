One-line: The JigsawNote button — solid green primary is the default call-to-action; seven variants (solid, bordered, light, flat, faded, shadow, ghost) across six colors.

```jsx
<Button color="primary">New note</Button>
<Button color="primary" variant="flat" startContent={<Icon name="plus" />}>Add</Button>
<Button variant="bordered">Cancel</Button>
<Button color="danger" variant="light" isIconOnly><Icon name="trash" /></Button>
```

Sizes: sm (32) · md (40) · lg (48). Props: `variant`, `color`, `radius`, `isIconOnly`, `isLoading`, `isDisabled`, `fullWidth`, `startContent`/`endContent`. Hover dims opacity (solid/flat) or fills (ghost); press scales to 0.97.
