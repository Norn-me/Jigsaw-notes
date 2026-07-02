import React from "react";
import { Checkbox } from "./Checkbox.jsx";

/** Groups related checkboxes with a label, layout (vertical/horizontal) and optional description. */
export function CheckboxGroup({
  children, label, description, orientation = "vertical", value, defaultValue = [],
  onChange, color = "primary", size = "md", isDisabled = false, className = "", style = {},
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const selected = value !== undefined ? value : internal;
  const setSel = (val, on) => {
    const next = on ? [...selected, val] : selected.filter((v) => v !== val);
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  };
  return (
    <div className={`jn-checkbox-group ${className}`} style={{ display: "flex", flexDirection: "column", gap: 8, ...style }}>
      {label && <span style={{ fontSize: "var(--text-small)", color: "var(--text-muted)" }}>{label}</span>}
      <div style={{ display: "flex", flexDirection: orientation === "horizontal" ? "row" : "column", flexWrap: "wrap", gap: orientation === "horizontal" ? 16 : 10 }}>
        {React.Children.map(children, (child) => {
          if (!child) return child;
          const v = child.props.value;
          return React.cloneElement(child, {
            color: child.props.color || color, size: child.props.size || size,
            isDisabled: isDisabled || child.props.isDisabled,
            isSelected: selected.includes(v),
            onValueChange: (on) => setSel(v, on),
          });
        })}
      </div>
      {description && <span style={{ fontSize: "var(--text-tiny)", color: "var(--text-muted)" }}>{description}</span>}
    </div>
  );
}
