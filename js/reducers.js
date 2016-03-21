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

// jobを保管するstateのreducer
// action = { selector: "JOB", type: "ASSIGN", job: data }
export function job_reducer(state = {}, action) {
  if (action.type === RCONST.job.ASSIGN) {
    // 新しいオブジェクトに現在のstateとactionで渡されたjobを結合する
    // これを Object.assign(state, action.job) とすると悲しみを生む
    return Object.assign({}, state, action.job);
  } else {
    return state;
  }
}

// 武器を保管するstateのreducer
export function weapon_reducer(state = [], action) {
  return state;
}

// 召喚を保管するstateのreducer
export function summon_reducer(state = [], action {
  return state;
}
