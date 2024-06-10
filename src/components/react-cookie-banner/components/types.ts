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

export type CookieConfiguratorProps = {
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
  selectedCookies?: string[];
  title: string;
  description?: string;
  cookiesTitle?: string;
  hasAcceptAllButton?: boolean;
  closeOnBackdropClick?: boolean;
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
