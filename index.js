const highlight = require("highlight.js");
const metalsmith = require("metalsmith");
const layouts = require("metalsmith-layouts");
const markdown = require("metalsmith-markdown");
const permalinks = require("metalsmith-permalinks");

const filters = require("./lib/filters");
const htmlMinifier = require("./lib/html-minifier");
const posts = require("./lib/posts");

metalsmith(__dirname)
  .metadata({
    site: {
      title: "Metalsmith Nunjucks Starter",
    },
  })
  .source("./src")
  .destination("./build")
  .clean(false)
  .use(
    markdown({
      highlight: (code, lang) => {
        if (lang === undefined) return code;
        return highlight.highlight(lang, code).value;
      },
      langPrefix: "hljs lang-",
    }),
  )
  .use(posts({ prefix: 'writing' }))
  .use(permalinks())
  .use(layouts({ engineOptions: { filters } }))
  .use(htmlMinifier())
  .build(err => {
    if (err) {
      throw err;
    }
  });
