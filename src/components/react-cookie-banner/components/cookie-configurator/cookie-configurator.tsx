import React, { useState } from "react";
import { CookieTitle } from "../cookie-title";
import { CookieDescription } from "../cookie-description";
import { cn } from "../../lib";
import { ConfiguratorCookies } from "./components/configurator-cookies";
import { CookieButton } from "../cookie-button";

type CookieConfiguratorProps = {
  classNames?: {
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
  title: string;
  description?: string;
  cookiesTitle?: string;
  hasAcceptAllButton?: boolean;
  cookies?: string[];
  acceptButtonLabel?: string;
  rejectButtonLabel?: string;
  acceptAllButtonLabel?: string;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onAccept: (cookies: string[]) => void;
  open: boolean;
  onClose: () => void;
};

export const CookieConfigurator = ({
  classNames,
  cookies,
  onAcceptAll,
  cookiesTitle,
  title,
  hasAcceptAllButton = false,
  rejectButtonLabel = "Reject",
  acceptButtonLabel = "Accept",
  acceptAllButtonLabel = "Accept All",
  description,
  onRejectAll,
  onAccept,
  open,
  onClose,
}: CookieConfiguratorProps) => {
  const [acceptedCookies, setAcceptedCookies] = useState<string[]>(
    cookies ? [...cookies] : []
  );

  const handleAcceptAll = () => {
    onAcceptAll();
    onClose();
  };

  const handleRejectAll = () => {
    onRejectAll();
    onClose();
  };

  const handleAccept = (cookies: string[]) => {
    onAccept(cookies);
  };

  const handleToggle = (cookie: string) => {
    if (acceptedCookies.includes(cookie)) {
      setAcceptedCookies((prev) => prev.filter((c) => c !== cookie));
    } else {
      setAcceptedCookies((prev) => [...prev, cookie]);
    }
  };

  if (!open) return null;

  return (
    <div
      className={cn(
        `w-screen h-screen fixed top-0 left-0 flex items-center justify-center flex-col z-50 ${classNames?.container}`
      )}
    >
      <div
        className={cn(
          `w-full h-full absolute bg-gray-800 bg-opacity-50 ${classNames?.overlay}`
        )}
      />
      <div
        className={cn(
          `w-2/4 h-auto bg-white flex flex-col z-50 p-8 space-y-4 justify-center ${classNames?.modal?.container}`
        )}
      >
        <CookieTitle
          title={title}
          className={cn(` w-full font-bold ${classNames?.modal?.title}`)}
        />
        <CookieDescription
          className={cn(`w-full ${classNames?.modal?.description}`)}
          description={description}
        />
        <CookieTitle
          title={cookiesTitle}
          className={cn(` w-full ${classNames?.modal?.cookieTitle}`)}
        />
        <ConfiguratorCookies
          classNames={{
            container: cn(`w-4/6 ${classNames?.modal?.cookies?.container}`),
            switchClassNames: {
              container: cn(
                `mr-2 mt-2 ${classNames?.modal?.cookies?.switchClassNames?.container}`
              ),
            },
            ...classNames?.modal?.cookies,
          }}
          cookies={cookies}
          acceptedCookies={acceptedCookies}
          handleToggle={handleToggle}
        />
        <div
          className={cn(
            `w-full flex items-center justify-end space-x-3 ${classNames?.modal?.buttons?.container}`
          )}
        >
          <CookieButton
            className={cn(
              `bg-gray-100 uppercase text-xs p-3 px-5  ${classNames?.modal?.buttons?.reject}`
            )}
            visible
            label={rejectButtonLabel}
            onClick={handleRejectAll}
          />
          <CookieButton
            className={cn(
              ` uppercase text-xs p-3 px-5 bg-black text-white ${classNames?.modal?.buttons?.accept}`
            )}
            visible
            label={acceptButtonLabel}
            onClick={() => handleAccept(acceptedCookies)}
          />
          <CookieButton
            className={cn(` ${classNames?.modal?.buttons?.acceptAll}`)}
            visible={hasAcceptAllButton}
            label={acceptAllButtonLabel}
            onClick={handleAcceptAll}
          />
        </div>
      </div>
    </div>
  );
};
