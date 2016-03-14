// vim: sts=2 sw=2 ts=2 expandtab

var React = require("react");
var ReactDOM = require("react-dom");

var grbl_calc = require("./calc.js");


// 基礎情報入力欄
var BasicInformation = React.createClass({
  render: function() {
    return (
      <section>
        <header className="subtype">基本情報</header>
        <PlayerStats parameter={this.props.parameter} onChangeParameter={this.props.onChangeParameter} />
        <AtkBonus parameter={this.props.parameter} onChangeParameter={this.props.onChangeParameter} />
        <Job parameter={this.props.parameter} onChangeParameter={this.props.onChangeParameter} />
      </section>
    );
  }
});


// ジョブ選択
var Job = React.createClass({
  getInitialState: function() {
    return {
      job: {}
    };
  },
  componentDidMount: function() {
    grbl_calc.get_job_data().then(function(d) {
      this.setState({
        job: d
      });
    }.bind(this));
  },
  render: function() {
    return (
      <table className="grbr" id="job_table">
        <tbody>
          <tr>
            <th>ジョブ</th>
            <td>
              <JobSelector
                parameter={this.props.parameter}
                onChangeParameter={this.props.onChangeParameter}
                job={this.state.job}
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
});

var JobSelector = React.createClass({
  render: function() {
    var values = [];
    for (var prop in this.props.job) {
      values.push(
        <option value={prop} key={prop}>{this.props.job[prop].name}</option>
      );
    }
    return (
      <select id="job" ref="job">
        {values}
      </select>
    );
  }
});


// rank/騎空艇補正/属性補正/HP割合
var PlayerStats = React.createClass({
  handleChange: function() {
  },
  render: function() {
    return (
      <table className="grbr" id="info_table">
        <tbody>
          <tr>
            <th>Rank</th>
            <td>
              <input
                className="width50"
                type="text"
                onChange={this.handleChange}
                ref="rank" id="rank"
              />
            </td>
          </tr>
          <tr>
            <th>騎空艇補正</th>
            <td>
              <input
                className="width50"
                type="text"
                onChange={this.handleChange}
                ref="ship_bonus" id="ship_bonus"
              />
            </td>
          </tr>
          <tr>
            <th>属性補正</th>
            <td>
              <select onchange={this.handleChange} ref="attribute_type" id="attribute_type">
                <option value="normal">無し</option>
                <option value="good">有利</option>
                <option value="bad">不利</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>HP/MAXHP</th>
            <td>
              <input
                className="width50" type="text"
                onChange={this.handleChange}
                ref="hp_percent" id="hp_percent"
                value="100"
              />
              %
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
});


// 攻撃力ボーナス
var AtkBonus = React.createClass({
  handleChange: function() {
  },
  render: function() {
    return (
      <table className="grbr" id="bonus_table">
        <tbody>
          <tr>
            <th rowSpan="2">発動中の<br />攻撃力ボーナス</th>
            <td>
              <input className="width25" type="text" onChange={this.handleChange}
                ref="atk_bonus_percent" id="atk_bonus_percent" />
              %
            </td>
          </tr>
          <tr>
            <td>
              <input className="width50" type="text" onChange={this.handleChange}
                ref="atk_bonus_value" id="atk_bonus_value" />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
});


// Zenith入力欄
var Zenith = React.createClass({
  render: function() {
    return (
      <div>
        <header className="subtype">Zenith Perk</header>
      </div>
    );
  }
});

var zenithStarList = [[0,"無し"], [1, "★"], [2, "★★"], [3,"★★★"]];


// 結果表示欄
var Result = React.createClass({
  render: function() {
    var res = grbl_calc.calculate_atkval(this.props.parameter);
    return (
      <section>
        <header className="subtype">結果</header>
        <table className="grbr" id="result_table" ref="result_table">
          <tbody>
            <tr>
              <th>基本値</th>
              <td>{res.basic_atk}</td>
            </tr>
            <tr>
              <th>表示攻撃力</th>
              <td>{res.showed_atk}</td>
            </tr>
            <tr>
              <th>総合攻撃力</th>
              <td>{res.total_atk}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
});


// システム部分
var System = React.createClass({
  render: function() {
    return (
      <section>
        <header className="subtype">システム</header>
      </section>
    );
  }
});


// 武器部分
var Weapon = React.createClass({
  render: function() {
    return (
      <section>
        <header className="subtype">武器</header>
      </section>
    );
  }
});


// 召喚獣部分
var Summon = React.createClass({
  render: function() {
    return (
      <section>
        <header className="subtype">召喚獣</header>
        <SummonTable parameter={this.props.parameter} onChangeParameter={this.props.onChangeParameter} />
      </section>
    );
  }
});

var SummonTable = React.createClass({
  render: function() {
    return (
      <form>
        <table className="grbr" id="summon_table">
          <SummonTableHeader />
        </table>
      </form>
    );
  }
});

var SummonTableHeader = React.createClass({
  render: function() {
    return (
      <thead>
        <tr>
          <th align="center">L</th>
          <th align="center">選</th>
          <th align="center">召喚名</th>
          <th align="center">攻撃力</th>
          <th align="center" colSpan="2">加護1</th>
          <th align="center" colSpan="2">加護2</th>
          <th align="center">並替・挿入・削除</th>
        </tr>
      </thead>
    );
  }
});


// フレンド部分
var Friend = React.createClass({
  render: function() {
    return (
      <section>
        <header className="subtype">フレンド召喚</header>
        <form>
          <table className="grbr" id="friend_table">
            <FriendTableHeader />
          </table>
        </form>
      </section>
    );
  }
});

var FriendTableHeader = React.createClass({
  render: function() {
    return (
      <thead>
        <tr>
          <th align="center">L</th>
          <th align="center">選</th>
          <th align="center">召喚名</th>
          <th align="center">攻撃力</th>
          <th align="center" colSpan="2">加護1</th>
          <th align="center" colSpan="2">加護2</th>
          <th align="center">並替・挿入・削除</th>
        </tr>
      </thead>
    );
  }
});


// 外部に名前を出す
module.exports.BasicInformation = BasicInformation;
module.exports.Zenith = Zenith;
module.exports.System = System;
module.exports.Weapon = Weapon;
module.exports.Summon = Summon;
module.exports.Friend = Friend;
module.exports.Result = Result;

