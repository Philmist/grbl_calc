// vim: sts=2 sw=2 ts=2 expandtab
// Webpack2用のコンフィグファイルです。
// 必ず Webpack@~2.1.0-beta 以上で使ってください。
var path = require("path");
var loaders = [
  {
    // CSS Modules(https://github.com/css-modules/css-modules)
    // を使うための設定
    test: /\.css$/,
    loader: [
      "style",
      { loader: "css", query: {name: '[name].[ext]'} }
    ]
  },
  {
    // JSXとJSを使うための設定 (Babel6で変換します)
    // 正規表現なので.jsと.jsxの両方がひっかかります
    test: /\.jsx?$/,
    loader: "babel",
    // node_modulesとかの中を変換されてもちょっと困る
    exclude: /(node_modules|bower_components)/,
    query: {
      plugins: ['transform-runtime'],
      // プリセットは順序が大事
      presets: ['react', 'es2015-webpack', 'stage-0']
    }
  }
];

// webpack(1|2)は同時にいくつかのファイルをバンドルできます
module.exports = [
  {
    devtool: "eval",
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
