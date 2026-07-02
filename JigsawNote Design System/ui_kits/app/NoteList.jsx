// JigsawNote — Note list column
const { Chip, Button, Icon } = window.JigsawNoteDesignSystem_94fd87;

function NoteCard({ note, active, onClick, onPin }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        padding: "12px 14px", borderRadius: "var(--radius-large)", cursor: "pointer",
        background: active ? "var(--color-content1)" : hover ? "rgba(255,255,255,0.03)" : "transparent",
        border: `1px solid ${active ? "var(--color-primary)" : "transparent"}`,
        boxShadow: active ? "var(--shadow-small)" : "none",
        transition: "background var(--dur-fast), border-color var(--dur-fast)",
      }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {note.pinned && <Icon name="solar:pin-bold" size={13} color="var(--color-secondary)" />}
            <span style={{ fontSize: "var(--text-small)", fontWeight: 600, color: "var(--color-foreground)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{note.title}</span>
          </div>
          <p style={{ margin: "5px 0 0", fontSize: "var(--text-tiny)", color: "var(--text-muted)", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {note.body.replace(/\n+/g, " ")}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 9 }}>
            {note.tags.slice(0, 2).map((t) => <Chip key={t} size="sm" variant="flat" color={note.color}>{t}</Chip>)}
            <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--text-subtle)" }}>{note.edited}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoteList({ title, notes, activeId, onSelect, onNew, query, setQuery }) {
  return (
    <section style={{ width: 320, flexShrink: 0, height: "100%", display: "flex", flexDirection: "column", borderRight: "1px solid var(--color-divider)", background: "var(--surface-app)" }}>
      <div style={{ padding: "16px 16px 10px", display: "flex", alignItems: "center", gap: 10 }}>
        <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, flex: 1 }}>{title}</h2>
        <Button size="sm" color="primary" isIconOnly onClick={onNew} title="New note">
          <Icon name="solar:pen-new-square-bold" size={18} />
        </Button>
      </div>
      <div style={{ padding: "0 16px 10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 11px", borderRadius: "var(--radius-medium)", background: "var(--color-default-100)" }}>
          <Icon name="solar:magnifer-linear" size={16} color="var(--text-muted)" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter notes"
            style={{ flex: 1, border: "none", outline: "none", background: "transparent", color: "var(--color-foreground)", fontFamily: "var(--font-sans)", fontSize: "var(--text-small)" }} />
        </div>
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "0 8px 12px", display: "flex", flexDirection: "column", gap: 2 }}>
        {notes.length === 0 && <div style={{ padding: 24, textAlign: "center", color: "var(--text-subtle)", fontSize: "var(--text-small)" }}>No notes here yet.</div>}
        {notes.map((n) => <NoteCard key={n.id} note={n} active={n.id === activeId} onClick={() => onSelect(n.id)} />)}
      </div>
    </section>
  );
}

window.NoteList = NoteList;
