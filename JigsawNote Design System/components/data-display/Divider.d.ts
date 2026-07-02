import React from "react";
export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
}
/** Hairline separator using the divider token. */
export function Divider(props: DividerProps): JSX.Element;
