# Metalsmith Nunjucks Starter

[Metalsmith](https://metalsmith.io/) is a static site generator. [Nunjucks](https://mozilla.github.io/nunjucks/) is a templating engine for Javascript. This codebase represents the tools and configuration my personal website [ryannjohnson.com](https://ryannjohnson.com/) built with.

## Quickstart

Install [NodeJS](https://nodejs.org/en/download/). Alternatively, install NodeJS through [nvm](https://github.com/nvm-sh/nvm#install--update-script).

Clone the repo into a local directory and `cd` into its root folder:

```bash
$ git clone https://github.com/ryannjohnson/metalsmith-nunjucks-starter
$ cd metalsmith-nunjucks-starter
$ nvm install  # Optional (nvm required)
```

Build the static site:

```bash
$ make
```

## Deployment

After running `make`, the contents of your site will live in the `build/` folder.

### Local preview

Serve the static files locally at <http://localhost:8080/>:

```bash
$ npm install --no-save http-server
$ npx http-server build
```

When you make changes, run `make` again in another terminal then refresh your browser.

### Netlify

[Sign up](https://app.netlify.com/signup) for a Netlify account.

Follow [setting up a new site from git](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/). For step 5, use "make" as your build command and "build" as your directory.

Netlify will automatically build and deploy your site to production when new commits are pushed to your chosen branch.
