// vim: sts=2 sw=2 ts=2 expandtab

import React, { Component } from "react";

import "../css/calc.css";


// optionのvalueと中身の対応
// TODO: なんとかして分離したい
const SUMMON_KIND = [
  ["none", "無し"],
  ["attribute", "属性"],
  ["character", "キャラ"],
  ["magna", "マグナ"],
  ["unknown", "ｱﾝﾉｳﾝ"],
  ["zeus", "ｾﾞｳｽ枠"]
];


class SummonTable extends Component {
  render() {
    return (
      <form>
        <table className="grbr" id="summon_table">
          <thead>
            <SummonTableHeader />
          </thead>
          <tbody>
            <SummonTableRows />
          </tbody>
          <tfoot>
            <SummonTableHeader />
          </tfoot>
        </table>
      </form>
    );
  }
}

class SummonTableHeader extends Component {
  render() {
    return (
      <tr>
        <th align="center">L</th>
        <th align="center">選</th>
        <th align="center">召喚名</th>
        <th align="center">攻撃力</th>
        <th align="center" colSpan="2">加護1</th>
        <th align="center" colSpan="2">加護2</th>
        <th align="center">並替・挿入・削除</th>
      </tr>
    );
  }
}

class SummonTableRows extends Component {
  render() {
    return (
      <SummonTableRow />
    );
  }
}

function create_optfunc(key) {
  return (
    <option value={key[0]} key={key[0]}>{key[1]}</option>
  );
}


class SummonTableRow extends Component {

  skind = SUMMON_KIND.map((i) => create_optfunc(i));

  render() {
    return (
      <tr className="summon_tr">
        <td><input type="checkbox" className="summon_lock" value="lock" /></td>
        <td><input type="checkbox" className="summon_select" value="select" /></td>
        <td><input type="text" className="summon_name width150" /></td>
        <td><input type="text" className="summon_atk width50" /></td>
        <td>
          <select className="summon_kind1">
            {this.skind}
          </select>
        </td>
        <td><input type="text" className="summon_percent1 width25" />%</td>
        <td>
          <select className="summon_kind2">
            {this.skind}
          </select>
        </td>
        <td><input type="text" className="summon_percent2 width25" />%</td>
        <td>
          <input type="button" id="up" value="▲" />
          <input type="button" id="down" value="▼" />
          <input type="button" id="ins" value="+" />
          <input type="button" id="del" value="-" />
        </td>
      </tr>
    );
  }
}


// 召喚獣部分
export default class Summon extends Component {
  render() {
    return (
      <section>
        <header className="subtype">召喚獣</header>
        <SummonTable parameter={this.props.parameter} onChangeParameter={this.props.onChangeParameter} />
      </section>
    );
  }
}
