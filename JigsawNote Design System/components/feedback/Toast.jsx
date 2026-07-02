import React from "react";

const GLYPH = {
  default: null, primary: "info", secondary: "info",
  success: "check", warning: "warn", danger: "error",
};

/** Toast — transient notification card. Render inside a ToastViewport (fixed corner stack). */
export function Toast({ title, description, color = "default", icon, onClose, className = "", style = {} }) {
  const c = `var(--color-${color})`;
  const paths = {
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
    warn: <><path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6A2 2 0 0 0 22 18L13.7 3.9a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4M12 17h.01" /></>,
    error: <><circle cx="12" cy="12" r="9" /><path d="M15 9l-6 6M9 9l6 6" /></>,
  }[GLYPH[color]];
  return (
    <div className={`jn-toast ${className}`} style={{
      display: "flex", alignItems: "flex-start", gap: 12, minWidth: 300, maxWidth: 420,
      padding: "14px 16px", borderRadius: "var(--radius-large)",
      background: "var(--color-content1)", color: "var(--color-foreground)",
      border: "1px solid var(--color-divider)", boxShadow: "var(--shadow-large)",
      fontFamily: "var(--font-sans)", animation: "jn-toast-in .28s var(--ease-out)", ...style,
    }}>
      {paths && (
        <span style={{ display: "inline-flex", marginTop: 1, width: 34, height: 34, borderRadius: "var(--radius-medium)", alignItems: "center", justifyContent: "center", background: `var(--color-${color}-flat)`, color: c, flexShrink: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
        </span>
      )}
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontSize: "var(--text-small)", fontWeight: "var(--fw-semibold)" }}>{title}</div>}
        {description && <div style={{ fontSize: "var(--text-small)", color: "var(--text-muted)", marginTop: 2 }}>{description}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} style={{ border: "none", background: "transparent", cursor: "pointer", color: "var(--text-muted)", padding: 2 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      )}
      <style>{`@keyframes jn-toast-in{from{opacity:0;transform:translateY(10px)}}`}</style>
    </div>
  );
}

/** Fixed-position stack for Toasts. */
export function ToastViewport({ children, placement = "bottom-right" }) {
  const p = {
    "bottom-right": { bottom: 20, right: 20 }, "bottom-left": { bottom: 20, left: 20 },
    "top-right": { top: 20, right: 20 }, "top-left": { top: 20, left: 20 },
  }[placement];
  return <div style={{ position: "fixed", zIndex: 100, display: "flex", flexDirection: "column", gap: 10, ...p }}>{children}</div>;
}
