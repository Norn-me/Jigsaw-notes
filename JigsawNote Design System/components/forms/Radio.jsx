import React from "react";

const DOT = { sm: 16, md: 20, lg: 24 };

export function Radio({
  children, value, isSelected, onSelect, description,
  color = "primary", size = "md", isDisabled = false, className = "", style = {},
}) {
  const d = DOT[size] || DOT.md;
  return (
    <label className={`jn-radio ${className}`} onClick={() => !isDisabled && onSelect && onSelect(value)} style={{
      display: "inline-flex", alignItems: "flex-start", gap: 8, cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? "var(--disabled-opacity)" : 1, fontFamily: "var(--font-sans)",
      fontSize: "var(--text-small)", color: "var(--color-foreground)", userSelect: "none", ...style,
    }}>
      <span style={{
        width: d, height: d, flexShrink: 0, borderRadius: "50%", marginTop: 1,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        border: `2px solid ${isSelected ? `var(--color-${color})` : "var(--color-default-400)"}`,
        transition: "border-color var(--dur-fast)",
      }}>
        <span style={{
          width: d * 0.5, height: d * 0.5, borderRadius: "50%",
          background: `var(--color-${color})`,
          transform: isSelected ? "scale(1)" : "scale(0)",
          transition: "transform var(--dur-fast) var(--ease-out)",
        }} />
      </span>
      {children && (
        <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span>{children}</span>
          {description && <span style={{ fontSize: "var(--text-tiny)", color: "var(--text-muted)" }}>{description}</span>}
        </span>
      )}
    </label>
  );
}

/** Radio group — one selection across Radio children. */
export function RadioGroup({
  children, label, description, orientation = "vertical", value, defaultValue,
  onChange, color = "primary", size = "md", isDisabled = false, className = "", style = {},
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = value !== undefined ? value : internal;
  const select = (v) => { if (value === undefined) setInternal(v); onChange && onChange(v); };
  return (
    <div className={`jn-radio-group ${className}`} style={{ display: "flex", flexDirection: "column", gap: 8, ...style }}>
      {label && <span style={{ fontSize: "var(--text-small)", color: "var(--text-muted)" }}>{label}</span>}
      <div style={{ display: "flex", flexDirection: orientation === "horizontal" ? "row" : "column", flexWrap: "wrap", gap: orientation === "horizontal" ? 16 : 10 }}>
        {React.Children.map(children, (child) => child && React.cloneElement(child, {
          color: child.props.color || color, size: child.props.size || size,
          isDisabled: isDisabled || child.props.isDisabled,
          isSelected: selected === child.props.value, onSelect: select,
        }))}
      </div>
      {description && <span style={{ fontSize: "var(--text-tiny)", color: "var(--text-muted)" }}>{description}</span>}
    </div>
  );
}
