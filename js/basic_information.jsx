// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 基礎情報を入力させるコンポーネント
 */

// モジュールのインポート
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "./actions.js";

import "../css/calc.css";


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
        <option value={i} key={i}>{this.props.job[i].name}</option>
      );
    }
    // select要素を作って返す
    return (
      <select id="job" onChange={this.handle_job_change} >
        {values}
      </select>
    );
  }
}


// ジョブ選択部分のコンポーネント
// {...this.props}は渡されたprops全部を渡す
class Job extends Component {
  render() {
    return (
      <table className="grbr" id="job_table">
        <tbody>
          <tr>
            <th>ジョブ</th>
            <td>
              <JobSelector {...this.props} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}


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
      <tr>
        <th>Rank</th>
        <td>
          <input
            className="width50"
            type="text"
            onChange={this.handleChange}
            id="rank"
            value={this.props.rank}
          />
        </td>
      </tr>
    );
  }
}
// コンポーネントにpropsを注入する
// reduxのstoreからデータを取ってきてpropsに注入
// アクションを集めたモジュールから関数を取ってきて注入
Rank = connect(
  (state) => ({ rank: state.basicinfo.rank }),
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
      <tr>
        <th>騎空艇補正</th>
        <td>
          <input
            className="width50"
            type="text"
            onChange={this.handleChange}
            id="ship_bonus"
            value={this.props.ship_bonus}
          />
        </td>
      </tr>
    );
  }

}
// コンポーネントにpropsを注入する
// redux storeからデータを取ってきて注入
// アクションモジュールからアクションを持ってきて注入
ShipBonus = connect(
  (state) => ({ ship_bonus: state.basicinfo.ship_bonus }), { set_ship_bonus: actions.set_ship_bonus }
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
    return (
      <tr>
        <th>属性補正</th>
        <td>
          <select onChange={this.handleChange} id="attribute_type" value={this.props.affinity}>
            <option value="normal">無し</option>
            <option value="good">有利</option>
            <option value="bad">不利</option>
          </select>
        </td>
      </tr>
    );
  }
}
// propsに色々注入する関数(redux storeからとアクションモジュールから)
AttributeBonus = connect(
  (state) => ({ affinity: state.basicinfo.affinity }),
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
      <tr>
        <th>HP/MAXHP</th>
        <td>
          <input
            className="width50" type="text"
            onChange={this.handleChange}
            id="hp_percent"
            value={this.props.hp_percent}
          />
          %
        </td>
      </tr>
    );
  }
}
// コンポーネントにpropsを注入する
// redux storeからデータを取って注入
// アクションモジュールから関数を持ってきて注入
HPPercent = connect(
  (state) => ({ hp_percent: state.basicinfo.hp_percent }), { set_hp_percent: actions.set_hp_percent }
)(HPPercent);


// プレイヤー情報をレンダリングするコンポーネント
// 色々なところから寄せあつめてレンダリング
class PlayerStats extends Component {
  render() {
    return (
      <table className="grbr" id="info_table">
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
      <table className="grbr" id="bonus_table">
        <tbody>
          <tr>
            <th rowSpan="2">発動中の<br />攻撃力ボーナス</th>
            <td>
              <input className="width25" type="text" onChange={this.percentChange}
                id="atk_bonus_percent" value={this.props.atk_bonus_percent} />
              %
            </td>
          </tr>
          <tr>
            <td>
              <input className="width50" type="text" onChange={this.valueChange}
                id="atk_bonus_value" value={this.props.atk_bonus_value} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
// コンポーネントのpropsに注入するオブジェクトを作って返す関数
function mapStateToAtkBonusProps(state) {
  return {
    atk_bonus_percent: state.basicinfo.atk_bonus.percent,
    atk_bonus_value: state.basicinfo.atk_bonus.value
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
        <header className="subtype">基本情報</header>
        <PlayerStats />
        <AtkBonus />
        <Job set_job_type={this.props.set_job_type} job={this.props.job} />
      </section>
    );
  }
}
// コンポーネントにpropsを注入して外部にこのモジュールをexport
// defaultがついているのでimportする時はこのモジュールがimportされる
export default connect(((state) => ({ job: state.job })), { set_job_type: actions.set_job_type })(BasicInformation);
