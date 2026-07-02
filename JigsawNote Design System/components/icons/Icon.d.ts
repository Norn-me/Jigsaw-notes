import React from "react";
export interface IconProps {
  /** Full Iconify name, e.g. "solar:notebook-bold" or "solar:magnifer-linear". */
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}
/**
 * Icon glyph wrapper over Iconify (Solar + Vuesax families, matching the source kit).
 * Host page must load the iconify-icon CDN script. Recolor via `color` / CSS currentColor.
 */
export function Icon(props: IconProps): JSX.Element;
