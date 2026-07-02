import React from "react";
export interface CheckboxGroupProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  orientation?: "vertical" | "horizontal";
  value?: string[];
  defaultValue?: string[];
  onChange?: (values: string[]) => void;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Controlled/uncontrolled group of Checkbox children. Each child needs a `value`. */
export function CheckboxGroup(props: CheckboxGroupProps): JSX.Element;
