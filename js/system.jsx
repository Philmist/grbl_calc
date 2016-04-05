// vim: sts=2 sw=2 ts=2 expandtab

/*
 * セーブロードその他
 */

import React, { Component } from "react";
import { connect } from "react-redux";

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
  save_data() {
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
            <select id="saveload_slot">
              { this.option_list.map ( (i) => { return <option value={String(i[1])} key={"slot_"+String(i[1])}>{i[0]}</option>; } ) }
            </select>
          </td>
        </tr>
        <tr>
          <th>名前</th>
          <td>
            <input type="text" id="saveload_name" style={{width: "100px"}} />
          </td>
        </tr>
        <tr>
          <th>
            保存/呼出
          </th>
          <td>
            <input type="button" value="保存" />
            <input type="button" value="呼出" />
          </td>
        </tr>
      </tbody>
    );
  }
}
