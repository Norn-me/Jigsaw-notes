import React from "react";
export interface CodeProps {
  children?: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}
/** Inline monospace code token. */
export function Code(props: CodeProps): JSX.Element;
