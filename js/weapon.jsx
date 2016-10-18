// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 武器部分を表示するためのモジュール
 *
 * ロジックと表示がわかれてないのでなんとかしたい
 */

import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";
import { DragSource, DropTarget } from "react-dnd";

import counterpart from "counterpart";
import Translate from "react-translate-component";
let _t = Translate.translate;

import ItemTypes from "./const/item_types";
import { WEAPON_KIND, SKILL_TYPE, SKILL_LV } from "./const/weapon_type";
import {
  enable_weapon_object,
  disable_weapon_object,
  move_weapon_object,
  insert_weapon_object,
  delete_weapon_object,
  set_weapon_cosmos,
  set_weapon_lock,
  set_weapon_name,
  set_weapon_type,
  set_weapon_atk_value,
  set_weapon_skill_type,
  set_weapon_skill_lv
} from "./actions";

import WeaponInput from "./weapon_input.jsx";
import styles from "weapon.css";


// 武器部分全体の構成
// 若干構成が面倒
class Weapon extends Component {
  render() {
    return (
      <section>
        <Translate component="header" styleName="title" content="weapon.title" />
        <form name="weapon">
          <table styleName="base" id="weapon_table">
            <thead>
              <WeaponTableHeader inputlock={this.props.inputlock} />
            </thead>
              <WeaponTableBody inputlock={this.props.inputlock} />
            <tfoot>
              <WeaponTableHeader inputlock={this.props.inputlock} />
            </tfoot>
          </table>
        </form>
      </section>
    );
  }
};
// 色々繋げる
Weapon = CSSModules(Weapon, styles);
export default connect((state) => { return { inputlock: state.inputlock ? true : false }; })(Weapon);


// 武器テーブルのヘッダ
class WeaponTableHeader extends Component {
  render() {
    let t_header = "weapon.header.";
    return (
      <tr styleName="header">
        <Translate component="th" content={ t_header+"list" } />
        <Translate component="th" content={ t_header+"select" } />
        <Translate component="th" content={ t_header+"lock" } />
        <Translate component="th" content={ t_header+"name" } />
        <Translate component="th" content={ t_header+"value" } />
        <Translate component="th" content={ t_header+"cosmos" } />
        <Translate component="th" content={ t_header+"type" } />
        <Translate component="th" content={ t_header+"skill1" } />
        <Translate component="th" content={ t_header+"skill2" } />
        <Translate component="th" content={ t_header+"lv" } />
        <Translate component="th" content={ t_header+"add_del" } />
      </tr>
    );
  }
};
WeaponTableHeader = CSSModules(WeaponTableHeader, styles);


// 武器並び全体にプロパティを注入する関数
// reduxのstoreからstateを取りだす
function mapStateToWeaponTableBodyProps(state) {
  // どれが最初のenabledな武器かをチェックする
  return {
    weapon: state.weapon  // indexを使うために必要
  }
}
// 武器の並び全体を表わすクラス
class WeaponTableBody extends Component {
  render() {
    // 最初にselectedな武器のindex
    let selected_index = -1;
    // weaponは配列なのでmapを使って要素を生成する
    return (
      <tbody>
        {this.props.weapon.map((val, index) => {
          let first_selected = ((selected_index === -1 && val.selected) ? true : false);
          if (first_selected) { selected_index = index; }
          return <WeaponRow
            key={"wr_"+String(index)}
            inputbox_id={"wr_ib_"+String(index)}
            index={index}
            inputlock={this.props.inputlock}
            first_selected={first_selected} />;
        })}
      </tbody>
    );
  }
};
// reduxとクラスを結びつける
WeaponTableBody = CSSModules(WeaponTableBody, styles);
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
  let locked = (target_state.locked == undefined) ? false : target_state.locked;
  let name = (target_state.name === undefined) ? "" : target_state.name;
  let atk = (target_state.atk === undefined) ? 0 : target_state.atk;
  let skill_level = (target_state.skill_level === undefined) ? 0 : target_state.skill_level;
  let skill_type = (target_state.skill_type === undefined) ? ["none", "none"] : target_state.skill_type;
  let cosmos = (target_state.cosmos === undefined) ? false : target_state.cosmos;
  let type = (target_state.type === undefined) ? "sword" : target_state.type;
  return { selected, name, atk, skill_level, skill_type, cosmos, type, locked };
}
// reduxのaction creatorをpropsに注入するためのobject
var mapActionCreatorsToWeaponRowProps = {
  enable_weapon_object,
  disable_weapon_object,
  move_weapon_object,
  insert_weapon_object,
  delete_weapon_object,
  set_weapon_name,
  set_weapon_cosmos,
  set_weapon_lock,
  set_weapon_atk_value,
  set_weapon_type,
  set_weapon_skill_type,
  set_weapon_skill_lv
};

// 武器の1行を表わすコンポーネント
// フォームはControlled Componentsにしているので割と面倒くさい
class WeaponRow extends Component {
  // 武器のoptionを生成するための関数
  create_optfunc(type, key) {
    return (
      <Translate component="option" value={key} key={key} content={ "weapon."+type+"."+key } />
    );
  }
  // function.prototype.bind : 関数オブジェクトの引数を束縛するための関数(第1引数はthis, 第2引数以降がそれ以降)
  // 武器種別
  e_kind = WEAPON_KIND.map(this.create_optfunc.bind(this, "kind"));
  // スキル種別
  e_skill_type = SKILL_TYPE.map(this.create_optfunc.bind(this, "skill"));
  // スキルレベル
  e_skill_lv = SKILL_LV.map(this.create_optfunc.bind(this, "lv"));

  // 武器の名前が変更された時に呼ばれる関数
  // イベント経由じゃなくて直に変更された値が来る
  change_name(new_name) {
    this.props.set_weapon_name(this.props.index, new_name);
  }

  // 武器の攻撃力が変更された時に呼ばれる関数
  change_atk(e) {
    this.props.set_weapon_atk_value(this.props.index, e.target.value);
  }

  // 武器の種別が変更された時に呼ばれる関数
  change_kind(e) {
    this.props.set_weapon_type(this.props.index, e.target.value);
  }

  // 武器のスキルタイプ(1つ目)が変更された時に呼ばれる関数
  // 配列を変更するので泥臭いことをしている
  change_skill_type1(e) {
    this.props.set_weapon_skill_type(this.props.index, 0, e.target.value);
  }

  // 武器のスキルタイプ(2つ目)が変更された時に呼ばれる関数
  change_skill_type2(e) {
    this.props.set_weapon_skill_type(this.props.index, 1, e.target.value);
  }

  // 武器のスキルレベルが変更された時に呼ばれる関数
  change_skill_lv(e) {
    this.props.set_weapon_skill_lv(this.props.index, e.target.value);
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

  // 鍵チェックボックスの変化
  change_locked(e) {
    this.props.set_weapon_lock(this.props.index, e.target.checked);
  }

  // 武器名のサジェストでパラメータを一斉変更
  suggest_selected(suggestion) {
    console.log(suggestion);
    if (suggestion.skill && suggestion.skill instanceof Array) {
      [...Array(2).keys()].forEach((i) => { this.props.set_weapon_skill_type(this.props.index, i, "none"); });
      suggestion.skill.forEach((v, i) => { this.props.set_weapon_skill_type(this.props.index, i, v); });
    }
    if (suggestion.type) {
      this.props.set_weapon_type(this.props.index, suggestion.type);
    }
    this.props.set_weapon_cosmos(this.props.index, suggestion.cosmos);
    this.props.set_weapon_atk_value(this.props.index, suggestion.atk);
  }

  // コンストラクタ
  constructor(props) {
    super(props);
    this.change_select = ::this.change_select;
    this.change_locked = ::this.change_locked;
    this.change_name = ::this.change_name;
    this.change_atk = ::this.change_atk;
    this.change_cosmos = ::this.change_cosmos;
    this.change_kind = ::this.change_kind;
    this.change_skill_type1 = ::this.change_skill_type1;
    this.change_skill_type2 = ::this.change_skill_type2;
    this.change_skill_lv = ::this.change_skill_lv;
    this.push_insert = ::this.push_insert;
    this.push_delete = ::this.push_delete;
    this.suggest_selected = ::this.suggest_selected;
  }

  // 実際にレンダリングされる要素を返す関数
  // 名前は固定
  render() {
    // 必要な要素をpropsから変数に取りだす
    const { isDragging, isOver, connectDragSource, connectDragPreview, connectDropTarget, index, inputlock } = this.props;
    const { selected, name, atk, skill_level, skill_type, cosmos, type, locked, first_selected } = this.props;
    // つかむところに適用されるスタイルを作る
    let style_hundle = "hundle";
    style_hundle = isOver ? "hundle_on_over" : style_hundle;
    style_hundle = isDragging ? "hundle_dragging" : style_hundle;
    // 最初に選択されている武器なら背景を赤にする
    let row_style = first_selected ? "selected" : "unselected";
    // レンダリングされる要素を返す
    // その際、どれがドラッグ&ドロップの対象になるかを指定している
    return connectDragPreview(connectDropTarget(
      <tr styleName={ row_style } >
        {connectDragSource(<td styleName={ style_hundle }>■</td>)}
        <td>
          <input type="checkbox" styleName="select" checked={selected} onChange={this.change_select} disabled={inputlock} />
        </td>
        <td>
          <input type="checkbox" styleName="lock" checked={locked} onChange={this.change_locked} disabled={inputlock} />
        </td>
        <td>
          <WeaponInput
            inputbox_id={this.props.inputbox_id}
            suggest_selected={this.suggest_selected}
            value={name}
            on_change={this.change_name} />
        </td>
        <td>
          <input type="number" styleName="atk" value={atk} onChange={this.change_atk} disabled={inputlock} />
        </td>
        <td>
          <input type="checkbox" styleName="cosmos" checked={cosmos} onChange={this.change_cosmos} disabled={inputlock} />
        </td>
        <td>
          <select styleName="kind" value={type} onChange={this.change_kind} disabled={inputlock} >
            {this.e_kind}
          </select>
        </td>
        <td>
          <select styleName="type" value={skill_type[0]} onChange={this.change_skill_type1} disabled={inputlock} >
            {this.e_skill_type}
          </select>
        </td>
        <td>
          <select styleName="type" value={skill_type[1]} onChange={this.change_skill_type2} disabled={inputlock} >
            {this.e_skill_type}
          </select>
        </td>
        <td>
          <select styleName="lv" value={skill_level} onChange={this.change_skill_lv} disabled={inputlock} >
            {this.e_skill_lv}
          </select>
        </td>
        <td>
          <input type="button" styleName="button" id="ins" value="+" onClick={this.push_insert} disabled={inputlock} />
          <input type="button" styleName="button" id="del" value="-" onClick={this.push_delete} disabled={inputlock} />
        </td>
      </tr>
    ));
  }
}
// 結びつけは順番が重要
// CSS Modulesと結びつける
WeaponRow = CSSModules(WeaponRow, styles);
// 先にドラッグ&ドロップのモジュールと結びつける
WeaponRow = DropTarget(ItemTypes.WEAPON, WeaponRowTarget, collectTargetWeaponRow)(WeaponRow);
WeaponRow = DragSource(ItemTypes.WEAPON, WeaponRowSource, collectSourceWeaponRow)(WeaponRow);
// 次にreduxのstoreと結びつける
WeaponRow = connect(mapStateToWeaponRowProps, mapActionCreatorsToWeaponRowProps)(WeaponRow);

/*
<input type="text" styleName="name" value={name} onChange={this.change_name} disabled={inputlock} />
*/
