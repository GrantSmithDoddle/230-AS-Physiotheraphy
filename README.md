[![Netlify Status](https://api.netlify.com/api/v1/badges/d54c21e0-186e-41cb-9e51-f85b7961be78/deploy-status)](https://app.netlify.com/sites/romantic-wilson-6651c8/deploys)

# 230 AS Physiotheraphy

Static site built with [Eleventy](https://www.11ty.dev/) and [Gulp 4](https://gulpjs.com/). :yum:

## Features

- [Eleventy](https://www.11ty.dev/docs/)
- [Gulp 4](https://gulpjs.com/) to watch, concatenate and compile styles and scripts

## Installation

```
npm install
```

To start the development server (and Gulp), run the `npm run watch` command in terminal. Eleventy has hot reloading baked in and will automatically watch your template files for changes. Gulp will watch any changes to the JS and SCSS files.

## Folder Structure

The `src` folder contains all the templates, partials and content - which Eleventy will parse into HTML for us.

Within the `src` folder, lives a `_data` folder. Here you'll find a `site.json` file - for general config stuff e.g site name, author, email, social media links etc.

Uncompiled SCSS and JS reside in the `resources` folder, Mix will be watching these folders for any changes. These are then inlined into the header and footer respectively.

## Ready to deploy?

    $ npm run production

## Front end helpers

- [Lazy Sizes](https://github.com/aFarkas/lazysizes), Lazy load images
- [Browser Update Warning](https://browser-update.org/), Inform users to update their web browser
