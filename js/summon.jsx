// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 召喚表を表示させるためのモジュール
 *
 * ロジック部分と表示部分は面倒なので分離されていない。
 * わかりにくいのであとでなんとかしたい。
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { DragSource, DropTarget } from "react-dnd";
import {
  replace_summon_object, enable_summon_object, disable_summon_object,
  move_summon_object, insert_summon_object, delete_summon_object,
  set_summon_lock, set_summon_name, set_summon_atk_value, set_summon_skill_percent, set_summon_skill_type
} from "./actions";

import ItemTypes from "./const/item_types";

import "../css/calc.css";


// 召喚表部分
// renderは1要素しか返してはいけないので若干わかりづらい
class SummonTable extends Component {
  render() {
    return (
      <form>
        <table className="grbr" id="summon_table">
          <thead>
            <SummonTableHeader inputlock={this.props.inputlock} />
          </thead>
            <SummonTableBody inputlock={this.props.inputlock} />
          <tfoot>
            <SummonTableHeader inputlock={this.props.inputlock} />
          </tfoot>
        </table>
      </form>
    );
  }
}
SummonTable = connect((state) => { return { inputlock: state.inputlock ? true : false }; })(SummonTable);

// 召喚表のヘッダ
class SummonTableHeader extends Component {
  render() {
    return (
      <tr>
        <th>順</th>
        <th align="center">選</th>
        <th align="center">鍵</th>
        <th align="center">召喚名</th>
        <th align="center">攻撃力</th>
        <th align="center" colSpan="2">加護1</th>
        <th align="center" colSpan="2">加護2</th>
        <th align="center">挿入・削除</th>
      </tr>
    );
  }
}


// 後述の召喚表本体のpropsに注入するstate
function mapStateToSummonTableBodyProps(state) {
  return {
    summon: state.summon
  };
}
// 召喚表の本体(列全体)を表示させるクラス
class SummonTableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.summon.map((val,index) => { return <SummonRow key={"sr"+String(index)} index={index} {...this.props} />; })}
      </tbody>
    );
  }
}
// 実際にクラスへpropsを注入する(storeのstateと接続する)
SummonTableBody = connect(mapStateToSummonTableBodyProps)(SummonTableBody);


// ドラッグされる側の仕様定義
// const tmp = { beginDrag: beginDrag(props){}, ... };
// 最低でもbeginDragは定義されてなければいけない
const SummonRowSource = {
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
function collectSourceSummonRow(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
// ドロップされる側の仕様定義
// どの関数もオプション
const SummonRowTarget = {
  // ドロップされた時に呼ばれる
  drop(props, monitor) {
    // ドラッグされたものとドロップされたものを調べる
    const index_from = monitor.getItem().index;
    const index_to = props.index;
    // 実際にオブジェクトを移動する
    props.move_summon_object(index_from, index_to);
    // ここで返されたオブジェクトはソースでのmonitor.getDropResult()で使える
    return { index: props.index };
  }
};
// ドロップされる側が何をpropsに注入するのかを返す関数
// connectDropTarget: どの要素がドロップされる要素なのかを指定する関数
// isOver: 要素の上に対象があるかどうかの値
function collectTargetSummonRow(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}
// reduxのstoreから何をpropsに注入するかを返す関数
function mapStateToSummonRowProps(state, props) {
  let target_state = state.summon[props.index];
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
const mapActionCreatorsToSummonRowProps = {
  replace_object: replace_summon_object,
  enable_object: enable_summon_object,
  disable_object: disable_summon_object,
  move_object: move_summon_object,
  insert_object: insert_summon_object,
  delete_object: delete_summon_object,
  set_lock: set_summon_lock,
  set_name: set_summon_name,
  set_atk_value: set_summon_atk_value,
  set_skill_percent: set_summon_skill_percent,
  set_skill_type: set_summon_skill_type
};
// 召喚の行1つを表示させるためのクラス
export class SummonRow_ extends Component {
  // オプション要素を作るための関数
  create_optfunc(key) {
    return (
      <option value={key[0]} key={key[0]}>{key[1]}</option>
    );
  }

  // optionのvalueと中身の対応
  // TODO: なんとかして分離したい
  SUMMON_KIND = [
    ["none", "無し"],
    ["attribute", "属性"],
    ["character", "キャラ"],
    ["magna", "マグナ"],
    ["unknown", "ｱﾝﾉｳﾝ"],
    ["zeus", "ｾﾞｳｽ枠"]
  ];

  // 実際にオプションの配列を作る
  skind = this.SUMMON_KIND.map((i) => this.create_optfunc(i));

  // 選択/解除がされた時に呼びだされる関数
  on_change_select(e) {
    if (e.target.checked) {  // もし選択されたのなら
      this.props.enable_object(this.props.index);
    } else {  // もし解除されたのなら
      this.props.disable_object(this.props.index);
    }
  }

  // 名前が変更された時に呼ばれる関数
  on_change_name(e) {
    this.props.set_name(this.props.index, e.target.value);
  }

  // 攻撃力が変更された時に呼ばれる関数
  on_change_atk(e) {
    this.props.set_atk_value(this.props.index, e.target.value);
  }

  // 召喚(1つ目)の種別が変更された時に呼ばれる関数
  // 召喚は配列で管理されているので泥臭いことをしている
  on_change_summon_kind1(e) {
    this.props.set_skill_type(this.props.index, 0, e.target.value);
  }

  // 召喚(1つ目)の%が変更された時に呼ばれる関数
  on_change_summon_percent1(e) {
    this.props.set_skill_percent(this.props.index, 0, e.target.value);
  }

  // 召喚(2つ目)の種別が変更された時に呼ばれる関数
  on_change_summon_kind2(e) {
    this.props.set_skill_type(this.props.index, 1, e.target.value);
  }

  // 召喚(2つ目)の%が変更された時に呼ばれる関数
  on_change_summon_percent2(e) {
    this.props.set_skill_percent(this.props.index, 1, e.target.value);
  }

  // 削除("-")ボタンが押された時
  push_delete(e) {
    this.props.delete_object(this.props.index);
  }

  // 追加("+")ボタンが押された時
  push_insert(e) {
    this.props.insert_object(this.props.index);
  }

  on_change_locked(e) {
    this.props.set_lock(this.props.index, e.target.checked);
  }

  // コンストラクタ
  constructor(props) {
    super(props);
    this.on_change_select = ::this.on_change_select;
    this.on_change_name = ::this.on_change_name;
    this.on_change_atk = ::this.on_change_atk;
    this.on_change_kind1 = ::this.on_change_summon_kind1;
    this.on_change_percent1 = ::this.on_change_summon_percent1;
    this.on_change_kind2 = ::this.on_change_summon_kind2;
    this.on_change_percent2 = ::this.on_change_summon_percent2;
    this.push_insert = ::this.push_insert;
    this.push_delete = ::this.push_delete;
    this.on_change_locked = ::this.on_change_locked;
  }

  // レンダリングする要素を返す関数
  // ::this.func は this.func.bind(this) と一緒
  render() {
    // 必要なpropsをconst変数に展開する
    const {
      index, connectDragSource, connectDragPreview, isDragging, connectDropTarget, isOver,
      atk, skill, selected, name, locked, inputlock
    } = this.props;
    // ドラッグハンドルに適用されるスタイルを作る
    let style_hundle = { cursor: 'move' };
    style_hundle.color = isOver ? "red" : "blue";
    style_hundle.color = isDragging ? "green" : style_hundle.color;
    // 描画する要素を返す
    // connectDragPreviewとconnectDropTargetとconnectDragSourceの説明は上述
    return connectDragPreview(connectDropTarget(
      <tr className="summon_tr">
        {connectDragSource(<td style={ style_hundle }>■</td>)}
        <td>
          <input type="checkbox" className="summon_select" checked={selected} onChange={this.on_change_select} disabled={inputlock} />
        </td>
        <td><input type="checkbox" className="summon_lock" checked={locked} onChange={this.on_change_locked} disabled={inputlock} /></td>
        <td><input type="text" className="summon_name width150" value={name} onChange={this.on_change_name} disabled={inputlock} /></td>
        <td><input type="text" className="summon_atk width50" value={atk} onChange={this.on_change_atk} disabled={inputlock} /></td>
        <td>
          <select className="summon_kind1" value={skill[0].type} onChange={this.on_change_kind1} disabled={inputlock} >
            {this.skind}
          </select>
        </td>
        <td><input
            type="text"
            className="summon_percent1 width25"
            value={skill[0].percent}
            onChange={this.on_change_summon_percent1}
            disabled={inputlock}
          />%</td>
        <td>
          <select className="summon_kind2" value={skill[1].type} onChange={this.on_change_kind2} disabled={inputlock}>
            {this.skind}
          </select>
        </td>
        <td><input
            type="text"
            className="summon_percent2 width25"
            value={skill[1].percent}
            onChange={this.on_change_summon_percent2}
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
let SummonRow = SummonRow_;
SummonRow = DragSource(ItemTypes.SUMMON, SummonRowSource, collectSourceSummonRow)(SummonRow);
SummonRow = DropTarget(ItemTypes.SUMMON, SummonRowTarget, collectTargetSummonRow)(SummonRow);
// Reduxのstoreをつなげる
SummonRow = connect(mapStateToSummonRowProps, mapActionCreatorsToSummonRowProps)(SummonRow);


// 召喚獣部分
export default class Summon extends Component {
  render() {
    return (
      <section>
        <header className="subtype">召喚獣</header>
        <SummonTable />
      </section>
    );
  }
}
