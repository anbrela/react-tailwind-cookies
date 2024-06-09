import React from "react";
import { cn } from "../lib";

type CookieTitleProps = {
  className?: string;
  title?: string;
};

export const CookieTitle = ({ className, title }: CookieTitleProps) => {
  if (!title) return null;
  return <div className={cn(`w-1/4 ${className}`)}>{title}</div>;
};
