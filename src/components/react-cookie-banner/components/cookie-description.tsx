import React from "react";

import { cn } from "../lib";

type CookieDescriptionProps = {
  description?: string;
  className?: string;
};

export const CookieDescription = ({
  description,
  className,
}: CookieDescriptionProps) => {
  if (!description) return null;

  return (
    <div className={cn(`w-3/4 flex justify-center ${className}`)}>
      {description}
    </div>
  );
};
