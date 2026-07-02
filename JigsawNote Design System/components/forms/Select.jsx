import React from "react";
import { fieldShell } from "./Input.jsx";

/** Select / dropdown. Closed trigger matches Input's shell; opens a floating listbox. */
export function Select({
  label, placeholder = "Select…", description, items = [], value, defaultValue,
  onChange, variant = "flat", color = "primary", size = "md",
  isInvalid = false, isDisabled = false, startContent, className = "", style = {},
}) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue);
  const [hover, setHover] = React.useState(false);
  const sel = value !== undefined ? value : internal;
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h); return () => document.removeEventListener("mousedown", h);
  }, []);
  const shell = fieldShell({ variant, size, color, isInvalid, isDisabled, focused: open, hover });
  const current = items.find((i) => (i.key ?? i.value) === sel);
  const choose = (k) => { if (value === undefined) setInternal(k); onChange && onChange(k); setOpen(false); };

  return (
    <div className={`jn-select ${className}`} ref={ref} style={{ display: "flex", flexDirection: "column", gap: 6, position: "relative", ...style }}>
      {label && <label style={{ fontSize: "var(--text-small)", color: "var(--color-foreground)", fontWeight: "var(--fw-medium)" }}>{label}</label>}
      <div role="button" tabIndex={0} onClick={() => !isDisabled && setOpen(!open)}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ ...shell, cursor: isDisabled ? "not-allowed" : "pointer" }}>
        {startContent && <span style={{ color: "var(--text-muted)", display: "inline-flex" }}>{startContent}</span>}
        <span style={{ flex: 1, color: current ? "var(--color-foreground)" : "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {current ? current.label : placeholder}
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur-base)" }}><path d="m6 9 6 6 6-6" /></svg>
      </div>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 30,
          background: "var(--color-content1)", border: "1px solid var(--color-divider)",
          borderRadius: "var(--radius-medium)", boxShadow: "var(--shadow-large)", padding: 6,
          maxHeight: 240, overflowY: "auto",
        }}>
          {items.map((it) => {
            const k = it.key ?? it.value;
            const active = k === sel;
            return (
              <div key={k} onClick={() => choose(k)} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8,
                padding: "8px 10px", borderRadius: "var(--radius-small)", cursor: "pointer",
                fontSize: "var(--text-small)", color: "var(--color-foreground)",
                background: active ? "var(--color-primary-flat)" : "transparent",
              }} onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = "var(--color-default-200)"; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = "transparent"; }}>
                <span>{it.label}</span>
                {active && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
              </div>
            );
          })}
        </div>
      )}
      {description && <span style={{ fontSize: "var(--text-tiny)", color: "var(--text-muted)" }}>{description}</span>}
    </div>
  );
}
