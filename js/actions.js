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


/* ジョブデータ読みこみ関連 */

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
    dispatch(input_lock());
    get_job_data(url).then((job) => {
      dispatch(set_job_data(job));
      dispatch(set_state_job_loaded());
      dispatch(input_unlock());
      return Promise.resolve(job);
    });
  };
}


/* ロックカウンター関連 */

// インプットロックカウンターを+1するオブジェクトを発行する
export function input_lock() {
  return { type: RC.inputlock.INCREMENT };
}

// インプットロックカウンターを-1するオブジェクトを発行する
export function input_unlock() {
  return { type: RC.inputlock.DECREMENT };
}

/* セーブロード関連 */

export function set_state_loading() {
  return function (dispatch) {
    dispatch(input_lock());
    dispatch({ type: RC.state.LOADING, selector: RC.data_type.SAVELOAD });
  };
}

export function set_state_loaded() {
  return function (dispatch) {
    dispatch(input_unlock());
    dispatch({ type: RC.state.LOADED, selector: RC.data_type.SAVELOAD });
  };
}

export function set_state_saving() {
  return function (dispatch) {
    dispatch(input_lock());
    dispatch({ type: RC.state.SAVING, selector: RC.data_type.SAVELOAD });
  };
}

export function set_state_saved() {
  return function (dispatch) {
    dispatch(input_unlock());
    dispatch({ type: RC.state.SAVED, selector: RC.data_type.SAVELOAD });
  };
}

/* 基礎データ関連 */

// 基礎データを全て入れかえる
export function dangerously_replace_basicinfo_object(obj) {
  return function (dispatch) {
    dispatch({ type: RC.basic.DANGER_REPLACE, value: obj });
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
        return true;
      } else {
        console.warn("Parameter doesn't fit to " + action_type + " : " + String(param));
        return false;
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
      return true;
    } else {
      console.warn("Parameter doesn't fit to " + RC.basic.ZENITH_ATK + " : " + String(param));
      return false;
    }
  };
}

// Zenith属性攻撃力補正
export function set_zenith_attr(param) {
  return function (dispatch) {
    let attr_val = Number(param);
    if (attr_val >= 0 && attr_val <= 3) {
      dispatch({ type: RC.basic.ZENITH_ATTR, value: attr_val });
      return true;
    } else {
      console.warn("Parameter doesn't fit to " + RC.basic.ZENITH_ATTR + " : " + String(param));
      return false;
    }
  };
}

// Zenith得意武器補正
// paramは2要素のArrayを渡す
export function set_zenith_weapon(param) {
  return function (dispatch) {
    if (!(param instanceof Array)) {
      console.warn("Parameter is not Array (" + RC.basic.ZENITH_WEAPON + ")");
      return false;
    } else if (param.length != 2) {
      console.warn("Parameter length is not 2 (" + RC.basic.ZENITH_WEAPON + ")");
      return false;
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
      return true;
    }
  };
}


/* 武器関係 */

// 武器のオブジェクト全体を置換する(危険)
export function dangerously_replace_weapon_object(obj) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.DANGER_REPLACE, value: obj });
    return true;
  };
}

// 武器の名前を指定する
export function set_weapon_name(index, name) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.NAME, index: Number(index), value: name });
    return true;
  };
}

// 武器の種別を指定する
// TODO: エラー処理
export function set_weapon_type(index, weapon_type) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.TYPE, index: Number(index), value: String(weapon_type) });
    return true;
  };
}

// 武器の攻撃力を指定する
export function set_weapon_atk_value(index, value) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.ATK, index: Number(index), value: Number(value) });
    return true;
  }
}

// 武器のスキルを指定する
// target: 0|1
export function set_weapon_skill_slot(index, target, skill) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.SLOT, index: Number(index), target: Number(target), value: String(skill) });
    return true;
  };
  
  // 選択したスロットに合った種別選択に変更する処理を入れる
}

export function set_weapon_skill_type(index, target, skill) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.SKILL, index: Number(index), target: Number(target), value: String(skill) });
    return true;
  };
}

// 武器のスキルレベルを指定する
export function set_weapon_skill_lv(index, lv) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.LV, index: Number(index), value: Number(lv) });
    return true;
  };
}

// cosmosを(booleanで)セットする
export function set_weapon_cosmos(index, value) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.COSMOS, index: Number(index), value: Boolean(value) });
    return true;
  };
}

// 鍵状態を変更する
export function set_weapon_lock(index, value) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.LOCK, index: Number(index), value: Boolean(value) });
    return true;
  };
}

// 武器を選択状態にする
export function enable_weapon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.ENABLE, index: Number(index) });
    return true;
  };
}

// 武器を非選択状態にする
export function disable_weapon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.DISABLE, index: Number(index) });
    return true;
  };
}

// 武器をfromからtoへ移動する(index)
export function move_weapon_object(from, to) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.MOVE, from: Number(from), to: Number(to) });
    return true;
  };
}

// 武器を与えられたindex配列通りにソートする
export function sort_weapon_object(to_array) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.SORT, to_array: to_array });
    return true;
  };
}

// 武器を削除する
export function delete_weapon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.DELETE, index: Number(index) });
    return true;
  };
}

// 空の武器を挿入する
export function insert_weapon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.weapon.APPEND, index: (Number(index)) });
    return true;
  };
}


/* 召喚関係 */

// 召喚のオブジェクト全体を置換する(危険)
export function dangerously_replace_summon_object(obj) {
  return function (dispatch, getState) {
    dispatch({ type: RC.summon.DANGER_REPLACE, value: obj });
    return true;
  };
}

// 召喚を選択状態にする
export function enable_summon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.summon.ENABLE, index: Number(index) });
    return true;
  };
}

// 召喚を非選択状態にする
export function disable_summon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.summon.DISABLE, index: Number(index) });
    return true;
  };
}

// 鍵状態を変更する
export function set_summon_lock(index, value) {
  return function (dispatch) {
    dispatch({ type: RC.summon.LOCK, index: Number(index), value: Boolean(value) });
    return true;
  };
}

// 召喚名を変更する
export function set_summon_name(index, name) {
  return function (dispatch) {
    dispatch({ type: RC.summon.NAME, index: Number(index), value: String(name) });
    return true;
  };
}

// 召喚の攻撃力を設定する
export function set_summon_atk_value(index, value) {
  return function (dispatch) {
    dispatch({ type: RC.summon.ATK, index: Number(index), value: Number(value) });
    return true;
  };
}

// 召喚のスキル%を変更する
export function set_summon_skill_percent(index, target, percent) {
  return function (dispatch, getState) {
    let summon_obj = Array.from(getState().summon);
    if (Number(index) < 0 || Number(index) > summon_obj.length) {
      return false;
    } else if (Number(percent) < 0) {
      return false;
    }
    if (target === 0 || target === 1) {
      let skill_obj = Object.assign({}, summon_obj[index].skill[target], { percent: Number(percent) });
      dispatch({ type: RC.summon.SKILL, index: Number(index), target: target, value: skill_obj });
      return true;
    }
  };
}

// 召喚のスキル種別を変更する
export function set_summon_skill_type(index, target, skill_type) {
  return function (dispatch, getState) {
    let summon_obj = Array.from(getState().summon);
    if (Number(index) < 0 || Number(index) > summon_obj.length) {
      return false;
    }
    if (target === 0 || target === 1) {
      let skill_obj = Object.assign({}, summon_obj[index].skill[target], { type: String(skill_type) });
      dispatch({ type: RC.summon.SKILL, index: Number(index), target: target, value: skill_obj });
      return true;
    }
  };
}

// 召喚をfromからtoへ移動する(index)
export function move_summon_object(from, to) {
  return function (dispatch) {
    dispatch({ type: RC.summon.MOVE, from: Number(from), to: Number(to) });
    return true;
  };
}

// 召喚を与えられたindex配列通りにソートする
export function sort_summon_object(to_array) {
  return function (dispatch) {
    dispatch({ type: RC.summon.SORT, to_array: to_array });
    return true;
  };
}

// 召喚を削除する
export function delete_summon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.summon.DELETE, index: Number(index) });
    return true;
  };
}

// 空の召喚を挿入する
export function insert_summon_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.summon.APPEND, index: (Number(index)) });
    return true;
  };
}


/* フレンド召喚関係 */

// 召喚のオブジェクト全体を置換する(危険)
export function dangerously_replace_friend_object(obj) {
  return function (dispatch, getState) {
    dispatch({ type: RC.friend.DANGER_REPLACE, value: obj });
    return true;
  };
}

// 召喚を選択状態にする
export function enable_friend_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.friend.ENABLE, index: Number(index) });
    return true;
  };
}

// 召喚を非選択状態にする
export function disable_friend_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.friend.DISABLE, index: Number(index) });
    return true;
  };
}

// 鍵状態を変更する
export function set_friend_lock(index, value) {
  return function (dispatch) {
    dispatch({ type: RC.friend.LOCK, index: Number(index), value: Boolean(value) });
    return true;
  };
}

// 召喚名を変更する
export function set_friend_name(index, name) {
  return function (dispatch) {
    dispatch({ type: RC.friend.NAME, index: Number(index), value: String(name) });
    return true;
  };
}

// 召喚の攻撃力を設定する
export function set_friend_atk_value(index, value) {
  return function (dispatch) {
    dispatch({ type: RC.friend.ATK, index: Number(index), value: Number(value) });
    return true;
  };
}

// 召喚のスキル%を変更する
export function set_friend_skill_percent(index, target, percent) {
  return function (dispatch, getState) {
    let ary = Array.from(getState().friend);
    if (Number(index) < 0 || Number(index) > ary.length) {
      return false;
    } else if (Number(percent) < 0) {
      return false;
    }
    if (target === 0 || target === 1) {
      let skill_obj = Object.assign({}, ary[index].skill[target], { percent: Number(percent) });
      dispatch({ type: RC.friend.SKILL, index: Number(index), target: target, value: skill_obj });
      return true;
    }
  };
}

// 召喚のスキル種別を変更する
export function set_friend_skill_type(index, target, skill_type) {
  return function (dispatch, getState) {
    let ary = Array.from(getState().friend);
    if (Number(index) < 0 || Number(index) > ary.length) {
      return false;
    }
    if (target === 0 || target === 1) {
      let skill_obj = Object.assign({}, ary[index].skill[target], { type: String(skill_type) });
      dispatch({ type: RC.friend.SKILL, index: Number(index), target: target, value: skill_obj });
      return true;
    }
  };
}

// 召喚をfromからtoへ移動する(index)
export function move_friend_object(from, to) {
  return function (dispatch) {
    dispatch({ type: RC.friend.MOVE, from: Number(from), to: Number(to) });
    return true;
  };
}

// フレンド召喚を与えられたindex配列通りにソートする
export function sort_friend_object(to_array) {
  return function (dispatch) {
    dispatch({ type: RC.friend.SORT, to_array: to_array });
    return true;
  };
}

// 召喚を削除する
export function delete_friend_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.friend.DELETE, index: Number(index) });
    return true;
  };
}

// 空の召喚を挿入する
export function insert_friend_object(index) {
  return function (dispatch) {
    dispatch({ type: RC.friend.APPEND, index: (Number(index)) });
    return true;
  };
}
