# Eleventy Plus Vite

A clean and fast Eleventy Starter Kit with Vite.

[![Netlify Status](https://api.netlify.com/api/v1/badges/ef99b4ea-199f-497b-84c1-48c34355da8a/deploy-status)](https://app.netlify.com/sites/eleventyplusvite/deploys)
## Features

* Eleventy 2.0.0-canary
* New Eleventy 2.0 Dev Server with live reload
* Vite as Middleware in Eleventy Dev Server (uses [eleventy-plugin-vite](https://github.com/11ty/eleventy-plugin-vite/))
* Eleventy build output is post-processed by [Vite](https://vitejs.dev) (with Rollup)
* CSS/Sass post-processing with PostCSS incl. [Autoprefixer](https://github.com/postcss/autoprefixer) and cssnano, 
* Uses [my own opinionated CSS/Sass structure](https://matthiasott.com/notes/how-i-structure-my-css)
* Example implementation of a font loading strategy ([critical FOFT with preload](https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-preload))
* Basic fluid typography based on [Utopia](https://utopia.fyi)
* Simple dark mode support (using `prefers-color-scheme` and CSS Custom Properties)

## Getting started

First, [generate a new repository based on this project](https://github.com/matthiasott/eleventy-plus-vite/generate).

After cloning (or downloading) the repository to your local machine, install all dependencies with the command

```sh
npm install
```

## Run dev server

The project comes with Eleventy’s built-in development server. You can start the server with

```sh
npm start
````

or

```sh
npx @11ty/eleventy --serve
````


## Build

To trigger a production build, use

```sh
npm run build
````

or

```sh
npx @11ty/eleventy
```

## Deploy a fork of this template to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/matthiasott/eleventy-plus-vite)

## CSS
By default, this starter project uses Sass with an opinionated folder structure. Feel free to replace this structure with your own. If you prefer to write standards-compliant, good old plain CSS, this is also supported. Nesting is then possible via the [PostCSS Nesting plugin](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting), following the [CSS Nesting specification](https://drafts.csswg.org/css-nesting-1/). 

[Autoprefixer](https://github.com/postcss/autoprefixer) adds necessary browser prefixes. The [browserslist](https://github.com/browserslist/browserslist) settings can be adjusted in `package.json`.

## Roadmap
* Add more base styles and a demo page that shows example styles and components
* Add a toggle button for the dark mode theme
* More advanced base styles for modern CSS layout
* Webmention/IndieWeb support

## Feedback

Please provide feedback! 🤗 Ideally by [filing an issue here](https://github.com/matthiasott/eleventy-plus-vite/issues) – or via a pull request.
## Thank you!

This starter project would not have been possible without the many great sites and projects I was able to use as inspiration – and shamelessly copy code from:

* Zach Leatherman: [zachleat.com](https://github.com/zachleat/zachleat.com)
* Max Böck’s [Eleventastic](https://github.com/maxboeck/eleventastic)
* Stephanie Eckles’s [11ty Netlify Jumpstart](https://github.com/5t3ph/11ty-netlify-jumpstart)
* Miriam Suzanne [miriamsuzanne.com](https://www.miriamsuzanne.com)
