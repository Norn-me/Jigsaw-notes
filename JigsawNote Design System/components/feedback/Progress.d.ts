import React from "react";
export interface ProgressProps {
  value?: number;
  minValue?: number;
  maxValue?: number;
  label?: React.ReactNode;
  showValueLabel?: boolean;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "full";
  isIndeterminate?: boolean;
  isStriped?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Linear progress indicator, determinate or indeterminate. */
export function Progress(props: ProgressProps): JSX.Element;
