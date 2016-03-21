// vim: sts=2 sw=2 ts=2 expandtab

import * as RC from "./const/reducer_type.js";

/*
 * reducerの定義
 * reducer: stateとactionという二つの引数を取ってstateを返す関数
 * reducerを使ってstateとactionを結びつけ、一元的に管理する
 * わからないactionは必ず渡されたstateをそのまま返さなければならない
 * stateがundefinedの場合は初期stateを返さなければならない
 */

/*
 * action.selector : 処理するreducer(string)
 * action.type : reducerに実行させるaction
 */

// jobを保管するstateのreducer
// action = { selector: "JOB", type: "ASSIGN", job: data }
export function job_reducer(state = {}, action) {
  if (action.type === RC.job.ASSIGN) {
      return Object.assign({}, state, action.job);
  } else {
      return state;
  }
}

// weaponを保管するstateのreducer
export function weapon_reducer(state = [], action) {
  return state;
}
