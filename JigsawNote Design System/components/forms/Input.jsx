import React from "react";

const SIZES = {
  sm: { h: 36, px: 10, font: "var(--text-small)", radius: "var(--radius-small)" },
  md: { h: 40, px: 12, font: "var(--text-small)", radius: "var(--radius-medium)" },
  lg: { h: 48, px: 14, font: "var(--text-medium)", radius: "var(--radius-large)" },
};

export function fieldShell({ variant, size, color, isInvalid, isDisabled, focused, hover }) {
  const s = SIZES[size] || SIZES.md;
  const activeColor = isInvalid ? "var(--color-danger)" : `var(--color-${color})`;
  const base = {
    display: "flex", alignItems: "center", gap: 8,
    minHeight: s.h, padding: `0 ${s.px}px`,
    fontFamily: "var(--font-sans)", fontSize: s.font,
    borderRadius: variant === "underlined" ? 0 : s.radius,
    transition: "background var(--dur-base), border-color var(--dur-base), box-shadow var(--dur-base)",
    opacity: isDisabled ? "var(--disabled-opacity)" : 1,
  };
  if (variant === "bordered") {
    base.background = "transparent";
    base.border = `var(--border-medium) solid ${isInvalid ? "var(--color-danger)" : focused ? activeColor : hover ? "var(--color-default-400)" : "var(--color-default-300)"}`;
  } else if (variant === "underlined") {
    base.background = "transparent";
    base.borderBottom = `var(--border-medium) solid ${isInvalid ? "var(--color-danger)" : focused ? activeColor : "var(--color-default-300)"}`;
    base.borderRadius = 0;
  } else if (variant === "faded") {
    base.background = "var(--color-default-100)";
    base.border = `var(--border-medium) solid ${focused ? activeColor : "var(--color-default-200)"}`;
  } else { /* flat */
    base.background = hover || focused ? "var(--color-default-200)" : "var(--color-default-100)";
    base.border = "var(--border-medium) solid transparent";
    if (isInvalid) base.background = "var(--color-danger-flat)";
  }
  return base;
}

export function Input({
  label, placeholder, description, errorMessage, value, defaultValue, onChange,
  type = "text", variant = "flat", color = "primary", size = "md", radius,
  isInvalid = false, isDisabled = false, isRequired = false, isReadOnly = false,
  startContent, endContent, labelPlacement = "outside", className = "", style = {}, ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const shell = fieldShell({ variant, size, color, isInvalid, isDisabled, focused, hover });
  if (radius) shell.borderRadius = { none:"0", sm:"var(--radius-small)", md:"var(--radius-medium)", lg:"var(--radius-large)", full:"var(--radius-full)" }[radius];

  return (
    <div className={`jn-input ${className}`} style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && labelPlacement !== "inside" && (
        <label style={{ fontSize: "var(--text-small)", color: isInvalid ? "var(--color-danger)" : "var(--color-foreground)", fontWeight: "var(--fw-medium)" }}>
          {label}{isRequired && <span style={{ color: "var(--color-danger)" }}> *</span>}
        </label>
      )}
      <div style={shell} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {startContent && <span style={{ display: "inline-flex", color: "var(--text-muted)" }}>{startContent}</span>}
        <input
          type={type} value={value} defaultValue={defaultValue} placeholder={placeholder}
          onChange={onChange} disabled={isDisabled} readOnly={isReadOnly}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            flex: 1, minWidth: 0, height: s.h - 4, border: "none", outline: "none",
            background: "transparent", color: "var(--color-foreground)",
            fontFamily: "inherit", fontSize: "inherit",
          }} {...rest}
        />
        {endContent && <span style={{ display: "inline-flex", color: "var(--text-muted)" }}>{endContent}</span>}
      </div>
      {(description || (isInvalid && errorMessage)) && (
        <span style={{ fontSize: "var(--text-tiny)", color: isInvalid ? "var(--color-danger)" : "var(--text-muted)" }}>
          {isInvalid && errorMessage ? errorMessage : description}
        </span>
      )}
    </div>
  );
}
