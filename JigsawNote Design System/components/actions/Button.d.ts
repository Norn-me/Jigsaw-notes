import React from "react";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonVariant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
export type ButtonColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type Radius = "none" | "sm" | "md" | "lg" | "full";

/**
 * Primary action control. Solid green primary is the default CTA; use flat/light for
 * secondary actions and bordered/ghost for tertiary. isIconOnly renders a square button.
 *
 * @startingPoint section="Actions" subtitle="Buttons in every variant & color" viewport="700x220"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  radius?: Radius;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
