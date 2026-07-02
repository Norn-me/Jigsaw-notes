import React from "react";

const SZ = { sm: 32, md: 40, lg: 56 };
const RAD = { none: "0", sm: "var(--radius-small)", md: "var(--radius-medium)", lg: "var(--radius-large)", full: "9999px" };

function initials(name = "") {
  return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

/** Avatar — image, initials, or icon fallback. Optional colored ring (isBordered). */
export function Avatar({
  src, name, icon, size = "md", radius = "full", color = "default",
  isBordered = false, className = "", style = {}, ...rest
}) {
  const [err, setErr] = React.useState(false);
  const d = SZ[size] || SZ.md;
  const showImg = src && !err;
  return (
    <div className={`jn-avatar ${className}`} style={{
      width: d, height: d, borderRadius: RAD[radius], flexShrink: 0, overflow: "hidden",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      background: showImg ? "transparent" : "var(--color-default-200)",
      color: color === "default" ? "var(--color-default-foreground)" : `var(--color-${color}-foreground)`,
      boxShadow: isBordered ? `0 0 0 2px var(--color-background), 0 0 0 4px var(--color-${color === "default" ? "default-400" : color})` : "none",
      fontFamily: "var(--font-sans)", fontSize: d * 0.4, fontWeight: "var(--fw-medium)", userSelect: "none",
      ...style,
    }} {...rest}>
      {showImg ? <img src={src} alt={name || ""} onError={() => setErr(true)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        : name ? initials(name) : icon || (
        <svg width={d * 0.6} height={d * 0.6} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5Z" /></svg>
      )}
    </div>
  );
}

/** Overlapping stack of avatars with an optional +N surplus chip. */
export function AvatarGroup({ children, max = 5, total, size = "md", className = "", style = {} }) {
  const items = React.Children.toArray(children);
  const shown = items.slice(0, max);
  const extra = (total ?? items.length) - shown.length;
  const d = SZ[size] || SZ.md;
  return (
    <div className={`jn-avatar-group ${className}`} style={{ display: "inline-flex", alignItems: "center", ...style }}>
      {shown.map((c, i) => (
        <span key={i} style={{ marginLeft: i === 0 ? 0 : -d * 0.3, borderRadius: "50%", boxShadow: "0 0 0 2px var(--color-background)" }}>
          {React.cloneElement(c, { size })}
        </span>
      ))}
      {extra > 0 && (
        <span style={{ marginLeft: -d * 0.3, width: d, height: d, borderRadius: "50%", boxShadow: "0 0 0 2px var(--color-background)",
          display: "inline-flex", alignItems: "center", justifyContent: "center", background: "var(--color-default-300)",
          color: "var(--color-default-foreground)", fontSize: d * 0.34, fontWeight: "var(--fw-medium)" }}>+{extra}</span>
      )}
    </div>
  );
}
