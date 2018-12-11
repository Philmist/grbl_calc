// vim: sts=2 sw=2 ts=2 expandtab
// Webpack4用のコンフィグファイルです。
const path = require("path");
const webpack = require("webpack");

// 運用環境を調べる
// 参考: https://github.com/ModusCreateOrg/budgeting-sample-app-webpack2/blob/master/webpack.config.js
const nodeEnv = process.env.NODE_ENV || "development";
const isProd = nodeEnv === "production";
const strProd = isProd ? "production" : "development";

// ローダー(ファイル読み込み用のスクリプト)の設定
let rules = [
  {
    // CSS Modules(https://github.com/css-modules/css-modules)
    // を使うための設定
    test: /\.css$/,
    use: 
      [
        { loader: "style-loader", options: { sourceMap: true } },
        { loader: "css-loader", options: { modules: true, importLoaders: 1, localIdentName: "[name]__[local]___[hash:base64:5]" } }
      ]
  },
  {
    // JSXとJSを使うための設定 (Babelで変換します)
    // 正規表現なので.jsと.jsxの両方がひっかかります
    test: /\.jsx?$/,
    use: [{ 
      loader: "babel-loader",
      // node_modulesとかの中を変換されてもちょっと困る
      options: {
        plugins: [
          ['@babel/transform-runtime', { useESModules: true }],
          '@babel/plugin-proposal-function-bind'
        ],
        // プリセットは順序が大事
        presets: [
          '@babel/preset-react',
          ['@babel/preset-env', { modules: false }]
        ],
      }
    }]
  },
  {
    test: /\.(woff|ttf|eot|svg)$/,
    use: [
      { loader: "url-loader", query: { limit: 30000, name: "./dist/[name]-[hash].[ext]" } }
    ]
  }
];



// webpack(1|2)は同時にいくつかのファイルをバンドルできます
module.exports = [
  {  // 計算機のメイン(エントリポイント)
    devtool: isProd ? "hidden-source-map" : "source-map",
    entry: {
      js: "./js/entry.jsx",
    },
    output: {
      filename: "./dist/bundle.js",
    },
    module: {
      rules: rules,
      noParse: /(node_modules|bower_components)/
    },
    resolve: {
      extensions: [".js", ".jsx", ".css"],
      modules: [
        "node_modules", "js", "css"
      ]
    },
    mode: strProd
  },
  {  // 編成計算機のWebWorkerファイル(必要最低限)
    devtool: isProd ? "hidden-source-map" : "source-map",
    entry: {
      js: "./js/worker_optimizer.js",
    },
    output: {
      filename: "./dist/optimizer.js",
    },
    module: {
      rules: rules,
      noParse: /(node_modules|bower_components)/
    },
    resolve: {
      extensions: [".js"],
      modules: [
        "node_modules", "js"
      ]
    },
    mode: strProd
  }
];
