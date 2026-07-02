import React from "react";

/**
 * Elevated surface container. Compose header/body/footer sub-parts inside.
 * @startingPoint section="Layout" subtitle="Card surfaces & sections" viewport="700x300"
 */
export interface CardProps {
  children?: React.ReactNode;
  radius?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
  isPressable?: boolean;
  isHoverable?: boolean;
  isBlurred?: boolean;
  onPress?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
export function CardHeader(props: { children?: React.ReactNode; className?: string; style?: React.CSSProperties }): JSX.Element;
export function CardBody(props: { children?: React.ReactNode; className?: string; style?: React.CSSProperties }): JSX.Element;
export function CardFooter(props: { children?: React.ReactNode; className?: string; style?: React.CSSProperties }): JSX.Element;
