const { minify } = require("html-minifier");

module.exports = opts => (files, metalsmith, done) => {
  setImmediate(done);

  Object.keys(files).forEach(filepath => {
    const file = files[filepath];

    const contents = file.contents.toString("utf8");

    if (!contents.startsWith("<!DOCTYPE html>")) {
      return;
    }

    const minifyOptions = {
      collapseWhitespace: true,
      conservativeCollapse: true,
      html5: true,
      minifyJS: true,
      removeComments: true,
      ...opts,
    };

    const minifiedContents = minify(contents, minifyOptions);

    file.contents = Buffer.from(minifiedContents);
  });
};
