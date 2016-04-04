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
  move_summon_object, insert_summon_object, delete_summon_object
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
            <SummonTableHeader />
          </thead>
            <SummonTableBody />
          <tfoot>
            <SummonTableHeader />
          </tfoot>
        </table>
      </form>
    );
  }
}

// 召喚表のヘッダ
class SummonTableHeader extends Component {
  render() {
    return (
      <tr>
        <th>順</th>
        <th align="center">選</th>
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
        {this.props.summon.map((val,index) => { return <SummonRow key={"sr"+String(index)} index={index} />; })}
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
  let name = (target_state.name !== undefined) ? String(target_state.name) : "";
  return { atk, skill, selected, name };
}
// reduxのaction creatorをpropsに注入するためのオブジェクト
const mapActionCreatorsToSummonRowProps = {
  replace_summon_object,
  enable_summon_object,
  disable_summon_object,
  move_summon_object,
  insert_summon_object,
  delete_summon_object
};
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
// 召喚の行1つを表示させるためのクラス
class SummonRow extends Component {
  // オプション要素を作るための関数
  create_optfunc(key) {
    return (
      <option value={key[0]} key={key[0]}>{key[1]}</option>
    );
  }
  // 実際にオプションの配列を作る
  skind = SUMMON_KIND.map((i) => this.create_optfunc(i));

  // propsからstoreに送るためのobjectを取りだす関数
  // actionは送られたobjectで置きかえる実装なのでこれが必要
  get_summon_obj_from_props() {
    let { atk, skill, selected, name } = this.props;
    return { atk, skill, selected, name };
  }

  // 選択/解除がされた時に呼びだされる関数
  on_change_select(e) {
    if (e.target.checked) {  // もし選択されたのなら
      this.props.enable_summon_object(this.props.index);
    } else {  // もし解除されたのなら
      this.props.disable_summon_object(this.props.index);
    }
  }

  // 名前が変更された時に呼ばれる関数
  on_change_name(e) {
    let obj = this.get_summon_obj_from_props();
    obj.name = String(e.target.value);
    this.props.replace_summon_object(this.props.index, obj);
  }

  // 攻撃力が変更された時に呼ばれる関数
  on_change_atk(e) {
    let obj = this.get_summon_obj_from_props();
    obj.atk = Number(e.target.value);
    this.props.replace_summon_object(this.props.index, obj);
  }

  // 召喚(1つ目)の種別が変更された時に呼ばれる関数
  // 召喚は配列で管理されているので泥臭いことをしている
  on_change_summon_kind1(e) {
    let obj = this.get_summon_obj_from_props();
    let skind1 = obj.skill[0];
    skind1.type = String(e.target.value);
    let skinds = [skind1, obj.skill[1]];
    obj.skill = skinds;
    this.props.replace_summon_object(this.props.index, obj);
  }

  // 召喚(1つ目)の%が変更された時に呼ばれる関数
  on_change_summon_percent1(e) {
    let obj = this.get_summon_obj_from_props();
    let skind1 = obj.skill[0];
    skind1.percent = Number(e.target.value);
    let skinds = [skind1, obj.skill[1]];
    obj.skill = skinds;
    this.props.replace_summon_object(this.props.index, obj);
  }

  // 召喚(2つ目)の種別が変更された時に呼ばれる関数
  on_change_summon_kind2(e) {
    let obj = this.get_summon_obj_from_props();
    let skind2 = obj.skill[1];
    skind2.type = String(e.target.value);
    let skinds = [obj.skill[0], skind2];
    obj.skill = skinds;
    this.props.replace_summon_object(this.props.index, obj);
  }

  // 召喚(2つ目)の%が変更された時に呼ばれる関数
  on_change_summon_percent2(e) {
    let obj = this.get_summon_obj_from_props();
    let skind2 = obj.skill[1];
    skind2.percent = Number(e.target.value);
    let skinds = [obj.skill[0], skind2];
    obj.skill = skinds;
    this.props.replace_summon_object(this.props.index, obj);
  }

  // 削除("-")ボタンが押された時
  push_delete(e) {
    this.props.delete_summon_object(this.props.index);
  }

  // 追加("+")ボタンが押された時
  push_insert(e) {
    this.props.insert_summon_object(this.props.index);
  }

  // コンストラクタ
  constructor(props) {
    super(props);
    this.on_change_select = ::this.on_change_select;
    this.on_change_name = ::this.on_change_name;
    this.on_change_atk = ::this.on_change_atk;
    this.on_change_summon_kind1 = ::this.on_change_summon_kind1;
    this.on_change_summon_percent1 = ::this.on_change_summon_percent1;
    this.on_change_summon_kind2 = ::this.on_change_summon_kind2;
    this.on_change_summon_percent2 = ::this.on_change_summon_percent2;
    this.push_insert = ::this.push_insert;
    this.push_delete = ::this.push_delete;
  }

  // レンダリングする要素を返す関数
  // ::this.func は this.func.bind(this) と一緒
  render() {
    // 必要なpropsをconst変数に展開する
    const {
      index, connectDragSource, connectDragPreview, isDragging, connectDropTarget, isOver,
      atk, skill, selected, name
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
        <td><input type="checkbox" className="summon_select" value="select" checked={selected} onChange={this.on_change_select} /></td>
        <td><input type="text" className="summon_name width150" value={name} onChange={this.on_change_name} /></td>
        <td><input type="text" className="summon_atk width50" value={atk} onChange={this.on_change_atk} /></td>
        <td>
          <select className="summon_kind1" value={skill[0].type} onChange={this.on_change_summon_kind1} >
            {this.skind}
          </select>
        </td>
        <td><input type="text" className="summon_percent1 width25" value={skill[0].percent} onChange={this.on_change_summon_percent1} />%</td>
        <td>
          <select className="summon_kind2" value={skill[1].type} onChange={this.on_change_summon_kind2} >
            {this.skind}
          </select>
        </td>
        <td><input type="text" className="summon_percent2 width25" value={skill[1].percent} onChange={this.on_change_summon_percent2} />%</td>
        <td>
          <input type="button" id="ins" value="+" onClick={this.push_insert} />
          <input type="button" id="del" value="-" onClick={this.push_delete} />
        </td>
      </tr>
    ));
  }
}
// 順序が重要
// ドラッグ&ドロップのAPIをつなげる
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
