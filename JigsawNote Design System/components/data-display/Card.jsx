import React from "react";

const RAD = { none: "0", sm: "var(--radius-small)", md: "var(--radius-medium)", lg: "var(--radius-large)" };
const SHA = { none: "none", sm: "var(--shadow-small)", md: "var(--shadow-medium)", lg: "var(--shadow-large)" };

/** Surface container. Compose with CardHeader / CardBody / CardFooter. */
export function Card({ children, radius = "lg", shadow = "md", isPressable = false, isHoverable = false, isBlurred = false, className = "", style = {}, onPress, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return (
    <div className={`jn-card ${className}`}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => isPressable && setPress(true)} onMouseUp={() => setPress(false)}
      onClick={isPressable ? onPress : undefined}
      style={{
        display: "flex", flexDirection: "column", position: "relative",
        background: isBlurred ? "color-mix(in srgb, var(--color-content1) 70%, transparent)" : "var(--color-content1)",
        backdropFilter: isBlurred ? "blur(12px)" : undefined,
        color: "var(--color-content1-foreground)",
        border: "1px solid var(--color-divider)",
        borderRadius: RAD[radius], boxShadow: SHA[shadow], overflow: "hidden",
        cursor: isPressable ? "pointer" : "default",
        transform: press ? "scale(0.985)" : (isHoverable && hover ? "translateY(-2px)" : "none"),
        transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)",
        ...style,
      }} {...rest}>
      {children}
    </div>
  );
}
export function CardHeader({ children, className = "", style = {} }) {
  return <div className={`jn-card-header ${className}`} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", ...style }}>{children}</div>;
}
export function CardBody({ children, className = "", style = {} }) {
  return <div className={`jn-card-body ${className}`} style={{ padding: "8px 20px 16px", flex: 1, ...style }}>{children}</div>;
}
export function CardFooter({ children, className = "", style = {} }) {
  return <div className={`jn-card-footer ${className}`} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 20px", borderTop: "1px solid var(--color-divider)", ...style }}>{children}</div>;
}
