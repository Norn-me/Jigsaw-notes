import React from "react";
export interface BadgeProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "solid" | "flat";
  size?: "sm" | "md" | "lg";
  placement?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  isDot?: boolean;
  showOutline?: boolean;
  isInvisible?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Count / status badge overlaid on the corner of its child. Use isDot for a plain indicator. */
export function Badge(props: BadgeProps): JSX.Element;
