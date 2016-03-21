// vim: sts=2 sw=2 ts=2 expandtab

import React, { Component } from "react";

import ItemTypes from "./const/item_types";

import "../css/calc.css";


// 武器部分
export default class Weapon extends Component {

  render() {
    return (
      <section>
        <header className="subtype">武器</header>
        <form name="weapon">
          <table className="grbr" id="weapon_tabel" ref="weapon_table">
            <thead>
              <tr>
                <th>鍵</th>
                <th>選</th>
                <th className="width150">名前</th>
                <th className="width50">攻撃力</th>
                <th>種別</th>
                <th>スキル1</th>
                <th>スキル2</th>
                <th>LV</th>
                <th>並替・挿入・削除</th>
              </tr>
            </thead>
            <tbody>
              <WeaponRows />
            </tbody>
          </table>
        </form>
      </section>
    );
  }

};


class WeaponRows extends Component {

  render() {
    return (
      <WeaponRow />
    );
  }

};


class WeaponRow extends Component {

  render() {
    return (
      <tr>
        <td>
          <input type="checkbox" className="weapon_lock" />
        </td>
        <td>
          <input type="checkbox" className="weapon_select" />
        </td>
        <td>
          <input type="text" className="weapon_name width150" />
        </td>
        <td>
          <input type="text" className="weapon_atk width50" />
        </td>
        <td>
          <select className="weapon_kind">
          </select>
        </td>
        <td>
          <select className="weapon_skill_type1">
          </select>
        </td>
        <td>
          <select className="weapon_skill_type2">
          </select>
        </td>
        <td>
          <select className="weapon_skill_lv">
          </select>
        </td>
        <td>
          <input type="button" id="up" value="▲" />
          <input type="button" id="down" value="▼" />
          <input type="button" id="ins" value="+" />
          <input type="button" id="del" value="-" />
        </td>
      </tr>
    );
  }

};
