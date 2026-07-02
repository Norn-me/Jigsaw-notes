import React from "react";

const BOX = { sm: 16, md: 20, lg: 24 };
const RAD = { none: 0, sm: 4, md: 6, lg: 7, full: "50%" };

export function Checkbox({
  children, isSelected, defaultSelected = false, onValueChange, value,
  color = "primary", size = "md", radius = "sm", isDisabled = false,
  isIndeterminate = false, lineThrough = false, className = "", style = {},
}) {
  const [internal, setInternal] = React.useState(defaultSelected);
  const checked = isSelected !== undefined ? isSelected : internal;
  const b = BOX[size] || BOX.md;
  const toggle = () => {
    if (isDisabled) return;
    const next = !checked;
    if (isSelected === undefined) setInternal(next);
    onValueChange && onValueChange(next);
  };
  return (
    <label className={`jn-checkbox ${className}`} onClick={toggle} style={{
      display: "inline-flex", alignItems: "center", gap: 8, cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? "var(--disabled-opacity)" : 1, fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)", color: "var(--color-foreground)", userSelect: "none", ...style,
    }}>
      <span style={{
        width: b, height: b, flexShrink: 0, borderRadius: RAD[radius],
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: (checked || isIndeterminate) ? `var(--color-${color})` : "transparent",
        border: (checked || isIndeterminate) ? `2px solid var(--color-${color})` : "2px solid var(--color-default-400)",
        transition: "background var(--dur-fast), border-color var(--dur-fast), transform var(--dur-fast)",
        transform: (checked || isIndeterminate) ? "scale(1)" : "scale(1)",
      }}>
        {isIndeterminate ? (
          <span style={{ width: b * 0.5, height: 2, background: `var(--color-${color}-foreground)`, borderRadius: 2 }} />
        ) : checked ? (
          <svg width={b * 0.7} height={b * 0.7} viewBox="0 0 24 24" fill="none" stroke={`var(--color-${color}-foreground)`} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : null}
      </span>
      {children && <span style={{ textDecoration: lineThrough && checked ? "line-through" : "none", color: lineThrough && checked ? "var(--text-muted)" : "inherit" }}>{children}</span>}
    </label>
  );
}
