
🚧 **This library is a work in progress.** 🚧



# React Tailwind Cookies

![npm](https://img.shields.io/npm/v/react-tailwind-cookies)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-tailwind-cookies)
![npm](https://img.shields.io/npm/dw/react-tailwind-cookies)

A React component library for handling cookie consent banners, styled with Tailwind CSS.


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

| Prop                 | Type     | Default  | Description                                                   |
| -------------------- | -------- | -------- | ------------------------------------------------------------- |
| `cookieName`         | string   |          | The name of the cookie to store the user's preference.        |
| `title`              | string   |          | The title of the cookie banner.                               |
| `description`        | string   |          | The description text of the cookie banner.                    |
| `acceptButtonLabel`  | string   | "Accept" | The label for the accept button.                              |
| `rejectButtonLabel`  | string   | "Reject" | The label for the reject button.                              |
| `position`           | string   | "bottom" | The position of the cookie banner, either "top" or "bottom".  |
| `hasRejectButton`    | boolean  | true     | Whether to show the reject button.                            |
| `hasConfigureButton` | boolean  | false    | Whether to show the configure button.                         |
| `onAccept`           | function |          | Callback function to be called when cookies are accepted.     |
| `onReject`           | function |          | Callback function to be called when cookies are rejected.     |
| `onAcceptAll`        | function |          | Callback function to be called when all cookies are accepted. |

## Contributing

If you have suggestions for how this library could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

## License

This project is licensed under the MIT License.
