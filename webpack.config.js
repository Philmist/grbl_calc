var css_loader = { test: /\.css$/, loader: "style!css" }
var jsx_loader = { test: /\.jsx$/, loader: "jsx-loader"}

module.exports = [
  {
    entry: "./js/entry.jsx",
    output: {
      path: __dirname,
      filename: "./dist/bundle.js"
    },
    module: {
      loaders: [
        css_loader, jsx_loader
      ]
    },
    externals: {
      jquery: "jQuery"
    }
  },
  {
    entry: "mocha!./js/test/test.js",
    output: {
      path: __dirname,
      filename: "./dist/test_bundle.js"
    },
    module: {
      loaders: [
        css_loader, jsx_loader
      ]
    },
    externals: {
      jquery: "jQuery"
    }
  }
];
