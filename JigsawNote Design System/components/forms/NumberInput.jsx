import React from "react";
import { fieldShell } from "./Input.jsx";

/** Numeric input with stepper buttons. */
export function NumberInput({
  label, description, value, defaultValue = 0, onChange, min, max, step = 1,
  variant = "flat", color = "primary", size = "md", isDisabled = false,
  formatOptions, className = "", style = {},
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const [hover, setHover] = React.useState(false);
  const val = value !== undefined ? value : internal;
  const set = (n) => {
    let x = n;
    if (min !== undefined) x = Math.max(min, x);
    if (max !== undefined) x = Math.min(max, x);
    if (value === undefined) setInternal(x);
    onChange && onChange(x);
  };
  const shell = fieldShell({ variant, size, color, isInvalid: false, isDisabled, focused: false, hover });
  const btn = (dir) => (
    <button type="button" tabIndex={-1} onClick={() => set(val + dir * step)} disabled={isDisabled}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 22, height: 18,
        border: "none", background: "transparent", color: "var(--text-muted)", cursor: "pointer", padding: 0 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir > 0 ? <path d="m6 15 6-6 6 6" /> : <path d="m6 9 6 6 6-6" />}</svg>
    </button>
  );
  return (
    <div className={`jn-number-input ${className}`} style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && <label style={{ fontSize: "var(--text-small)", color: "var(--color-foreground)", fontWeight: "var(--fw-medium)" }}>{label}</label>}
      <div style={shell} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <input type="text" inputMode="numeric" value={val} disabled={isDisabled}
          onChange={(e) => { const n = Number(e.target.value.replace(/[^0-9.-]/g, "")); if (!Number.isNaN(n)) set(n); }}
          style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
            color: "var(--color-foreground)", fontFamily: "inherit", fontSize: "inherit" }} />
        <span style={{ display: "flex", flexDirection: "column" }}>{btn(1)}{btn(-1)}</span>
      </div>
      {description && <span style={{ fontSize: "var(--text-tiny)", color: "var(--text-muted)" }}>{description}</span>}
    </div>
  );
}
