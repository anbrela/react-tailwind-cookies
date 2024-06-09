import React from "react";
import { cn } from "../../../lib";

type CookieSwitchProps = {
  cookie: string;
  classNames?: {
    container?: string;
    label?: string;
    input?: string;
    switch?: string;
    cookieName?: string;
  };
  onToggle: (cookie: string) => void;
  isChecked: boolean;
};

export const CookieSwitch = ({
  cookie,
  onToggle,
  classNames,
  isChecked,
}: CookieSwitchProps) => (
  <div
    key={cookie}
    className={cn(`flex justify-between items-center ${classNames?.container}`)}
  >
    <label
      className={cn(
        `inline-flex items-center cursor-pointer ${classNames?.label}`
      )}
    >
      <input
        type="checkbox"
        className={cn(`sr-only peer ${classNames?.input}`)}
        value=""
        checked={isChecked}
        onChange={() => onToggle(cookie)}
      />
      <div
        className={cn(
          `relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ${classNames?.switch}`
        )}
      />
      <span
        className={cn(
          `ms-3 text-xs font-medium text-gray-900 dark:text-gray-300 uppercase ${classNames?.cookieName}`
        )}
      >
        {cookie}
      </span>
    </label>
  </div>
);
