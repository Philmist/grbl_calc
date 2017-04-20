// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 編成最適化計算機ワーカーのエントリーポイント
 *
 * WebWorkerとして動作する。
 * メインとはJSONをやりとりするが、
 * その中身(プロトコル)はまだあやふや。
 */


// 必要な関数とか定数とかをインポート
import { WORKER_STATE, WORKER_COMMAND } from "./const/worker_type.js";
import { is_valid_weapon_obj, is_valid_summon_obj } from "./atk_calc.js";
import JOB_DATA from "./const/job_data.js";


// モジュールローカルな変数群
let optimizer_target = {  //< 最適化を行なうターゲット
  basic_info: {},
  weapon: [],
  summon: [],
  friend: []
};


// 念のためpostMessageをbindしておく
let postMessage = ::self.postMessage;


// メインスレッドから送られてくるコマンドに対応する関数群
// メインスレッドから渡されたdataを引数に持つ

// 攻撃力を計算するための基本的な情報を受けとる関数
function set_basic_info(data) {
  if (data.data && data.data instanceof Object) {
    optimizer_target.basic_info = data.data;
    postMessage({ result: true, message: "basic_info is set."});
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


// コマンド定数と関数を対応付けるオブジェクト
const STOPPED_COMMAND_TABLE = {
  [WORKER_COMMAND.SET_BASIC_INFO]: set_basic_info,
  [WORKER_COMMAND.SET_WEAPON]: set_weapon,
  [WORKER_COMMAND.SET_SUMMON]: set_summon,
  [WORKER_COMMAND.SET_FRIEND]: set_friend,
  [WORKER_COMMAND.RESET]: (d) => {
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
      STOPPED_COMMAND_TABLE[data.command](data);
  }
}, false);
