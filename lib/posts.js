const postPattern = /^posts\/(\d{4}-\d{2}-\d{2})-([\w\d-]+)\.html$/;

/**
 * Files matching the `postPattern` will be listed on the /posts/ page.
 */
module.exports = (files, metalsmith, done) => {
  setImmediate(done);

  const posts = [];

  Object.keys(files).forEach(filename => {
    const match = filename.match(postPattern);

    if (!match) {
      return;
    }

    const file = files[filename];

    const [_, date, slug] = match;

    file.date = date;
    file.layout = file.layout || 'post.njk';

    files[`posts/${slug}.html`] = file;
    delete files[filename];

    posts.push(file);
  });

  metalsmith.metadata().posts = posts;
};
