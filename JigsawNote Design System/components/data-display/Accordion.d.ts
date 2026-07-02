import React from "react";
export interface AccordionItemDef {
  key: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  content: React.ReactNode;
  startContent?: React.ReactNode;
  isDisabled?: boolean;
}
export interface AccordionProps {
  items: AccordionItemDef[];
  defaultExpandedKeys?: string[];
  selectionMode?: "single" | "multiple";
  variant?: "light" | "shadow" | "bordered" | "splitted";
  isCompact?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
/** Expandable panel list with smooth grid-row reveal. */
export function Accordion(props: AccordionProps): JSX.Element;
