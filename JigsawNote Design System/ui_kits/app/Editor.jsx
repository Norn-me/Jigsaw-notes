// JigsawNote — Note editor pane
const { Chip, Button, Tooltip, Icon, Avatar } = window.JigsawNoteDesignSystem_94fd87;

function ToolBtn({ icon, label }) {
  return (
    <Tooltip content={label} color="default">
      <button style={{ width: 34, height: 34, borderRadius: "var(--radius-medium)", border: "none", cursor: "pointer",
        background: "transparent", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
        onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-default-200)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
        <Icon name={icon} size={19} />
      </button>
    </Tooltip>
  );
}

function Editor({ note, onChange, onPin }) {
  if (!note) {
    return (
      <main style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, background: "var(--surface-app)", color: "var(--text-subtle)" }}>
        <img src="../../assets/jigsawnote-mark-512.png" alt="" style={{ width: 72, height: 72, borderRadius: 18, opacity: 0.7 }} />
        <p style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--text-muted)" }}>Pick a piece to start</p>
      </main>
    );
  }
  return (
    <main style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", background: "var(--surface-app)", minWidth: 0 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "12px 18px", borderBottom: "1px solid var(--color-divider)" }}>
        <span style={{ fontSize: "var(--text-tiny)", color: "var(--text-subtle)" }}>Edited {note.edited} ago</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 2 }}>
          <ToolBtn icon="solar:bell-linear" label="Remind me" />
          <button onClick={onPin} style={{ width: 34, height: 34, borderRadius: "var(--radius-medium)", border: "none", cursor: "pointer", background: "transparent", color: note.pinned ? "var(--color-secondary)" : "var(--text-muted)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name={note.pinned ? "solar:pin-bold" : "solar:pin-linear"} size={19} />
          </button>
          <ToolBtn icon="solar:link-circle-linear" label="Link a note" />
          <ToolBtn icon="solar:menu-dots-bold" label="More" />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "26px 40px", maxWidth: 760, width: "100%", margin: "0 auto" }}>
        <input value={note.title} onChange={(e) => onChange({ ...note, title: e.target.value })}
          style={{ width: "100%", border: "none", outline: "none", background: "transparent", color: "var(--color-foreground)",
            fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 20 }}>
          {note.tags.map((t) => <Chip key={t} size="sm" variant="flat" color={note.color} onClose={() => onChange({ ...note, tags: note.tags.filter((x) => x !== t) })}>{t}</Chip>)}
          <button style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "var(--text-tiny)", color: "var(--text-subtle)", background: "transparent", border: "1px dashed var(--color-divider)", borderRadius: "var(--radius-full)", padding: "3px 10px", cursor: "pointer" }}>
            <Icon name="solar:add-circle-linear" size={14} /> tag
          </button>
        </div>
        <textarea value={note.body} onChange={(e) => onChange({ ...note, body: e.target.value })}
          style={{ width: "100%", minHeight: 320, border: "none", outline: "none", resize: "none", background: "transparent",
            color: "var(--color-content1-foreground)", fontFamily: "var(--font-sans)", fontSize: "var(--text-medium)", lineHeight: 1.7 }} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 18px", borderTop: "1px solid var(--color-divider)" }}>
        <ToolBtn icon="solar:text-bold-bold" label="Bold" />
        <ToolBtn icon="solar:list-check-bold" label="Checklist" />
        <ToolBtn icon="solar:paperclip-linear" label="Attach" />
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "var(--text-tiny)", color: "var(--color-success)", display: "inline-flex", alignItems: "center", gap: 5 }}>
            <Icon name="solar:check-circle-bold" size={15} /> Saved
          </span>
          <Button size="sm" color="primary" variant="flat">Share</Button>
        </div>
      </div>
    </main>
  );
}

window.Editor = Editor;
