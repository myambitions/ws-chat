# Docler Holding Chat Hometask

A chat application built with the following technologies:

- React + Redux + TypeScript
- Websockets with Socket.io
- Jest/Enzyme for testing

## Application features:

- Header
  1. Chat tab
  2. Settings tab
  3. Unread messages counter
- Chat page
  1. Chat area
  2. Message (text, datetime, left or right depending on if it's received or sent)
  3. Showing nickname only for received message
  4. Message sender - input and button
  5. Send messages with Enter/Ctrl+Enter
  6. Auto scroll to bottom when the chat area is not enough to show all messages
  7. Link Parser - youtube link (embedded video should appear), link to an image (embedded image should appear)
- Settings page
  1. Possibility to change user name
  2. Change the color theme of the app
  3. Change the time mode 12h or 24h, shown with each message
  4. Send messages with Ctrl+Enter - On/Off
  5. LanguageSwitcher - dropdown menu allowing changing the language of the app (English and Russian are supported)
  6. Reset button - resets all settings stored to local storage

### Running The App locally

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed.
2. Install [npm](https://www.npmjs.com/).
3. From the project folder, execute the following commands:

To install dependencies:

```shell
  npm i
```

To run the server app:

```shell
  npm run server
```

To run the client app:

```shell
  npm start
```

To run the tests:

```shell
  npm test
```

Browse to [http://localhost:3000](http://localhost:3000) and see the running app. In order to test, open it in two different computers,
or computer and a phone, or two browsers on the same computer (one of it in incognito mode).
