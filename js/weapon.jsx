// vim: sts=2 sw=2 ts=2 expandtab

var React = require("react");

var grbl_calc = require("./calc.js");


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


// 外部にクラスをエクスポート
module.exports = Weapon;
