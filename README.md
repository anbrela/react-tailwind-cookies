🚧 **This library is a work in progress.** 🚧

# React Tailwind Cookies

![npm](https://img.shields.io/npm/v/react-tailwind-cookies)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-tailwind-cookies)
![npm](https://img.shields.io/npm/dw/react-tailwind-cookies)

A React component library for handling cookie consent banners, styled with Tailwind CSS.

## Default look and feel

![Default look and feel](https://github.com/tu_usuario/tu_repositorio/raw/main/images/cookies.png)

## Configuration

![Configuration](https://github.com/tu_usuario/tu_repositorio/raw/main/images/configuration.png)

## Installation

To install the library, use npm or yarn:

```bash
npm install react-tailwind-cookies
```

or

```bash
yarn add react-tailwind-cookies
```

## Usage

To use the `CookieBanner` component, import it into your project and include it in your component tree.

### Basic Example

```jsx
import React from "react";
import "react-tailwind-cookies/dist/tailwind.css"; // Import the CSS
import { CookieBanner } from "react-tailwind-cookies";

const App = () => {
  return (
    <div>
      <CookieBanner
        cookieName="user-preferences"
        title="We use cookies"
        description="This website uses cookies to ensure you get the best experience on our website."
        acceptButtonLabel="Accept"
        rejectButtonLabel="Reject"
        position="bottom"
      />
      <h1>Welcome to our website!</h1>
    </div>
  );
};

export default App;
```

### Props

| Prop                                                                                            | Type     | Default  | Description                                                                    |
| ----------------------------------------------------------------------------------------------- | -------- | -------- | ------------------------------------------------------------------------------ |
| `cookieName`                                                                                    | string   |          | The name of the cookie to store the user's preference.                         |
| `classNames`                                                                                    | object   |          | An object to customize the CSS class names for various parts of the component. |
| &nbsp;&nbsp;&nbsp;`container`                                                                   | string   |          | CSS class for the container of the cookie banner.                              |
| &nbsp;&nbsp;&nbsp;`banner`                                                                      | string   |          | CSS class for the banner.                                                      |
| &nbsp;&nbsp;&nbsp;`message`                                                                     | string   |          | CSS class for the message.                                                     |
| &nbsp;&nbsp;&nbsp;`title`                                                                       | string   |          | CSS class for the title.                                                       |
| &nbsp;&nbsp;&nbsp;`description`                                                                 | string   |          | CSS class for the description.                                                 |
| &nbsp;&nbsp;&nbsp;`buttons`                                                                     | object   |          | CSS classes for the buttons.                                                   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`container`                                                 | string   |          | CSS class for the container of the buttons.                                    |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`accept`                                                    | string   |          | CSS class for the accept button.                                               |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`reject`                                                    | string   |          | CSS class for the reject button.                                               |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`configure`                                                 | string   |          | CSS class for the configure button.                                            |
| &nbsp;&nbsp;&nbsp;`cookieConfigurator`                                                          | object   |          | An object to customize the CSS class names for the cookie configurator.        |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`container`                                                 | string   |          | CSS class for the configurator container.                                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`overlay`                                                   | string   |          | CSS class for the overlay.                                                     |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`modal`                                                     | object   |          | An object to customize the CSS class names for the modal.                      |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`container`                               | string   |          | CSS class for the modal container.                                             |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`title`                                   | string   |          | CSS class for the modal title.                                                 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`cookieTitle`                             | string   |          | CSS class for the cookie title.                                                |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`description`                             | string   |          | CSS class for the modal description.                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`cookies`                                 | object   |          | An object to customize the CSS class names for the cookies section.            |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`container`                   | string   |          | CSS class for the cookies container.                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`switchClassNames`            | object   |          | An object to customize the CSS class names for the switch elements.            |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`container` | string   |          | CSS class for the switch container.                                            |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`label`     | string   |          | CSS class for the switch label.                                                |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`input`     | string   |          | CSS class for the switch input.                                                |
| `title`                                                                                         | string   |          | The title of the cookie banner.                                                |
| `description`                                                                                   | string   |          | The description text of the cookie banner.                                     |
| `acceptButtonLabel`                                                                             | string   | "Accept" | The label for the accept button.                                               |
| `rejectButtonLabel`                                                                             | string   | "Reject" | The label for the reject button.                                               |
| `acceptAllButtonLabel`                                                                          | string   |          | The label for the accept all button.                                           |
| `position`                                                                                      | string   | "bottom" | The position of the cookie banner, either "top" or "bottom".                   |
| `hasRejectButton`                                                                               | boolean  | true     | Whether to show the reject button.                                             |
| `selectedCookies`                                                                               | string[] |          | An array of selected cookies.                                                  |
| `configureTitle`                                                                                | string   |          | The title for the configure section.                                           |
| `configureButtonLabel`                                                                          | string   |          | The label for the configure button.                                            |
| `viewMoreLinkLabel`                                                                             | string   |          | The label for the view more link.                                              |
| `viewMoreLinkPath`                                                                              | string   |          | The path for the view more link.                                               |
| `hasViewMoreLink`                                                                               | boolean  |          | Whether to show the view more link.                                            |
| `configureDescription`                                                                          | string   |          | The description for the configure section.                                     |
| `configureCookiesTitle`                                                                         | string   |          | The title for the configure cookies section.                                   |
| `hasConfigureButton`                                                                            | boolean  | false    | Whether to show the configure button.                                          |
| `configurableCookies`                                                                           | string[] |          | An array of configurable cookies.                                              |
| `hasAcceptAllButton`                                                                            | boolean  | false    | Whether to show the accept all button.                                         |
| `onAccept`                                                                                      | function |          | Callback function to be called when cookies are accepted.                      |
| `onReject`                                                                                      | function |          | Callback function to be called when cookies are rejected.                      |
| `onAcceptAll`                                                                                   | function |          | Callback function to be called when all cookies are accepted.                  |

## Contributing

If you have suggestions for how this library could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

## License

This project is licensed under the MIT License.
