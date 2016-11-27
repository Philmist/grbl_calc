// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 武器の名称入力コンポーネント
 * http://codepen.io/moroshko/pen/qbRNjV を参照した
 */

import React, { Component } from "react";
import Autosuggest from "react-autosuggest";

import weaponlist_ja from "./const/weapon_list_ja.js";

import styles from "weapon_input.css";


// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escape_regex_characters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 入力された値から適合する値群を返す関数
function get_suggestions(value) {
  // 正規表現で使われる文字をエスケープ
  const escaped_value = escape_regex_characters(value.trim());

  // 空白なら空サジェスト
  if (escaped_value === "") {
    return [];
  }

  // リストから選び出すための正規表現
  const test_regex = new RegExp("^(\\[.+\\])?.*" + escaped_value + ".*", "i");

  let result_array = weaponlist_ja.map((section) => {
    return {
      type: section.type,
      weapons: section.weapons.filter((weapon) => {
        return test_regex.test(weapon.name);
      })
    };
  })
  .filter((section) => {
    return section.weapons.length > 0;
  });
  return result_array;
}

// セクションを選択するための関数
function get_section_suggestions(section) {
  return section.weapons;
}

// セクションの中の値を選択するための関数
function get_suggestion_value(suggestion) {
  return suggestion.name;
}

// セクション名をどのように描画するか
function render_section_title(section) {
  return (
    <strong>{section.type}</strong>
  );
}

// 候補をどのように描画するか
function render_suggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}


// 武器名入力コンポーネント本体
class WeaponInput extends Component {
  // コンストラクタ
  constructor() {
    super();
    this.state = {
      suggestions: []
    };
    this.onChange = ::this.onChange;
  }

  // メンバー関数をアロー関数で定義すると
  // thisをbindしておく必要がなくなる

  // Inputboxの内容が変更された時に呼ばれる関数
  onChange(event, { newValue, method }) {
    this.props.on_change(newValue);
  }

  // 入力された内容から候補を更新する関数
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: get_suggestions(value)
    });
  };

  // 入力内容が空になった時に呼びだされる関数
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, sectionIndex, method }) => {
    this.props.suggest_selected(suggestion);
  }

  render() {
    const { suggestions } = this.state;
    const inputProps = {
      placeholder: "武器名",
      value: this.props.value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={get_suggestion_value}
        renderSuggestion={render_suggestion}
        renderSectionTitle={render_section_title}
        getSectionSuggestions={get_section_suggestions}
        inputProps={inputProps}
        id={this.props.inputbox_id}
        theme={styles} />
    );
  }

}
// AutosuggestはCSSModulesでデコレーションする必要がない
export default WeaponInput;
