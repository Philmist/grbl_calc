// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 基礎情報を入力させるコンポーネント
 */

// モジュールのインポート
import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";

import counterpart from "counterpart";
import Translate from "react-translate-component";
let _t = Translate.translate;

import * as actions from "./actions.js";

import styles from "basic_information.css";


// ジョブを選択する要素のコンポーネント
// ジョブそれ自体と変更されたらどうなるかはpropsとしてもらう
class JobSelector extends Component {
  // ジョブが変更された時の動作
  // propsとしてもらった関数に処理を引きわたす
  handle_job_change(e) {
    this.props.set_job_type(e.target.value);
  }

  // コンストラクタ
  constructor(props) {
    super(props);
    this.handle_job_change = ::this.handle_job_change;
  }

  // 要素のレンダリング
  render() {
    // ジョブ一覧をoption要素として展開する
    var values = new Array();
    for (var i in this.props.job) {
      values.push(
        <Translate component="option" value={i} key={i} content={ "basic_information.job.type."+i } />
      );
    }
    // select要素を作って返す
    return (
      <select styleName="job" onChange={this.handle_job_change} >
        {values}
      </select>
    );
  }
}
JobSelector = CSSModules(JobSelector, styles);


// ジョブ選択部分のコンポーネント
// {...this.props}は渡されたprops全部を渡す
class Job extends Component {
  render() {
    return (
      <table styleName="base">
        <tbody>
          <tr styleName="row">
            <Translate component="th" styleName="header" content="basic_information.job.title" />
            <td styleName="cell">
              <JobSelector {...this.props} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
Job = CSSModules(Job, styles);


// ランク選択部分のコンポーネント
// ランクそれ自体と変更されたらどうなるかはpropsとしてもらう
class Rank extends Component {
  // ランクが変更された時の処理
  // propsでもらった関数に処理を委託
  handleChange(event) {
    this.props.set_rank(event.target.value);
  }

  // コンストラクタ
  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  // 最終的な要素を作って返す関数
  render() {
    return (
      <tr styleName="row">
        <Translate component="th" styleName="header" content="basic_information.rank.title" />
        <td styleName="cell">
          <input
            styleName="rank"
            type="number"
            onChange={this.handleChange}
            value={this.props.rank}
            disabled={this.props.inputlock}
          />
        </td>
      </tr>
    );
  }
}
Rank = CSSModules(Rank, styles);
// コンポーネントにpropsを注入する
// reduxのstoreからデータを取ってきてpropsに注入
// アクションを集めたモジュールから関数を取ってきて注入
Rank = connect(
  (state) => ({ rank: state.basicinfo.rank, inputlock: state.inputlock ? true : false }),
    { set_rank: actions.set_rank }
)(Rank);


// 艇補正要素をレンダリングするコンポーネント
class ShipBonus extends Component {
  // 値が変更された時に呼びだされる
  // propsで渡された関数に処理を委託
  handleChange(event) {
    this.props.set_ship_bonus(event.target.value);
  }

  // コンストラクタ
  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  // 最終的な要素を作って返す
  render() {
    return (
      <tr styleName="row">
        <Translate component="th" styleName="header" content="basic_information.ship_bonus.title" />
        <td styleName="cell">
          <input
            styleName="ship_bonus"
            type="number"
            onChange={this.handleChange}
            value={this.props.ship_bonus}
            disabled={this.props.inputlock}
          />
        </td>
      </tr>
    );
  }
}
ShipBonus = CSSModules(ShipBonus, styles);
// コンポーネントにpropsを注入する
// redux storeからデータを取ってきて注入
// アクションモジュールからアクションを持ってきて注入
ShipBonus = connect(
  (state) => ({ ship_bonus: state.basicinfo.ship_bonus, inputlock: state.inputlock ? true : false }),
    { set_ship_bonus: actions.set_ship_bonus }
)(ShipBonus);


// 属性補正をレンダリングするコンポーネント
class AttributeBonus extends Component {
  // 値が変更された時に呼ばれるコンポーネント
  // propsで渡された関数に処理を委託
  handleChange(event) {
    this.props.set_affinity(event.target.value);
  }

  // コンストラクタ
  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  // 最終的な要素を作って返す関数
  render() {
    let t_header = "basic_information.attribute_bonus.";
    return (
      <tr styleName="row">
        <Translate component="th" styleName="header" content={ t_header+"title" } />
        <td styleName="cell">
          <select onChange={this.handleChange} styleName="attribute_bonus" value={this.props.affinity} disabled={this.props.inputlock}>
            <Translate component="option" value="normal" content={ t_header+"normal" } />
            <Translate component="option" value="good" content={ t_header+"good" } />
            <Translate component="option" value="bad" content={ t_header+"bad" } />
          </select>
        </td>
      </tr>
    );
  }
}
AttributeBonus = CSSModules(AttributeBonus, styles);
// propsに色々注入する関数(redux storeからとアクションモジュールから)
AttributeBonus = connect(
  (state) => ({ affinity: state.basicinfo.affinity, inputlock: (state.inputlock > 0) ? true : false }),
    { set_affinity: actions.set_affinity }
)(AttributeBonus);


// HP%をレンダリングするコンポーネント
class HPPercent extends Component {
  // 値が変更された時に呼ばれる関数
  // propsとして渡された関数に処理を委託
  handleChange(event) {
    this.props.set_hp_percent(event.target.value);
  }

  // コンストラクタ
  constructor(props) {
    super(props);
    this.handleChange = ::this.handleChange;
  }

  // 最終的な要素を作って返す関数
  render() {
    return (
      <tr styleName="row">
        <Translate component="th" styleName="header" content="basic_information.hp_percent.title" />
        <td styleName="cell">
          <input
            styleName="hp_percent" type="number"
            onChange={this.handleChange}
            value={this.props.hp_percent}
            disabled={this.props.inputlock}
          />
          %
        </td>
      </tr>
    );
  }
}
HPPercent = CSSModules(HPPercent, styles);
// コンポーネントにpropsを注入する
// redux storeからデータを取って注入
// アクションモジュールから関数を持ってきて注入
HPPercent = connect(
  (state) => ({hp_percent: state.basicinfo.hp_percent, inputlock: state.inputlock ? true : false }),
    { set_hp_percent: actions.set_hp_percent }
)(HPPercent);


// プレイヤー情報をレンダリングするコンポーネント
// 色々なところから寄せあつめてレンダリング
class PlayerStats extends Component {
  render() {
    return (
      <table styleName="base">
        <tbody>
          <Rank />
          <ShipBonus />
          <AttributeBonus />
          <HPPercent />
        </tbody>
      </table>
    );
  }
}
PlayerStats = CSSModules(PlayerStats, styles);


// 攻撃力ボーナス部分をレンダリングするコンポーネント
class AtkBonus extends Component {
  // 攻撃力(%)が変更された時に呼ばれる関数
  percentChange(event) {
    this.props.set_atk_percent(event.target.value);
  }

  // 攻撃力(値)が変更された時に呼ばれる関数
  valueChange(event) {
    this.props.set_atk_value(event.target.value);
  }

  // コンストラクタ
  constructor(props) {
    super(props);
    this.percentChange = ::this.percentChange;
    this.valueChange = ::this.valueChange;
  }

  // 最終的な結果を作って返す関数
  render() {
    return (
      <table styleName="base">
        <tbody>
          <tr styleName="row">
            <Translate component="th" styleName="header" rowSpan="2" content="basic_information.atk_bonus.title" unsafe />
            <td styleName="cell">
              <input styleName="atk_percent" type="number" onChange={this.percentChange}
                value={this.props.atk_bonus_percent} disabled={this.props.inputlock} />
              %
            </td>
          </tr>
          <tr styleName="row">
            <td styleName="cell">
              <input styleName="atk_value" type="number" onChange={this.valueChange}
                value={this.props.atk_bonus_value} disabled={this.props.inputlock} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
AtkBonus = CSSModules(AtkBonus, styles);
// コンポーネントのpropsに注入するオブジェクトを作って返す関数
function mapStateToAtkBonusProps(state) {
  return {
    atk_bonus_percent: state.basicinfo.atk_bonus.percent,
    atk_bonus_value: state.basicinfo.atk_bonus.value,
    inputlock: state.inputlock ? true : false
  };
}
// コンポーネントのpropsに注入する関数を集めたオブジェクト
var mapActionCreatorsToAtkBonusProps = {
  set_atk_percent: actions.set_atk_percent,
  set_atk_value: actions.set_atk_value
};
// コンポーネントのpropsに実際に注入する
AtkBonus = connect(mapStateToAtkBonusProps, mapActionCreatorsToAtkBonusProps)(AtkBonus);


// 基礎情報入力欄をレンダリングするコンポーネント
// Jobコンポーネントはここからpropsを渡される
class BasicInformation extends Component {
  render() {
    return (
      <section>
        <Translate component="header" styleName="title" content="basic_information.title" />
        <PlayerStats />
        <AtkBonus />
        <Job set_job_type={this.props.set_job_type} job={this.props.job} />
      </section>
    );
  }
}
BasicInformation = CSSModules(BasicInformation, styles);
// コンポーネントにpropsを注入して外部にこのモジュールをexport
// defaultがついているのでimportする時はこのモジュールがimportされる
export default connect(((state) => ({ job: state.job })), { set_job_type: actions.set_job_type })(BasicInformation);
