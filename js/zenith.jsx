// vim: sts=2 sw=2 ts=2 expandtab

/*
 * Zenith Perkの入力モジュール
 */

import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "./actions.js";

import "../css/calc.css";


// Zenith入力欄全体のコンポーネント
export default class Zenith extends Component {
  render() {
    return (
      <div>
        <header className="subtype">Zenith Perk</header>
        <table className="grbr" id="zenith_table">
          <tbody>
            <ZenithAttack />
            <ZenithWeapon1 />
            <ZenithWeapon2 />
            <ZenithAttribute />
          </tbody>
        </table>
      </div>
    );
  }
};


// ゼニスの★と数値の対応付け配列
const zenith_list = [[0,"無し"], [1, "★"], [2, "★★"], [3,"★★★"]];
// ゼニスのオプションリスト要素を返す関数
function renderZenithSelector() {
  var option_list = [];
  for (var i=0; i < zenith_list.length; i++) {
    option_list.push(
      <option value={zenith_list[i][0]} key={zenith_list[i][0]}>{zenith_list[i][1]}</option>
    );
  }
  return (option_list);
}


// ゼニス攻撃力入力部分をレンダリングするコンポーネント
class ZenithAttack extends Component {
  // 値が変更された時に呼びだされる
  // propsで渡されている関数に処理を委託する
  handleChange(event) {
    this.props.set_zenith_atk(event.target.value);
  }

  // 実際に要素を作成して返す
  render() {
    var elem = renderZenithSelector();
    return (
      <tr>
        <th>攻撃力</th>
        <td>
          <select onChange={::this.handleChange} id="zenith_atk" value={this.props.atk_value}>
            {elem}
          </select>
        </td>
      </tr>
    );
  }
};
// コンポーネントにpropsを注入する
// redux storeから必要なstateを注入
// アクションモジュールから必要な関数を注入
ZenithAttack = connect(
  (state) => ({ atk_value: state.basicinfo.zenith.atk }),
    { set_zenith_atk: actions.set_zenith_atk }
)(ZenithAttack);


// ゼニス武器値入力部その1
// TODO: もっとマシな実装を考える
class ZenithWeapon1 extends Component {
  // 値が変更された時に呼びだされる関数
  // 処理を委託しているが、この関数は配列をそのまま入れかえるので
  // 配列を渡す必要がある
  handleChange(event) {
    this.props.set_zenith_weapon([event.target.value, this.props.zenith_weapon[1]]);
  }

  // 実際の要素を作成して返す
  render() {
    var elem = renderZenithSelector();
    return (
      <tr>
        <th>得意武器1</th>
        <td>
          <select onChange={::this.handleChange} id="zenith_weapon1" value={this.props.zenith_weapon[0]}>
            {elem}
          </select>
        </td>
      </tr>
    );
  }
}
// コンポーネントにpropsを注入する
// state.basicinfo.zenith.weaponは2要素の配列であることに注意したい
ZenithWeapon1 = connect(
  (state) => ({ zenith_weapon: state.basicinfo.zenith.weapon }),
    { set_zenith_weapon: actions.set_zenith_weapon }
)(ZenithWeapon1);


// ゼニス武器入力部その2
// TODO: もっとマシな(ｒｙ
class ZenithWeapon2 extends Component {
  // 値が変更された時に呼びだされる関数
  // 処理を委託しているが、引数は配列が要求される
  handleChange(event) {
    this.props.set_zenith_weapon([this.props.zenith_weapon[0], event.target.value]);
  }

  // 実際の要素を作って返す関数
  render() {
    var elem = renderZenithSelector();
    return (
      <tr>
        <th>得意武器2</th>
        <td>
          <select onChange={::this.handleChange} id="zenith_weapon2" value={this.props.zenith_weapon[1]}>
            {elem}
          </select>
        </td>
      </tr>
    );
  }
}
// コンポーネントにpropsを注入する
ZenithWeapon2 = connect(
  (state) => ({ zenith_weapon: state.basicinfo.zenith.weapon }),
    { set_zenith_weapon: actions.set_zenith_weapon }
)(ZenithWeapon2);


// ゼニス属性を入力するコンポーネント
class ZenithAttribute extends Component {
  // 値が変更された時に呼びだされる関数
  // 処理はpropsで渡された関数に委託
  handleChange(event) {
    this.props.set_zenith_attr(event.target.value);
  }

  // 実際に要素を作って返す
  render() {
    var elem = renderZenithSelector();
    return (
      <tr>
        <th>属性攻撃力</th>
        <td>
          <select onChange={::this.handleChange} id="zenith_attribute" value={this.props.attr_value}>
            {elem}
          </select>
        </td>
      </tr>
    );
  }
};
// コンポーネントにpropsを注入する
ZenithAttribute = connect(
  (state) => ({ attr_value: state.basicinfo.zenith.attr }),
    { set_zenith_attr: actions.set_zenith_attr }
)(ZenithAttribute);
