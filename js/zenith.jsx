// vim: sts=2 sw=2 ts=2 expandtab

/*
 * Zenith Perkの入力モジュール
 */


import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";

import counterpart from "counterpart";
import Translate from "react-translate-component";
let _t = Translate.translate;

import * as actions from "./actions.js";

import styles from "zenith.css";

// Zenith入力欄全体のコンポーネント
class Zenith extends Component {
  render() {
    return (
      <div>
        <header styleName="title">Zenith Perk</header>
        <table styleName="base" id="zenith_table">
          <tbody>
            <ZenithAttack inputlock={this.props.inputlock} />
            <ZenithWeapon1 inputlock={this.props.inputlock} />
            <ZenithWeapon2 inputlock={this.props.inputlock} />
            <ZenithAttribute inputlock={this.props.inputlock} />
          </tbody>
        </table>
      </div>
    );
  }
};
Zenith = CSSModules(Zenith, styles);
export default connect((state) => { return {inputlock: state.inputlock ? true : false}; })(Zenith);


// ゼニスの★と数値の対応付け配列
const zenith_list = [[0, "zenith.list.zero"], [1, "zenith.list.one"], [2, "zenith.list.two"], [3, "zenith.list.three"], [4, "zenith.list.four"], [5, "zenith.list.five"], [6, "zenith.list.six"]];
// ゼニスのオプションリスト要素を返す関数
function renderZenithSelector(max) {
  var option_list = [];
  for (var i=0; i < max+1; i++) {
    option_list.push(
      <Translate component="option" value={zenith_list[i][0]} key={zenith_list[i][0]} content={zenith_list[i][1]} />
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

  // コンストラクタ
  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  // 実際に要素を作成して返す
  render() {
    var elem = renderZenithSelector(3);
    return (
      <tr styleName="row">
        <Translate component="th" styleName="header" content="zenith.header.attack" />
        <td styleName="cell">
          <select
            onChange={this.handleChange}
            id="zenith_atk"
            value={this.props.atk_value}
            disabled={this.props.inputlock}
            styleName="atk"
          >
            {elem}
          </select>
        </td>
      </tr>
    );
  }
};
// CSS Modulesを繋げる
ZenithAttack = CSSModules(ZenithAttack, styles);
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

  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  // 実際の要素を作成して返す
  render() {
    var elem = renderZenithSelector(6);
    return (
      <tr styleName="row">
        <Translate component="th" styleName="header" content="zenith.header.weapon1" />
        <td styleName="cell">
          <select styleName="weapon" onChange={this.handleChange} value={this.props.zenith_weapon[0]} disabled={this.props.inputlock} >
            {elem}
          </select>
        </td>
      </tr>
    );
  }
}
ZenithWeapon1 = CSSModules(ZenithWeapon1, styles);
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

  // コンストラクタ
  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  // 実際の要素を作って返す関数
  render() {
    var elem = renderZenithSelector(6);
    return (
      <tr styleName="row">
        <Translate component="th" styleName="header" content="zenith.header.weapon2" />
        <td styleName="cell">
          <select styleName="weapon" onChange={this.handleChange} value={this.props.zenith_weapon[1]} disabled={this.props.inputlock} >
            {elem}
          </select>
        </td>
      </tr>
    );
  }
}
ZenithWeapon2 = CSSModules(ZenithWeapon2, styles);
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

  // コンストラクタ
  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  // 実際に要素を作って返す
  render() {
    var elem = renderZenithSelector(3);
    console.log(this.props);
    return (
      <tr styleName="row">
        <Translate component="th" styleName="header" content="zenith.header.attribute" />
        <td styleName="cell">
          <select styleName="attribute" onChange={this.handleChange} value={this.props.attr_value} disabled={this.props.inputlock} >
            {elem}
          </select>
        </td>
      </tr>
    );
  }
}
ZenithAttribute = CSSModules(ZenithAttribute, styles);
// コンポーネントにpropsを注入する
ZenithAttribute = connect(
  (state) => { return { attr_value: state.basicinfo.zenith.attribute }; },
    { set_zenith_attr: actions.set_zenith_attr }
)(ZenithAttribute);
