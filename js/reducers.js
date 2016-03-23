// vim: sts=2 sw=2 ts=2 expandtab

import * as RC from "./const/reducer_type.js";

/*
 * reducerの定義
 * reducer: stateとactionという二つの引数を取ってstateを返す関数
 * reducerを使ってstateとactionを結びつけ、一元的に管理する
 * わからないactionは必ず渡されたstateをそのまま返さなければならない
 * stateがundefinedの場合は初期stateを返さなければならない
 * stateを変更する場合には__必ず__新しい変数で返さなければならない
 */

/*
 * action.selector : 処理するreducer(string)
 * action.type : reducerに実行させるaction
 */

// jobのデータを保管するstateのreducer
// action = { selector: "JOB", type: "ASSIGN", job: data }
export function job_data(state = {}, action) {
  if (action.type === RC.job.ASSIGN) {  // 渡されたのでstateを更新する
    // 新しいオブジェクトに現在のstateとactionで渡されたjobを結合する
    // これを Object.assign(state, action.job) とすると悲しみを生む
    return Object.assign({}, state, action.job );
  } else {  // 関係無かったのでstateはそのまま
    return state;
  }
}

// 武器を保管するstateのreducer
export function weapon(state = [], action) {
  return state;
}

// 召喚を保管するstateのreducer
export function summon(state = [], action) {
  return state;
}

// 基本情報を保管するstateのreducer
export function basicinfo(state, action) {
  // デフォルト値の設定
  var zenith = {
    atk: 0,
    weapon: [0, 0],
    attribute: 0
  };
  var atk_bonus = {
    percent: 0,
    value: 0
  };
  var default_value = {
    rank: 1,
    ship_bonus: 0,
    hp_percent: 100,
    affinity: "none",
    job: "fighter",
    zenith: zenith,
    atk_bonus: atk_bonus
  };

  // actionによる分岐
  var retval = Object.assign({}, default_value, state);  // あらかじめ新しいObjectを作っておく
  if (action.type == RC.basic.ATK_PERCENT) {
    let atk_obj = Object.assign({}, state.atk_bonus, { percent: action.value });
    retval = Object.assign(retval, atk_obj);
  } else if (action.type == RC.basic.ATK_VALUE) {
    let atk_obj = Object.assign({}, state.atk_bonus, { value: action.value });
    retval = Object.assign(retval, atk_obj);
  } else if (action.type == RC.basic.ZENITH_ATK) {
    let zenith_obj = Object.assign({}, state.zenith, { atk: action.value });
    retval = Object.assign(retval, zenith_obj);
  } else if (action.type == RC.basic.ZENITH_ATTR) {
    let zenith_obj = Object.assign({}, state.zenith, { attribute: action.value });
    retval = Object.assign(retval, zenith_obj);
  } else if (action.type == RC.basic.ZENITH_WEAPON) {
    let zenith_obj = Object.assign({}, state.zenith, { weapon: action.value });
    retval = Object.assign(retval, zenith_obj);
  } else if (action.type == RC.basic.RANK) {
    retval = Object.assign(retval, { rank: action.value });
  } else if (action.type == RC.basic.SHIP_BONUS) {
    retval = Object.assign(retval, { ship_bonus: action.value });
  } else if (action.type == RC.basic.HP_PERCENT) {
    retval = Object.assign(retval, { hp_percent: action.value });
  } else if (action.type == RC.basic.AFFINITY) {
    if (action.value == "good" || action.value == "bad") {
      retval = Object.assign(retval, { affinity: action.value });
    } else {
      retval = Object.assign(retval, { affinity: "none" });
    }
  } else if (action.type == RC.basic.JOB) {
    retval = Object.assign(retval, { job: String(action.value) });
  } else if (state === undefined) {  // stateがundefinedなら初期値を返す
    return default_value;
  } else {  // 俺には関係無かったぜ！
    return state;
  }
  return retval;
}

// 各種のstate(読みこみ中など)を管理するreducer
export function component_state(state = {}, action) {
  let retval = state;
  Object.keys(RC.state).forEach((i) => {
    if (action.type === RC.state[i] && action.selector) {
      retval = Object.assign({}, state, { [action.selector]: RC.state[i] });
    }
  });
  return retval;
}
