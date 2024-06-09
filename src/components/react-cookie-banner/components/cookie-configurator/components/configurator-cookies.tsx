import React from "react";

import { cn } from "../../../lib";
import { CookieSwitch } from "./cookie-switch";

type ConfiguratorCookiesProps = {
  cookies?: string[];
  classNames?: {
    container?: string;
    switchClassNames?: {
      container?: string;
      label?: string;
      input?: string;
    };
  };
  acceptedCookies: string[];
  handleToggle: (cookie: string) => void;
};

export const ConfiguratorCookies = ({
  cookies,
  classNames,
  handleToggle,
  acceptedCookies,
}: ConfiguratorCookiesProps) => {
  if (!cookies) return null;
  return (
    <div
      className={cn(
        `flex items-center flex-wrap justify-between ${classNames?.container}`
      )}
    >
      {cookies?.map((cookie) => (
        <CookieSwitch
          key={cookie}
          classNames={classNames?.switchClassNames}
          cookie={cookie}
          isChecked={acceptedCookies.includes(cookie)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};
