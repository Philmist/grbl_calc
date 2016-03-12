// vim: sts=2 sw=2 ts=2 expandtab

var React = require("react");
var ReactDOM = require("react-dom");

var grbl_calc = require("./calc.js");


// 基礎情報入力欄
var BasicInformation = React.createClass({
  render: function() {
    return (<h1>基本情報</h1>);
  }
});


// Zenith入力欄
var Zenith = React.createClass({
  render: function() {
    return (<h1>Zenith</h1>);
  }
});


// 結果表示欄
var Result = React.createClass({
  render: function() {
    return (<h1>Result</h1>);
  }
});


// システム部分
var System = React.createClass({
  render: function() {
    return (<h1>System</h1>);
  }
});


// 武器部分
var Weapon = React.createClass({
  render: function() {
    return (<h1>Weapon</h1>);
  }
});


// 召喚獣部分
var Summon = React.createClass({
  render: function() {
    return (<h1>Summon</h1>);
  }
});


// フレンド部分
var Friend = React.createClass({
  render: function() {
    return (<h1>Friend</h1>);
  }
});


