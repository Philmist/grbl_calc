// vim: sts=2 sw=2 ts=2 expandtab

var React = require("react");
var DragDropContext = require("react-dnd").DragDropContext;
var HTML5Backend = require("react-dnd-html5-backend");

var BasicInformation = require("./basic_information.jsx");
var Zenith = require("./zenith.jsx");
var Weapon = require("./weapon.jsx");
var Summon = require("./summon.jsx");
var Friend = require("./friend.jsx");

var grbl_calc = require("./calc.js");


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


// 計算機の骨格
var CalculatorBody = React.createClass({
  getInitialState: function() {
    return {
      param: {
        rank: 1,  // ランク
        ship_bonus: 0,  // 騎空艇補正
        hp_percent: 100,  // 現HPの割合(%)
        job: "fighter",  // "data/job_data.json"で定義されている職業(クラス)
        affinity: "none",  // 相性(none/good/bad)
        zenith: {  // Zenith Perk
          atk: 0,  // 攻撃力の星(0-3)
          weapon: [0, 0],  // 武器1, 武器2の星(0-3)
          attribute: 0  // 属性攻撃力の星(0-3)
        },
        weapon: [],  // 武器
        summon: [],
        atk_bonus: {  // 攻撃力ボーナス
          percent: 0,  // %
          value: 0  // 値
        },
        friend: {
        }
      }
    };
  },
  updateParams: function(obj) {
    this.setState({param: Object.assign(this.state.param, obj)});
  },
  setAllParams: function(param) {
    this.setState({param: param});
  },
  render: function() {
    return (
      <div id="site_box">
        <div id="header_box">
          <header className="titlecap">グランブルーファンタジー攻撃力計算機（新）</header>
        </div>
        <div id="left_box">
          <BasicInformation parameter={this.state.param} onChangeParameter={this.updateParams} />
          <Zenith parameter={this.state.param} onChangeParameter={this.updateParams} />
          <Result parameter={this.state.param} />
          <System parameter={this.state.param} setParamFunc={this.setAllParams} />
        </div>
        <div id="right_box">
          <Weapon parameter={this.state.param} onChangeParameter={this.updateParams} />
          <Summon parameter={this.state.param} onChangeParameter={this.updateParams} />
          <Friend parameter={this.state.param} onChangeParameter={this.updateParams} />
        </div>
      </div>
    );
  }
});


// 外部に名前を出す
module.exports = DragDropContext(HTML5Backend)(CalculatorBody);

