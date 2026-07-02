import React from "react";
export interface NumberInputProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  value?: number;
  defaultValue?: number;
  onChange?: (n: number) => void;
  min?: number;
  max?: number;
  step?: number;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Numeric field with up/down steppers, min/max/step clamping. */
export function NumberInput(props: NumberInputProps): JSX.Element;
