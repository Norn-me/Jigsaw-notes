import React from "react";

/** Badge — small count / status marker overlaid on a child (icon, avatar, button). */
export function Badge({
  children, content, color = "primary", variant = "solid", size = "md",
  placement = "top-right", isDot = false, showOutline = true, isInvisible = false,
  className = "", style = {},
}) {
  const dim = size === "sm" ? 16 : size === "lg" ? 22 : 18;
  const c = `var(--color-${color})`;
  const fg = `var(--color-${color}-foreground)`;
  const pos = {
    "top-right": { top: 0, right: 0, transform: "translate(40%,-40%)" },
    "top-left": { top: 0, left: 0, transform: "translate(-40%,-40%)" },
    "bottom-right": { bottom: 0, right: 0, transform: "translate(40%,40%)" },
    "bottom-left": { bottom: 0, left: 0, transform: "translate(-40%,40%)" },
  }[placement];
  const badgeStyle = {
    position: "absolute", ...pos, zIndex: 2,
    minWidth: isDot ? 10 : dim, height: isDot ? 10 : dim,
    padding: isDot ? 0 : "0 5px", borderRadius: "var(--radius-full)",
    display: isInvisible ? "none" : "inline-flex", alignItems: "center", justifyContent: "center",
    fontSize: "var(--text-tiny)", fontWeight: "var(--fw-semibold)", lineHeight: 1,
    background: variant === "flat" ? `var(--color-${color}-flat)` : c,
    color: variant === "flat" ? `var(--color-${color}-600)` : fg,
    border: showOutline ? "2px solid var(--color-background)" : "none",
  };
  return (
    <span className={`jn-badge ${className}`} style={{ position: "relative", display: "inline-flex", ...style }}>
      {children}
      <span style={badgeStyle}>{isDot ? null : content}</span>
    </span>
  );
}
