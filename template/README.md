<p align="center">
  <img src="https://raw.githubusercontent.com/knott-dev/knott-js/main/banner.png" width="auto" alt="Knott JS">
</p>

# <%= name %>

<%= description %>

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/knott-cli.svg)](https://badge.fury.io/js/knott-cli)
[![npm downloads](https://img.shields.io/npm/dm/knott-cli.svg)](https://www.npmjs.com/package/knott-cli)

## Installation

```bash
# install dependencies
$ <%= pm %> install

# preview local project
$ <%= pmRun %> preview

# serve local `development`
$ <%= pmRun %> dev
```

> Note: Run for the first time setup.

```bash
# build for `production`
$ <%= pmRun %> build
```

# About

## Tools use in this boilerplate:

 - [Knott JS](https://knottjs.netlify.app) is a tiny Virtual DOM Javascript library to build basic [web component](https://knottjs.netlify.app/#create-component) and [styling](https://knottjs.netlify.app/#styling) for web app or website.
 - [WEAVV CSS](https://weavvcss.netlify.app) is a low-level functional CSS framework for styling user interface.
 - [Vite](https://vitejs.dev/) is a frontend build tool.

# Settings

More settings in this boilerplate...

## Vite Configs

Edit production output assets filename.

```js
// vite.config.js
const filename = "app";
```

## Service Worker

[PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) Service Worker (SW) store assets in the browser to enable fast and offline access.

```js
// app.js
import { pwa } from "knott";

pwa("true");
```

## App Manifest

Edit [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) app details. Such as app splash screen color, app name, and icons in the `manifest.json` file.

```json
// manifest.json
{
  "name": "App Name",
  "short_name": "AppName",
  "start_url": "index.html",
  "display": "standalone",
  ...
```

## Cache Assets

Edit [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) service worker cache name.

```js
// sw.js
const cacheName = "knott-app-cache-dev-version";
```

Add static file assets to store in the browser cache for offline access.

```js
// sw.js
const cacheAssets = [
  "/",
  "/index.html",
  "/assets/app.js",
  "/assets/app.css",
];
```

Enjoy!

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

