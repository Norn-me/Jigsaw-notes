import React from "react";
export interface ChipProps {
  children?: React.ReactNode;
  variant?: "solid" | "bordered" | "flat" | "faded" | "light" | "dot" | "shadow";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  avatar?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
/** Compact pill for tags, statuses and filters. Add onClose for a dismiss button. */
export function Chip(props: ChipProps): JSX.Element;
