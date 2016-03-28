// vim: sts=2 sw=2 ts=2 expandtab

import React, { Component } from "react";
import { connect } from "react-redux";
import { DragSource, DropTarget } from "react-dnd";
import { replace_summon_object, enable_summon_object, disable_summon_object } from "./actions";

import ItemTypes from "./const/item_types";

import "../css/calc.css";


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

class SummonTableHeader extends Component {
  render() {
    return (
      <tr>
        <th>順</th>
        <th align="center">L</th>
        <th align="center">選</th>
        <th align="center">召喚名</th>
        <th align="center">攻撃力</th>
        <th align="center" colSpan="2">加護1</th>
        <th align="center" colSpan="2">加護2</th>
        <th align="center">並替・挿入・削除</th>
      </tr>
    );
  }
}


function mapStateToSummonTableBodyProps(state) {
  return {
    summon: state.summon
  };
}
class SummonTableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.summon.map((val,index) => { return <SummonRow key={"sr"+String(index)} index={index} />; })}
      </tbody>
    );
  }
}
SummonTableBody = connect(mapStateToSummonTableBodyProps)(SummonTableBody);


const SummonRowSource = {
  beginDrag() {
    return {};
  }
};
function collectSourceSummonRow(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}
const SummonRowTarget = {
  drop(props, monitor) {
    console.log(props.index);
    return {test: "test"};
  }
};
function collectTargetSummonRow(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}
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
const mapActionCreatorsToSummonRowProps = {
  replace_summon_object,
  enable_summon_object,
  disable_summon_object
};
class SummonRow extends Component {
  create_optfunc(key) {
    return (
      <option value={key[0]} key={key[0]}>{key[1]}</option>
    );
  }
  skind = SUMMON_KIND.map((i) => this.create_optfunc(i));

  get_summon_obj_from_props() {
    let { atk, skill, selected, name } = this.props;
    return { atk, skill, selected, name };
  }

  on_change_select(e) {
    if (e.target.checked) {
      this.props.enable_summon_object(this.props.index);
    } else {
      this.props.disable_summon_object(this.props.index);
    }
  }

  on_change_name(e) {
    let obj = this.get_summon_obj_from_props();
    obj.name = String(e.target.value);
    this.props.replace_summon_object(this.props.index, obj);
  }

  on_change_atk(e) {
    console.log(e.target.value);
    let obj = this.get_summon_obj_from_props();
    obj.atk = Number(e.target.value);
    this.props.replace_summon_object(this.props.index, obj);
  }

  on_change_summon_kind1(e) {
    let obj = this.get_summon_obj_from_props();
    let skind1 = obj.skill[0];
    skind1.type = String(e.target.value);
    let skinds = [skind1, obj.skill[1]];
    obj.skill = skinds;
    this.props.replace_summon_object(this.props.index, obj);
  }

  on_change_summon_percent1(e) {
    let obj = this.get_summon_obj_from_props();
    let skind1 = obj.skill[0];
    skind1.percent = Number(e.target.value);
    let skinds = [skind1, obj.skill[1]];
    obj.skill = skinds;
    this.props.replace_summon_object(this.props.index, obj);
  }

  on_change_summon_kind2(e) {
    let obj = this.get_summon_obj_from_props();
    let skind2 = obj.skill[1];
    skind2.type = String(e.target.value);
    let skinds = [obj.skill[0], skind2];
    obj.skill = skinds;
    this.props.replace_summon_object(this.props.index, obj);
  }

  on_change_summon_percent2(e) {
    let obj = this.get_summon_obj_from_props();
    let skind2 = obj.skill[1];
    skind2.percent = Number(e.target.value);
    let skinds = [obj.skill[0], skind2];
    obj.skill = skinds;
    this.props.replace_summon_object(this.props.index, obj);
  }

  render() {
    const {
      index, connectDragSource, connectDragPreview, isDragging, connectDropTarget, isOver,
      atk, skill, selected, name
    } = this.props;
    return connectDragPreview(connectDropTarget(
      <tr className="summon_tr">
        {connectDragSource(<td style={ { cursor: 'move' } }>{index+1}</td>)}
        <td><input type="checkbox" className="summon_lock" value="lock" /></td>
        <td><input type="checkbox" className="summon_select" value="select" checked={selected} onChange={::this.on_change_select} /></td>
        <td><input type="text" className="summon_name width150" value={name} onChange={::this.on_change_name} /></td>
        <td><input type="text" className="summon_atk width50" value={atk} onChange={::this.on_change_atk} /></td>
        <td>
          <select className="summon_kind1" value={skill[0].type} onChange={::this.on_change_summon_kind1} >
            {this.skind}
          </select>
        </td>
        <td><input type="text" className="summon_percent1 width25" value={skill[0].percent} onChange={::this.on_change_summon_percent1} />%</td>
        <td>
          <select className="summon_kind2" value={skill[1].type} onChange={::this.on_change_summon_kind2} >
            {this.skind}
          </select>
        </td>
        <td><input type="text" className="summon_percent2 width25" value={skill[1].percent} onChange={::this.on_change_summon_percent2} />%</td>
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
SummonRow = connect(mapStateToSummonRowProps, mapActionCreatorsToSummonRowProps)(SummonRow);
SummonRow = DragSource(ItemTypes.SUMMON, SummonRowSource, collectSourceSummonRow)(SummonRow);
SummonRow = DropTarget(ItemTypes.SUMMON, SummonRowTarget, collectTargetSummonRow)(SummonRow);


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
