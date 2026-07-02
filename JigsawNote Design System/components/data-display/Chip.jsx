import React from "react";

const SZ = {
  sm: { h: 20, px: 8, font: "var(--text-tiny)", gap: 4 },
  md: { h: 26, px: 10, font: "var(--text-small)", gap: 6 },
  lg: { h: 32, px: 12, font: "var(--text-medium)", gap: 6 },
};

function chipColors(variant, color) {
  const c = `var(--color-${color})`;
  const fg = `var(--color-${color}-foreground)`;
  const flat = `var(--color-${color}-flat)`;
  const text = color === "default" ? "var(--color-default-foreground)" : `var(--color-${color}-600)`;
  switch (variant) {
    case "bordered": return { background: "transparent", color: color === "default" ? "var(--color-default-foreground)" : c, border: `var(--border-medium) solid ${c}` };
    case "flat": return { background: flat, color: text, border: "var(--border-medium) solid transparent" };
    case "faded": return { background: "var(--color-default-100)", color: "var(--color-default-foreground)", border: "var(--border-medium) solid var(--color-default-300)" };
    case "light": return { background: "transparent", color: color === "default" ? "var(--color-default-foreground)" : c, border: "var(--border-medium) solid transparent" };
    case "dot": return { background: "transparent", color: "var(--color-foreground)", border: "var(--border-medium) solid var(--color-default-300)" };
    case "shadow": return { background: c, color: fg, boxShadow: `0 4px 12px color-mix(in srgb, ${c} 45%, transparent)`, border: "var(--border-medium) solid transparent" };
    default: return { background: c, color: fg, border: "var(--border-medium) solid transparent" };
  }
}

/** Chip / tag — compact status or filter pill. Supports 7 variants, close button, start/end content, dot. */
export function Chip({
  children, variant = "solid", color = "default", size = "md", radius = "full",
  startContent, endContent, onClose, avatar, className = "", style = {},
}) {
  const s = SZ[size] || SZ.md;
  const cs = chipColors(variant, color);
  const rad = { none: "0", sm: "var(--radius-small)", md: "var(--radius-medium)", lg: "var(--radius-large)", full: "var(--radius-full)" }[radius];
  return (
    <span className={`jn-chip ${className}`} style={{
      display: "inline-flex", alignItems: "center", gap: s.gap, height: s.h,
      padding: avatar ? `0 ${s.px}px 0 2px` : `0 ${s.px}px`, borderRadius: rad,
      fontFamily: "var(--font-sans)", fontSize: s.font, fontWeight: "var(--fw-medium)",
      whiteSpace: "nowrap", ...cs, ...style,
    }}>
      {variant === "dot" && <span style={{ width: 8, height: 8, borderRadius: "50%", background: `var(--color-${color})` }} />}
      {avatar}
      {startContent}
      {children}
      {endContent}
      {onClose && (
        <button onClick={onClose} style={{ display: "inline-flex", border: "none", background: "transparent", cursor: "pointer", padding: 0, marginLeft: 1, color: "currentColor", opacity: 0.7 }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      )}
    </span>
  );
}
