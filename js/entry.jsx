// vim: sts=2 sw=2 ts=2 expandtab

// 必要なスタイルシートを読みこむ
import "../css/calc.css";

// 必要なライブラリを読みこむ
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

// 必要なユーザースクリプトを読みこむ
import Calculator from "./calculator.jsx";
import { job_reducer, param_reducer } from "./reducers.js";


const loggerMiddleware = createLogger();

// reducerを組みあわせて新しいreducerを作る
const reducer = combineReducers({ job: job_reducer, params: param_reducer});
// 組みあわせたreducerを使って新しいstoreを作る
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);


// アプリ全体の定義
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}


// 最終的な結果をDOMにして注入する
ReactDOM.render(
   <App />,
  document.getElementById('react_content')
);
