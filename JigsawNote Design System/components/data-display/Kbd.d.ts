import React from "react";
export interface KbdProps {
  children?: React.ReactNode;
  keys?: string[] | string;
  className?: string;
  style?: React.CSSProperties;
}
/** Renders keyboard shortcuts; named keys (command, shift, enter…) map to glyphs. */
export function Kbd(props: KbdProps): JSX.Element;
