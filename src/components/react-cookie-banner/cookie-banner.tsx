import React, { useEffect, useState } from "react";

import { CookieBannerButtons } from "./components/cookie-banner-buttons";
import { CookieTitle } from "./components/cookie-title";
import { CookieDescription } from "./components/cookie-description";
import { CookieConfigurator } from "./components/cookie-configurator/cookie-configurator";
import { getCookie, setCookie } from "./lib/utils";

export type CookieBannerProps = {
  cookieName: string;
  classNames?: {
    cookieConfigurator: {
      container?: string;
      overlay?: string;
      modal?: {
        container?: string;
        title?: string;
        cookieTitle?: string;
        description?: string;
        cookies?: {
          container?: string;
          switchClassNames?: {
            container?: string;
            label?: string;
            input?: string;
          };
        };
        buttons: {
          container?: string;
          accept?: string;
          reject?: string;
          acceptAll?: string;
        };
      };
    };
    container?: string;
    banner?: string;
    message?: string;
    title: string;
    description: string;
    buttons?: {
      container?: string;
      accept?: string;
      reject?: string;
      configure?: string;
    };
  };
  title: string;
  acceptButtonLabel?: string;
  rejectButtonLabel?: string;
  acceptAllButtonLabel?: string;
  description: string;
  position: "top" | "bottom";
  hasRejectButton?: boolean;
  selectedCookies?: string[];
  configureTitle: string;
  configureButtonLabel: string;
  viewMoreLinkLabel: string;
  viewMoreLinkPath: string;
  hasViewMoreLink?: boolean;
  configureDescription: string;
  configureCookiesTitle: string;
  hasConfigureButton?: boolean;
  configurableCookies?: string[];
  hasAcceptAllButton?: boolean;
  onAccept?: (cookies: string[]) => void;
  onReject?: () => void;
  onAcceptAll?: () => void;
};

export const CookieBanner = ({
  cookieName,
  classNames,
  position,
  hasConfigureButton,
  hasRejectButton,
  acceptAllButtonLabel,
  rejectButtonLabel,
  configureButtonLabel,
  configureTitle,
  selectedCookies,
  configureDescription,
  configureCookiesTitle,
  acceptButtonLabel,
  hasViewMoreLink,
  viewMoreLinkLabel,
  viewMoreLinkPath,
  hasAcceptAllButton,
  configurableCookies,
  onAccept,
  description,
  title,
  onReject,
  onAcceptAll,
}: CookieBannerProps) => {
  const [open, setOpen] = useState(false);
  const [configureOpen, setConfigureOpen] = useState(false);

  useEffect(() => {
    const cookie = getCookie(cookieName);
    if (!cookie) {
      setOpen(true);
    }
  }, [cookieName]);

  const positionStyle = position === "top" ? "top-0" : "bottom-0";

  const acceptAllDefault = () => {
    setCookie(cookieName, "true", 7);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className={`flex min-h-24 p-8 w-full h-auto flex-col py-4 space-y-4 lg:flex-row justify-between bg-white border-t border-gray-800 items-center fixed left-0 ${positionStyle} ${classNames?.container}`}
    >
      <CookieConfigurator
        title={configureTitle}
        description={configureDescription}
        cookiesTitle={configureCookiesTitle}
        cookies={configurableCookies}
        open={configureOpen}
        acceptAllButtonLabel={acceptAllButtonLabel}
        rejectButtonLabel={rejectButtonLabel}
        acceptButtonLabel={acceptButtonLabel}
        hasAcceptAllButton={hasAcceptAllButton}
        classNames={classNames?.cookieConfigurator}
        selectedCookies={selectedCookies}
        onAccept={(cookies) => {
          acceptAllDefault();
          onAccept && onAccept(cookies);
        }}
        onRejectAll={() => {
          setOpen(false);
          onReject && onReject();
        }}
        onAcceptAll={() => {
          acceptAllDefault();
          onAcceptAll && onAcceptAll();
        }}
        onClose={() => {
          setConfigureOpen(false);
        }}
      />
      <CookieTitle title={title} className={classNames?.title} />
      <CookieDescription
        description={description}
        className={classNames?.description}
      />
      <CookieBannerButtons
        buttonClassNames={classNames?.buttons}
        hasRejectButton={hasRejectButton}
        acceptButtonLabel={acceptButtonLabel}
        viewMoreLinkLabel={viewMoreLinkLabel}
        viewMoreLinkPath={viewMoreLinkPath}
        hasViewMoreLink={hasViewMoreLink}
        rejectButtonLabel={rejectButtonLabel}
        configureButtonLabel={configureButtonLabel}
        hasConfigureButton={hasConfigureButton}
        onAcept={() => {
          acceptAllDefault();
          onAcceptAll && onAcceptAll();
        }}
        onReject={() => {
          setCookie(cookieName, "false", 7);
          setOpen(false);
          onReject && onReject();
        }}
        onConfigure={() => {
          setConfigureOpen(true);
        }}
      />
    </div>
  );
};
