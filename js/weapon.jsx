// vim: sts=2 sw=2 ts=2 expandtab

// 武器部分

import React, { Component } from "react";
import { connect } from "react-redux";
import { DragSource, DropTarget } from "react-dnd";

import ItemTypes from "./const/item_types";
import { replace_weapon_object, enable_weapon_object, disable_weapon_object } from "./actions";

import "../css/calc.css";


// TODO: もっとマシな形でどうにかする
const WEAPON_KIND = [
  ["sword", "剣"],
  ["dagger", "短剣"],
  ["spear", "槍"],
  ["axe", "斧"],
  ["stuff", "杖"],
  ["gun", "銃"],
  ["knuckle", "格闘"],
  ["bow", "弓"],
  ["instrument", "楽器"],
  ["blade", "刀"]
];
const SKILL_TYPE = [
  ["none", "無し"],
  ["kj1", "攻刃(小)"],
  ["kj2", "攻刃(中)"],
  ["kj3", "攻刃(大)"],
  ["kj4", "攻刃Ⅱ"],
  ["bw1", "背水(小)"],
  ["bw2", "背水(中)"],
  ["bw3", "背水(大)"],
  ["mkj1", "Ｍ攻刃"],
  ["mkj2", "Ｍ攻刃Ⅱ"],
  ["mbw1", "Ｍ背水"],
  ["mbw2", "Ｍ背水Ⅱ"],
  ["bha", "バハ攻"],
  ["bhah", "バハ攻HP"],
  ["unk1", "ｱﾝﾉｳﾝⅠ"],
  ["unk2", "ｱﾝﾉｳﾝⅡ"],
  ["str", "ｺﾗﾎﾞ枠"]
];
const SKILL_LV = [
  ["0", "無し"],
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6"],
  ["7", "7"],
  ["8", "8"],
  ["9", "9"],
  ["10", "10"],
  ["11", "11"],
  ["12", "12"],
  ["13", "13"],
  ["14", "14"],
  ["15", "15"]
];

// 武器部分全体の構成
export default class Weapon extends Component {
  render() {
    return (
      <section>
        <header className="subtype">武器</header>
        <form name="weapon">
          <table className="grbr" id="weapon_table" ref="weapon_table">
            <thead>
              <WeaponTableHeader />
            </thead>
              <WeaponTableBody />
            <tfoot>
              <WeaponTableHeader />
            </tfoot>
          </table>
        </form>
      </section>
    );
  }
};


// 武器テーブルのヘッダ
class WeaponTableHeader extends Component {
  render() {
    return (
      <tr>
        <th>順</th>
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
    );
  }
};


// 武器並び全体にプロパティを注入する関数
function mapStateToWeaponTableBodyProps(state) {
  return {
    weapon: state.weapon
  }
}

// 武器の並び全体を表わすクラス
class WeaponTableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.weapon.map((val, index) => { return <WeaponRow key={"wr_"+String(index)} index={index} />; })}
      </tbody>
    );
  }
};
WeaponTableBody = connect(mapStateToWeaponTableBodyProps)(WeaponTableBody);


const WeaponRowSource = {
  beginDrag() {
    return {};
  }
};
function collectSourceWeaponRow(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
const WeaponRowTarget = {
  drop(props, monitor) {
    console.log(props.index);
    return {test: "test"};
  }
};
function collectTargetWeaponRow(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}
function mapStateToWeaponRowProps(state, props) {
  // 対象のstateを取りだす
  let target_state = state.weapon[props.index];
  // デフォルト値を代入していく
  let selected = (target_state.selected === undefined) ? false : target_state.selected;
  let name = (target_state.name === undefined) ? "" : target_state.name;
  let atk = (target_state.atk === undefined) ? 0 : target_state.atk;
  let skill_level = (target_state.skill_level === undefined) ? 0 : target_state.skill_level;
  let skill_type = (target_state.skill_type === undefined) ? ["none", "none"] : target_state.skill_type;
  let cosmos = (target_state.cosmos === undefined) ? false : target_state.cosmos;
  let type = (target_state.type === undefined) ? "sword" : target_state.type;
  return { selected, name, atk, skill_level, skill_type, cosmos, type };
}
var mapActionCreatorsToWeaponRowProps = {
  replace_weapon_object: replace_weapon_object,
  enable_weapon_object: enable_weapon_object,
  disable_weapon_object: disable_weapon_object
};
class WeaponRow extends Component {
  create_optfunc(key) {
    return (
      <option value={key[0]} key={key[0]}>{key[1]}</option>
    );
  }

  e_kind = WEAPON_KIND.map(this.create_optfunc);
  e_skill_type = SKILL_TYPE.map(this.create_optfunc);
  e_skill_lv = SKILL_LV.map(this.create_optfunc);

  get_weapon_obj_from_props() {
    let { selected, name, atk, skill_level, skill_type, cosmos, type } = this.props;
    return { selected, name, atk, skill_level, skill_type, cosmos, type };
  }

  change_name(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.name = String(e.target.value);
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  change_atk(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.atk = Number(e.target.value);
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  change_kind(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.type = String(e.target.value);
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  change_skill_type1(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.skill_type = [String(e.target.value), tmp_obj.skill_type[1]];
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  change_skill_type2(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.skill_type = [tmp_obj.skill_type[0], String(e.target.value)];
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  change_skill_lv(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.skill_level = Number(e.target.value);
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  change_select(e) {
    if (e.target.checked) {
      this.props.enable_weapon_object(this.props.index);
    } else {
      this.props.disable_weapon_object(this.props.index);
    }
  }

  render() {
    const { isDragging, connectDragSource, connectDragPreview, connectDropTarget, index } = this.props;
    const { selected, name, atk, skill_level, skill_type, cosmos, type } = this.props;
    return connectDragPreview(connectDropTarget(
      <tr>
        {connectDragSource(<td style={ { cursor: 'move' } }>{index+1}</td>)}
        <td>
          <input type="checkbox" className="weapon_lock" />
        </td>
        <td>
          <input type="checkbox" className="weapon_select" checked={selected} onChange={::this.change_select} />
        </td>
        <td>
          <input type="text" className="weapon_name width150" value={name} onChange={::this.change_name} />
        </td>
        <td>
          <input type="text" className="weapon_atk width50" value={atk} onChange={::this.change_atk} />
        </td>
        <td>
          <select className="weapon_kind" value={type} onChange={::this.change_kind} >
            {this.e_kind}
          </select>
        </td>
        <td>
          <select className="weapon_skill_type1" value={skill_type[0]} onChange={::this.change_skill_type1} >
            {this.e_skill_type}
          </select>
        </td>
        <td>
          <select className="weapon_skill_type2" value={skill_type[1]} onChange={::this.change_skill_type2} >
            {this.e_skill_type}
          </select>
        </td>
        <td>
          <select className="weapon_skill_lv" value={skill_level} onChange={::this.change_skill_lv} >
            {this.e_skill_lv}
          </select>
        </td>
        <td>
          <input type="button" id="up" value="▲" />
          <input type="button" id="down" value="▼" />
          <input type="button" id="ins" value="+" />
          <input type="button" id="del" value="-" />
        </td>
      </tr>
    ));
  }
}
WeaponRow = connect(mapStateToWeaponRowProps, mapActionCreatorsToWeaponRowProps)(WeaponRow);
WeaponRow = DropTarget(ItemTypes.WEAPON, WeaponRowTarget, collectTargetWeaponRow)(WeaponRow);
WeaponRow = DragSource(ItemTypes.WEAPON, WeaponRowSource, collectSourceWeaponRow)(WeaponRow);
