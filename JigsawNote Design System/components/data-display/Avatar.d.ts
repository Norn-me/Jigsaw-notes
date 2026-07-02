import React from "react";
export interface AvatarProps {
  src?: string;
  name?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  isBordered?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export interface AvatarGroupProps {
  children?: React.ReactNode;
  max?: number;
  total?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}
/** Avatar with image / initials / icon fallback and optional colored ring. */
export function Avatar(props: AvatarProps): JSX.Element;
/** Overlapping avatar stack capped at `max` with a +N surplus badge. */
export function AvatarGroup(props: AvatarGroupProps): JSX.Element;
