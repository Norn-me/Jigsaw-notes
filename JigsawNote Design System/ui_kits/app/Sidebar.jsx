// JigsawNote — Sidebar (navigation rail)
const { Avatar, Badge, Icon } = window.JigsawNoteDesignSystem_94fd87;

function NavItem({ icon, label, count, active, accent, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left",
        padding: "8px 10px", borderRadius: "var(--radius-medium)", border: "none", cursor: "pointer",
        background: active ? "var(--color-primary-flat)" : hover ? "rgba(255,255,255,0.04)" : "transparent",
        color: active ? "var(--color-primary-600)" : "var(--color-foreground)",
        fontFamily: "var(--font-sans)", fontSize: "var(--text-small)", fontWeight: active ? 600 : 500,
        transition: "background var(--dur-fast)",
      }}>
      <Icon name={icon} size={19} color={active ? "var(--color-primary)" : "var(--text-muted)"} />
      <span style={{ flex: 1 }}>{label}</span>
      {count != null && <span style={{ fontSize: "var(--text-tiny)", color: "var(--text-subtle)", fontVariantNumeric: "tabular-nums" }}>{count}</span>}
      {accent && <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-secondary)" }} />}
    </button>
  );
}

function SectionLabel({ children, action }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 10px 6px" }}>
      <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-subtle)", fontWeight: 600 }}>{children}</span>
      {action}
    </div>
  );
}

function Sidebar({ view, setView, notebooks, tags, activeNb, setActiveNb, user, onCommand }) {
  return (
    <aside style={{
      width: 250, flexShrink: 0, height: "100%", background: "var(--surface-sidebar)",
      borderRight: "1px solid var(--color-divider)", display: "flex", flexDirection: "column",
      padding: "14px 12px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 8px 12px" }}>
        <img src="../../assets/jigsawnote-mark-512.png" alt="" style={{ width: 34, height: 34, borderRadius: 9 }} />
        <span style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Jigsaw<span style={{ color: "var(--color-primary)" }}>Note</span>
        </span>
      </div>

      <button onClick={onCommand} style={{
        display: "flex", alignItems: "center", gap: 8, width: "100%", padding: "9px 11px", marginBottom: 4,
        borderRadius: "var(--radius-medium)", border: "1px solid var(--color-divider)", cursor: "pointer",
        background: "rgba(255,255,255,0.03)", color: "var(--text-muted)", fontFamily: "var(--font-sans)", fontSize: "var(--text-small)",
      }}>
        <Icon name="solar:magnifer-linear" size={17} />
        <span style={{ flex: 1, textAlign: "left" }}>Search…</span>
        <kbd style={{ fontFamily: "var(--font-sans)", fontSize: 11, padding: "1px 6px", borderRadius: 5, background: "rgba(255,255,255,0.06)", border: "1px solid var(--color-divider)" }}>⌘K</kbd>
      </button>

      <div style={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 6 }}>
        <NavItem icon="solar:notes-bold" label="All notes" count={40} active={view === "all"} onClick={() => setView("all")} />
        <NavItem icon="solar:pin-bold" label="Pinned" count={2} active={view === "pinned"} onClick={() => setView("pinned")} />
        <NavItem icon="solar:bell-bold" label="Reminders" accent active={view === "reminders"} onClick={() => setView("reminders")} />
        <NavItem icon="solar:archive-bold" label="Archive" active={view === "archive"} onClick={() => setView("archive")} />
      </div>

      <SectionLabel action={<Icon name="solar:add-circle-linear" size={16} color="var(--text-subtle)" />}>Notebooks</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {notebooks.map((nb) => (
          <NavItem key={nb.id} icon="solar:notebook-bold" label={nb.name} count={nb.count}
            active={activeNb === nb.id} onClick={() => { setActiveNb(nb.id); setView("notebook"); }} />
        ))}
      </div>

      <SectionLabel>Tags</SectionLabel>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "0 8px" }}>
        {tags.map((t) => (
          <span key={t} style={{ fontSize: "var(--text-tiny)", color: "var(--text-muted)", padding: "3px 9px", borderRadius: "var(--radius-full)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--color-divider)" }}>#{t}</span>
        ))}
      </div>

      <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--color-divider)", display: "flex", alignItems: "center", gap: 10 }}>
        <Avatar name={user.name} color="primary" isBordered size="sm" />
        <div style={{ lineHeight: 1.2, flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "var(--text-small)", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.name}</div>
          <div style={{ fontSize: 11, color: "var(--text-subtle)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{user.email}</div>
        </div>
        <Icon name="solar:settings-linear" size={18} color="var(--text-subtle)" />
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
