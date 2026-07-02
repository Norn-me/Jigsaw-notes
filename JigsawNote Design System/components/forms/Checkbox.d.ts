import React from "react";
export interface CheckboxProps {
  children?: React.ReactNode;
  isSelected?: boolean;
  defaultSelected?: boolean;
  onValueChange?: (v: boolean) => void;
  value?: string;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  lineThrough?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Checkbox with animated check, indeterminate state and optional line-through label. */
export function Checkbox(props: CheckboxProps): JSX.Element;
