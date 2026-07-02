import React from "react";
export interface TooltipProps {
  children?: React.ReactNode;
  content?: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  showArrow?: boolean;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}
/** Hover/focus tooltip anchored to its child, four placements, optional arrow. */
export function Tooltip(props: TooltipProps): JSX.Element;
