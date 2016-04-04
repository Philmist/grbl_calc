// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 武器部分を表示するためのモジュール
 *
 * ロジックと表示がわかれてないのでなんとかしたい
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { DragSource, DropTarget } from "react-dnd";

import ItemTypes from "./const/item_types";
import {
  replace_weapon_object,
  enable_weapon_object,
  disable_weapon_object,
  move_weapon_object,
  insert_weapon_object,
  delete_weapon_object,
  set_weapon_cosmos
} from "./actions";

import "../css/calc.css";


// 武器部分全体の構成
// 若干構成が面倒
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
        <th>選</th>
        <th className="width150">名前</th>
        <th className="width50">攻撃力</th>
        <th>コ</th>
        <th>種別</th>
        <th>スキル1</th>
        <th>スキル2</th>
        <th>LV</th>
        <th>挿入・削除</th>
      </tr>
    );
  }
};


// 武器並び全体にプロパティを注入する関数
// reduxのstoreからstateを取りだす
function mapStateToWeaponTableBodyProps(state) {
  return {
    weapon: state.weapon
  }
}
// 武器の並び全体を表わすクラス
class WeaponTableBody extends Component {
  render() {
    // weaponは配列なのでmapを使って要素を生成する
    return (
      <tbody>
        {this.props.weapon.map((val, index) => { return <WeaponRow key={"wr_"+String(index)} index={index} />; })}
      </tbody>
    );
  }
};
// reduxとクラスを結びつける
WeaponTableBody = connect(mapStateToWeaponTableBodyProps)(WeaponTableBody);


// ドラッグされる側の仕様を記したobject
// var tmp = { foobar }; -> var tmp = { foobar: foobar };
// beginDragだけは必須
const WeaponRowSource = {
  beginDrag(props, monitor) {
    // ドロップ先にデータを渡す
    // このオブジェクトがドロップ先のmonitor.getItem()で渡される
    return { index: props.index };
  },
  endDrag(props, monitor) {
  }
};
// ドラッグされる側のpropsに注入されるobjectを返す関数
// connectDragSource: ドラッグされる対象の要素を囲む関数
// connectDragPreview: ドラッグされる要素の表示要素を囲む関数
// isDragging: ドラッグされている最中かの値
function collectSourceWeaponRow(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
// ドロップされる側の仕様を記したobject
// 関数は全部オプション
const WeaponRowTarget = {
  // ドロップされた時に呼ばれる関数
  drop(props, monitor) {
    // ドラッグされたアイテムが何かをしらべる
    const index_from = monitor.getItem().index;
    // ドロップされた先のアイテムが何かを調べる
    const index_to = props.index;
    // オブジェクトを動かす
    props.move_weapon_object(index_from, index_to);
    return { from: index_from, to: index_to };
  },
  // 要素の上に乗った(hover)時に呼ばれる関数
  hover(props, monitor) {
  }
};
// ドロップされる側が何をpropsに注入するかを記したobjectを返す関数
// connectDropTarget: ドロップされる対象要素を囲う関数
// isOver: ドロップ対象が上に乗っているかどうかの値
function collectTargetWeaponRow(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}
// reduxのstoreから必要なstateを取りだしてpropsに注入するための関数
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
// reduxのaction creatorをpropsに注入するためのobject
var mapActionCreatorsToWeaponRowProps = {
  replace_weapon_object: replace_weapon_object,
  enable_weapon_object: enable_weapon_object,
  disable_weapon_object: disable_weapon_object,
  move_weapon_object: move_weapon_object,
  insert_weapon_object: insert_weapon_object,
  delete_weapon_object: delete_weapon_object,
  set_weapon_cosmos: set_weapon_cosmos
};
// 表示に使うための変数群
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
// 武器の1行を表わすコンポーネント
// フォームはControlled Componentsにしているので割と面倒くさい
class WeaponRow extends Component {
  // 武器のoptionを生成するための関数
  create_optfunc(key) {
    return (
      <option value={key[0]} key={key[0]}>{key[1]}</option>
    );
  }
  // 武器種別
  e_kind = WEAPON_KIND.map(this.create_optfunc);
  // スキル種別
  e_skill_type = SKILL_TYPE.map(this.create_optfunc);
  // スキルレベル
  e_skill_lv = SKILL_LV.map(this.create_optfunc);

  // propsからstoreに保存するためのobjectを取りだすための関数
  // action creatorの実装はobjectを入れかえるものなのでこれが必要
  get_weapon_obj_from_props() {
    let { selected, name, atk, skill_level, skill_type, cosmos, type } = this.props;
    return { selected, name, atk, skill_level, skill_type, cosmos, type };
  }

  // 武器の名前が変更された時に呼ばれる関数
  change_name(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.name = String(e.target.value);
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  // 武器の攻撃力が変更された時に呼ばれる関数
  change_atk(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.atk = Number(e.target.value);
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  // 武器の種別が変更された時に呼ばれる関数
  change_kind(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.type = String(e.target.value);
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  // 武器のスキルタイプ(1つ目)が変更された時に呼ばれる関数
  // 配列を変更するので泥臭いことをしている
  change_skill_type1(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.skill_type = [String(e.target.value), tmp_obj.skill_type[1]];
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  // 武器のスキルタイプ(2つ目)が変更された時に呼ばれる関数
  change_skill_type2(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.skill_type = [tmp_obj.skill_type[0], String(e.target.value)];
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  // 武器のスキルレベルが変更された時に呼ばれる関数
  change_skill_lv(e) {
    let tmp_obj = this.get_weapon_obj_from_props();
    tmp_obj.skill_level = Number(e.target.value);
    this.props.replace_weapon_object(this.props.index, tmp_obj);
  }

  // 武器の選択状態が変更された時に呼ばれる関数
  change_select(e) {
    if (e.target.checked) {
      this.props.enable_weapon_object(this.props.index);
    } else {
      this.props.disable_weapon_object(this.props.index);
    }
  }

  // -ボタンが押された時の動作
  push_delete(e) {
    this.props.delete_weapon_object(this.props.index);
  }

  // +ボタンが押された時の動作
  push_insert(e) {
    this.props.insert_weapon_object(this.props.index);
  }

  // コスモスの変化
  change_cosmos(e) {
    this.props.set_weapon_cosmos(this.props.index, e.target.checked);
  }

  // コンストラクタ
  constructor(props) {
    super(props);
    this.change_select = ::this.change_select;
    this.change_name = ::this.change_name;
    this.change_atk = ::this.change_atk;
    this.change_cosmos = ::this.change_cosmos;
    this.change_kind = ::this.change_kind;
    this.change_skill_type1 = ::this.change_skill_type1;
    this.change_skill_type2 = ::this.change_skill_type2;
    this.change_skill_lv = ::this.change_skill_lv;
    this.push_insert = ::this.push_insert;
    this.push_delete = ::this.push_delete;
  }

  // 実際にレンダリングされる要素を返す関数
  // 名前は固定
  render() {
    // 必要な要素をpropsから変数に取りだす
    const { isDragging, isOver, connectDragSource, connectDragPreview, connectDropTarget, index } = this.props;
    const { selected, name, atk, skill_level, skill_type, cosmos, type } = this.props;
    // つかむところに適用されるスタイルを作る
    // TODO: もっとマシにスタイルを作る
    let style_hundle = { cursor: 'move' };
    style_hundle.color = isOver ? "red" : "blue";
    style_hundle.color = isDragging ? "green" : style_hundle.color;
    // レンダリングされる要素を返す
    // その際、どれがドラッグ&ドロップの対象になるかを指定している
    return connectDragPreview(connectDropTarget(
      <tr>
        {connectDragSource(<td style={ style_hundle }>■</td>)}
        <td>
          <input type="checkbox" className="weapon_select" checked={selected} onChange={this.change_select} />
        </td>
        <td>
          <input type="text" className="weapon_name width150" value={name} onChange={this.change_name} />
        </td>
        <td>
          <input type="text" className="weapon_atk width50" value={atk} onChange={this.change_atk} />
        </td>
        <td>
          <input type="checkbox" className="cosmos" checked={cosmos} onChange={this.change_cosmos} />
        </td>
        <td>
          <select className="weapon_kind" value={type} onChange={this.change_kind} >
            {this.e_kind}
          </select>
        </td>
        <td>
          <select className="weapon_skill_type1" value={skill_type[0]} onChange={this.change_skill_type1} >
            {this.e_skill_type}
          </select>
        </td>
        <td>
          <select className="weapon_skill_type2" value={skill_type[1]} onChange={this.change_skill_type2} >
            {this.e_skill_type}
          </select>
        </td>
        <td>
          <select className="weapon_skill_lv" value={skill_level} onChange={this.change_skill_lv} >
            {this.e_skill_lv}
          </select>
        </td>
        <td>
          <input type="button" id="ins" value="+" onClick={this.push_insert} />
          <input type="button" id="del" value="-" onClick={this.push_delete} />
        </td>
      </tr>
    ));
  }
}
// 結びつけは順番が重要
// 先にドラッグ&ドロップのモジュールと結びつける
WeaponRow = DropTarget(ItemTypes.WEAPON, WeaponRowTarget, collectTargetWeaponRow)(WeaponRow);
WeaponRow = DragSource(ItemTypes.WEAPON, WeaponRowSource, collectSourceWeaponRow)(WeaponRow);
// 次にreduxのstoreと結びつける
WeaponRow = connect(mapStateToWeaponRowProps, mapActionCreatorsToWeaponRowProps)(WeaponRow);
