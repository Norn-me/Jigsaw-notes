import React from "react";

const PAD = { sm: "6px 10px", md: "8px 14px", lg: "10px 18px" };
const FONT = { sm: "var(--text-small)", md: "var(--text-small)", lg: "var(--text-medium)" };

/** Tabs — segmented navigation. items=[{key,title,content}]. variant solid/underlined/bordered/light. */
export function Tabs({
  items = [], selectedKey, defaultSelectedKey, onSelectionChange,
  variant = "solid", color = "primary", size = "md", radius = "md",
  fullWidth = false, isDisabled = false, className = "", style = {},
}) {
  const [internal, setInternal] = React.useState(defaultSelectedKey ?? items[0]?.key);
  const sel = selectedKey !== undefined ? selectedKey : internal;
  const select = (k) => { if (selectedKey === undefined) setInternal(k); onSelectionChange && onSelectionChange(k); };
  const rad = { none: "0", sm: "var(--radius-small)", md: "var(--radius-medium)", lg: "var(--radius-large)", full: "var(--radius-full)" }[radius];

  const isUnderlined = variant === "underlined";
  const listStyle = {
    display: "inline-flex", gap: isUnderlined ? 4 : 4, padding: isUnderlined ? 0 : 4,
    width: fullWidth ? "100%" : undefined,
    background: isUnderlined || variant === "light" ? "transparent" : "var(--color-default-100)",
    borderRadius: rad,
    borderBottom: isUnderlined ? "1px solid var(--color-divider)" : "none",
  };

  return (
    <div className={`jn-tabs ${className}`} style={{ ...style }}>
      <div role="tablist" style={listStyle}>
        {items.map((it) => {
          const active = it.key === sel;
          const base = {
            position: "relative", flex: fullWidth ? 1 : undefined, textAlign: "center",
            padding: PAD[size], borderRadius: isUnderlined ? 0 : rad, border: "none", cursor: isDisabled || it.isDisabled ? "not-allowed" : "pointer",
            fontFamily: "var(--font-sans)", fontSize: FONT[size], fontWeight: "var(--fw-medium)",
            background: "transparent", color: active ? undefined : "var(--text-muted)",
            transition: "color var(--dur-base), background var(--dur-base)",
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
          };
          if (active) {
            if (isUnderlined) { base.color = `var(--color-${color})`; }
            else if (variant === "bordered") { base.background = "var(--color-content1)"; base.color = "var(--color-foreground)"; base.boxShadow = "var(--shadow-small)"; base.border = "1px solid var(--color-divider)"; }
            else if (variant === "light") { base.background = `var(--color-${color}-flat)`; base.color = `var(--color-${color}-600)`; }
            else { base.background = color === "default" ? "var(--color-content1)" : `var(--color-${color})`; base.color = color === "default" ? "var(--color-foreground)" : `var(--color-${color}-foreground)`; base.boxShadow = "var(--shadow-small)"; }
          }
          return (
            <button key={it.key} role="tab" onClick={() => !(isDisabled || it.isDisabled) && select(it.key)} style={base}>
              {it.startContent}{it.title}
              {isUnderlined && active && <span style={{ position: "absolute", left: 8, right: 8, bottom: -1, height: 2, background: `var(--color-${color})`, borderRadius: 2 }} />}
            </button>
          );
        })}
      </div>
      {items.map((it) => it.key === sel && it.content && (
        <div key={it.key} role="tabpanel" style={{ padding: "16px 4px", fontSize: "var(--text-small)", color: "var(--color-foreground)" }}>{it.content}</div>
      ))}
    </div>
  );
}
