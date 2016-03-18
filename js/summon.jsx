// vim: sts=2 sw=2 ts=2 expandtab

import React, { Component } from "react";


class SummonTable extends Component {

  render() {
    return (
      <form>
        <table className="grbr" id="summon_table">
          <SummonTableHeader />
        </table>
      </form>
    );
  }

};

class SummonTableHeader extends Component {

  render() {
    return (
      <thead>
        <tr>
          <th align="center">L</th>
          <th align="center">選</th>
          <th align="center">召喚名</th>
          <th align="center">攻撃力</th>
          <th align="center" colSpan="2">加護1</th>
          <th align="center" colSpan="2">加護2</th>
          <th align="center">並替・挿入・削除</th>
        </tr>
      </thead>
    );
  }

};


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
};
