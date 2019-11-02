const postPattern = /^([\w\d]+)\/(\d{4}-\d{2}-\d{2})-([\w\d-]+)\.html$/;

/**
 * Files matching the `postPattern` will be listed on the /posts/ page.
 */
module.exports = ({ prefix = 'posts' }) => (files, metalsmith, done) => {
  setImmediate(done);

  const posts = [];

  Object.keys(files).forEach(filename => {
    const match = filename.match(postPattern);

    if (!match) {
      return;
    }

    const [_, filePrefix, date, slug] = match;

    if (filePrefix !== prefix) {
      return;
    }

    const file = files[filename];

    file.date = date;
    file.layout = file.layout || 'post.njk';

    files[`${prefix}/${slug}.html`] = file;
    delete files[filename];

    posts.push(file);
  });

  metalsmith.metadata().posts = metalsmith.metadata().posts || {};

  metalsmith.metadata().posts[prefix] = posts;
};
