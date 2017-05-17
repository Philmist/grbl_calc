// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 計算機全体を表わすコンポーネントを格納したモジュール
 */

import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import counterpart from "counterpart";
import Translate from "react-translate-component";
let _t = Translate.translate;

import BasicInformation from "./basic_information.jsx";
import Zenith from "./zenith.jsx";
import Weapon from "./weapon.jsx";
import Summon from "./summon.jsx";
import Friend from "./friend.jsx";
import System from "./system.jsx";
import Optimizer from "./optimizer.jsx";

import * as REDCONST from "./const/reducer_type.js";
import { calculate_atkval } from "./atk_calc.js";
import { fetch_job_data } from "./actions.js";

import styles from "calculator.css";


// 結果表示欄を表わすコンポーネント
// 内部では渡されたpropsから実際に計算している
// このpropsで渡されたパラメータは正しい(形式に沿っている)ことが前提
class Result extends Component {

  // コンストラクタ
  // 主にstateの初期化
  constructor(props) {
    super(props);
    this.state = {
      before: {
        basic_atk: 0,
        showed_atk: 0,
        total_atk: 0
      },
      after: {
        basic_atk: 0,
        showed_atk: 0,
        total_atk: 0
      }
    };
  }

  // コンポーネントのpropsが更新された時に呼びだされる
  // ここではstateに計算結果の前後を入れる
  componentWillReceiveProps(nextProps) {
    let calc_result = calculate_atkval(nextProps.parameter, this.props.job);
    // もしも総合攻撃力が更新されたのならstateを更新する
    if (this.state.after.total_atk != calc_result.total_atk) {
      this.setState({ before: Object.assign({}, this.state.after) });
      this.setState({ after: {
        basic_atk: calc_result.basic_atk,
        showed_atk: calc_result.showed_atk,
        total_atk: calc_result.total_atk
      }});
    }
  }

  // 実際に描画する
  render() {
    let res = this.state.after;
    let bef = this.state.before;
    let t_header = "calculator.result.";
    return (
      <section>
        <Translate component="header" styleName="title" content={ t_header+"title" } />
        <table styleName="base">
          <tbody>
            <tr styleName="row">
              <Translate component="th" styleName="header" content={ t_header+"basic_atk" } />
              <td styleName="result">{res.basic_atk} ({res.basic_atk - bef.basic_atk})</td>
            </tr>
            <tr styleName="row">
              <Translate component="th" styleName="header" content={ t_header+"showed_atk" } />
              <td styleName="result">{res.showed_atk} ({res.showed_atk - bef.showed_atk})</td>
            </tr>
            <tr styleName="row">
              <Translate component="th" styleName="header" content={ t_header+"total_atk" } />
              <td styleName="result">{res.total_atk} ({res.total_atk - bef.total_atk})</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}
Result = CSSModules(Result, styles);


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
  let friend = state.friend.filter(function(val) {
    return (val instanceof Object && val.selected);
  });
  friend = friend[0] ? friend[0] : null;
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
      friend: friend
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
    let { job, params } = this.props;  // var job = this.props.job; (略)
    return (
      <div styleName="whole_app">
        <div styleName="title_header">
          <Translate component="header" styleName="whole_title" content="calculator.title" />
        </div>
        <div styleName="calculator_box">
          <div styleName="calculator_row">
            <div styleName="left_box">
              <BasicInformation />
              <Zenith />
              <Result job={job} parameter={params} />
              <System />
            </div>
            <div styleName="right_box">
              <Weapon />
              <Summon />
              <Friend />
            </div>
          </div>
          <div styleName="footer_box">
            <Optimizer />
          </div>
        </div>
        <div styleName="footer">
          <ul styleName="nav">
            <li styleName="nav-item"><a href="http://hibin0.web.fc2.com/grbr_weapon_calc/weapon_calc.html">オススメ装備に自信ニキ</a></li>
            <li styleName="nav-item"><a href="http://hibin0.web.fc2.com/">トップページ</a></li>
          </ul>
          <dl styleName="comment">
            <dt>開発中</dt>
            <dd styleName="copyright">
              <ul styleName="copyright-list">
                <li styleName="copyright-list-item">Twitter: @hibino_naoki</li>
                <li styleName="copyright-list-item">グラブルID: 39097 (日比野)</li>
              </ul>
            </dd>
            <dt>ライセンス</dt>
            <dd>MIT(詳細は <a href="https://github.com/grbl-calculator-project/grbl_calc">GitHub</a> )</dd>
          </dl>
        </div>
      </div>
    );
  }
}
CalculatorBody = CSSModules(CalculatorBody, styles);
// reduxのstoreと結びつける
CalculatorBody = connect(mapStateToCalculatorBodyProps, mapActionCreatorsToCalculatorBodyProps)(CalculatorBody);
// ドラッグ&ドロップをこのコンポーネントとその中で使われているコンポーネントで使えるようにする
CalculatorBody = DragDropContext(HTML5Backend)(CalculatorBody);
// 外部に装飾されたクラスをエクスポート
export default CalculatorBody;
