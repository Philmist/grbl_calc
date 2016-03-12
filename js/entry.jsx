// vim: sts=2 sw=2 ts=2 expandtab

require("../css/calc.css");

var React = require("react");
var ReactDOM = require("react-dom");

var grbl_calc = require("./calc.js");
var forms = require("./form_module.jsx");


var CalculatorBody = React.createClass({
  render: function() {
    return (
      <div>
        Hello!
      </div>
    );
  }
});

ReactDOM.render(
  <CalculatorBody />, document.getElementById('react_content')
);
