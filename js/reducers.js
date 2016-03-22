// vim: sts=2 sw=2 ts=2 expandtab

import * as RCONST from "./const/reducer_type.js";

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
export function job_data(state = { state: RCONST.job_state.UNASSIGNED }, action) {
  if (action.type === RCONST.job.ASSIGN) {  // 渡されたのでstateを更新する
    // 新しいオブジェクトに現在のstateとactionで渡されたjobを結合する
    // これを Object.assign(state, action.job) とすると悲しみを生む
    return Object.assign({}, state, { data: action.job }, { state: RCONST.job_state.ASSIGNED });
  } else if (action.type === RCONST.job.FETCHING) {  // 読みこみ中…
    return Object.assign({}, state, { state: RCONST.job_state.FETCHING });
  } else {  // 関係無かったのでstateはそのまま
    return state;
  }
}

// 武器を保管するstateのreducer
export function weapon(state, action) {
  return { data: [] };
}

// 召喚を保管するstateのreducer
export function summon(state, action) {
  return { data: [] };
}

// 基本情報を保管するstateのreducer
export function basicinfo(state, action) {
  // デフォルト値の設定
  var zenith = {
    atk: 0,
    weapon: [0, 0],
    attribute: 0
  };
  var atk_bonus ={
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
  if (action) {
    var retval = Object.assign({}, { data: default_value }, state);
    return retval;
  } else if (state === undefined) {  // stateがundefinedなら初期値を返す
    return { data: default_value };
  } else {  // 俺には関係無かったぜ！
    return state;
  }
}

