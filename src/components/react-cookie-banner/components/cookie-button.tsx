import React from "react";
import { cn } from "../lib";

export type CookieButton = {
  visible: boolean;
  onClick: () => void;
  label: string;
  className?: string;
};

export const CookieButton = ({
  visible,
  onClick,
  className,
  label,
}: CookieButton) => {
  if (!visible) return null;

  return (
    <button onClick={onClick} className={cn(`${className}`)}>
      {label}
    </button>
  );
};
