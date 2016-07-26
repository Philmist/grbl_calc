// vim: sts=2 sw=2 ts=2 expandtab
// Webpack2用のコンフィグファイルです。
// 必ず Webpack@~2.1.0-beta 以上で使ってください。
const path = require("path");
const webpack = require("webpack");

// 運用環境を調べる
// 参考: https://github.com/ModusCreateOrg/budgeting-sample-app-webpack2/blob/master/webpack.config.js
const nodeEnv = process.env.NODE_ENV || "development";
const isProd = nodeEnv === "production";

// ローダー(ファイル読み込み用のスクリプト)の設定
let loaders = [
  {
    // CSS Modules(https://github.com/css-modules/css-modules)
    // を使うための設定
    test: /\.css$/,
    loader: [
      { loader: "style-loader", query: { sourceMap: true } },
      { loader: "css-loader", query: { modules: true, importLoaders: 1, localIdentName: "[name]__[local]___[hash:base64:5]" } }
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
  },
  {
    test: /\.(woff|ttf|eot|svg)$/,
    loader: [
      { loader: "url-loader", query: { limit: 30000, name: "./dist/[name]-[hash].[ext]" } }
    ]
  }
];


// プラグイン(webpackで使われてファイルを変換したりする)の設定
let plugins = [
  new webpack.DefinePlugin({
    "process.env": { NODE_ENV: JSON.stringify(nodeEnv) }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: isProd,
    debug: isProd
  })
];
if (isProd) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: true },
      sourceMap: false
    })
  );
}


// webpack(1|2)は同時にいくつかのファイルをバンドルできます
module.exports = [
  {
    devtool: isProd ? "hidden-source-map" : "cheap-module-source-map",
    entry: {
      js: "./js/entry.jsx",
    },
    output: {
      filename: "./dist/bundle.js",
    },
    module: {
      loaders: loaders,
    },
    resolve: {
      extensions: [".js", ".jsx", ".css"],
      modules: [
        "node_modules", "js", "css"
      ]
    },
    plugins: plugins
  },
  {
    devtool: isProd ? "hidden-source-map" : "cheap-module-source-map",
    entry: "mocha!./js/test/test.js",
    output: {
      filename: "./dist/test_bundle.js",
    },
    module: {
      loaders: loaders,
    },
    resolve: {
      extensions: [".js", ".jsx", ".css"],
      modules: [
        "node_modules", "js", "css"
      ]
    },
    plugins: plugins
  }
];
