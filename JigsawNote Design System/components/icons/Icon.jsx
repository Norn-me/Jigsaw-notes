import React from "react";

/**
 * Icon — wraps the Iconify web component. The source kit uses the Vuesax and Solar
 * icon families; reference any Iconify icon by full name, e.g. "solar:notebook-bold",
 * "solar:magnifer-linear", "vaadin:vuesax". Paints with currentColor.
 * Requires the iconify-icon script (loaded by cards / kits via CDN).
 */
export function Icon({ name, size = 20, color, className = "", style = {}, ...rest }) {
  return (
    <iconify-icon
      icon={name}
      width={size}
      height={size}
      class={`jn-icon ${className}`}
      style={{ display: "inline-flex", color: color || "currentColor", verticalAlign: "middle", ...style }}
      {...rest}
    />
  );
}
