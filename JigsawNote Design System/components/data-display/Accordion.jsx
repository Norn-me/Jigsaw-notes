import React from "react";

/** Accordion — vertical list of expandable panels. Pass items=[{key,title,subtitle,content,startContent}]. */
export function Accordion({
  items = [], defaultExpandedKeys = [], selectionMode = "single",
  variant = "light", isCompact = false, className = "", style = {},
}) {
  const [open, setOpen] = React.useState(new Set(defaultExpandedKeys));
  const toggle = (k) => {
    setOpen((prev) => {
      const next = new Set(selectionMode === "single" ? [] : prev);
      if (prev.has(k)) next.delete(k); else next.add(k);
      return next;
    });
  };
  const wrap = {
    light: {}, shadow: { background: "var(--color-content1)", borderRadius: "var(--radius-large)", boxShadow: "var(--shadow-medium)", padding: "0 16px" },
    bordered: { border: "1px solid var(--color-divider)", borderRadius: "var(--radius-large)", padding: "0 16px" },
    splitted: {},
  }[variant] || {};
  const splitted = variant === "splitted";

  return (
    <div className={`jn-accordion ${className}`} style={{ display: "flex", flexDirection: "column", gap: splitted ? 12 : 0, ...wrap, ...style }}>
      {items.map((it, i) => {
        const isOpen = open.has(it.key);
        const pad = isCompact ? "12px 4px" : "16px 4px";
        return (
          <div key={it.key} style={splitted ? { background: "var(--color-content1)", border: "1px solid var(--color-divider)", borderRadius: "var(--radius-large)", padding: "0 16px", boxShadow: "var(--shadow-small)" } : {}}>
            <button onClick={() => !it.isDisabled && toggle(it.key)} style={{
              width: "100%", display: "flex", alignItems: "center", gap: 12, padding: pad,
              background: "transparent", border: "none", cursor: it.isDisabled ? "not-allowed" : "pointer",
              opacity: it.isDisabled ? "var(--disabled-opacity)" : 1,
              borderTop: i === 0 || splitted ? "none" : "1px solid var(--color-divider)", textAlign: "left",
            }}>
              {it.startContent}
              <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: "var(--text-medium)", fontWeight: "var(--fw-medium)", color: "var(--color-foreground)" }}>{it.title}</span>
                {it.subtitle && <span style={{ fontSize: "var(--text-small)", color: "var(--text-muted)" }}>{it.subtitle}</span>}
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: isOpen ? "rotate(90deg)" : "none", transition: "transform var(--dur-base)" }}><path d="m9 18 6-6-6-6" /></svg>
            </button>
            <div style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", transition: "grid-template-rows var(--dur-base) var(--ease-out)" }}>
              <div style={{ overflow: "hidden" }}>
                <div style={{ padding: "0 4px 16px", fontSize: "var(--text-small)", color: "var(--text-muted)", lineHeight: "var(--leading-medium)" }}>{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
