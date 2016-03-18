// vim: sts=2 sw=2 ts=2 expandtab
// Webpack2用のコンフィグファイルです。
// 必ず Webpack@~2.1.0-beta 以上で使ってください。
var path = require("path");
var loaders = [
  {
    test: /\.css$/,
    loader: "css",
    query: {
      name: '[name].[ext]'
    }
  },
  {
    test: /\.jsx$/,
    loader: "babel",
    exclude: /(node_modules|bower_components)/,
    query: {
      presets: ['react', 'babel-preset-es2015-native-modules']
    }
  }
];

module.exports = [
  {
    entry: {
      js: "./js/entry.jsx",
    },
    output: {
      filename: "./dist/bundle.js"
    },
    module: {
      loaders: loaders,
    },
    resolve: {
      extensions: [".js", ".jsx", ".css"],
      modules: [
        "node_modules"
      ]
    }
  },
  {
    entry: "mocha!./js/test/test.js",
    output: {
      filename: "./dist/test_bundle.js"
    },
    module: {
      loaders: loaders,
    },
    resolve: {
      extensions: [".js", ".jsx", ".css"],
      modules: [
        "node_modules"
      ]
    },
    externals: {
      jquery: "jQuery"
    }
  }
];
