import React from "react";
export interface CarouselProps {
  slides: React.ReactNode[];
  defaultIndex?: number;
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  radius?: "none" | "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}
/** Sliding carousel with arrows, dot indicators and optional autoplay. */
export function Carousel(props: CarouselProps): JSX.Element;
