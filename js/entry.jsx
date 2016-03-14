// vim: sts=2 sw=2 ts=2 expandtab

// 必要なスタイルシートを読みこむ
require("../css/calc.css");

// 必要なライブラリを読みこむ
var React = require("react");
var ReactDOM = require("react-dom");

// 必要なユーザースクリプトを読みこむ
var forms = require("./form_module.jsx");


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
          <forms.BasicInformation parameter={this.state.param} onChangeParameter={this.updateParams} />
          <forms.Zenith parameter={this.state.param} onChangeParameter={this.updateParams} />
          <forms.Result parameter={this.state.param} />
          <forms.System parameter={this.state.param} setParamFunc={this.setAllParams} />
        </div>
        <div id="right_box">
          <forms.Weapon parameter={this.state.param} onChangeParameter={this.updateParams} />
          <forms.Summon parameter={this.state.param} onChangeParameter={this.updateParams} />
          <forms.Friend parameter={this.state.param} onChangeParameter={this.updateParams} />
        </div>
      </div>
    );
  }
});


// 最終的な結果をDOMにして注入する
ReactDOM.render(
  <CalculatorBody />,
  document.getElementById('react_content')
);
