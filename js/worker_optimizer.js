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

  let cosmos_table = []; // コスモス武器のチェック
  
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
  
  // ロックされている武器本数を確認
  let total_locked = 0;
  let total_locked_cosmos = 0;
  for (let i=0; i<optimizer_target.weapon.length; i++) {
    if (optimizer_target.weapon[i].locked == true) {
      total_locked++;
      if (optimizer_target.weapon[i].skill_slot[0] == "cosmos" || optimizer_target.weapon[i].skill_slot[1] == "cosmos") {
        total_locked_cosmos++; // ロックされているコスモスの本数
      }
    }
  }
  
console.log(total_locked);

  if (total_locked > WEAPON_CHECKED_MAX || total_locked_cosmos > 1) {
    optimizer_state = WORKER_STATE.TERMINATE;
    
    postMessage({
      message: "Optimizer terminated.",
      state: optimizer_state
    });
    return;
  }

  // コスモス武器の個数と場所をチェック
  let total_cosmos = 1;
  cosmos_table.push(-1);
  if (total_locked < WEAPON_CHECKED_MAX || total_locked_cosmos == 1) { 
    // ロックされてる武器本数が10本の場合、もしくはコスモス武器がロックされている場合は考慮しない
    for (let i=0; i<optimizer_target.weapon.length; i++) {
      if (optimizer_target.weapon[i].skill_slot[0] == "cosmos" || optimizer_target.weapon[i].skill_slot[1] == "cosmos") {
        cosmos_table.push(i);
        total_cosmos++;
      }
    }
  }

  // 選択状態は一旦すべて解除
  optimizer_target.weapon.forEach((v, i) => { optimizer_target.weapon[i].selected = false; });
  optimizer_target.summon.forEach((v, i) => { optimizer_target.summon[i].selected = false; });
  optimizer_target.friend.forEach((v, i) => { optimizer_target.friend[i].selected = false; });

  let final_result = 0;

  // 自武器編成のコピーを用意
  let temp_weapon;
  let temp_summon;
  let temp_friend;

  // メイン召喚番号
  let main_summon = 0;
  let main_friend = 0;
  
  // メイン召喚状態保存
  let best_summon_state;
  
  // 全体工程のループ数を算出
  let max_loop = optimizer_target.summon.length * optimizer_target.friend.length;

  // 自分の召喚全てを判定
  for (let s1=0; s1<optimizer_target.summon.length; s1++) {

    // 自召喚のコピーを用意
    temp_summon = optimizer_target.summon.concat();

    // 指定召喚を一番上に移動
    temp_summon.forEach((v, i) => { temp_summon[i].selected = false; });
    temp_summon[s1].selected = true;

    // 攻撃力順に並べ変え
    temp_summon.sort(function(a,b){
      if( a.selected == true ) return -1;
      if( b.selected == true ) return 1;
      if( a.atk > b.atk ) return -1;
      if( a.atk < b.atk ) return 1;
      return 0;
    });
    console.log("自召喚切替");
    console.log(temp_summon[0].name);

    // フレンドの召喚全てを順番に判定
    for (let s2=0; s2<optimizer_target.friend.length; s2++) {

      // フレ召喚のコピーを用意
      temp_friend = optimizer_target.friend[s2];

      let change_flag = false; //武器を切り替えたかどうかの変更
      let max_result = 0;

      // コスモス武器は個別に選択してチェック
      for (let cosmos=0; cosmos<total_cosmos; cosmos++) {

        let locked_weapon = 0;
        
        // 一旦選択状態を解除
        optimizer_target.weapon.forEach((v, i) => { optimizer_target.weapon[i].selected = false; });

        // まずはコスモス武器を１つ選択固定
        if (cosmos_table[cosmos] != -1) {
          optimizer_target.weapon[cosmos_table[cosmos]].selected = true;
          locked_weapon++;
        }

        // ロックされている武器を選択固定
        for (let i=0; i<optimizer_target.weapon.length; i++) {
          if (optimizer_target.weapon[i].skill_slot[0] == "cosmos" || optimizer_target.weapon[i].skill_slot[1] == "cosmos") {
            break; // コスモス武器は除外
          }
          if (optimizer_target.weapon[i].locked == true) {
            optimizer_target.weapon[i].selected = true;
            locked_weapon++;
          }
        }

        // 残りは上から順番に選択
        let selected_weapon = locked_weapon;
        for (let i=0; i<optimizer_target.weapon.length; i++) {
          if (optimizer_target.weapon[i].skill_slot[0] == "cosmos" || optimizer_target.weapon[i].skill_slot[1] == "cosmos") {
            break; // コスモス武器は除外
          }
          if (optimizer_target.weapon[i].locked == false) {
            optimizer_target.weapon[i].selected = true;
            selected_weapon++;
            if (selected_weapon == WEAPON_CHECKED_MAX) break;
          }
        }

        // 更新がされなくなるまでループ
        while (1) {
          // 変化フラグ初期化
          change_flag = false;

          // 武器10本を順番に切り替えて今より強くなるかを判断
          for (let i=0; i<optimizer_target.weapon.length; i++) {

            let change_weapon = -1; //切り替える対象の武器

            // 選択済でない場合は切り替え対象でないのでスキップ
            if (optimizer_target.weapon[i].selected == false) continue;
            // その武器がロックされている場合も切り替え対象でないのでスキップ
            if (optimizer_target.weapon[i].locked == true) continue;

            // 現在の攻撃力を一旦記憶
            let calc_weapon = optimizer_target.weapon.filter(function(val) {
              return (val instanceof Object && val.selected);
            });

            let param = Object.assign({}, optimizer_target.basic_info, {
              weapon: calc_weapon.slice(0,10),
              summon: temp_summon.slice(0,5),
              friend: temp_friend
            });

            max_result = calculate_atkval(param, JOB_DATA).total_atk;

            optimizer_target.weapon[i].selected = false; // 切り替えてテストするために一旦選択を外す
            
            // 指定した武器に対して、現在装備していない武器を切り替えてテスト
            for (let j=0; j<optimizer_target.weapon.length; j++) {

              // 自分自身か、もしくは選択済である場合はスキップ
              if (i == j || optimizer_target.weapon[j].selected == true) continue;
              
              optimizer_target.weapon[j].selected = true;
              
              temp_weapon = optimizer_target.weapon.filter(function(val) {
                return (val instanceof Object && val.selected);
              });

              let param = Object.assign({}, optimizer_target.basic_info, {
                weapon: temp_weapon.slice(0,10),
                summon: temp_summon.slice(0,5),
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

          // 一度も切り替えが無かった場合は終了して次のチェックへ
          if (change_flag == false) break;
        }
      }
      
      if (max_result > final_result) {
        best_summon_state = temp_summon.concat();
        main_summon = s1;
        main_friend = s2;
        final_result = max_result;
        console.log("更新！ "+max_result);
        console.log(temp_weapon.slice(0,10));
        console.log(temp_summon.slice(0,5));
        console.log(temp_friend);
      }

      let done_loop = s2 + s1 * optimizer_target.friend.length;
      console.log("done:"+done_loop+" max:"+max_loop);
      postMessage({
        message: "Optimizer is running....",
        state: optimizer_state,
        percent: Math.floor(done_loop * 100 / max_loop)
      });
    }
  }
  
  optimizer_target.summon.forEach((v, i) => { optimizer_target.summon[i].selected = false; });
  [...Array(SUMMON_CHECKED_MAX).keys()].forEach((v, i) => { best_summon_state[i].selected = true; });

  optimizer_target.friend.forEach((v, i) => { optimizer_target.friend[i].selected = false; });
  optimizer_target.friend[main_friend].selected = true;

  optimizer_state = WORKER_STATE.FINISH;
  
  postMessage({
    message: "Optimizer finished.",
    state: optimizer_state,
    i_weapon: optimizer_target.weapon,
    i_summon: optimizer_target.summon,
    i_friend: optimizer_target.friend,
    top_summon: main_summon,
    top_friend: main_friend
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
