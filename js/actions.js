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

// 属性相性をセットするアクション
export function set_affinity(affinity) {
  return function (dispatch) {
    if (affinity == "good" || affinity == "bad") {
      dispatch({ type: RC.basic.AFFINITY, value: affinity });
    } else {
      dispatch({ type: RC.basic.AFFINITY, value: "normal" });
    }
  };
}


// Zenith関係

export function set_zenith_atk(param) {
  return function (dispatch) {
    let atk_val = Number(param);
    if (atk_val >= 0 && atk_val <= 3) {
      dispatch({ type: RC.basic.ZENITH_ATK, value: atk_val });
    } else {
      console.warn("Parameter doesn't fit to " + RC.basic.ZENITH_ATK + " : " + String(param));
    }
  };
}

export function set_zenith_attr(param) {
  return function (dispatch) {
    let attr_val = Number(param);
    if (attr_val >= 0 && attr_val <= 3) {
      dispatch({ type: RC.basic.ZENITH_ATTR, value: attr_val });
    } else {
      console.warn("Parameter doesn't fit to " + RC.basic.ZENITH_ATTR + " : " + String(param));
    }
  };
}

export function set_zenith_weapon(param) {
  return function (dispatch) {
    if (!(param instanceof Array)) {
      console.warn("Parameter is not Array (" + RC.basic.ZENITH_WEAPON + ")");
    } else if (param.length != 2) {
      console.warn("Parameter length is not 2 (" + RC.basic.ZENITH_WEAPON + ")");
    } else {
      // TODO: もっとマシな書き方を考えるべき
      let w0 = Number(param[0]);
      let w1 = Number(param[1]);
      if (isNaN(w0) || isNaN(w1)) {
        console.warn("Parameter doesn't fit to " + RC.basic.ZENITH_WEAPON);
      } else if ((w0 >= 0 && w0 <= 3) && (w1 >= 0 && w1 <= 3)) {
        dispatch({ type: RC.basic.ZENITH_WEAPON, value: [w0, w1] });
      } else {
        console.warn("Parameter doesn't fit to " + RC.basic.ZENITH_WEAPON);
      }
    }
  };
}
