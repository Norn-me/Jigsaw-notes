import React from "react";
export interface AlertProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "flat" | "solid" | "bordered" | "faded";
  icon?: React.ReactNode;
  isClosable?: boolean;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
/** Inline status banner with per-color icon. */
export function Alert(props: AlertProps): JSX.Element;
