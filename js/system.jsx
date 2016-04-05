// vim: sts=2 sw=2 ts=2 expandtab

/*
 * セーブロードその他
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  dangerously_replace_basicinfo_object,
  dangerously_replace_weapon_object,
  dangerously_replace_summon_object,
  set_state_loading,
  set_state_loaded,
  set_state_saving,
  set_state_saved
} from "./actions.js";

import "../css/calc.css";


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
export default class System extends Component {
  constructor(props){
    super(props);
    this.state = {
      saveload_available: storageAvailable('localStorage')
    };
  }
  render() {
    return (
      <section>
        <header className="subtype">システム</header>
        <form name="system">
          <table className="grbr" id="system">
            { this.state.saveload_available ?  <SaveLoad /> : <CannotSave /> }
          </table>
        </form>
      </section>
    );
  }
}


// localStorageが使えない時
class CannotSave extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>保存/呼出不可</td>
        </tr>
      </tbody>
    );
  }
}


// セーブロード部分
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
    ["SLOT 1",0],
    ["SLOT 2",1],
    ["SLOT 3",2],
    ["SLOT 4",3],
    ["SLOT 5",4]
  ];

  render() {
    return (
      <tbody>
        <tr>
          <th>スロット</th>
          <td>
            <select id="saveload_slot" value={this.state.current_slot_number} onChange={this.change_slot} >
              { this.option_list.map ( (i) => { return <option value={String(i[1])} key={"slot_"+String(i[1])}>{i[0]}</option>; } ) }
            </select>
          </td>
        </tr>
        <tr>
          <th>名前</th>
          <td>
            <input
              type="text"
              id="saveload_name"
              style={{width: "100px"}}
              value={this.state.current_slot_name}
              onChange={this.change_name}
            />
          </td>
        </tr>
        <tr>
          <th>
            保存/呼出
          </th>
          <td>
            <input type="button" value="保存" onClick={this.save_data} />
            <input type="button" value="呼出" onClick={this.load_data} />
          </td>
        </tr>
      </tbody>
    );
  }
}
const mapStateToSaveLoadProps = (state) => {
  return {
    weapon: state.weapon,
    summon: state.summon,
    basicinfo: state.basicinfo
  };
};
const mapActionCreatorsToSaveLoadProps = {
  set_weapon_object: dangerously_replace_weapon_object,
  set_summon_object: dangerously_replace_summon_object,
  set_basicinfo_object: dangerously_replace_basicinfo_object,
  set_state_loading,
  set_state_loaded,
  set_state_saving,
  set_state_saved
};
SaveLoad = connect(mapStateToSaveLoadProps, mapActionCreatorsToSaveLoadProps)(SaveLoad);
