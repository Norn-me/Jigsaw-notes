import React from "react";

const ICONS = {
  primary: "info", secondary: "info", default: "info",
  success: "check", warning: "warn", danger: "error",
};
function Glyph({ kind, color }) {
  const stroke = color === "default" ? "var(--color-default-foreground)" : `var(--color-${color})`;
  const p = {
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
    warn: <><path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6A2 2 0 0 0 22 18L13.7 3.9a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4M12 17h.01" /></>,
    error: <><circle cx="12" cy="12" r="9" /><path d="M15 9l-6 6M9 9l6 6" /></>,
  }[ICONS[color]];
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{p}</svg>;
}

/** Alert — inline status banner. variant flat (default) / solid / bordered / faded. */
export function Alert({
  title, description, children, color = "default", variant = "flat",
  icon, onClose, isClosable = false, className = "", style = {},
}) {
  const c = `var(--color-${color})`;
  let bg, text, border = "1px solid transparent";
  if (variant === "solid") { bg = c; text = `var(--color-${color}-foreground)`; }
  else if (variant === "bordered") { bg = "transparent"; text = "var(--color-foreground)"; border = `1px solid ${c}`; }
  else if (variant === "faded") { bg = "var(--color-content1)"; text = "var(--color-foreground)"; border = "1px solid var(--color-divider)"; }
  else { bg = color === "default" ? "var(--color-default-flat)" : `var(--color-${color}-flat)`; text = "var(--color-foreground)"; }

  return (
    <div className={`jn-alert ${className}`} role="alert" style={{
      display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px",
      borderRadius: "var(--radius-medium)", background: bg, color: text, border,
      fontFamily: "var(--font-sans)", ...style,
    }}>
      <span style={{ display: "inline-flex", marginTop: 1, color: variant === "solid" ? `var(--color-${color}-foreground)` : undefined }}>
        {icon || <Glyph kind={color} color={variant === "solid" ? "default" : color} />}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontSize: "var(--text-small)", fontWeight: "var(--fw-semibold)" }}>{title}</div>}
        {(description || children) && <div style={{ fontSize: "var(--text-small)", opacity: 0.85, marginTop: title ? 2 : 0 }}>{description || children}</div>}
      </div>
      {isClosable && (
        <button onClick={onClose} style={{ border: "none", background: "transparent", cursor: "pointer", color: "currentColor", opacity: 0.6, padding: 2 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      )}
    </div>
  );
}
