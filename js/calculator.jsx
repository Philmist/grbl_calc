// vim: sts=2 sw=2 ts=2 expandtab

import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import BasicInformation from "./basic_information.jsx";
import Zenith from "./zenith.jsx";
import Weapon from "./weapon.jsx";
import Summon from "./summon.jsx";
import Friend from "./friend.jsx";

import { calculate_atkval } from "./calc.js";


// 結果表示欄
class Result extends Component {

  render() {
    let res = calculate_atkval(this.props.parameter);
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


// 計算機の骨格
class CalculatorBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      param: {
        rank: 1,  // ランク
        ship_bonus: 0,  // 騎空艇補正
        hp_percent: 100,  // 現HPの割合(%)
        job: "fighter",  // "data/job_data.json"で定義されている職業(クラス)
        affinity: "none",  // 相性(none/good/bad)
        zenith: {  // Zenith Perk
          atk: 0,  // 攻撃力の星(0-3)
          weapon: [0, 0],  // 武器1, 武器2の星(0-3)
          attribute: 0  // 属性攻撃力の星(0-3)
        },
        weapon: [],  // 武器
        summon: [],
        atk_bonus: {  // 攻撃力ボーナス
          percent: 0,  // %
          value: 0  // 値
        },
        friend: {
        }
      }
    };

  }

  updateParams(obj) {
    this.setState({param: Object.assign(this.state.param, obj)});
  }

  setAllParams(param) {
    this.setState({param: param});
  }

  render() {
    return (
      <div id="site_box">
        <div id="header_box">
          <header className="titlecap">グランブルーファンタジー攻撃力計算機（新）</header>
        </div>
        <div id="left_box">
          <BasicInformation parameter={this.state.param} onChangeParameter={this.updateParams} />
          <Zenith parameter={this.state.param} onChangeParameter={this.updateParams} />
          <Result parameter={this.state.param} />
          <System parameter={this.state.param} setParamFunc={this.setAllParams} />
        </div>
        <div id="right_box">
          <Weapon parameter={this.state.param} onChangeParameter={this.updateParams} />
          <Summon parameter={this.state.param} onChangeParameter={this.updateParams} />
          <Friend parameter={this.state.param} onChangeParameter={this.updateParams} />
        </div>
      </div>
    );
  }
};


// デコレートしたクラスをエクスポート
export default DragDropContext(HTML5Backend)(CalculatorBody);
