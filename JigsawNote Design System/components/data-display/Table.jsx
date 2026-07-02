import React from "react";

/** Data table. columns=[{key,label,align}], rows=[{key,...}]. Supports striping, selection, hover. */
export function Table({
  columns = [], rows = [], selectionMode = "none", selectedKeys, onSelectionChange,
  isStriped = false, removeWrapper = false, color = "primary", className = "", style = {},
}) {
  const [internal, setInternal] = React.useState(new Set());
  const sel = selectedKeys !== undefined ? selectedKeys : internal;
  const setSel = (s) => { if (selectedKeys === undefined) setInternal(s); onSelectionChange && onSelectionChange(s); };
  const toggle = (k) => { const n = new Set(sel); n.has(k) ? n.delete(k) : n.add(k); setSel(n); };
  const allChecked = rows.length > 0 && rows.every((r) => sel.has(r.key));
  const toggleAll = () => setSel(allChecked ? new Set() : new Set(rows.map((r) => r.key)));
  const showSel = selectionMode !== "none";

  const wrap = removeWrapper ? {} : {
    background: "var(--color-content1)", border: "1px solid var(--color-divider)",
    borderRadius: "var(--radius-large)", boxShadow: "var(--shadow-small)", overflow: "hidden",
  };
  const Check = ({ on, onClick }) => (
    <span onClick={(e) => { e.stopPropagation(); onClick(); }} style={{ width: 18, height: 18, borderRadius: 5, cursor: "pointer",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      background: on ? `var(--color-${color})` : "transparent", border: on ? `2px solid var(--color-${color})` : "2px solid var(--color-default-400)" }}>
      {on && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={`var(--color-${color}-foreground)`} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
    </span>
  );

  return (
    <div className={`jn-table ${className}`} style={{ ...wrap, ...style }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", fontSize: "var(--text-small)" }}>
        <thead>
          <tr style={{ background: "var(--color-default-100)" }}>
            {showSel && <th style={{ padding: "12px 16px", width: 40 }}><Check on={allChecked} onClick={toggleAll} /></th>}
            {columns.map((c) => (
              <th key={c.key} style={{ padding: "12px 16px", textAlign: c.align || "left", color: "var(--text-muted)", fontWeight: "var(--fw-semibold)", fontSize: "var(--text-tiny)", textTransform: "uppercase", letterSpacing: ".04em" }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const on = sel.has(r.key);
            return (
              <tr key={r.key} onClick={() => showSel && toggle(r.key)} style={{
                background: on ? "var(--color-primary-flat)" : isStriped && i % 2 ? "var(--color-default-100)" : "transparent",
                cursor: showSel ? "pointer" : "default", transition: "background var(--dur-fast)",
              }}>
                {showSel && <td style={{ padding: "12px 16px" }}><Check on={on} onClick={() => toggle(r.key)} /></td>}
                {columns.map((c) => (
                  <td key={c.key} style={{ padding: "12px 16px", textAlign: c.align || "left", color: "var(--color-foreground)", borderTop: "1px solid var(--color-divider)" }}>{r[c.key]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
