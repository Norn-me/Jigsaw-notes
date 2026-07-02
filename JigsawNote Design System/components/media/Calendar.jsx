import React from "react";

const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

/** Calendar — single-date month grid with prev/next navigation. */
export function Calendar({ value, defaultValue, onChange, color = "primary", className = "", style = {} }) {
  const today = new Date();
  const initial = defaultValue ? new Date(defaultValue) : today;
  const [selected, setSelected] = React.useState(value ? new Date(value) : (defaultValue ? new Date(defaultValue) : null));
  const [view, setView] = React.useState(new Date(initial.getFullYear(), initial.getMonth(), 1));
  const sel = value ? new Date(value) : selected;

  const y = view.getFullYear(), m = view.getMonth();
  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const pick = (d) => { const dt = new Date(y, m, d); if (value === undefined) setSelected(dt); onChange && onChange(dt); };
  const same = (d, ref) => ref && ref.getFullYear() === y && ref.getMonth() === m && ref.getDate() === d;
  const nav = (dir) => setView(new Date(y, m + dir, 1));

  const NavBtn = ({ dir, children }) => (
    <button onClick={() => nav(dir)} style={{ width: 30, height: 30, borderRadius: "var(--radius-medium)", border: "none",
      background: "transparent", color: "var(--text-muted)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
      onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-default-200)"}
      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>{children}</button>
  );

  return (
    <div className={`jn-calendar ${className}`} style={{
      display: "inline-flex", flexDirection: "column", gap: 8, padding: 14, width: 280,
      background: "var(--color-content1)", border: "1px solid var(--color-divider)",
      borderRadius: "var(--radius-large)", boxShadow: "var(--shadow-medium)",
      fontFamily: "var(--font-sans)", ...style,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <NavBtn dir={-1}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg></NavBtn>
        <span style={{ fontSize: "var(--text-small)", fontWeight: "var(--fw-semibold)", color: "var(--color-foreground)" }}>{MONTHS[m]} {y}</span>
        <NavBtn dir={1}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg></NavBtn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2 }}>
        {DOW.map((d) => <div key={d} style={{ textAlign: "center", fontSize: "var(--text-tiny)", color: "var(--text-subtle)", padding: "4px 0" }}>{d}</div>)}
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const isSel = same(d, sel);
          const isToday = same(d, today);
          return (
            <button key={i} onClick={() => pick(d)} style={{
              height: 32, borderRadius: "var(--radius-medium)", border: "none", cursor: "pointer",
              fontSize: "var(--text-small)", fontFamily: "inherit",
              background: isSel ? `var(--color-${color})` : "transparent",
              color: isSel ? `var(--color-${color}-foreground)` : "var(--color-foreground)",
              fontWeight: isSel || isToday ? "var(--fw-semibold)" : "var(--fw-regular)",
              outline: isToday && !isSel ? `1px solid var(--color-${color})` : "none",
              transition: "background var(--dur-fast)",
            }} onMouseEnter={(e) => { if (!isSel) e.currentTarget.style.background = "var(--color-default-200)"; }}
              onMouseLeave={(e) => { if (!isSel) e.currentTarget.style.background = "transparent"; }}>{d}</button>
          );
        })}
      </div>
    </div>
  );
}
