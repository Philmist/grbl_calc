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
  constructor(base_param, weapon_list, summon_list, friend_list, job_data) {
    this.base = Object.assign({}, base_param);
    this.weapon_list = Array.from(weapon_list, x => is_valid_weapon_obj ? x : null);
    this.summon_list = Array.from(summon_list, x => is_valid_summon_obj ? x : null);
    this.friend_list = Array.from(friend_list, x => is_valid_summon_obj ? x : null);  // フレンド召喚も召喚
    this.job_data = job_data;  // job_dataは変更されないことが前提
    this.calc_state = { state: CALC_STATE.UNINIT };
  }

  // 計算前の初期化関数
  // 戻り値としてジェネレータを返す
  init() {
    this.calc_state.state = CALC_STATE.INITED;
    return this.calculate_();
  }

  // 計算を進めるジェネレータ関数
  // 計算の状態はObjectで返ってくる(はず)
  *calculate_() {
    yield this.calc_state;
  }
}

