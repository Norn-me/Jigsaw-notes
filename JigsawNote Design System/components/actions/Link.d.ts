import React from "react";

export type LinkColor = "foreground" | "primary" | "secondary" | "success" | "warning" | "danger";

/**
 * Inline hyperlink. Green primary by default; underline can be none / hover / always.
 * Set isBlock for a padded, button-like affordance.
 */
export interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  color?: LinkColor;
  size?: "sm" | "md" | "lg";
  underline?: "none" | "hover" | "always" | "active";
  isBlock?: boolean;
  isExternal?: boolean;
  isDisabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export function Link(props: LinkProps): JSX.Element;
