# <%= name %>

> <%= description %>

# Installation

``` bash
# install dependencies
$ <%= pm %> install

# preview local app
$ <%= pmRun %> dev

# serve local `development` app
$ <%= pmRun %> dev

# build `production` app
$ <%= pmRun %> build
```

---

# About This Template or App

## Frontend Tools

 - [Knott JS](https://knottjs.netlify.app) is a tiny Virtual DOM Javascript library to build basic web component for web app or website.
 - [WEAVV CSS](https://weavvcss.netlify.app) is a low-level functional CSS framework for styling user interface.
 - [Vite](https://vitejs.dev/) is a frontend build tool.
 
## Vite Configs (`vite.config.js`)

Edit production output assets filename.

```js
const filename = "app";
```

## App Manifest (`manifest.json`)

Edit [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) app details. Such as app splash screen color, app name, and icons.

## Cache App Assets (`sw.js`)

Edit [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) service worker cache name.

```js
const cacheName = "knott-app-cache-v1";
```

Add static file assets to store in the browser cache for offline access.

```js
const cacheAssets = [
  "/",
  "/index.html",
  "/assets/app.js",
  "/assets/app.css",
];
```
