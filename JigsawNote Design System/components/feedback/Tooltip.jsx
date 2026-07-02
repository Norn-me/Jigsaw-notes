import React from "react";

/** Tooltip — hover/focus popover anchored to its child. */
export function Tooltip({
  children, content, placement = "top", color = "default", showArrow = true,
  delay = 100, className = "", style = {},
}) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef();
  const show = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };
  const bg = color === "default" ? "var(--color-content1)" : `var(--color-${color})`;
  const fg = color === "default" ? "var(--color-foreground)" : `var(--color-${color}-foreground)`;
  const border = color === "default" ? "1px solid var(--color-divider)" : "none";

  const pos = {
    top: { bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: 8 },
    bottom: { top: "100%", left: "50%", transform: "translateX(-50%)", marginTop: 8 },
    left: { right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: 8 },
    right: { left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: 8 },
  }[placement];
  const arrowPos = {
    top: { top: "100%", left: "50%", marginLeft: -4, marginTop: -4 },
    bottom: { bottom: "100%", left: "50%", marginLeft: -4, marginBottom: -4 },
    left: { left: "100%", top: "50%", marginTop: -4, marginLeft: -4 },
    right: { right: "100%", top: "50%", marginTop: -4, marginRight: -4 },
  }[placement];

  return (
    <span className={`jn-tooltip ${className}`} style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {open && (
        <span role="tooltip" style={{
          position: "absolute", ...pos, zIndex: 50, whiteSpace: "nowrap",
          background: bg, color: fg, border, boxShadow: "var(--shadow-large)",
          padding: "6px 10px", borderRadius: "var(--radius-medium)",
          fontFamily: "var(--font-sans)", fontSize: "var(--text-tiny)", fontWeight: "var(--fw-medium)",
          animation: "jn-tt 0.14s var(--ease-out)", ...style,
        }}>
          {content}
          {showArrow && <span style={{ position: "absolute", ...arrowPos, width: 8, height: 8, background: bg, borderRight: border, borderBottom: border, transform: "rotate(45deg)" }} />}
          <style>{`@keyframes jn-tt{from{opacity:0;transform:scale(.92) translateX(-50%)}}`}</style>
        </span>
      )}
    </span>
  );
}
