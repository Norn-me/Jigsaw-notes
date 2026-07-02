import React from "react";
export interface InputOTPProps {
  length?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (v: string) => void;
  variant?: "flat" | "bordered";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  isPassword?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Segmented one-time-code entry. Click anywhere to focus; type digits to fill cells. */
export function InputOTP(props: InputOTPProps): JSX.Element;
