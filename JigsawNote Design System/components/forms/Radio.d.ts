import React from "react";
export interface RadioProps {
  children?: React.ReactNode;
  value: string;
  description?: React.ReactNode;
  isSelected?: boolean;
  onSelect?: (value: string) => void;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export interface RadioGroupProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  orientation?: "vertical" | "horizontal";
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Single-select radio + its group wrapper. Each Radio needs a `value`; RadioGroup owns selection. */
export function Radio(props: RadioProps): JSX.Element;
export function RadioGroup(props: RadioGroupProps): JSX.Element;
