// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 編成最適化計算機ワーカーのエントリーポイント
 *
 * WebWorkerとして動作する。
 * メインとはJSONをやりとりするが、
 * その中身(プロトコル)はまだあやふや。
 */


// 必要なモジュールとかをインポート
import { GrblFormGAOptimizer, CALC_STATE } from "./optimize_atk.js";
import { WORKER_STATE, WORKER_COMMAND } from "./const/worker_type.js";
import { is_valid_weapon_obj, is_valid_summon_obj } from "./atk_calc.js";


// モジュールローカルな変数群
let optimizer_instance;  //< 編成最適化のインスタンス
let optimizer_state = WORKER_STATE.INITIAL;  //< Workerの状態
let optimizer_parameter = {  //< GAのパラメータ
  population: 100,  //< 個体数
  mutation_probability: {  //< 突然変異の確率([0,1))
    weapon: 0.05,
    summon: 0.05,
    friend: 0.05
  },
  count: 100  //< 世代数(ループ回数)
};
let optimizer_target = {};


// 念のためpostMessageをbindしておく
let postMessage = ::self.postMessage;


// メインスレッドから送られてくるコマンドに対応する関数群
// メインスレッドから渡されたdataを引数に持つ

// 現在のステートを返す関数
function post_state(data) {
  postMessage({ result: true, data: optimizer_state });
}

// GAのパラメータを初期化する
function set_ga_parameter(data) {
  // そもそもちゃんとパラメータが指定されているのか
  if (data.data) {
    let ga_p = data.data;
    // 個体数の設定
    let population = Number(ga_p.population);
    if (population > 10) {
      optimizer_parameter.population = Math.round(population);
    }
    // 突然変異率の設定
    if (ga_p.mutation_probability) {
      let prob = ga_p.mutation_probability;
      let is_valid_prob = (v) => { (Number(v) >= 0) && (Number(v) < 1) };
      if (prob.all && is_valid_prob(prob.all)) {
        optimizer_parameter.weapon = Number(prob.all);
        optimizer_parameter.summon = Number(prob.all);
        optimizer_parameter.friend = Number(prob.all);
      } else {
        if (prob.weapon && is_valid_prob(prob.weapon)) {
          optimizer_parameter.weapon = Number(prob.weapon);
        }
        if (prob.summon && is_valid_prob(prob.summon)) {
          optimizer_parameter.summon = Number(prob.summon);
        }
        if (prob.friend && is_valid_prob(prob.friend)) {
          optimizer_parameter.friend = Number(prob.friend);
        }
      }
    }
    // 世代数の設定
    if (ga_p.count) {
      let c = Number(ga_p.count);
      if (c >= 10) {
        optimizer_parameter.count = Math.round(c);
      }
    }
    postMessage({
      result: true,
      message: "GA parameter may be set.",
      data: optimizer_parameter
    });
  } else {
    postMessage({ result: false, message: "Can't recognize GA parameter."});
  }
}


// コマンド定数と関数を対応付けるオブジェクト
const COMMAND_TABLE = {
  [WORKER_COMMAND.GET_STATE]: post_state,
  [WORKER_COMMAND.SET_GA_PARAM]: set_ga_parameter
};


// ワーカーのメイン(イベント待ち受け)
self.addEventListener("message", (e) => {
  let data = e.data;
  if (COMMAND_TABLE.hasOwnProperty(data.command)) {
    COMMAND_TABLE[data.command](data);
  } else {
    postMessage({ result: false, message: "Unknown command type." });
  }
}, false);

