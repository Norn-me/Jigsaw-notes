import React from "react";
export interface TableColumn { key: string; label: React.ReactNode; align?: "left" | "center" | "right"; }
export interface TableRow { key: string; [k: string]: any; }
/**
 * Data table with header, striping, row selection and hover.
 * @startingPoint section="Data" subtitle="Sortable / selectable table" viewport="700x320"
 */
export interface TableProps {
  columns: TableColumn[];
  rows: TableRow[];
  selectionMode?: "none" | "single" | "multiple";
  selectedKeys?: Set<string>;
  onSelectionChange?: (keys: Set<string>) => void;
  isStriped?: boolean;
  removeWrapper?: boolean;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  className?: string;
  style?: React.CSSProperties;
}
export function Table(props: TableProps): JSX.Element;
