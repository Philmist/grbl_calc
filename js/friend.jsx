// vim: sts=2 sw=2 ts=2 expandtab

/*
 * フレンド部分をレンダリングするコンポーネント
 *
 * 超が付くほど雑な上に間違いやすい実装なので注意
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { DragSource, DropTarget } from "react-dnd";
import { SummonRow_ } from "./summon";
import {
  replace_friend_object, enable_friend_object, disable_friend_object,
  move_friend_object, insert_friend_object, delete_friend_object,
  set_friend_lock, set_friend_name, set_friend_atk_value, set_friend_skill_percent, set_friend_skill_type
} from "./actions";
import ItemTypes from "./const/item_types";

import "../css/calc.css";


// テーブルヘッダ
class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th align="center">順</th>
          <th align="center">選</th>
          <th align="center">鍵</th>
          <th align="center">召喚名</th>
          <th align="center">攻撃力</th>
          <th align="center" colSpan="2">加護1</th>
          <th align="center" colSpan="2">加護2</th>
          <th align="center">挿入・削除</th>
        </tr>
      </thead>
    );
  }
}


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
  replace_object: replace_friend_object,
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
    // ドラッグハンドルに適用されるスタイルを作る
    let style_hundle = { cursor: 'move' };
    style_hundle.color = isOver ? "red" : "blue";
    style_hundle.color = isDragging ? "green" : style_hundle.color;
    // 最初に選択されている武器なら背景を赤にする
    let first_selected_style = first_selected ? { backgroundColor: "#FFAAAA" } : {};
    // 描画する要素を返す
    return connectDragPreview(connectDropTarget(
      <tr className="friend_tr" style={first_selected_style}>
        {connectDragSource(<td style={ style_hundle }>■</td>)}
        <td>
          <input type="checkbox" className="friend_select" checked={selected} onChange={this.on_change_select} disabled={inputlock} />
        </td>
        <td><input type="checkbox" className="friend_lock" checked={locked} onChange={this.on_change_locked} disabled={inputlock} /></td>
        <td><input type="text" className="friend_name width150" value={name} onChange={this.on_change_name} disabled={inputlock} /></td>
        <td><input type="text" className="friend_atk width50" value={atk} onChange={this.on_change_atk} disabled={inputlock} /></td>
        <td>
          <select className="friend_kind1" value={skill[0].type} onChange={this.on_change_kind1} disabled={inputlock} >
            {this.skind}
          </select>
        </td>
        <td><input
            type="text"
            className="friend_percent1 width25"
            value={skill[0].percent}
            onChange={this.on_change_percent1}
            disabled={inputlock}
          />%</td>
        <td>
          <select className="friend_kind2" value={skill[1].type} onChange={this.on_change_kind2} disabled={inputlock}>
            {this.skind}
          </select>
        </td>
        <td><input
            type="text"
            className="friend_percent2 width25"
            value={skill[1].percent}
            onChange={this.on_change_percent2}
            disabled={inputlock}
          />%</td>
        <td>
          <input type="button" id="ins" value="+" onClick={this.push_insert} disabled={inputlock} />
          <input type="button" id="del" value="-" onClick={this.push_delete} disabled={inputlock} />
        </td>
      </tr>
    ));
  }
}
// 順序が重要
// ドラッグ&ドロップのAPIをつなげる
let Row = Row_;
Row = DragSource(ItemTypes.FRIEND, RowSource, collectSourceRow)(Row);
Row = DropTarget(ItemTypes.FRIEND, RowTarget, collectTargetRow)(Row);
// Reduxのstoreをつなげる
Row = connect(mapStateToRowProps, mapActionCreatorsToRowProps)(Row);


/* フレンド全体 */
// フレンド部分
export default class Friend extends Component {
  render() {
    return (
      <section>
        <header className="subtype">フレンド召喚</header>
        <form>
          <table className="grbr" id="friend_table">
            <TableHeader />
            <TableBody />
          </table>
        </form>
      </section>
    );
  }
}


