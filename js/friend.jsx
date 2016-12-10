// vim: sts=2 sw=2 ts=2 expandtab

/*
 * フレンド部分をレンダリングするコンポーネント
 *
 * 超が付くほど雑な上に間違いやすい実装なので注意
 */

import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";
import { DragSource, DropTarget } from "react-dnd";

import counterpart from "counterpart";
import Translate from "react-translate-component";
let _t = Translate.translate;

import { SummonRow_ } from "./summon";
import {
  enable_friend_object, disable_friend_object,
  move_friend_object, insert_friend_object, delete_friend_object,
  set_friend_lock, set_friend_name, set_friend_atk_value, set_friend_skill_percent, set_friend_skill_type
} from "./actions";
import ItemTypes from "./const/item_types";

import styles from "friend.css";

// テーブルヘッダ
class TableHeader extends Component {
  render() {
    let t_header = "summon.header.";  // 召喚部分を再利用する
    return (
      <tr styleName="header">
        <Translate component="th" content={ t_header+"list" } />
        <Translate component="th" content={ t_header+"select" } />
        <Translate component="th" content={ t_header+"lock" } />
        <Translate component="th" content={ t_header+"name" } />
        <Translate component="th" content={ t_header+"value" } />
        <Translate component="th" content={ t_header+"type1" } colSpan="2" />
        <Translate component="th" content={ t_header+"type2" } colSpan="2" />
        <Translate component="th" content={ t_header+"add_del" } />
      </tr>
    );
  }
}
TableHeader = CSSModules(TableHeader, styles);


/* テーブルの本体 */
/* ほとんどが召喚のコピペ */

// 後述の召喚表本体のpropsに注入するstate
function mapStateToTableBodyProps(state) {
  return {
    friend: state.friend,
    inputlock: state.inputlock ? true : false,
    checked_length: (state.friend.filter( i => i.selected )).length
  };
}
// 召喚表の本体(列全体)を表示させるクラス
class TableBody extends Component {
  render() {
    // 最初にselectedな召喚のindex
    let selected_index = -1;
    return (
      <tbody>
        {this.props.friend.map((val,index) => {
          let first_selected = ((selected_index === -1 && val.selected) ? true : false);
          if (first_selected) { selected_index = index; }
          return <Row key={"sr"+String(index)} index={index} checked_length={this.props.checked_length} first_selected={first_selected} />;
        })}
      </tbody>
    );
  }
}
// 実際にクラスへpropsを注入する(storeのstateと接続する)
TableBody = connect(mapStateToTableBodyProps)(TableBody);


// ドラッグされる側の仕様定義
// const tmp = { beginDrag: beginDrag(props){}, ... };
// 最低でもbeginDragは定義されてなければいけない
const RowSource = {
  // ドラッグ開始時に呼ばれる
  beginDrag(props) {
    // ドロップ先で何がドロップされたかを調べるのに使う
    return { index: props.index };
  },
  // ドラッグ終了時に呼ばれる
  endDrag(props, monitor, component) {
  }
};
// ドラッグされる側が何をpropsに注入するかを返す関数
// connectDragSource: どの要素がドラッグされるのかを指定する関数
// connectDragPreview: どの要素がドラッグされる間表示されるのかを指定する関数
// isDragging: ドラッグされている最中かどうかの値
function collectSourceRow(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
// ドロップされる側の仕様定義
// どの関数もオプション
const RowTarget = {
  // ドロップされた時に呼ばれる
  drop(props, monitor) {
    // ドラッグされたものとドロップされたものを調べる
    const index_from = monitor.getItem().index;
    const index_to = props.index;
    // 実際にオブジェクトを移動する
    // 注入がこうなっているので*注意*
    props.move_object(index_from, index_to);  // move_objectで間違っていない
    // ここで返されたオブジェクトはソースでのmonitor.getDropResult()で使える
    return { index: props.index };
  }
};
// ドロップされる側が何をpropsに注入するのかを返す関数
// connectDropTarget: どの要素がドロップされる要素なのかを指定する関数
// isOver: 要素の上に対象があるかどうかの値
function collectTargetRow(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}
// reduxのstoreから何をpropsに注入するかを返す関数
function mapStateToRowProps(state, props) {
  let target_state = state.friend[props.index];
  let atk = (target_state.atk !== undefined) ? Number(target_state.atk) : 0;
  const skill_template = { type: "none", percent: 0 };
  let skill_tmp = (target_state.skill instanceof Array) ? target_state.skill : [ {}, {} ];
  let skill = skill_tmp.map((val) => {
    let tmp = (val instanceof Object) ? val : {};
    return Object.assign({}, skill_template, tmp);
  });
  let selected = (target_state.selected === undefined) ? false : target_state.selected;
  let locked = (target_state.locked === undefined) ? false : target_state.locked;
  let name = (target_state.name !== undefined) ? String(target_state.name) : "";
  return { atk, skill, selected, name, locked };
}
// reduxのaction creatorをpropsに注入するためのオブジェクト
// コンポーネントを使いまわしているので注入元を変える
const mapActionCreatorsToRowProps = {
  enable_object: enable_friend_object,
  disable_object: disable_friend_object,
  move_object: move_friend_object,
  insert_object: insert_friend_object,
  delete_object: delete_friend_object,
  set_lock: set_friend_lock,
  set_name: set_friend_name,
  set_atk_value: set_friend_atk_value,
  set_skill_percent: set_friend_skill_percent,
  set_skill_type: set_friend_skill_type
};
const FRIEND_CHECKED_MAX = 1;
// フレンド召喚の行1つを表示させるためのクラス
// 通常召喚のクラスを再利用する
class Row_ extends SummonRow_ {
  // コンストラクタ
  // 代入する関数が変わっていることに注意
  constructor(props) {
    super(props);
    this.on_change_select = ::this.on_change_select;
    this.on_change_name = ::this.on_change_name;
    this.on_change_atk = ::this.on_change_atk;
    /* ここから */
    this.on_change_kind1 = ::this.on_change_kind1;
    this.on_change_percent1 = ::this.on_change_percent1;
    this.on_change_kind2 = ::this.on_change_kind2;
    this.on_change_percent2 = ::this.on_change_percent2;
    /* ここまで */
    this.push_insert = ::this.push_insert;
    this.push_delete = ::this.push_delete;
    this.on_change_locked = ::this.on_change_locked;
  }

  // 選択/解除がされた時に呼びだされる関数
  on_change_select(e) {
    if (e.target.checked) {  // もし選択されたのなら
      if (this.props.checked_length < FRIEND_CHECKED_MAX) {
        this.props.enable_object(this.props.index);
      }
    } else {  // もし解除されたのなら
      this.props.disable_object(this.props.index);
    }
  }

  // レンダリングする要素を返す関数
  // ::this.func は this.func.bind(this) と一緒
  render() {
    // 必要なpropsをconst変数に展開する
    const {
      index, connectDragSource, connectDragPreview, isDragging, connectDropTarget, isOver,
      atk, skill, selected, name, locked, inputlock, first_selected
    } = this.props;
    // つかむところに適用されるスタイルを作る
    let style_hundle = "hundle";
    style_hundle = isOver ? "hundle_on_over" : style_hundle;
    style_hundle = isDragging ? "hundle_dragging" : style_hundle;
    // 最初に選択されている武器なら背景を赤、選択されているものは薄い赤にする
    let row_style = first_selected ? "is_main" : selected ? "selected" : "unselected";
    // 描画する要素を返す
    return connectDragPreview(connectDropTarget(
      <tr styleName={ row_style }>
        {connectDragSource(<td styleName={ style_hundle }>■</td>)}
        <td>
          <input type="checkbox" styleName="select" checked={selected} onChange={this.on_change_select} disabled={inputlock} />
        </td>
        <td><input type="checkbox" styleName="lock" checked={locked} onChange={this.on_change_locked} disabled={inputlock} /></td>
        <td><input type="text" styleName="name" value={name} onChange={this.on_change_name} disabled={inputlock} /></td>
        <td><input type="number" styleName="atk" value={atk} onChange={this.on_change_atk} disabled={inputlock} /></td>
        <td>
          <select styleName="kind" value={skill[0].type} onChange={this.on_change_kind1} disabled={inputlock} >
            {this.skind}
          </select>
        </td>
        <td><input
            type="number"
            styleName="percent"
            value={skill[0].percent}
            onChange={this.on_change_percent1}
            disabled={inputlock}
          />%</td>
        <td>
          <select styleName="kind" value={skill[1].type} onChange={this.on_change_kind2} disabled={inputlock}>
            {this.skind}
          </select>
        </td>
        <td><input
            type="number"
            styleName="percent"
            value={skill[1].percent}
            onChange={this.on_change_percent2}
            disabled={inputlock}
          />%</td>
        <td>
          <input styleName="button" type="button" id="ins" value="+" onClick={this.push_insert} disabled={inputlock} />
          <input styleName="button" type="button" id="del" value="-" onClick={this.push_delete} disabled={inputlock} />
        </td>
      </tr>
    ));
  }
}
// 順序が重要
// ドラッグ&ドロップのAPIをつなげる
let Row = Row_;
Row = CSSModules(Row, styles);
Row = DragSource(ItemTypes.FRIEND, RowSource, collectSourceRow)(Row);
Row = DropTarget(ItemTypes.FRIEND, RowTarget, collectTargetRow)(Row);
// Reduxのstoreをつなげる
Row = connect(mapStateToRowProps, mapActionCreatorsToRowProps)(Row);


/* フレンド全体 */
class Friend extends Component {
  render() {
    return (
      <section>
        <Translate component="header" styleName="title" content="friend.title" />
        <form>
          <table styleName="base" id="friend_table">
            <thead>
              <TableHeader />
            </thead>
            <TableBody />
            <tfoot>
              <TableHeader />
            </tfoot>
          </table>
        </form>
      </section>
    );
  }
}
export default CSSModules(Friend, styles);
