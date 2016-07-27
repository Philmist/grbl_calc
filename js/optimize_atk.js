// vim: sts=2 sw=2 ts=2 expandtab

/*
 * なにか上手いやり方をして
 * 全体の攻撃力を適当に最高なところまで
 * 引きあげる計算をするファイル
 */

import {
  calculate_atkval,
  is_valid_weapon_obj,
  is_valid_summon_obj
} from "./atk_calc";

// 現在の計算状態を表わす定数
export const CALC_STATE = {
  UNINIT: "UNINIT",
  INITED: "INITED"
};

export class GrblFormGAOptimizer {
  // コンストラクタ
  // 渡されたパラメータを自身の中に保存する
  constructor() {
    this.calc_state = { state: CALC_STATE.UNINIT };
  }

  // 計算前の初期化関数
  // 戻り値としてジェネレータを返す
  init(base_param, weapon_list, summon_list, friend_list, job_data) {
    // 必要な変数に代入する
    this.base = Object.assign({}, base_param);
    this.weapon_list = Array.from(weapon_list, x => is_valid_weapon_obj ? x : null);
    this.summon_list = Array.from(summon_list, x => is_valid_summon_obj ? x : null);
    this.friend_list = Array.from(friend_list, x => is_valid_summon_obj ? x : null);  // フレンド召喚も召喚
    this.job_data = job_data;  // job_dataは変更されないことが前提

    // 配列を辞書に変換する関数
    let arytoobj = (list) => {
      let obj = {};
      for (let i = 0; i < list.length; i++) {
        let target = list[i];
        if (target instanceof Object) {
          if (!("max" in target && target.max >= 0)) {
            target.max = 1
          }
          if (!("min" in target && target.min >= 0)) {
            target.min = 0
          }
          obj[String(i)] = target;
        }
      }
      return obj;
    }

    // 武器配列を辞書に変換する
    this.weapon_obj = arytoobj(this.weapon_list);
    // 召喚配列を辞書に変換する
    this.summon_obj = arytoobj(this.summon_list);
    // フレンド召喚配列を辞書に変換する
    this.friend_obj = arytoobj(this.friend_list);

    // 染色体用のリストを作る関数
    let objtoref = (obj) => {
      let ref_list = [];
      for (let i of Object.keys(obj)) {
        for (let j = 0; j < obj[i].max; j++) {
          ref_list.push(i);
        }
      }
      return ref_list;
    };

    // 染色体の参照リストを作る
    this.weapon_ref = objtoref(this.weapon_obj);
    this.summon_ref = objtoref(this.summon_obj);
    this.friend_ref = objtoref(this.friend_obj);

    // 染色体の最大長を設定する
    // TODO: ハードコーディングなのでもっとマシにする
    this.weapon_max_chromo_length = this.weapon_ref.length > 10 ? 10 : this.weapon_ref.length;
    this.summon_max_chromo_length = this.summon_ref.length > 5 ? 5 : this.summon_ref.length;
    this.friend_max_chromo_length = 1;

    // 初期染色体を作成する
    // TODO: ここに色々書く

    // 状態変数を初期状態に
    this.calc_state.state = CALC_STATE.INITED;

    // ジェネレータを作って返す
    return this.calculate_();
  }

  // 計算を進めるジェネレータ関数
  // 計算の状態はObjectで返ってくる(はず)
  *calculate_() {
    yield this.calc_state;
  }
}

