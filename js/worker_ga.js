// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 編成最適化計算機ワーカーのエントリーポイント
 *
 * WebWorkerとして動作する。
 * メインとはJSONをやりとりするが、
 * その中身(プロトコル)はまだあやふや。
 */


// 必要な関数とか定数とかをインポート
import { GrblFormGAOptimizer, CALC_STATE } from "./optimize_atk.js";
import { WORKER_STATE, WORKER_COMMAND } from "./const/worker_type.js";
import { is_valid_weapon_obj, is_valid_summon_obj } from "./atk_calc.js";
import JOB_DATA from "./const/job_data.js";


// モジュールローカルな変数群
let optimizer_instance = null;  //< 編成最適化のインスタンス
let optimizer_generator = null;  //< 編成最適化インスタンスから出来るジェネレータ
let optimizer_state = WORKER_STATE.STOP;  //< Workerの状態
let optimizer_parameter = {  //< GAのパラメータ
  population: 100,  //< 個体数
  mutation_probability: {  //< 突然変異の確率([0,1))
    weapon: 0.05,
    summon: 0.05,
    friend: 0.05
  },
  generation: 100  //< 世代数(ループ回数)
};
let optimizer_target = {  //< 最適化を行なうターゲット
  basic_info: {},
  weapon: [],
  summon: [],
  friend: []
};
let optimizer_flag = {  //< 設定されたパラメータを表わすフラグ
  p_count: false,  //< 個体数
  g_count: false,  //< 世代数
  m_weapon: false,  //< 変異率(武器)
  m_summon: false,  //< 変異率(召喚)
  m_friend: false,  //< 変異率(フレンド)
  i_basic: false,  //< 基本情報
  i_weapon: false,  //< 武器情報
  i_summon: false,  //< 召喚情報
  i_friend: false  //< フレンド召喚情報
};


// 念のためpostMessageをbindしておく
let postMessage = ::self.postMessage;


// メインスレッドから送られてくるコマンドに対応する関数群
// メインスレッドから渡されたdataを引数に持つ

// 現在のステートを返す関数
function post_state(data) {
  postMessage({
    result: true,
    state: optimizer_state,
    flags: optimizer_flag,
    can_run: Object.values(optimizer_flag).every((v) => { return v; })
  });
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
      optimizer_flag.p_count = true;
    }
    // 突然変異率の設定
    if (ga_p.mutation_probability) {
      let prob = ga_p.mutation_probability;
      let is_valid_prob = (v) => { return ((v >= 0) && (v < 1)); };
      if (prob.hasOwnProperty("all") && is_valid_prob(prob.all)) {
        optimizer_parameter.weapon = Number(prob.all);
        optimizer_parameter.summon = Number(prob.all);
        optimizer_parameter.friend = Number(prob.all);
        optimizer_flag.m_weapon = true;
        optimizer_flag.m_summon = true;
        optimizer_flag.m_friend = true;
      } else {
        if (prob.weapon && is_valid_prob(prob.weapon)) {
          optimizer_parameter.weapon = Number(prob.weapon);
          optimizer_flag.m_weapon = true;
        }
        if (prob.summon && is_valid_prob(prob.summon)) {
          optimizer_parameter.summon = Number(prob.summon);
          optimizer_flag.m_summon = true;
        }
        if (prob.friend && is_valid_prob(prob.friend)) {
          optimizer_parameter.friend = Number(prob.friend);
          optimizer_flag.m_friend = true;
        }
      }
    }
    // 世代数の設定
    if (ga_p.generation) {
      let c = Number(ga_p.generation);
      if (c >= 10) {
        optimizer_parameter.generation = Math.round(c);
        optimizer_flag.g_count = true;
      }
    }
    postMessage({
      result: true,
      message: "GA parameter is set.",
      data: optimizer_parameter
    });
  } else {
    postMessage({ result: false, message: "Can't recognize GA parameter."});
  }
}

// 攻撃力を計算するための基本的な情報を受けとる関数
function set_basic_info(data) {
  if (data.data && data.data instanceof Object) {
    Object.assign(optimizer_target.basic_info, data.data);
    postMessage({ result: true, message: "basic_info is set."});
    optimizer_flag.i_basic = true;
  } else {
    postMessage({ result: false, message: "data must be Object."});
  }
}

// 最適編成計算の対象になる武器一覧を受けとる関数
function set_weapon(data) {
  if (data.data && data.data instanceof Array) {
    let valid = data.data.every(is_valid_weapon_obj);
    if (!valid) {
      postMessage({ result: false, message: "data has invalid weapon object." });
      return;
    }
    optimizer_target.weapon = data.data;
    optimizer_flag.i_weapon = true;
    postMessage({ result: true, message: "Weapon data is set." });
  } else {
    postMessage({ result: false, message: "data must be Array." });
  }
}

// 最適編成計算の対象になる召喚一覧を受けとる関数
function set_summon(data) {
  if (data.data && data.data instanceof Array) {
    let valid = data.data.every(is_valid_summon_obj);
    if (!valid) {
      postMessage({ result: false, message: "data has invalid summon object." });
      return;
    }
    optimizer_target.summon = data.data;
    optimizer_flag.i_summon = true;
    postMessage({ result: true, message: "Summon data is set." });
  } else {
    postMessage({ result: false, message: "data must be Array." });
  }
}

// 最適編成計算の対象になるフレンド召喚一覧を受けとる関数
function set_friend(data) {
  if (data.data && data.data instanceof Array) {
    let valid = data.data.every(is_valid_summon_obj);  // フレンド召喚も召喚
    if (!valid) {
      postMessage({ result: false, message: "data has invalid friend object." });
      return;
    }
    optimizer_target.friend = data.data;
    optimizer_flag.i_friend = true;
    postMessage({ result: true, message: "friend data is set." });
  } else {
    postMessage({ result: false, message: "data must be Array." });
  }
}

// GAを初期化する関数
function init_optimizer(data) {
  // 必要なフラグが全部立っているかどうかをチェックする
  if (!Object.values(optimizer_flag).every((v) => { return v; })) {
    postMessage({ result: false, message: "Cannot run optimizer because of missing parameter."});
    return;
  }
  // 計算機のインスタンスを作る
  optimizer_instance = new GrblFormGAOptimizer();
  // ジェネレータ(generator.next()を呼びだすごとに値を返すやつ)を作る
  optimizer_generator = optimizer_instance.init(
    optimizer_target.basic_info,
    optimizer_target.weapon,
    optimizer_target.summon,
    optimizer_target.friend,
    JOB_DATA
  );
  // 変異率等を設定する
  optimizer_instance.create_first_ga_state(
    optimizer_parameter.population,
    optimizer_parameter.mutation_probability.weapon,
    optimizer_parameter.mutation_probability.summon,
    optimizer_parameter.mutation_probability.friend
  );
  // 現在の状態を初期化されたことにする
  optimizer_state = WORKER_STATE.INITED;
  postMessage({ result: true, message: "Optimizer is inited." });
}

// 実際に最適化計算機を与えられたパラメータで走らせる
function run_optimizer(data) {
  // 初期化されてないなら中止
  if (optimizer_state != WORKER_STATE.INITED) {
    postMessage({ result: false, message: "Optimizer isn't inited." });
    return;
  }
  // 実際に編成計算機を走らせる
  optimizer_state = WORKER_STATE.RUNNING;
  let next_value = optimizer_generator.next().value;
  let last_percent = Math.round(0);
  for (let i = 0;
    (i < optimizer_parameter.generation)
    && (optimizer_state === WORKER_STATE.RUNNING);
    i++) {
    while (next_value && next_value.status != CALC_STATE.LOOP_END) {
      next_value = optimizer_generator.next().value;
    }
    let percent = Math.round(i / optimizer_parameter.generation);
    if (last_percent != percent) {
      last_percent = percent;
      postMessage({ message: "Optimizer running.", percent: percent, state: optimizer_state });
    }
  }
  optimizer_state = WORKER_STATE.FINISH;
  let top_individual = next_value.ga_state.population[0];
  let [weapon, summon, friend] = [
    optimizer_instance.conv_chromos_to_array(top_individual.weapon, optimizer_instance.ref.weapon),
    optimizer_instance.conv_chromos_to_array(top_individual.summon, optimizer_instance.ref.summon),
    optimizer_instance.conv_chromos_to_array(top_individual.friend, optimizer_instance.ref.friend),
  ];
  postMessage({
    message: "Optimize finished.",
    state: optimizer_state,
    top: next_value.ga_state.population[0],
    weapon: weapon,
    summon: summon,
    friend: friend
  });
}

// 実際に最適化計算機を与えられたパラメータで走らせる
function run_optimizer(data) {
  optimizer_state = WORKER_STATE.RUNNING;
  let next_value = optimizer_generator.next().value;
  for (let i = 0;
    (i < optimizer_parameter.generation)
    && (optimizer_state === WORKER_STATE.RUNNING);
    i++) {
    while (next_value && next_value.state.status != CALC_STATE.LOOP_END) {
      next_value = optimizer_generator.next().value;
    }
    postMessage({ message: "Optimizer running.", count: i+1, state: optimizer_state });
  }
  optimizer_state = WORKER_STATE.FINISH;
}


// コマンド定数と関数を対応付けるオブジェクト
const STOPPED_COMMAND_TABLE = {
  [WORKER_COMMAND.GET_STATE]: post_state,
  [WORKER_COMMAND.SET_GA_PARAM]: set_ga_parameter,
  [WORKER_COMMAND.SET_BASIC_INFO]: set_basic_info,
  [WORKER_COMMAND.SET_WEAPON]: set_weapon,
  [WORKER_COMMAND.SET_SUMMON]: set_summon,
  [WORKER_COMMAND.SET_FRIEND]: set_friend,
  [WORKER_COMMAND.INIT]: init_optimizer,
  [WORKER_COMMAND.RESET]: (d) => {
    optimizer_generator = null;
    optimizer_instance = null;
    optimizer_state = WORKER_STATE.STOP;
  }
};


// ワーカーのメイン(イベント待ち受け)
self.addEventListener("message", (e) => {
  let data = e.data;
  // コマンドが無いとどうしようもない
  if (!data.command) {
    postMessage({ result: false, message: "Need command." });
    return;
  }
  // 計算機の停止時コマンドが該当するものならば
  if (STOPPED_COMMAND_TABLE.hasOwnProperty(data.command)) {
    // 該当のコマンドを実行する
    if (data.command === WORKER_COMMAND.INIT || data.command === WORKER_COMMAND.RESET) {  //< 初期化とリセット
      optimizer_generator = null;
      optimizer_instance = null;
      optimizer_state = WORKER_STATE.STOP;
      if (data.command === WORKER_COMMAND.INIT) {
        STOPPED_COMMAND_TABLE[data.command](data);
      }
    } else if (optimizer_state === WORKER_STATE.RUNNING) {  //< 走っている間はパラメータ変更を受けつけない
      postMessage({ result: false, message: "Optimizer is running."});
    } else {  //< 他は該当コマンドを実行
      STOPPED_COMMAND_TABLE[data.command](data);
    }
  } else if (data.command === WORKER_COMMAND.TERMINATE && optimizer_state === WORKER_STATE.RUNNING) {
    optimizer_state = WORKER_STATE.TERMINATE;
  } else if (data.command === WORKER_COMMAND.RUN) {
    run_optimizer(data);
  } else {
    postMessage({ result: false, message: "Unknown command type." });
  }
}, false);
