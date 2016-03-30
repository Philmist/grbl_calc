// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 計算機全体を表わすコンポーネントを格納したモジュール
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import BasicInformation from "./basic_information.jsx";
import Zenith from "./zenith.jsx";
import Weapon from "./weapon.jsx";
import Summon from "./summon.jsx";
import Friend from "./friend.jsx";

import * as REDCONST from "./const/reducer_type.js";
import calculate_atkval from "./atk_calc.js";
import { fetch_job_data } from "./actions.js";

import "../css/calc.css";


// 結果表示欄を表わすコンポーネント
// 内部では渡されたpropsから実際に計算している
// このpropsで渡されたパラメータは正しい(形式に沿っている)ことが前提
class Result extends Component {
  render() {
    var res = calculate_atkval(this.props.parameter, this.props.job);
    return (
      <section>
        <header className="subtype">結果</header>
        <table className="grbr" id="result_table" ref="result_table">
          <tbody>
            <tr>
              <th>基本値</th>
              <td>{res.basic_atk}</td>
            </tr>
            <tr>
              <th>表示攻撃力</th>
              <td>{res.showed_atk}</td>
            </tr>
            <tr>
              <th>総合攻撃力</th>
              <td>{res.total_atk}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
};


// システム部分
// TODO: ここらへんにセーブとロードの処理
class System extends Component {
  render() {
    return (
      <section>
        <header className="subtype">システム</header>
      </section>
    );
  }
};


// 計算機の骨格propsに計算結果を注入する関数
// propsはreduxのstore stateから読みこまれる
function mapStateToCalculatorBodyProps(state) {
  let basicinfo = state.basicinfo;
  let job = state.job;
  let weapon = state.weapon.filter(function(val) {
    return (val instanceof Object && val.selected);
  });
  let summon = state.summon.filter(function(val) {
    return (val instanceof Object && val.selected);
  });
  return {
    params: {
      rank: basicinfo.rank,  // ランク
      ship_bonus: basicinfo.ship_bonus,  // 騎空艇補正
      hp_percent: basicinfo.hp_percent,  // 現HPの割合(%)
      job: basicinfo.job,  // "data/job_data.json"で定義されている職業(クラス)
      affinity: basicinfo.affinity,  // 相性(none/good/bad)
      zenith: basicinfo.zenith,
      weapon: weapon,  // 武器
      summon: summon,
      atk_bonus: basicinfo.atk_bonus,
      friend: {
      }
    },
    job: job
  }
}
// 計算機の骨格propsに注入されて状態を更新するための関数群のオブジェクト
var mapActionCreatorsToCalculatorBodyProps = {
  fetch_job_data: fetch_job_data,
};
// 計算機の骨格をレンダリングするためのコンポーネント
class CalculatorBody extends Component {
  // コンポーネントが「取りつけられる」時に実行される
  componentDidMount() {
    // ジョブデータを読みこんでから全体をレンダリングする
    this.props.fetch_job_data();
  }
  // 実際に要素をレンダリングするための関数
  render() {
    var { job, params } = this.props;  // var job = this.props.job; (略)
    return (
      <div id="site_box">
        <div id="header_box">
          <header className="titlecap">グランブルーファンタジー攻撃力計算機（新）</header>
        </div>
        <div id="left_box">
          <BasicInformation />
          <Zenith />
          <Result job={job} parameter={params} />
          <System />
        </div>
        <div id="right_box">
          <Weapon />
          <Summon />
          <Friend />
        </div>
      </div>
    );
  }
}
// reduxのstoreと結びつける
CalculatorBody = connect(mapStateToCalculatorBodyProps, mapActionCreatorsToCalculatorBodyProps)(CalculatorBody);
// ドラッグ&ドロップをこのコンポーネントとその中で使われているコンポーネントで使えるようにする
CalculatorBody = DragDropContext(HTML5Backend)(CalculatorBody);
// 外部に装飾されたクラスをエクスポート
export default CalculatorBody;
