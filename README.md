<<<<<<< HEAD
# Nando's Malariathon

A simple integration using [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) and [Tachyons](https://github.com/tachyons-css/tachyons/) for CSS, with added Firebase auth

With thanks to the Gatsby & Auth integration tutorial from [Unicorn Agency](https://medium.com/@UnicornAgency/jamstack-pwa-lets-build-a-polling-app-with-gatsby-js-firebase-and-styled-components-pt-1-78a03a633092) on Medium.

## Dependencies and Prerequisites

### ADR Log

- adr-log - `npm install -g adr-log`

### Running the application

Make sure you have the Gatsby CLI installed. You can do that by running
`npm install --global gatsby-cli`

Then you need to install dependencies
`yarn i`

You'll also need to create an `.env.development` file in the project root with your firebase configuration details;

```
GATSBY_API_KEY=xxxxxx
GATSBY_AUTH_DOMAIN=xxxxxx.firebaseapp.com
GATSBY_DATABASE_URL=https://xxxxxxx.firebaseio.com
GATSBY_PROJECT_ID=xxxxxxx
GATSBY_STORAGE_BUCKET=xxxxxxx.appspot.com
GATSBY_MESSAGING_SENDER_ID=xxxxxxx
```

## Running the app

Then you can go to the newly created folder and run
`gatsby develop`
Your newly built site is now running on your localhost, and you can start building it. 

Make sure you read the documentation on both Gatsby and Tachyons. And have fun!

## Documentation
-  [ADRs](docs/adr/index.md) - Architecture decision records

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/NandosUK/malariathon)
