import React from "react";
import { Avatar } from "./Avatar.jsx";

/** Identity block — avatar plus name and secondary description line. */
export function User({ name, description, avatarProps = {}, className = "", style = {} }) {
  return (
    <div className={`jn-user ${className}`} style={{ display: "inline-flex", alignItems: "center", gap: 10, ...style }}>
      <Avatar {...avatarProps} name={avatarProps.name || (typeof name === "string" ? name : undefined)} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
        <span style={{ fontSize: "var(--text-small)", fontWeight: "var(--fw-medium)", color: "var(--color-foreground)" }}>{name}</span>
        {description && <span style={{ fontSize: "var(--text-tiny)", color: "var(--text-muted)" }}>{description}</span>}
      </div>
    </div>
  );
}
