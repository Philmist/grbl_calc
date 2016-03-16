// vim: sts=2 sw=2 ts=2 expandtab

// 必要なスタイルシートを読みこむ
require("../css/calc.css");

// 必要なライブラリを読みこむ
var React = require("react");
var ReactDOM = require("react-dom");

// 必要なユーザースクリプトを読みこむ
var Calculator = require("./calculator.jsx");


// 最終的な結果をDOMにして注入する
ReactDOM.render(
  <Calculator />,
  document.getElementById('react_content')
);
