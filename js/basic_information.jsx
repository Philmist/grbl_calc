// vim: sts=2 sw=2 ts=2 expandtab

import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "./actions.js";

import "../css/calc.css";

// ジョブ1つを表わす項目
class JobSelector extends Component {

  render() {
    var values = new Array();
    for (var i in this.props.job) {
      values.push(
        <option value={i} key={i}>{this.props.job[i].name}</option>
      );
    }
    return (
      <select id="job" ref="job">
        {values}
      </select>
    );
  }

}


// ジョブ選択コンポーネント
class Job extends Component {

  render() {
    return (
      <table className="grbr" id="job_table">
        <tbody>
          <tr>
            <th>ジョブ</th>
            <td>
              <JobSelector job={this.props.job} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

}


// ランク
class Rank extends Component {

  handleChange(event) {
    this.props.set_rank(event.target.value);
  }

  render() {
    return (
      <tr>
        <th>Rank</th>
        <td>
          <input
            className="width50"
            type="text"
            onChange={::this.handleChange}  // thisをbindしている
            ref="rank" id="rank"
            value={this.props.rank}
          />
        </td>
      </tr>
    );
  }

}
Rank = connect(
  (state) => ({ rank: state.basicinfo.rank }),
    { set_rank: actions.set_rank }
)(Rank);


// 艇補正
class ShipBonus extends Component {

  handleChange(event) {
    this.props.set_ship_bonus(event.target.value);
  }

  render() {
    return (
      <tr>
        <th>騎空艇補正</th>
        <td>
          <input
            className="width50"
            type="text"
            onChange={::this.handleChange}
            ref="ship_bonus" id="ship_bonus"
            value={this.props.ship_bonus}
          />
        </td>
      </tr>
    );
  }

}
ShipBonus = connect(
  (state) => ({ ship_bonus: state.basicinfo.ship_bonus }),
    { set_ship_bonus: actions.set_ship_bonus }
)(ShipBonus);


// 属性補正
class AttributeBonus extends Component {

  handleChange() {
  }

  render() {
    return (
      <tr>
        <th>属性補正</th>
        <td>
          <select onchange={::this.handleChange} ref="attribute_type" id="attribute_type">
            <option value="normal">無し</option>
            <option value="good">有利</option>
            <option value="bad">不利</option>
          </select>
        </td>
      </tr>
    );
  }

}


// HP%
class HPPercent extends Component {

  handleChange(event) {
    this.props.set_hp_percent(event.target.value);
  }

  render() {
    return (
      <tr>
        <th>HP/MAXHP</th>
        <td>
          <input
            className="width50" type="text"
            onChange={::this.handleChange}
            ref="hp_percent" id="hp_percent"
            value={this.props.hp_percent}
          />
          %
        </td>
      </tr>
    );
  }

}
HPPercent = connect(
  (state) => ({ hp_percent: state.basicinfo.hp_percent }), { set_hp_percent: actions.set_hp_percent }
)(HPPercent);


// プレイヤー情報
class PlayerStats extends Component {

  render() {
    return (
      <table className="grbr" id="info_table">
        <tbody>
          <Rank />
          <ShipBonus />
          <AttributeBonus />
          <HPPercent />
        </tbody>
      </table>
    );
  }

}


// 攻撃力ボーナス
class AtkBonus extends Component {

  handleChange(event) {
  }

  render() {
    return (
      <table className="grbr" id="bonus_table">
        <tbody>
          <tr>
            <th rowSpan="2">発動中の<br />攻撃力ボーナス</th>
            <td>
              <input className="width25" type="text" onChange={this.handleChange}
                ref="atk_bonus_percent" id="atk_bonus_percent" />
              %
            </td>
          </tr>
          <tr>
            <td>
              <input className="width50" type="text" onChange={this.handleChange}
                ref="atk_bonus_value" id="atk_bonus_value" />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

}


// 基礎情報入力欄
class BasicInformation extends Component {
  render() {
    return (
      <section>
        <header className="subtype">基本情報</header>
        <PlayerStats />
        <AtkBonus />
        <Job job={this.props.job} />
      </section>
    );
  }
}
export default connect((state) => ({ job: state.job }))(BasicInformation);
