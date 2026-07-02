import React from "react";
export interface SpinnerProps {
  label?: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  labelColor?: string;
  className?: string;
  style?: React.CSSProperties;
}
/** Dual-ring loading spinner with optional label. */
export function Spinner(props: SpinnerProps): JSX.Element;
