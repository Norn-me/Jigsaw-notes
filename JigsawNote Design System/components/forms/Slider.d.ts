import React from "react";
export interface SliderProps {
  label?: React.ReactNode;
  value?: number;
  defaultValue?: number;
  onChange?: (n: number) => void;
  minValue?: number;
  maxValue?: number;
  step?: number;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  isDisabled?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
/** Draggable single-value slider with green fill and value readout. */
export function Slider(props: SliderProps): JSX.Element;
