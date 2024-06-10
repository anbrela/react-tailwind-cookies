import React, { useState, useRef, useEffect } from "react";
import { CookieTitle } from "../cookie-title";
import { CookieDescription } from "../cookie-description";
import { cn } from "../../lib";
import { ConfiguratorCookies } from "./components/configurator-cookies";
import { CookieButton } from "../cookie-button";
import { CookieConfiguratorProps } from "../types";

export const CookieConfigurator = ({
  classNames,
  cookies,
  onAcceptAll,
  cookiesTitle,
  selectedCookies,
  title,
  closeOnBackdropClick = true,
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
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (element.current && !element.current.contains(event?.target as Node)) {
        onClose();
      }
    };

    if (closeOnBackdropClick) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, closeOnBackdropClick]);

  const [acceptedCookies, setAcceptedCookies] = useState<string[]>(
    selectedCookies ? [...selectedCookies] : []
  );

  useEffect(() => {
    if (selectedCookies) {
      setAcceptedCookies(selectedCookies);
    }
  }, [selectedCookies]);

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
        ref={element}
        className={cn(
          `w-5/6 md:w-2/4 h-auto bg-white flex flex-col z-50 p-8 space-y-4 justify-center ${classNames?.modal?.container}`
        )}
      >
        <div className="w-full flex items-center justify-between pr-3">
          <CookieTitle
            title={title}
            className={cn(` w-5/6 font-bold ${classNames?.modal?.title}`)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
            onClick={onClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

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
