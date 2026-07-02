import React from "react";
export interface ToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  icon?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
/** Transient notification card. */
export function Toast(props: ToastProps): JSX.Element;
/** Fixed-corner stack container for Toasts. */
export function ToastViewport(props: { children?: React.ReactNode; placement?: "bottom-right" | "bottom-left" | "top-right" | "top-left" }): JSX.Element;
