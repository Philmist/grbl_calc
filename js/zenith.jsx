// vim: sts=2 sw=2 ts=2 expandtab

import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "./actions.js";

import "../css/calc.css";


// Zenith入力欄
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


function renderZenithSelector() {
  var zenith_list = [[0,"無し"], [1, "★"], [2, "★★"], [3,"★★★"]];
  var option_list = [];
  for (var i=0; i < zenith_list.length; i++) {
    option_list.push(
      <option value={zenith_list[i][0]} key={zenith_list[i][0]}>{zenith_list[i][1]}</option>
    );
  }
  return (option_list);
}


class ZenithAttack extends Component {
  handleChange(event) {
    this.props.set_zenith_atk(event.target.value);
  }
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
ZenithAttack = connect(
  (state) => ({ atk_value: state.basicinfo.zenith.atk }),
    { set_zenith_atk: actions.set_zenith_atk }
)(ZenithAttack);


class ZenithWeapon1 extends Component {
  handleChange(event) {
    this.props.set_zenith_weapon([event.target.value, this.props.zenith_weapon[1]]);
  }
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
ZenithWeapon1 = connect(
  (state) => ({ zenith_weapon: state.basicinfo.zenith.weapon }),
    { set_zenith_weapon: actions.set_zenith_weapon }
)(ZenithWeapon1);


class ZenithWeapon2 extends Component {
  handleChange(event) {
    this.props.set_zenith_weapon([this.props.zenith_weapon[0], event.target.value]);
  }
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
ZenithWeapon2 = connect(
  (state) => ({ zenith_weapon: state.basicinfo.zenith.weapon }),
    { set_zenith_weapon: actions.set_zenith_weapon }
)(ZenithWeapon2);


class ZenithAttribute extends Component {
  handleChange(event) {
    this.props.set_zenith_attr(event.target.value);
  }
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
ZenithAttribute = connect(
  (state) => ({ attr_value: state.basicinfo.zenith.attr }),
    { set_zenith_attr: actions.set_zenith_attr }
)(ZenithAttribute);
