// vim: sts=2 sw=2 ts=2 expandtab

import React, { Component } from "react";
import { connect } from "react-redux";
import { DragSource, DropTarget } from "react-dnd";

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
  let atk = (target_state.atk instanceof Number) ? target_state.atk : 0;
  const skill_template = { type: "none", percent: 0 };
  let skill_tmp = (target_state.skill instanceof Array) ? target_state.skill : [ {}, {} ];
  let skill = skill_tmp.map((val) => {
    let tmp = (val instanceof Object) ? val : {};
    return Object.assign({}, skill_template, tmp);
  });
  let selected = (target_state.selected === undefined) ? false : target_state.selected;
  let name = (target_state.name instanceof String) ? target_state.name : "";
  return { atk, skill, selected, name };
}
class SummonRow extends Component {

  create_optfunc(key) {
    return (
      <option value={key[0]} key={key[0]}>{key[1]}</option>
    );
  }
  skind = SUMMON_KIND.map((i) => this.create_optfunc(i));

  render() {
    const {
      index, connectDragSource, connectDragPreview, isDragging, connectDropTarget, isOver,
      atk, skill, selected, name
    } = this.props;
    return connectDragPreview(connectDropTarget(
      <tr className="summon_tr">
        {connectDragSource(<td style={ { cursor: 'move' } }>{index+1}</td>)}
        <td><input type="checkbox" className="summon_lock" value="lock" /></td>
        <td><input type="checkbox" className="summon_select" value="select" checked={selected} /></td>
        <td><input type="text" className="summon_name width150" value={name} /></td>
        <td><input type="text" className="summon_atk width50" value={atk} /></td>
        <td>
          <select className="summon_kind1" value={skill[0].type} >
            {this.skind}
          </select>
        </td>
        <td><input type="text" className="summon_percent1 width25" value={skill[0].percent} />%</td>
        <td>
          <select className="summon_kind2" value={skill[1].type} >
            {this.skind}
          </select>
        </td>
        <td><input type="text" className="summon_percent2 width25" value={skill[1].percent} />%</td>
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
SummonRow = connect(mapStateToSummonRowProps)(SummonRow);
SummonRow = DragSource(ItemTypes.SUMMON, SummonRowSource, collectSourceSummonRow)(SummonRow);
SummonRow = DropTarget(ItemTypes.SUMMON, SummonRowTarget, collectTargetSummonRow)(SummonRow);


// 召喚獣部分
export default class Summon extends Component {
  render() {
    return (
      <section>
        <header className="subtype">召喚獣</header>
        <SummonTable parameter={this.props.parameter} onChangeParameter={this.props.onChangeParameter} />
      </section>
    );
  }
}
