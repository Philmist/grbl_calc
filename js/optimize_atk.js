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
    let arytomap = (list) => {
      let map = { locked: {}, target: {} };
      for (let i = 0; i < list.length; i++) {
        let target = list[i];
        if (target instanceof Object && target.locked && target.selected) {
          map.locked[String(i)] = target;
        } else if (target) {
          map.target[String(i)] = target;
        }
      }
      return map;
    }

    // 武器配列を辞書に変換する
    this.weapon_map = arytomap(this.weapon_list);
    // 召喚配列を辞書に変換する
    this.summon_map = arytomap(this.summon_list);
    // フレンド召喚配列を辞書に変換する
    this.friend_map = arytomap(this.friend_list);
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

