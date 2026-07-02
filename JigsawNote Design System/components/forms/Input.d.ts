import React from "react";

export type FieldVariant = "flat" | "bordered" | "faded" | "underlined";
export type FieldColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type FieldSize = "sm" | "md" | "lg";

/**
 * Text field. Flat (filled) is the default; bordered / faded / underlined also supported.
 * Label sits above by default. Pass startContent/endContent for icons.
 * @startingPoint section="Forms" subtitle="Text inputs & fields" viewport="700x260"
 */
export interface InputProps {
  label?: React.ReactNode;
  placeholder?: string;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  variant?: FieldVariant;
  color?: FieldColor;
  size?: FieldSize;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  isInvalid?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  labelPlacement?: "outside" | "inside";
  className?: string;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
export function fieldShell(opts: any): React.CSSProperties;
