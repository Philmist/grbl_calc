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
  GA_INITED: "GA_INITED",
  CALC_VALUE: "CALC_VALUE",
  SORT_POPULATION: "SORT_POPULATION",
  SELECTION_POPULATION: "SELECTION_POPULATION"
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
  // 初期の計算状態を設定する
  constructor() {
    this.state = { status: CALC_STATE.UNINIT };
  }

  // 計算前の初期化関数
  // 計算に必要な各オブジェクトを受けとる
  // 戻り値としてジェネレータを返す
  // (まだ)再度initされることは想定していない
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
  // 集団の大きさ、各パラメータごとの変異率を設定する
  create_first_ga_state(population_length, weapon_mutation, summon_mutation, friend_mutation) {

    // 集団の大きさをチェックする
    population_length = population_length > 0 ? population_length : 50;

    // 突然変異確率を指定する
    weapon_mutation = ((weapon_mutation > 0) && (weapon_mutation < 1)) ? weapon_mutation : 0.01;
    summon_mutation = ((summon_mutation > 0) && (summon_mutation < 1)) ? summon_mutation : 0.01;
    friend_mutation = ((friend_mutation > 0) && (friend_mutation < 1)) ? friend_mutation : 0.01;

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
        // 順序列の生成
        let tmp_ary = [...Array(max_gene_number).keys()];  // [0,1,2,...]
        // 生成された順序列を乱雑なものにする
        for (let j = max_gene_number - 1; j > 0; j--) {
          let ri = get_random_int(0, j);
          [tmp_ary[ri], tmp_ary[j]] = [tmp_ary[j], tmp_ary[ri]];
        }

        // 長過ぎる部分を切りおとす
        let del_len = tmp_ary.length - chromo_length;
        tmp_ary.splice(del_len, del_len);

        // 個体の生成
        // 遺伝子は順序表現(残りの中で何番目にあるか)
        // ※0ベース
        let individual = [];
        let gene_numbers = [...Array(max_gene_number).keys()];
        for (let i of tmp_ary) {
          let index = gene_numbers.indexOf(i);
          individual.push(index);
          gene_numbers.splice(index, 1);
        }

        // 集団に積みこむ
        population.push(individual);
      }

      // 生成された集団と各パラメータを返す
      return [ population, { mutation_probability, chromo_length, max_gene_number }];
    };

    // 実際に武器等の状態を作成する
    // [a, b] = [1, 2] -> a = 1; b = 2;
    let [weapon_ga_ary, weapon_ga_param] = create_ga_state(this.weapon_ref.length, this.weapon_max_chromo_length, weapon_mutation);
    let [summon_ga_ary, summon_ga_param] = create_ga_state(this.summon_ref.length, this.summon_max_chromo_length, summon_mutation);
    let [friend_ga_ary, friend_ga_param] = create_ga_state(this.friend_ref.length, this.friend_max_chromo_length, friend_mutation);

    // 最終的な初期状態を生成する
    let ga_param = { population: [], weapon_param: weapon_ga_param, summon_param: summon_ga_param, friend_param: friend_ga_param };
    for (let i = 0; i < population_length; i++) {
      let individual = { weapon: weapon_ga_ary[i], summon: summon_ga_ary[i], friend: friend_ga_ary[i], value: null };
      ga_param.population.push(individual);
    }
    ga_param.max_population_length = population_length;

    // 現在の状態を設定する
    this.state.status = CALC_STATE.GA_INITED;
    this.state.ga_state = ga_param;
    return true;
  }

  /*
   * 個体はobjtorefで作成されたリストを参照する染色体で出来ている。
   * objtorefによって作成されたリストはarytoobjで作成されたObjectを参照している。
   */

  // individualとして渡された個体の価値を求める
  evaluate_value(individual) {
    // 染色体をobjのキーを表わす配列に変換する関数
    function conv_chromos_to_array(chromo, conv_array) {
      let gene_array = [...Array(conv_array.length).keys()];
      let result = [];
      for (let i of chromo) {
        result.push(gene_array[i]);
        gene_array.splice(i, 1);
      }
      return result;
    }

    // キーの配列からObjectの配列に変換する関数
    function objkeyarray_to_objarray(ary, ref_obj) {
      let result = [];
      ary.forEach(function (key) {
        result.push(ref_obj[String(key)]);
      });
      return result;
    }

    // キーの配列に対して同じキーを指しているものが「ない」かをチェックする
    function is_valid_key_array(ary) {
      let s = new Set(ary);
      return (s.size == ary.length);
    }

    // 個体の染色体をキーを表わす配列に変換する
    let [weapon_ary, summon_ary, friend_ary] =
    [
      conv_chromos_to_array(individual.weapon, this.weapon_ref),
      conv_chromos_to_array(individual.summon, this.summon_ref),
      conv_chromos_to_array(individual.friend, this.friend_ref)
    ];

    // もし同じものを2度選択しているなら、その個体の価値は0
    let valid_ary = [weapon_ary, summon_ary, friend_ary];
    let valid_result = new Array();
    valid_ary.forEach((v) => { valid_result.push(is_valid_key_array(v)) });
    if (valid_result.includes(false)) return 0;

    // キー値を示す配列からパラメータを生成する
    let param_weapon = objkeyarray_to_objarray(weapon_ary, this.weapon_obj);
    let param_summon = objkeyarray_to_objarray(summon_ary, this.summon_obj);
    let param_friend = objkeyarray_to_objarray(friend_ary, this.friend_obj);

    // 最終的な算出に使うパラメータを生成する
    let final_param = Object.assign({}, this.base, {
      weapon: param_weapon,
      summon: param_summon,
      friend: param_friend[0]
    });

    // 最終的な攻撃力を算出して返す
    let result = calculate_atkval(final_param, this.job_data);
    result = result.total_atk;
    return result;
  }

  // 各個体に価値(攻撃力)を設定する
  // 価値の見積りは途中で中断可能にする
  *assign_value() {
    // 現在のステートを実行前に設定する
    this.state.status = CALC_STATE.CALC_VALUE;
    // 分数形式の文字列として渡すために最大長を文字列として保管する
    let l = String(this.state.ga_state.population.length);

    // 集団を個体に分解して価値を付ける
    for (let i = 0; i < this.state.ga_state.population.length; i++ ) {
      // 個体を取りだす
      let individual = this.state.ga_state.population[i];
      // 価値を付ける
      let value = this.evaluate_value(individual);
      this.state.ga_state.population[i].value = value;
      // 外に出すメッセージ用の文字列を設定する
      this.state.message = "ASSIGN VALUE: " + String(i+1) + "/" + String(l);
      // いったん中断する
      yield this.state;
    }
  }

  // 集団を価値によってソートする
  // ソートは中断困難なのでジェネレータにしない
  sort_population() {
    this.state.status = CALC_STATE.SORT_POPULATION;
    this.state.message = "SORTING";
    this.state.ga_state.population.sort((l, r) => {
      if (l === null && r === null) {
        return 0;
      } else if (r === null) {
        return -1;
      } else if (l === null) {
        return 1;
      } else {
        return r.value - l.value;
      }
    });
    this.state.message = "SORTED";
  }

  // 集団の選別をする関数
  *select_population() {
    this.state.status = CALC_STATE.SELECTION_POPULATION;
    this.state.message = "START SELECTION";
    // 価値が無い個体を削除する
    this.state.ga_state.population = this.state.ga_state.population.filter((v) => {
      return (v.value != null && v.value > 0);
    });
    yield this.state;
    // 個体が1つだと選別できない
    if (this.state.ga_state.population.length > 1){
      // 全体の価値最大値を保存する
      let max_value = this.state.ga_state.population[0].value;
      let population_length = this.state.ga_state.population.length;
      let min_value = this.state.ga_state.population[population_length - 1].value;
      // 全体の半分以上になるまで選別する
      // TODO: ハードコーディングしているのをどうにかする
      let target_length = Math.round(this.state.ga_state.population.length / 2);
      let result_population = [];
      while (result_population <= target_length) {
        for (let v of this.state.ga_state.population) {
          if (Math.random() < ((v.value - min_value) / (max_value - min_value))) {
            result_population.push(v);
          }
        }
        this.state.message = "SELECTION: " + String(result_population.length) + ":" + String(target_length);
        yield this.state;
      }
      this.state.ga_state.population = result_population;
    }
    this.state.message = "FINISH SELECTION";
    yield this.state;
  }

  // 交叉を行なうジェネレータ関数
  *intersect() {
    // 2つの遺伝子を受けとり交叉して新しい2つの遺伝子を返す関数
    // l_gene.length === r_gene.length
    let intersect_gene = (l_gene, r_gene) => {
      let intersect_point = get_random_int(0, l_gene.length);
      // 特殊な条件だけは別にする
      if (intersect_point === l_gene.length) {
        return [l_gene, r_gene];
      } else if (intersect_point === 0) {
        return [r_gene, l_gene];
      }
    };
    // 必要な分だけ交叉して個体を集団に追加する
    for (let i = this.state.population.length; i < this.state.max_population_length; i++) {
      // 交叉の対象となる2つの個体を選択する
      let target = [0, 0];
      while (target[0] === target[1]) {
        target[0] = get_random_int(0, this.state.population.length - 1);
        target[1] = get_random_int(0, this.state.population.length - 1);
      }
    }
  }

  // 計算を進めるジェネレータ関数
  // 計算の状態はObjectで返ってくる(はず)
  *calculate_() {
    // パラメータを初期化(=初期集団を生成)するまで待つ
    while (this.state.status == CALC_STATE.PARAM_INITED) {
      yield this.state;
    }
    // 初期集団に価値を設定してソートする
    yield* this.assign_value();
    this.sort_population();
    yield this.state;

    // 選別
    yield* this.select_population();

    // ここらへんに交叉

    // ここらへんに終了条件判定
  }
}
