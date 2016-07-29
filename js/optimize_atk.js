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
  PARAM_INITED: "PARAM_INITED",
  GA_INITED: "GA_INITED"
};


// [min, max]の乱整数を返す
// from: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function get_random_int(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}


// 遺伝的アルゴリズムを用いて最適編成を求めようとするクラス
/*
 * gene(遺伝子): 遺伝情報を表わす要素。今回は正の整数([1,max_length])を使う。
 * chromosome(染色体): 遺伝子が並んだ一次元配列。
 * population(集団): 染色体によって表わされた個体(individual)の集団。
 *
 * 1つの遺伝子は
 * 「前の遺伝子が示している(武器|召喚|フレンド召喚)の位置からの距離」を
 * 示す。その分だけ配列の末端へシフトしたのが示されるもの。
 * 末端を超えた分は先頭へループする。
 * 一番最初だけは配列の先頭を指しているものと考える。
 */
export class GrblFormGAOptimizer {
  // コンストラクタ
  // 渡されたパラメータを自身の中に保存する
  constructor() {
    this.state = { status: CALC_STATE.UNINIT };
  }

  // 計算前の初期化関数
  // 戻り値としてジェネレータを返す
  init(base_param, weapon_list, summon_list, friend_list, job_data) {
    // 必要な変数に代入する
    this.base = Object.assign({}, base_param);
    this.weapon_list = Array.from(weapon_list, x => {return is_valid_weapon_obj(x) ? x : null;} );
    this.summon_list = Array.from(summon_list, x => {return is_valid_summon_obj(x) ? x : null;} );
    this.friend_list = Array.from(friend_list, x => {return is_valid_summon_obj(x) ? x : null;} );  // フレンド召喚も召喚
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
    this.friend_max_chromo_length = this.friend_ref.length > 1 ? 1 : this.friend_ref.length;

    // 状態変数を初期状態に
    this.state.status = CALC_STATE.PARAM_INITED;

    // ジェネレータを作って返す
    return this.calculate_();
  }

  // 初期状態を作成する関数
  create_first_ga_state(population_length, weapon_mutation, summon_mutation, friend_mutation) {
    // 集団の大きさをチェックする
    population_length = population_length > 0 ? population_length : 300;
    // 突然変異確率を指定する
    weapon_mutation = ((weapon_mutation > 0) && (weapon_mutation < 1)) ? weapon_mutation : 0.01;
    summon_mutation = ((summon_mutation > 0) && (summon_mutation < 1)) ? summon_mutation : 0.01;
    friend_mutation = ((friend_mutation > 0) && (friend_mutation < 1)) ? friend_mutation : 0.1;

    // 集団を作成する汎用関数
    let create_ga_state = (max_num, c_length, m_prob) => {
      // パラメータを設定
      let mutation_probability = Number(m_prob);
      let chromo_length = Number(c_length);
      let max_gene_number = Number(max_num);
      let length = population_length;
      let population = [];
      // 初期集団を生成する
      for (let i = 0; i < length; i++) {
        // 個体の生成
        let individual = [];
        for (let j = 0; j < chromo_length; j++) {
          individual.push(get_random_int(1, max_gene_number));
        }
        population.push(individual);
      }
      return [ population, { mutation_probability, chromo_length, max_gene_number }];
    };

    // 実際に武器等の状態を作成する
    let [weapon_ga_ary, weapon_ga_param] = create_ga_state(this.weapon_ref.length, this.weapon_max_chromo_length, weapon_mutation);
    let [summon_ga_ary, summon_ga_param] = create_ga_state(this.summon_ref.length, this.summon_max_chromo_length, summon_mutation);
    let [friend_ga_ary, friend_ga_param] = create_ga_state(this.friend_ref.length, this.friend_max_chromo_length, friend_mutation);
    let ga_param = { population: [], weapon_param: weapon_ga_param, summon_param: summon_ga_param, friend_param: friend_ga_param };
    for (let i = 0; i < population_length; i++) {
      let individual = { weapon: weapon_ga_ary[i], summon: summon_ga_ary[i], friend: friend_ga_ary[i] };
      ga_param.population.push(individual);
    }

    // 現在の状態を設定する
    this.state.status = CALC_STATE.GA_INITED;
    this.state.ga_state = ga_param;
    return true;
  }

  /*
   * 個体はobjtorefで作成されたリストを参照する染色体で出来ている。
   * objtorefによって作成されたリストはarytoobjで作成されたObjectを参照している。
   *
   * 個々の遺伝子(数値)は前の遺伝子からのリスト(objtorefで作成されたリスト)上での距離を示している。
   * リストの後端を超えると先端に戻って余った分を進める(つまりループしている)。
   *
   * つまり、評価するための個体を作成するためには次の手順を踏む。
   * 0. objtorefで作成されたリストの先端にポインタをセットする。
   * 1. 遺伝子(数値)分だけポインタを進める。
   * 2. ポインタが示しているリストの値を読みとる。
   * 3. 2で読みとった値はarytoobjで作成されたオブジェクトのキーである。
   * 4. 3で特定されたキーから対象オブジェクトを個体の一部としてpushする。
   * 5. 必要なだけ1から繰りかえす。
   */

  evaluate_value(individual) {
    // 染色体をobjのキーを表わす配列に変換する関数
    function conv_chromos_to_array(chromo, conv_array) {
      let result = [];
      let pointer = 0;
      chromo.forEach(function (gene) {
        pointer = pointer + Number(gene);
        if (pointer >= conv_array.length) {
          pointer = pointer - conv_array.length;
        }
        result.push(conv_array[pointer]);
      });
      return result;
    }

    // キーの配列からObjectの配列に変換する関数
    function objkeyarray_to_objarray(ary, obj) {
      let result = [];
      ary.forEach(function (key) {
        result.push(obj[String(key)]);
      });
      return result;
    }

    // キーの配列に対して同じキーを指しているものが「ない」かをチェックする
    function is_valid_key_array(ary) {
      let s = new Set(ary);
      return (s.size != ary.length);
    }

    // 個体の染色体をキーを表わす配列に変換する
    let [weapon_ary, summon_ary, friend_ary] =
    [
      conv_chromos_to_array(individual.weapon, this.weapon_ref),
      conv_chromos_to_array(individual.summon, this.summon_ref),
      conv_chromos_to_array(individual.friend, this.friend_ref)
    ];

    // もし同じものを2度選択しているなら、その個体の価値は0
    if (weapon_ary.every(is_valid_key_array)) {
      return 0;
    }
    if (summon_ary.every(is_valid_key_array)) {
      return 0;
    }
    if (friend_ary.every(is_valid_key_array)) {
      return 0;
    }
  }

  // 計算を進めるジェネレータ関数
  // 計算の状態はObjectで返ってくる(はず)
  *calculate_() {
    while (this.state.status == CALC_STATE.PARAM_INITED) {
      yield this.state;
    }
    yield this.state;
  }
}
