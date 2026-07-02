import React from "react";

const D = { sm: 20, md: 28, lg: 38 };

/** Spinner — indeterminate loading indicator (dual-ring). */
export function Spinner({ label, color = "primary", size = "md", labelColor, className = "", style = {} }) {
  const d = D[size] || D.md;
  const c = `var(--color-${color})`;
  return (
    <div className={`jn-spinner ${className}`} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, ...style }}>
      <span style={{ position: "relative", width: d, height: d, display: "inline-block" }}>
        <span style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `3px solid var(--color-default-300)` }} />
        <span style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "3px solid transparent", borderTopColor: c, animation: "jn-sp 0.7s linear infinite" }} />
        <style>{`@keyframes jn-sp{to{transform:rotate(360deg)}}`}</style>
      </span>
      {label && <span style={{ fontSize: "var(--text-small)", color: labelColor ? `var(--color-${labelColor})` : "var(--text-muted)" }}>{label}</span>}
    </div>
  );
}
