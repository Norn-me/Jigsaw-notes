import React from "react";

/**
 * Attaches a row of <Button> children into one connected control group.
 * @startingPoint section="Actions" subtitle="Connected button row" viewport="700x120"
 */
export interface ButtonGroupProps {
  children?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export function ButtonGroup(props: ButtonGroupProps): JSX.Element;
