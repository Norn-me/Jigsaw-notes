import React from "react";

const DIM = {
  sm: { w: 36, h: 20, knob: 14 },
  md: { w: 44, h: 24, knob: 18 },
  lg: { w: 52, h: 28, knob: 22 },
};

export function Switch({
  children, isSelected, defaultSelected = false, onValueChange,
  color = "primary", size = "md", isDisabled = false,
  startContent, endContent, thumbIcon, className = "", style = {},
}) {
  const [internal, setInternal] = React.useState(defaultSelected);
  const on = isSelected !== undefined ? isSelected : internal;
  const d = DIM[size] || DIM.md;
  const gap = (d.h - d.knob) / 2;
  const toggle = () => {
    if (isDisabled) return;
    const next = !on;
    if (isSelected === undefined) setInternal(next);
    onValueChange && onValueChange(next);
  };
  return (
    <label className={`jn-switch ${className}`} onClick={toggle} style={{
      display: "inline-flex", alignItems: "center", gap: 8, cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? "var(--disabled-opacity)" : 1, userSelect: "none",
      fontFamily: "var(--font-sans)", fontSize: "var(--text-small)", color: "var(--color-foreground)", ...style,
    }}>
      <span style={{
        width: d.w, height: d.h, borderRadius: "var(--radius-full)", position: "relative", flexShrink: 0,
        background: on ? `var(--color-${color})` : "var(--color-default-300)",
        transition: "background var(--dur-base) var(--ease-out)",
      }}>
        <span style={{
          position: "absolute", top: gap, left: on ? d.w - d.knob - gap : gap,
          width: d.knob, height: d.knob, borderRadius: "50%", background: "#fff",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: d.knob * 0.55, color: on ? `var(--color-${color})` : "var(--color-default-500)",
          boxShadow: "var(--shadow-small)", transition: "left var(--dur-base) var(--ease-out)",
        }}>{thumbIcon || (on ? startContent : endContent)}</span>
      </span>
      {children && <span>{children}</span>}
    </label>
  );
}
