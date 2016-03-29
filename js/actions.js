// vim: sts=2 sw=2 ts=2 expandtab

/*
 * Action creatorを集めた関数
 * 便宜的に以下ではaction creatorをアクションと書くこともある
 *
 * action: dispatchしてreducerに送るオブジェクト
 * 通常のaction creator: actionを生成して返す関数
 * redux-thunkでのaction creator: 呼びだされてactionをdispatchする関数
 *
 * ここではredux-thunkが使われていることを前提にしている
 * redux-thunkは関数を返す関数を使う
 * そうすることによってdispatchを比較的楽に使いまわせる
 */

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

// ジョブを選択するアクション
export function set_job_type(job_str) {
  return function (dispatch) {
    dispatch({ type: RC.basic.JOB, value: job_str });
  };
}


// Zenith関係

// Zenith攻撃力補正
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

// Zenith属性攻撃力補正
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

// Zenith得意武器補正
// paramは2要素のArrayを渡す
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


// 武器関係

// 武器のオブジェクトを配列のindexを指定して置換する
export function replace_weapon_object(index, obj) {
  return function (dispatch, getState) {
    dispatch({ type: RC.weapon.REPLACE, index: Number(index), value: obj });
  };
}

// 武器を選択状態にする
export function enable_weapon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.ENABLE, index: Number(index) });
  };
}

// 武器を非選択状態にする
export function disable_weapon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.DISABLE, index: Number(index) });
  };
}

// 武器をfromからtoへ移動する(index)
export function move_weapon_object(from, to) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.MOVE, from: Number(from), to: Number(to) });
  };
}

// 武器を削除する
export function delete_weapon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.DELETE, index: Number(index) });
  };
}

// 空の武器を挿入する
export function insert_weapon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.APPEND, index: (Number(index)+1) });
  };
}


// 召喚関係

// 召喚のオブジェクトを配列のindexを指定して置換する
export function replace_summon_object(index, obj) {
  return function (dispatch, getState) {
    dispatch({ type: RC.summon.REPLACE, index: Number(index), value: obj });
  };
}

// 召喚を選択状態にする
export function enable_summon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.summon.ENABLE, index: Number(index) });
  };
}

// 召喚を非選択状態にする
export function disable_summon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.summon.DISABLE, index: Number(index) });
  };
}

// 召喚をfromからtoへ移動する(index)
export function move_summon_object(from, to) {
  return function (dispatch) {
    dispatch({ type: RC.summon.MOVE, from: Number(from), to: Number(to) });
  };
}

// 召喚を削除する
export function delete_summon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.summon.DELETE, index: Number(index) });
  };
}

// 空の召喚を挿入する
export function insert_summon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.summon.APPEND, index: (Number(index)+1) });
  };
}
