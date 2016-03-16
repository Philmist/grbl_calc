// vim: sts=2 sw=2 ts=2 expandtab

var React = require("react");

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
  handleChange: function(event) {
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
  handleChange: function(event) {
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
  handleChange: function(event) {
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
  handleChange: function(event) {
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


// 外部にクラスをエクスポート
module.exports = BasicInformation;
