import React from "react";
export interface SwitchProps {
  children?: React.ReactNode;
  isSelected?: boolean;
  defaultSelected?: boolean;
  onValueChange?: (v: boolean) => void;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  thumbIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
/** Toggle switch. Green track when on; optional icons inside the thumb / on each side. */
export function Switch(props: SwitchProps): JSX.Element;
