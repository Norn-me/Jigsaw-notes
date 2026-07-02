import React from "react";
export interface CalendarProps {
  value?: Date | string;
  defaultValue?: Date | string;
  onChange?: (date: Date) => void;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  className?: string;
  style?: React.CSSProperties;
}
/** Single-date month-grid calendar with today marker and month navigation. */
export function Calendar(props: CalendarProps): JSX.Element;
