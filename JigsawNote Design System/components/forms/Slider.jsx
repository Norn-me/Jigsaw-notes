import React from "react";

const TRACK = { sm: 4, md: 6, lg: 8 };
const THUMB = { sm: 16, md: 20, lg: 24 };

/** Slider — single value. Green fill, draggable thumb, optional label & value display. */
export function Slider({
  label, value, defaultValue = 0, onChange, minValue = 0, maxValue = 100, step = 1,
  color = "primary", size = "md", showValue = true, isDisabled = false,
  startContent, endContent, className = "", style = {},
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const val = value !== undefined ? value : internal;
  const ref = React.useRef(null);
  const pct = ((val - minValue) / (maxValue - minValue)) * 100;
  const t = TRACK[size] || TRACK.md, th = THUMB[size] || THUMB.md;

  const setFromClientX = (clientX) => {
    if (!ref.current || isDisabled) return;
    const r = ref.current.getBoundingClientRect();
    let p = (clientX - r.left) / r.width;
    p = Math.min(1, Math.max(0, p));
    let v = minValue + p * (maxValue - minValue);
    v = Math.round(v / step) * step;
    v = Math.min(maxValue, Math.max(minValue, v));
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const onDown = (e) => {
    if (isDisabled) return;
    setFromClientX(e.clientX);
    const move = (ev) => setFromClientX(ev.clientX);
    const up = () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
    window.addEventListener("mousemove", move); window.addEventListener("mouseup", up);
  };

  return (
    <div className={`jn-slider ${className}`} style={{ display: "flex", flexDirection: "column", gap: 8, opacity: isDisabled ? "var(--disabled-opacity)" : 1, ...style }}>
      {(label || showValue) && (
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-small)", color: "var(--color-foreground)" }}>
          <span>{label}</span>{showValue && <span style={{ color: "var(--text-muted)" }}>{val}</span>}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {startContent && <span style={{ color: "var(--text-muted)", display: "inline-flex" }}>{startContent}</span>}
        <div ref={ref} onMouseDown={onDown} style={{ position: "relative", flex: 1, height: th, display: "flex", alignItems: "center", cursor: isDisabled ? "not-allowed" : "pointer" }}>
          <div style={{ position: "absolute", left: 0, right: 0, height: t, borderRadius: "var(--radius-full)", background: "var(--color-default-300)" }} />
          <div style={{ position: "absolute", left: 0, width: `${pct}%`, height: t, borderRadius: "var(--radius-full)", background: `var(--color-${color})` }} />
          <div style={{ position: "absolute", left: `calc(${pct}% - ${th / 2}px)`, width: th, height: th, borderRadius: "50%", background: "#fff", boxShadow: "var(--shadow-medium)", border: `2px solid var(--color-${color})` }} />
        </div>
        {endContent && <span style={{ color: "var(--text-muted)", display: "inline-flex" }}>{endContent}</span>}
      </div>
    </div>
  );
}
