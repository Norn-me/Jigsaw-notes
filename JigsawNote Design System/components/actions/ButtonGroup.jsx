import React from "react";

/** Groups Buttons into a single attached row; children keep their color/variant
 *  but corners are flattened between them. */
export function ButtonGroup({ children, fullWidth = false, className = "", style = {} }) {
  const items = React.Children.toArray(children);
  return (
    <div className={`jn-button-group ${className}`} style={{ display: "inline-flex", width: fullWidth ? "100%" : undefined, ...style }}>
      {items.map((child, i) => {
        const first = i === 0, last = i === items.length - 1;
        const radius = {
          borderTopLeftRadius: first ? undefined : 0,
          borderBottomLeftRadius: first ? undefined : 0,
          borderTopRightRadius: last ? undefined : 0,
          borderBottomRightRadius: last ? undefined : 0,
          marginLeft: first ? 0 : -1,
        };
        return React.cloneElement(child, {
          key: i,
          fullWidth: fullWidth || child.props.fullWidth,
          style: { ...radius, ...(child.props.style || {}) },
        });
      })}
    </div>
  );
}
