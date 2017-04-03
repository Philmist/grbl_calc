// vim: sts=2 sw=2 ts=2 expandtab

/*
 * セーブロードその他
 */

import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { connect } from "react-redux";
import {
  dangerously_replace_basicinfo_object,
  dangerously_replace_weapon_object,
  dangerously_replace_summon_object,
  dangerously_replace_friend_object,
  set_state_loading,
  set_state_loaded,
  set_state_saving,
  set_state_saved
} from "./actions.js";
import pako from "pako";
import base64 from "base64-js";

import counterpart from "counterpart";
import Translate from "react-translate-component";
let _t = Translate.translate;

import styles from "system.css";

// localStorageが使えるかどうかのチェック
function storageAvailable(type) {
  try {
    var storage = window[type],
      x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
    return false;
  }
}

// システム部分
// TODO: ここらへんにセーブとロードの処理
class System extends Component {
  constructor(props){
    super(props);
    this.state = {
      saveload_available: storageAvailable('localStorage')
    };
  }
  render() {
    return (
      <section>
        <header styleName="title">システム</header>
        <form name="system">
          <table styleName="base" id="system">
            { this.state.saveload_available ?  <SaveLoad /> : <CannotSave /> }
          </table>
        </form>
      </section>
    );
  }
}
export default CSSModules(System, styles);


// localStorageが使えない時
class CannotSave extends Component {
  render() {
    return (
      <tbody>
        <tr styleName="row">
          <td styleName="cell">保存/呼出不可</td>
        </tr>
      </tbody>
    );
  }
}
CannotSave = CSSModules(CannotSave, styles);


// localStorageからのセーブロード部分
class SaveLoad extends Component {

  storage = window.localStorage;

  constructor(props) {
    super(props);
    // 関数をbind
    this.save_data = ::this.save_data;
    this.load_data = ::this.load_data;
    this.change_name = ::this.change_name;
    this.change_slot = ::this.change_slot;
    // スロット名をチェックして足りなければ追加
    let slot_names_jsonstr = this.storage.getItem("slot_names");
    let slot_names_array = Array(this.option_list.length);
    if (slot_names_jsonstr) {
      slot_names_array = JSON.parse(slot_names_jsonstr);
      if (slot_names_array.length < this.option_list.length) {
        let push_length = this.option_list.length - slot_names_array.length;
        for (let i = 0; i < push_length; i++) {
          slot_names_array.push("");
        }
      }
    } else {
      slot_names_array = Array(this.option_list.length);
      slot_names_array.fill("");
    }
    // 初期stateをセット
    this.state = {
      slot_names: slot_names_array,
      current_slot_number: 0,
      current_slot_name: slot_names_array[0]
    };
  }

  save_data(event) {
    // セーブ中に状態を変更
    this.props.set_state_saving();
    // セーブするデータを作る
    let save_obj = {
      weapon: this.props.weapon,
      summon: this.props.summon,
      basicinfo: this.props.basicinfo,
      friend: this.props.friend,
      name: this.state.current_slot_name
    };
    // JSON化する
    let json_save = JSON.stringify(save_obj);
    // localStorageに保存
    this.storage.setItem(`save_${this.state.current_slot_number}`, json_save);
    // スロット名を変更
    let slot_names = this.state.slot_names;
    slot_names[this.state.current_slot_number] = this.state.current_slot_name;
    this.storage.setItem("slot_names", JSON.stringify(slot_names));
    console.log("SAVE: " + base64.fromByteArray(pako.deflate(JSON.stringify(slot_names))));
    // セーブ終了に状態を変更
    this.props.set_state_saved();
    // スロット名も変更
    this.setState({ slot_names: slot_names });
  }

  load_data(event) {
    // 状態を変更
    this.props.set_state_loading();
    let loaded_str = this.storage.getItem(`save_${this.state.current_slot_number}`);
    // もしデータが無いときは
    if (!loaded_str) {
      this.props.set_state_loaded();
      return;
    }
    // データがあった！
    let loaded_obj = JSON.parse(loaded_str);
    this.props.set_weapon_object(loaded_obj.weapon);
    this.props.set_summon_object(loaded_obj.summon);
    this.props.set_basicinfo_object(loaded_obj.basicinfo);
    this.props.set_friend_object(loaded_obj.friend);
    // 状態を元に
    this.props.set_state_loaded();
  }

  change_name(event) {
    this.setState({ current_slot_name: event.target.value });
  }

  change_slot(event) {
    this.setState({ current_slot_number: event.target.value, current_slot_name: this.state.slot_names[event.target.value]});
  }

  option_list = [
    ["SLOT 1", 0],
    ["SLOT 2", 1],
    ["SLOT 3", 2],
    ["SLOT 4", 3],
    ["SLOT 5", 4],
    ["SLOT 6", 5],
    ["SLOT 7", 6],
    ["SLOT 8", 7],
    ["SLOT 9", 8],
    ["SLOT 10",9]
  ];

  render() {
    return (
      <tbody>
        <tr styleName="row">
          <Translate component="th" styleName="header" content="system.slot" />
          <td styleName="cell">
            <select styleName="slot" value={this.state.current_slot_number} onChange={this.change_slot} >
              { this.option_list.map ( (i) => { return <option value={String(i[1])} key={"slot_"+String(i[1])}>{i[0]}</option>; } ) }
            </select>
          </td>
        </tr>
        <tr styleName="row">
          <Translate component="th" styleName="header" content="system.name" />
          <td styleName="cell">
            <input
              type="text"
              styleName="name"
              value={this.state.current_slot_name}
              onChange={this.change_name}
            />
          </td>
        </tr>
        <tr styleName="row">
          <Translate component="th" styleName="header" content="system.saveload_header" />
          <td styleName="cell">
            <Translate component="input" type="button" attributes={ {value:"system.save"} } onClick={this.save_data} />
            <Translate component="input" type="button" attributes={ {value:"system.load"} } onClick={this.load_data} />
          </td>
        </tr>
      </tbody>
    );
  }
}
SaveLoad = CSSModules(SaveLoad, styles);
const mapStateToSaveLoadProps = (state) => {
  return {
    weapon: state.weapon,
    summon: state.summon,
    friend: state.friend,
    basicinfo: state.basicinfo
  };
};
const mapActionCreatorsToSaveLoadProps = {
  set_weapon_object: dangerously_replace_weapon_object,
  set_summon_object: dangerously_replace_summon_object,
  set_basicinfo_object: dangerously_replace_basicinfo_object,
  set_friend_object: dangerously_replace_friend_object,
  set_state_loading,
  set_state_loaded,
  set_state_saving,
  set_state_saved
};
SaveLoad = connect(mapStateToSaveLoadProps, mapActionCreatorsToSaveLoadProps)(SaveLoad);


// 文字列からのセーブロード部分
class SaveLoadFromTextbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data_str: ""
    };
  }

  serialize_and_set() {
    let save_obj = {
      weapon: this.props.weapon,
      summon: this.props.summon,
      basicinfo: this.props.basicinfo,
      friend: this.props.friend,
    };
    let json_str = JSON.stringify(save_obj);
    let deflate_data_bytearray = pako.deflate(json_str);
    let base64ed_str = base64.fromByteArray(deflate_data_bytearray);
    this.setState({ data_str: base64ed_str });
  }

  render() {
    return (
      <div>
      </div>
    );
  }

}
const mapStateToSaveLoadFromTextboxProps = (state) => {
  return {
    weapon: state.weapon,
    summon: state.summon,
    friend: state.friend,
    basicinfo: state.basicinfo
  };
};
const mapActionCreatorsToSaveLoadFromTextboxProps = {
  set_weapon_object: dangerously_replace_weapon_object,
  set_summon_object: dangerously_replace_summon_object,
  set_basicinfo_object: dangerously_replace_basicinfo_object,
  set_friend_object: dangerously_replace_friend_object,
  set_state_loading,
  set_state_loaded,
  set_state_saving,
  set_state_saved
};
SaveLoadFromTextbox = connect(mapStateToSaveLoadFromTextboxProps, mapActionCreatorsToSaveLoadFromTextboxProps)(SaveLoadFromTextbox);
