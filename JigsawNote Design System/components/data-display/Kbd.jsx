import React from "react";

const NAMED = {
  command: "⌘", shift: "⇧", ctrl: "⌃", option: "⌥", alt: "⌥", enter: "↵",
  delete: "⌫", escape: "esc", tab: "⇥", capslock: "⇪", up: "↑", down: "↓", left: "←", right: "→", space: "␣",
};

/** Keyboard key display. Pass named modifier keys plus a literal character. */
export function Kbd({ children, keys = [], className = "", style = {} }) {
  const list = Array.isArray(keys) ? keys : [keys];
  return (
    <kbd className={`jn-kbd ${className}`} style={{
      display: "inline-flex", alignItems: "center", gap: 3,
      fontFamily: "var(--font-sans)", fontSize: "var(--text-tiny)",
      padding: "3px 7px", minHeight: 22, borderRadius: "var(--radius-small)",
      background: "var(--color-default-100)", color: "var(--color-default-foreground)",
      border: "1px solid var(--color-default-300)", boxShadow: "0 1px 0 var(--color-default-300)", ...style,
    }}>
      {list.map((k, i) => <span key={i} style={{ fontSize: "1.05em" }}>{NAMED[k] || k}</span>)}
      {children && <span>{children}</span>}
    </kbd>
  );
}
