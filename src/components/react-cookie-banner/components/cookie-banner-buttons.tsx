import React from "react";
import { cn } from "../lib";
import { CookieButton } from "./cookie-button";

type CookieBannerButtonsProps = {
  hasConfigureButton?: boolean;
  hasRejectButton?: boolean;
  onAcept: () => void;
  onReject: () => void;
  buttonClassNames?: {
    container?: string;
    accept?: string;
    reject?: string;
    configure?: string;
  };
  onConfigure: () => void;
};

export const CookieBannerButtons = ({
  hasConfigureButton = false,
  hasRejectButton = false,
  onAcept,
  buttonClassNames,
  onReject,
  onConfigure,
}: CookieBannerButtonsProps) => {
  return (
    <div
      className={cn(
        `buttons w-2/4 space-x-2 flex justify-end ${buttonClassNames?.container}`
      )}
    >
      <CookieButton
        visible={hasConfigureButton}
        onClick={onConfigure}
        className={cn(
          `bg-transparent font-semibold uppercase text-xs ${buttonClassNames?.configure}`
        )}
        label="Configure"
      />
      <CookieButton
        visible={hasRejectButton}
        onClick={onReject}
        className={cn(
          `bg-gray-200 uppercase font-semibold text-xs px-4 p-3 ${buttonClassNames?.reject}`
        )}
        label="Reject"
      />
      <CookieButton
        visible
        onClick={onAcept}
        className={cn(
          `uppercase font-semibold text-xs px-4 p-3 bg-black text-white ${buttonClassNames?.accept}`
        )}
        label="Accept"
      />
    </div>
  );
};
