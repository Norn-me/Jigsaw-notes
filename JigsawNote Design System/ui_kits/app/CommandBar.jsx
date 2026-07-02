// JigsawNote — Command palette (⌘K)
const { Icon, Kbd } = window.JigsawNoteDesignSystem_94fd87;

function CommandBar({ open, onClose, notes, onSelect, onNew }) {
  const [q, setQ] = React.useState("");
  const inputRef = React.useRef(null);
  React.useEffect(() => { if (open && inputRef.current) inputRef.current.focus(); if (open) setQ(""); }, [open]);
  React.useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    if (open) { window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }
  }, [open, onClose]);
  if (!open) return null;
  const results = notes.filter((n) => n.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "var(--color-overlay)", backdropFilter: "blur(3px)", display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "12vh" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 560, maxWidth: "90vw", background: "var(--color-content1)", border: "1px solid var(--color-divider)", borderRadius: "var(--radius-large)", boxShadow: "var(--shadow-large)", overflow: "hidden", animation: "jn-cmd .16s var(--ease-out)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderBottom: "1px solid var(--color-divider)" }}>
          <Icon name="solar:magnifer-linear" size={18} color="var(--text-muted)" />
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search notes or run a command…"
            style={{ flex: 1, border: "none", outline: "none", background: "transparent", color: "var(--color-foreground)", fontFamily: "var(--font-sans)", fontSize: "var(--text-medium)" }} />
          <Kbd>esc</Kbd>
        </div>
        <div style={{ maxHeight: 320, overflowY: "auto", padding: 8 }}>
          <button onClick={() => { onNew(); onClose(); }} style={rowStyle(true)}>
            <Icon name="solar:pen-new-square-bold" size={18} color="var(--color-primary)" />
            <span style={{ flex: 1, textAlign: "left" }}>Create new note</span>
            <Kbd keys={["command"]}>N</Kbd>
          </button>
          <div style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-subtle)", padding: "10px 12px 4px" }}>Notes</div>
          {results.map((n) => (
            <button key={n.id} onClick={() => { onSelect(n.id); onClose(); }} style={rowStyle(false)}>
              <Icon name="solar:notes-linear" size={18} color="var(--text-muted)" />
              <span style={{ flex: 1, textAlign: "left" }}>{n.title}</span>
              <span style={{ fontSize: 11, color: "var(--text-subtle)" }}>{n.edited}</span>
            </button>
          ))}
          {results.length === 0 && <div style={{ padding: 20, textAlign: "center", color: "var(--text-subtle)", fontSize: "var(--text-small)" }}>No matches</div>}
        </div>
      </div>
      <style>{`@keyframes jn-cmd{from{opacity:0;transform:translateY(-8px) scale(.98)}}`}</style>
    </div>
  );
}
function rowStyle() {
  return { display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "10px 12px", border: "none", cursor: "pointer",
    background: "transparent", borderRadius: "var(--radius-medium)", color: "var(--color-foreground)", fontFamily: "var(--font-sans)", fontSize: "var(--text-small)" };
}
window.CommandBar = CommandBar;
