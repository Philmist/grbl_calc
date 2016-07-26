// vim: sts=2 sw=2 ts=2 expandtab

/*
 * エントリポイント
 *
 * このファイルから全ての要素が実行される
 */

// 必要なスタイルシートを読みこむ
import "normalize.css/normalize.css";
import "balloon-css/balloon.css";
import "../css/mplus_webfonts.css";
import "../css/global.css";

// 必要なライブラリを読みこむ
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

// 必要なユーザースクリプトを読みこむ
import Calculator from "./calculator.jsx";
import * as reducers from "./reducers.js";


// 適用するミドルウェアを設定する
const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === "development") {
  // reduxのためのロギングミドルウェア
  // これを使うことで開発コンソールにstateの変移が吐きだされる
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}


// reducerを組みあわせて新しいreducerを作る
// このオブジェクトがstateの骨格になるので**うかつに変更しない**
const reducer = combineReducers(
  {
    job: reducers.job_data,
    weapon: reducers.weapon,
    summon: reducers.summon,
    basicinfo: reducers.basicinfo,
    component_state: reducers.component_state,
    inputlock: reducers.inputlock_counter,
    friend: reducers.friend
  }
);
// 組みあわせたreducerを使って新しいredux storeを作る
/*
const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);
*/
const store = createStore(reducer, applyMiddleware(...middlewares));


// アプリ全体の定義
// Providerで囲うことでreact-reduxのconnectが使えるようになる
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}


// 最終的なレンダリング結果をDOMを探して注入する
ReactDOM.render(
   <App />,
  document.getElementById('react_content')
);
