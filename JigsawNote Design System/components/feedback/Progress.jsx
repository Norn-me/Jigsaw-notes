import React from "react";

const H = { sm: 6, md: 10, lg: 14 };

/** Progress bar. Determinate by value, or isIndeterminate for a sliding sweep. Striped optional. */
export function Progress({
  value = 0, minValue = 0, maxValue = 100, label, showValueLabel = false,
  color = "primary", size = "md", radius = "full", isIndeterminate = false,
  isStriped = false, className = "", style = {},
}) {
  const pct = Math.min(100, Math.max(0, ((value - minValue) / (maxValue - minValue)) * 100));
  const h = H[size] || H.md;
  const rad = radius === "full" ? "var(--radius-full)" : radius === "none" ? "0" : "var(--radius-small)";
  return (
    <div className={`jn-progress ${className}`} style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", ...style }}>
      {(label || showValueLabel) && (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-small)", color: "var(--color-foreground)" }}>
          <span>{label}</span>{showValueLabel && <span style={{ color: "var(--text-muted)" }}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div style={{ height: h, borderRadius: rad, background: "var(--color-default-200)", overflow: "hidden", position: "relative" }}>
        <div style={{
          height: "100%", borderRadius: rad, background: `var(--color-${color})`,
          width: isIndeterminate ? "40%" : `${pct}%`,
          backgroundImage: isStriped ? "linear-gradient(45deg,rgba(255,255,255,.18) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.18) 50%,rgba(255,255,255,.18) 75%,transparent 75%)" : undefined,
          backgroundSize: isStriped ? "16px 16px" : undefined,
          animation: isIndeterminate ? "jn-prog 1.1s var(--ease-in-out) infinite" : undefined,
          transition: "width var(--dur-base) var(--ease-out)",
        }} />
        <style>{`@keyframes jn-prog{0%{left:-40%;position:absolute}100%{left:100%;position:absolute}}`}</style>
      </div>
    </div>
  );
}
