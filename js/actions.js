// vim: sts=2 sw=2 ts=2 expandtab

import * as RC from "./const/reducer_type";
import get_job_data from "./get_job_data.js";


// ジョブを読みこみ中にするdispatch用のobjectを返す
function set_state_job_fetching() {
  return { type: RC.state.FETCHING, selector: RC.data_type.JOB };
}

// ジョブを読みこみ完了にするdispatch用のobjectを返す
function set_state_job_loaded() {
  return { type: RC.state.LOADED, selector: RC.data_type.JOB };
}

// ジョブのデータをセットするdispatch用のobjectを返す
function set_job_data(data) {
  return { type: RC.job.ASSIGN, job: data };
}

// urlからジョブのデータを読みこむアクション
export function fetch_job_data(url) {
  return function (dispatch) {
    dispatch(set_state_job_fetching());
    get_job_data(url).then((job) => {
      dispatch(set_job_data(job));
      dispatch(set_state_job_loaded());
      return Promise.resolve(job);
    });
  };
}


// action_typeのアクションをdispatchする関数を返す関数を返す関数
// 関数の中では数値の値をvalueとしてdispatchする
// 使用例:
// var set_atk_value = createfunc_dispatch_number(RC.basic.ATK_VALUE);
// こうしたあとにset_atk_valueをmapしてcomponentの中で値を指定して呼びだす。
function createfunc_dispatch_number(action_type) {
  return function (param) {
    return function (dispatch) {
      let numval = Number(param);
      if (!isNaN(numval) && (numval >= 0)) {
        dispatch({ type: action_type, value: numval });
      } else {
        console.warn("Parameter doesn't fit to " + action_type + " : " + String(param));
      }
    };
  };
}

// 攻撃力ボーナス(固定値)をセットするアクション
export var set_atk_value = createfunc_dispatch_number(RC.basic.ATK_VALUE);

// 攻撃力ボーナス(%)をセットするアクション
export var set_atk_percent = createfunc_dispatch_number(RC.basic.ATK_PERCENT);

// ランクをセットするアクション
export var set_rank = createfunc_dispatch_number(RC.basic.RANK);

// 騎空艇補正をセットするアクション
export var set_ship_bonus = createfunc_dispatch_number(RC.basic.SHIP_BONUS);

// 最大HPに対する現HPの割合をセットするアクション
export var set_hp_percent = createfunc_dispatch_number(RC.basic.HP_PERCENT);

