// vim: sts=2 sw=2 ts=2 expandtab

import React, { Component } from "react";

import "../css/calc.css";

class FriendTableHeader extends Component {

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


// フレンド部分
export default class Friend extends Component {

  render() {
    return (
      <section>
        <header className="subtype">フレンド召喚</header>
        <form>
          <table className="grbr" id="friend_table">
            <FriendTableHeader />
          </table>
        </form>
      </section>
    );
  }

};
