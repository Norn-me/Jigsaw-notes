import React from "react";
export interface SelectItem { key?: string; value?: string; label: React.ReactNode; }
export interface SelectProps {
  label?: React.ReactNode;
  placeholder?: string;
  description?: React.ReactNode;
  items?: SelectItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (key: string) => void;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isInvalid?: boolean;
  isDisabled?: boolean;
  startContent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
/** Dropdown select with floating listbox, checkmark on the active option. Pass `items=[{key,label}]`. */
export function Select(props: SelectProps): JSX.Element;
