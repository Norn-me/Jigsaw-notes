import React from "react";

const SZ = { sm: "var(--text-tiny)", md: "var(--text-small)", lg: "var(--text-medium)" };

/** Inline code snippet with a soft tinted background and mono font. */
export function Code({ children, color = "default", size = "md", className = "", style = {} }) {
  const flat = color === "default" ? "var(--color-default-flat)" : `var(--color-${color}-flat)`;
  const text = color === "default" ? "var(--color-default-foreground)" : `var(--color-${color}-600)`;
  return (
    <code className={`jn-code ${className}`} style={{
      fontFamily: "var(--font-mono)", fontSize: SZ[size], background: flat, color: text,
      padding: "2px 7px", borderRadius: "var(--radius-small)",
      border: "1px solid color-mix(in srgb, currentColor 18%, transparent)", ...style,
    }}>{children}</code>
  );
}
