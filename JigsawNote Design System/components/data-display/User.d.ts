import React from "react";
export interface UserProps {
  name?: React.ReactNode;
  description?: React.ReactNode;
  avatarProps?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
}
/** Avatar + name + description identity chip. */
export function User(props: UserProps): JSX.Element;
