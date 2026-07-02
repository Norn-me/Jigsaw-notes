import React from "react";
export interface TabItem {
  key: string;
  title: React.ReactNode;
  content?: React.ReactNode;
  startContent?: React.ReactNode;
  isDisabled?: boolean;
}
/**
 * Segmented tab navigation with optional panels.
 * @startingPoint section="Navigation" subtitle="Tab bars & segments" viewport="700x160"
 */
export interface TabsProps {
  items: TabItem[];
  selectedKey?: string;
  defaultSelectedKey?: string;
  onSelectionChange?: (key: string) => void;
  variant?: "solid" | "underlined" | "bordered" | "light";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  fullWidth?: boolean;
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
