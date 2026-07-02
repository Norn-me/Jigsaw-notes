import React from "react";

const SIZE = { sm: "var(--text-small)", md: "var(--text-medium)", lg: "var(--text-large)" };

/** Inline text link. Primary green by default; supports underline modes and block (button-like) rendering. */
export function Link({
  children, href = "#", color = "primary", size = "md", underline = "hover",
  isBlock = false, isExternal = false, isDisabled = false, className = "", style = {}, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const c = color === "foreground" ? "var(--color-foreground)" : `var(--color-${color})`;
  const showUnderline =
    underline === "always" || (underline === "hover" && hover) || underline === "active";
  const st = {
    display: "inline-flex", alignItems: "center", gap: 4,
    fontFamily: "var(--font-sans)", fontSize: SIZE[size], fontWeight: "var(--fw-medium)",
    color: c, textDecoration: showUnderline ? "underline" : "none",
    textUnderlineOffset: 3, cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? "var(--disabled-opacity)" : (hover ? "var(--hover-opacity)" : 1),
    padding: isBlock ? "4px 8px" : 0,
    borderRadius: isBlock ? "var(--radius-small)" : 0,
    background: isBlock && hover ? `var(--color-${color === "foreground" ? "default" : color}-flat)` : "transparent",
    transition: "opacity var(--dur-base), background var(--dur-base)",
    ...style,
  };
  return (
    <a href={isDisabled ? undefined : href} className={`jn-link ${className}`} style={st}
       target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer noopener" : undefined}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      {children}
      {isExternal && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      )}
    </a>
  );
}
