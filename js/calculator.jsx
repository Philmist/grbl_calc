// vim: sts=2 sw=2 ts=2 expandtab

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

// 結果表示欄
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
function mapStateToCalculatorBodyProps(state) {
  let basicinfo = state.basicinfo;
  let job = state.job;
  let weapon = state.weapon;
  let summon = state.summon;
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

// 計算機の骨格propsに注入されて状態を更新するための関数群
var mapActionCreatorsToCalculatorBodyProps = {
  fetch_job_data: fetch_job_data,
};

// 計算機の骨格
class CalculatorBody extends Component {

  componentDidMount() {
    this.props.fetch_job_data();
  }

  render() {
    var { job, params } = this.props;
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
CalculatorBody = connect(mapStateToCalculatorBodyProps, mapActionCreatorsToCalculatorBodyProps)(CalculatorBody);
CalculatorBody = DragDropContext(HTML5Backend)(CalculatorBody);
export default CalculatorBody;
