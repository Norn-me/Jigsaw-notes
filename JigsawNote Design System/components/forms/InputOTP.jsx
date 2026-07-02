import React from "react";

const SZ = { sm: 40, md: 48, lg: 56 };

/** One-time-password field — a row of single-character cells with a caret on the active cell. */
export function InputOTP({
  length = 4, value, defaultValue = "", onChange, variant = "bordered",
  color = "primary", size = "md", isPassword = false, className = "", style = {},
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const val = value !== undefined ? value : internal;
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef(null);
  const s = SZ[size] || SZ.md;
  const set = (v) => { const nv = v.slice(0, length); if (value === undefined) setInternal(nv); onChange && onChange(nv); };
  const activeIdx = Math.min(val.length, length - 1);

  return (
    <div className={`jn-input-otp ${className}`} style={{ display: "inline-flex", gap: 10, position: "relative", ...style }} onClick={() => ref.current && ref.current.focus()}>
      <input ref={ref} value={val} inputMode="numeric" onChange={(e) => set(e.target.value.replace(/[^0-9]/g, ""))}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: 1, height: 1 }} />
      {Array.from({ length }).map((_, i) => {
        const filled = i < val.length;
        const isActive = focused && i === activeIdx;
        const char = filled ? (isPassword ? "•" : val[i]) : "";
        return (
          <div key={i} style={{
            width: s, height: s, borderRadius: "var(--radius-medium)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "var(--text-large)", fontWeight: "var(--fw-semibold)", color: "var(--color-foreground)",
            background: variant === "flat" ? "var(--color-default-100)" : "transparent",
            border: `var(--border-medium) solid ${isActive ? `var(--color-${color})` : "var(--color-default-300)"}`,
            boxShadow: isActive ? `0 0 0 3px color-mix(in srgb, var(--color-${color}) 25%, transparent)` : "none",
            transition: "border-color var(--dur-base), box-shadow var(--dur-base)",
          }}>{char || (isActive && <span style={{ width: 2, height: s * 0.4, background: `var(--color-${color})`, animation: "jn-otp-blink 1s steps(2) infinite" }} />)}
            <style>{`@keyframes jn-otp-blink{50%{opacity:0}}`}</style>
          </div>
        );
      })}
    </div>
  );
}
