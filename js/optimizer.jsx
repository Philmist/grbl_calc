// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 編成最適化関連
 */
import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";

import { GrblFormGAOptimizer, CALC_STATE } from "./optimize_atk.js";

import styles from "optimizer.css";


// 最適化をまとめるセクション
class Optimizer extends Component {
  render() {
    return (
      <section>
        <header styleName="title">編成最適化</header>
        <form name="optimizer">
          <table styleName="base" id="optimizer_table">
            <Button job_data={this.props.job} />
          </table>
        </form>
      </section>
    );
  }
}
Optimizer = CSSModules(Optimizer, styles);
export default Optimizer;


class Button extends Component {
  constructor(props) {
    super(props);
    this.next_button = ::this.next_button;
    this.optimizer_instance = new GrblFormGAOptimizer();
    this.state = {
      generator_message: "",
      state: ""
    };
  }

  next_button(event) {
    if (this.optimizer_instance.state.status == CALC_STATE.UNINIT || (!this.optimizer_generator)) {
      this.optimizer_generator = this.optimizer_instance.init(
        this.props.basicinfo,
        this.props.weapon,
        this.props.summon,
        this.props.friend,
        this.props.job_data
      );
    } else if (this.optimizer_instance.state.status == CALC_STATE.PARAM_INITED) {
      this.optimizer_instance.create_first_ga_state(100, 0.01, 0.01, 0.1);
    } else {
      let iter_obj = this.optimizer_generator.next();
      if (iter_obj.value && iter_obj.value.message) {
        this.setState({generator_message: iter_obj.value.message});
    }
    console.log(iter_obj);
  }

  render() {
    return (
      <tbody>
        <tr styleName="row">
          <th styleName="header">
            ぼたん
          </th>
          <td>
            <input type="button" value="次" onClick={this.next_button} />
          </td>
        </tr>
        <tr>
          <td colSpan="2"><span>{this.state.generator_message}</span></td>
        </tr>
      </tbody>
    );
  }
}
Button = CSSModules(Button, styles);
const mapStateToButtonProps = (state) => {
  return {
    weapon: state.weapon,
    summon: state.summon,
    friend: state.friend,
    basicinfo: state.basicinfo
  };
};
Button = connect(mapStateToButtonProps)(Button);
