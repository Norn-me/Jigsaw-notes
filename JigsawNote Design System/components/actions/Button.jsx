import React from "react";

const SIZES = {
  sm: { height: 32, minWidth: 64, px: 12, font: "var(--text-small)", gap: 8, radius: "var(--radius-small)", icon: 34 },
  md: { height: 40, minWidth: 80, px: 16, font: "var(--text-small)", gap: 8, radius: "var(--radius-medium)", icon: 40 },
  lg: { height: 48, minWidth: 96, px: 24, font: "var(--text-medium)", gap: 10, radius: "var(--radius-large)", icon: 48 },
};
const RADII = {
  none: "var(--radius-none)", sm: "var(--radius-small)", md: "var(--radius-medium)",
  lg: "var(--radius-large)", full: "var(--radius-full)",
};

function variantStyle(variant, color) {
  const c = `var(--color-${color})`;
  const fg = `var(--color-${color}-foreground)`;
  const flat = `var(--color-${color}-flat)`;
  const soft = `var(--color-${color}-600)`;
  const textColor = color === "default" ? "var(--color-default-foreground)" : `var(--color-${color})`;
  switch (variant) {
    case "bordered":
      return { background: "transparent", color: textColor, border: `var(--border-medium) solid ${c}` };
    case "light":
      return { background: "transparent", color: textColor, "--hoverBg": flat };
    case "flat":
      return { background: flat, color: color === "default" ? "var(--color-default-foreground)" : soft };
    case "faded":
      return { background: "var(--color-default-100)", color: "var(--color-default-foreground)", border: "var(--border-medium) solid var(--color-default-200)" };
    case "shadow":
      return { background: c, color: fg, boxShadow: color === "default" ? "var(--shadow-medium)" : `0 6px 18px color-mix(in srgb, ${c} 45%, transparent)` };
    case "ghost":
      return { background: "transparent", color: textColor, border: `var(--border-medium) solid ${c}`, "--hoverBg": c, "--hoverFg": fg };
    case "solid":
    default:
      return { background: c, color: fg };
  }
}

export function Button({
  children, size = "md", variant = "solid", color = "default", radius,
  isIconOnly = false, isDisabled = false, isLoading = false, fullWidth = false,
  startContent, endContent, className = "", style = {}, onClick, type = "button", ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const vs = variantStyle(variant, color);
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: s.gap, fontFamily: "var(--font-sans)", fontWeight: "var(--fw-medium)",
    fontSize: s.font, lineHeight: 1, whiteSpace: "nowrap", userSelect: "none",
    height: s.height, minWidth: isIconOnly ? s.height : s.minWidth,
    width: isIconOnly ? s.height : (fullWidth ? "100%" : undefined),
    padding: isIconOnly ? 0 : `0 ${s.px}px`,
    borderRadius: radius ? RADII[radius] : s.radius,
    border: vs.border || "var(--border-medium) solid transparent",
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? "var(--disabled-opacity)" : 1,
    transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), opacity var(--dur-base), box-shadow var(--dur-base)",
    transform: press && !isDisabled ? "scale(0.97)" : "scale(1)",
    ...vs,
  };
  if (hover && !isDisabled) {
    if (vs["--hoverBg"]) { base.background = vs["--hoverBg"]; if (vs["--hoverFg"]) base.color = vs["--hoverFg"]; }
    else base.opacity = "var(--hover-opacity)";
  }
  delete base["--hoverBg"]; delete base["--hoverFg"];

  return (
    <button
      type={type} className={`jn-button ${className}`} style={{ ...base, ...style }}
      disabled={isDisabled} onClick={isDisabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      {...rest}
    >
      {isLoading && <Spinner size={size} />}
      {!isLoading && startContent}
      {children}
      {!isLoading && endContent}
    </button>
  );
}

function Spinner({ size }) {
  const d = size === "sm" ? 14 : size === "lg" ? 20 : 16;
  return (
    <span style={{
      width: d, height: d, borderRadius: "50%",
      border: "2px solid currentColor", borderTopColor: "transparent",
      display: "inline-block", animation: "jn-spin 0.7s linear infinite",
    }}>
      <style>{`@keyframes jn-spin{to{transform:rotate(360deg)}}`}</style>
    </span>
  );
}
