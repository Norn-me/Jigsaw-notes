import React from "react";

/** Divider — thin separator line, horizontal (default) or vertical. */
export function Divider({ orientation = "horizontal", className = "", style = {} }) {
  const v = orientation === "vertical";
  return (
    <div role="separator" className={`jn-divider ${className}`} style={{
      background: "var(--color-divider)", flexShrink: 0, border: "none",
      width: v ? 1 : "100%", height: v ? "100%" : 1,
      alignSelf: v ? "stretch" : undefined, ...style,
    }} />
  );
}
