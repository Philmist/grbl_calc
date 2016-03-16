// vim: sts=2 sw=2 ts=2 expandtab

var React = require("react");

var grbl_calc = require("./calc.js");


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


// 外部にクラスをエクスポート
module.exports = Friend;
