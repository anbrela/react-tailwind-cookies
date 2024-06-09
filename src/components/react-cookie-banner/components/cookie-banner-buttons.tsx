import React from "react";
import { cn } from "../lib";
import { CookieButton } from "./cookie-button";

type CookieBannerButtonsProps = {
  hasConfigureButton?: boolean;
  configureButtonLabel?: string;
  acceptButtonLabel?: string;
  rejectButtonLabel?: string;
  viewMoreLinkPath?: string;
  hasViewMoreLink?: boolean;
  hasRejectButton?: boolean;
  viewMoreLinkLabel?: string;
  onAcept: () => void;
  onReject: () => void;
  buttonClassNames?: {
    container?: string;
    accept?: string;
    reject?: string;
    configure?: string;
    viewMore?: string;
  };
  onConfigure: () => void;
};

export const CookieBannerButtons = ({
  hasConfigureButton = false,
  hasRejectButton = false,
  onAcept,
  buttonClassNames,
  hasViewMoreLink,
  acceptButtonLabel = "Accept",
  viewMoreLinkLabel = "View more",
  viewMoreLinkPath,
  rejectButtonLabel = "Reject",
  configureButtonLabel = "Configure",
  onReject,
  onConfigure,
}: CookieBannerButtonsProps) => {
  return (
    <div
      className={cn(
        `buttons w-2/4 space-x-2 flex justify-end ${buttonClassNames?.container}`
      )}
    >
      {hasViewMoreLink && (
        <a
          href={viewMoreLinkPath}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(`text-xs uppercase ${buttonClassNames?.viewMore}`)}
        >
          {viewMoreLinkLabel}
        </a>
      )}
      <CookieButton
        visible={hasConfigureButton}
        onClick={onConfigure}
        className={cn(
          `bg-transparent font-semibold uppercase text-xs ${buttonClassNames?.configure}`
        )}
        label={configureButtonLabel}
      />
      <CookieButton
        visible={hasRejectButton}
        onClick={onReject}
        className={cn(
          `bg-gray-200 uppercase font-semibold text-xs px-4 p-3 ${buttonClassNames?.reject}`
        )}
        label={rejectButtonLabel}
      />
      <CookieButton
        visible
        onClick={onAcept}
        className={cn(
          `uppercase font-semibold text-xs px-4 p-3 bg-black text-white ${buttonClassNames?.accept}`
        )}
        label={acceptButtonLabel}
      />
    </div>
  );
};
