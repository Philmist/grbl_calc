// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 編成最適化計算機ワーカーのエントリーポイント
 *
 * WebWorkerとして動作する。
 * メインとはJSONをやりとりするが、
 * その中身(プロトコル)はまだあやふや。
 */


// 必要な関数とか定数とかをインポート
//impprt { GrblFormOptimizer } from "./optimizer_atk.js";
import { WORKER_STATE, WORKER_COMMAND } from "./const/worker_type.js";
import { is_valid_weapon_obj, is_valid_summon_obj, calculate_atkval } from "./atk_calc.js";
import JOB_DATA from "./const/job_data.js";
import { WEAPON_CHECKED_MAX, SUMMON_CHECKED_MAX, FRIEND_CHECKED_MAX } from "./const/number_const.js";


// モジュールローカルな変数群
let optimizer_state = WORKER_STATE.STOP;
let optimizer_target = {  //< 最適化を行なうターゲット
  basic_info: {},
  weapon: [],
  summon: [],
  friend: []
};
let optimizer_flag = { // 設定されたかどうかのフラグ
  i_basic: false,
  i_weapon: false,
  i_summon: false,
  i_friend: false
};


// 念のためpostMessageをbindしておく
let postMessage = ::self.postMessage;


// メインスレッドから送られてくるコマンドに対応する関数群
// メインスレッドから渡されたdataを引数に持つ

// 攻撃力を計算するための基本的な情報を受けとる関数
function set_basic_info(data) {
  if (data.data && data.data instanceof Object) {
    optimizer_target.basic_info = data.data;
    optimizer_flag.i_basic = true;
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

// 実際に計算機を走らせる
function run_optimizer(data) {
  if (optimizer_state != WORKER_STATE.STOP) {
    return;
  }

  while(1) {
    if (
      (optimizer_flag.i_basic == true) &&
      (optimizer_flag.i_weapon == true) &&
      (optimizer_flag.i_summon == true) &&
      (optimizer_flag.i_friend == true)
    ) {
      break;
    }
  };
  
  optimizer_state = WORKER_STATE.RUNNING;
  
  // 一旦選択状態を解除し、上から順番に選択
  optimizer_target.weapon.forEach((v, i) => { optimizer_target.weapon[i].selected = false; });
  optimizer_target.summon.forEach((v, i) => { optimizer_target.summon[i].selected = false; });
  optimizer_target.friend.forEach((v, i) => { optimizer_target.friend[i].selected = false; });
  [...Array(WEAPON_CHECKED_MAX).keys()].forEach((v, i) => { optimizer_target.weapon[i].selected = true; });
  [...Array(SUMMON_CHECKED_MAX).keys()].forEach((v, i) => { optimizer_target.summon[i].selected = true; });
  [...Array(FRIEND_CHECKED_MAX).keys()].forEach((v, i) => { optimizer_target.friend[i].selected = true; });

  // 更新がされなくなるまでループ
  while (optimizer_state == WORKER_STATE.RUNNING) {

    let change_flag = false; //武器を切り替えたかどうかの変更

    // 武器10本を順番に切り替えて今より強くなるかを判断
    for (var i=0; i<WEAPON_CHECKED_MAX; i++) {

      let change_weapon = -1; //切り替える対象の武器

      // 選択済でない場合は切り替え対象でないのでスキップ
      if (optimizer_target.weapon[i].selected == false) continue;

      // 現在の攻撃力を一旦記憶
      let temp_weapon = optimizer_target.weapon.filter(function(val) {
        return (val instanceof Object && val.selected);
      });
      let temp_summon = optimizer_target.summon.filter(function(val) {
        return (val instanceof Object && val.selected);
      });
      let temp_friend = optimizer_target.friend.filter(function(val) {
        return (val instanceof Object && val.selected);
      });

      let param = Object.assign({}, optimizer_target.basic_info, {
        weapon: temp_weapon,
        summon: temp_summon,
        friend: temp_friend
      });

      let max_result = calculate_atkval(param, JOB_DATA).total_atk;

      optimizer_target.weapon[i].selected = false; // 切り替えてテストするために一旦選択を外す
      
      // 指定した武器に対して、現在装備していない武器を切り替えてテスト
      for (var j=0; j<optimizer_target.weapon.length; j++) {

        // 自分自身か、もしくは選択済である場合はスキップ
        if (i == j || optimizer_target.weapon[j].selected == true) continue;
        
        optimizer_target.weapon[j].selected = true;
        
        let temp_weapon = optimizer_target.weapon.filter(function(val) {
          return (val instanceof Object && val.selected);
        });
        let temp_summon = optimizer_target.summon.filter(function(val) {
          return (val instanceof Object && val.selected);
        });
        let temp_friend = optimizer_target.friend.filter(function(val) {
          return (val instanceof Object && val.selected);
        });

        let param = Object.assign({}, optimizer_target.basic_info, {
          weapon: temp_weapon,
          summon: temp_summon,
          friend: temp_friend
        });

        let result = calculate_atkval(param, JOB_DATA);
        
        // 切り替えた結果が上回っているかどうかの判定
        if (max_result < result.total_atk) {
          change_weapon = j;
          max_result = result.total_atk;
        }
        
        optimizer_target.weapon[j].selected = false; // 切り替えテストが終わったので一旦選択から外す
      }
      if (change_weapon != -1) {
        optimizer_target.weapon[change_weapon].selected = true; // 武器を切り替えるために選択状態にする
        change_flag = true;
      } else {
        optimizer_target.weapon[i].selected = true; // 切り替える必要がなかったため、元に戻す
      }
      
    }

    if (change_flag == false) optimizer_state = WORKER_STATE.FINISH; // 一度も切り替えが無かった場合は終了
    
  }
  
  postMessage({
    message: "Optimizer finished.",
    state: optimizer_state,
    i_weapon: optimizer_target.weapon,
    i_summon: optimizer_target.summon,
    i_friend: optimizer_target.friend
  });
}

// コマンド定数と関数を対応付けるオブジェクト
const STOPPED_COMMAND_TABLE = {
  [WORKER_COMMAND.SET_BASIC_INFO]: set_basic_info,
  [WORKER_COMMAND.SET_WEAPON]: set_weapon,
  [WORKER_COMMAND.SET_SUMMON]: set_summon,
  [WORKER_COMMAND.SET_FRIEND]: set_friend,
  [WORKER_COMMAND.RUN]: run_optimizer,
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
