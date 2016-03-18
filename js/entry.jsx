// vim: sts=2 sw=2 ts=2 expandtab

// 必要なスタイルシートを読みこむ
import "../css/calc.css";

// 必要なライブラリを読みこむ
import React from "react";
import ReactDOM from "react-dom";

// 必要なユーザースクリプトを読みこむ
import Calculator from "./calculator.jsx";


// 最終的な結果をDOMにして注入する
ReactDOM.render(
  <Calculator />,
  document.getElementById('react_content')
);
