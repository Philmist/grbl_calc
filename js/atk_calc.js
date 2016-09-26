// vim: sts=2 sw=2 ts=2 expandtab

// 各種パラメータをobject(dict)で受けとってobjectで返す関数
/*
  param_obj: 以下のような内容を持つオブジェクト
  {
    rank: ランク(Number),
    ship_bonus: 騎空艇補正(Number),
    hp_percent: 現在HPの最大HPに対する%(Number),
    job: 別データで表わされたクラス(職業)を示した文字列(String),
    affinity: 'good' | 'bad' | (それ以外) の文字列で示される属性補正(String),
    zenith: {
        atk: 星の数(0から3の整数)(Number),
        weapon: [得意武器1つ目の星の数(0-3の整数)(Number), ... ],
        attribute: 属性攻撃力の星の数(0-3の整数)(Number)
      }
    weapon: [ // 武器1つを配列の要素1つで表わす
        {
          atk: 武器攻撃力(Number),
          type: 武器の種類を表わした文字列(String),
          skill_level: 武器のスキルレベル(Number),
          skill_type: [武器のスキル1つ目の種別の文字列(String), 同2つ目 ],
          cosmos: コスモス武器か否か(boolean)
        }, ...
      ],
    summon: [ // 召喚1つを配列の(ry 最初のものがメイン召喚石として計算される
        {
          atk: 召喚の攻撃力(Number),
          skill: [ // 加護1つを配列の要素1つで表わす
            {
              type: 加護種別を表わす文字列(String),
              percent: 加護のパーセンテージ(Number)
            }, ...
          ]
        }, ...
      ],
    atk_bonus: {
      percent: 攻撃力ボーナスのパーセンテージ(%, Number),
      value: 攻撃力ボーナスの値(Number)
    },
    friend: {  // フレンド召喚 だいたい通常召喚と一緒だが要素1個だけなのでオブジェクト
      atk: 召喚の攻撃力(Number),
      skill: [ // 加護1つを配列の要素1つで表わす
        {
          type: 加護種別を表わす文字列(String),
          percent: 加護のパーセンテージ(Number)
        }, ...
      ]
    }
  }
  job_data: 以下のような内容を持つオブジェクト
  {
    "(職業の英語名)": {
      specialty: ["(得意武器の英語名)", ... ],
      atk_bonus: 攻撃力ボーナス(Number)
    }, ...
  }
*/
export function calculate_atkval (param_obj, job_data) {
  // 攻撃力の定義
  let showed_atk = 0;
  let basic_atk = 0;

  // 基本攻撃力の算出
  {
    let rank = Number(param_obj.rank);
    basic_atk = rank * 40 + 1000;
    if (rank < 2) {
      basic_atk = 1000;
    } else if (rank > 100) {
      basic_atk -= (rank - 100) * 20;
    }
    showed_atk = basic_atk;
  }

  // ゼニス攻撃力の算出
  {
    let zenith_atk = 0;
    if (param_obj.zenith.atk == 1) {
      zenith_atk = 500;
    } else if (param_obj.zenith.atk == 2) {
      zenith_atk = 1500;
    } else if (param_obj.zenith.atk == 3) {
      zenith_atk = 3000;
    }
    showed_atk += zenith_atk;
  }

  // 召喚加護の計算
  let divine_percent = {
    attribute: 100,
    character: 0,
    magna: 100,
    unknown: 100,
    zeus: 100,
    none: 0
  };
  // メイン召喚石
  if (param_obj.summon[0]) {
    let main_summon = param_obj.summon[0];
    if (main_summon.skill) {
      main_summon.skill.forEach(function(divine) {
        if (divine.type) { divine_percent[divine.type] += divine.percent; }
      });
    }
  }
  // フレンド召喚石
  if (param_obj.friend) {
    let friend = param_obj.friend;
    if (friend.skill) {
      friend.skill.forEach(function(divine) {
        if (divine.type) { divine_percent[divine.type] += divine.percent; }
      });
    }
  }

  // コスモス武器の武器種を確認する
  // 一番最初のコスモス武器が該当
  let cosmos_weapon_type = "no_cosmos";  // "none"では該当が出てきてしまう
  for (let i = 0; i < param_obj.weapon.length; i++) {
    if (param_obj.weapon[i].cosmos) {
      cosmos_weapon_type = param_obj.weapon[i].type;
      break;
    }
  }

  // 武器攻撃力の計算
  showed_atk += function () {  // 表示攻撃力に処理で得られた総合武器攻撃力を加算する
    let total_atk = 0;
    const zenith_bonus = [0, 1, 3, 5, 0, 0, 10];  // 各zenithの星に対応する追加ボーナス%
    param_obj.weapon.forEach(function(weapon) {
      let atk = weapon.atk;  // 基礎攻撃力
      let specialty_basic = 100;  // 得意武器倍率%
      let specialty_bonus = 0;  // Zenith追加%
      let job = job_data[param_obj.job];  // 該当ジョブのデータを取得
      if (job) {  // もし該当ジョブが存在するのなら
        // 得意武器の一覧を見て...
        for (var i = 0; i < job.specialty.length; i++) {
          // 得意武器が現在見ている武器と一致するなら倍率(%)を上げる
          if (job.specialty[i] == weapon.type) {
            specialty_basic = 120;
            specialty_bonus = zenith_bonus[param_obj.zenith.weapon[i]];
            specialty_bonus = specialty_bonus ? specialty_bonus: 0;
          }
        }
      }
      let specialty_cosmos = (weapon.type == cosmos_weapon_type) ? 30 : 0; // コスモス該当武器の追加%
      // 武器攻撃力に倍率をかける
      atk = atk * (specialty_basic + specialty_bonus + specialty_cosmos) / 100;
      // 全武器攻撃力を更新する
      total_atk += atk;
    });
    return total_atk;
  } ();  // 定義した無名関数を即時実行する

  // 召喚攻撃力
  showed_atk += function () {
    let total = 0;
    param_obj.summon.forEach(function(summon) {
      total += summon.atk;
    });
    return total;
  } ();  // 無名関数の即時実行

  // ジョブボーナス
  // TODO: 外部ファイルから読みこみも考えるべき
  showed_atk += param_obj.atk_bonus.value;
  showed_atk = showed_atk * (100 + param_obj.atk_bonus.percent) / 100;


  /* スキル */

  // 属性補正
  let attribute_bonus = 0;
  attribute_bonus += function() {
    let zenith_bonus = [0, 1, 3, 5];
    let result = 0;
    result += param_obj.zenith.attribute ? zenith_bonus[param_obj.zenith.attribute]  : zenith_bonus[0];
    if (param_obj.affinity == "good") {
      result += 50;
    } else if (param_obj.affinity == "bad") {
      result -= 25;
    }
    return result;
  } ();  // 無名関数の即時実行

  // 武器ごとのスキル計算
  /// 変数の初期化
  let total_skill = {
    baha: {percent: 0},
    koujin: {percent: 0},
    magna: {percent: 0, backwater: 0},
    normal: {backwater: 0, konshin: 0},
    unknown: {percent: 0, backwater: 0},
    strength: {percent: 0}
  };
  let hp_p_n = param_obj.hp_percent / 100;  // [0,1]なHP割合
  let hp_coefficient = 2 * hp_p_n * hp_p_n - 5 * hp_p_n + 3; // = 2 * (hp_p_n ** 2) - 5 * hp_p_n + 3
  /// スキルの計算をするための関数を定義
  //// ロジックの異なる部分を引数として受けとり関数として返す
  //// type_str: "baha" | "koujin" | "magna" | "normal" | "unknown" | "strength"
  //// lv_check_func: 引数としてskill_levelを受けとり条件を判断する関数
  //// true_func: lv_check_funcで返された結果が真のときskill_levelを受けとり加算する%を返す関数
  //// false_func: ほぼ同上だが偽の場合
  function pfunc_gen (type_str, lv_check_func, true_func, false_func) {
    return function (level) {
      if (lv_check_func(level)) {
        total_skill[type_str]["percent"] += true_func(level);
      } else {
        total_skill[type_str]["percent"] += false_func(level);
      }
    };
  }
  //// この関数は背水に対応
  //// ほぼ上の関数と一緒だが以下の部分が相違
  //// true_func, false_func: skill_levelを受けとりcoefficientを計算する関数
  function bwfunc_gen (type_str, lv_check_func, true_func, false_func) {
    return function (level) {
      let bw_coefficient = 0;
      if (lv_check_func(level)) {
        bw_coefficient = true_func(level);
      } else {
        bw_coefficient = false_func(level);
      }
      total_skill[type_str]["backwater"] += hp_coefficient * bw_coefficient / 3;
    };
  }
  //// 渡された数値がlevelより下かどうかをチェックする関数を返す関数
  function less_than_chklv(level) {
    return function less_than_chklv(n) { return (n < level); }
  }
  //// addval + (lv - subval) * mulvalを計算する関数を返す関数
  function pcalc_gen(addval, subval, mulval) {
    return function(lv) {
      return addval + (lv - subval) * mulval;
    };
  }
  /// スキルと関数を対応させる
  const CHECK_LEVEL = 10;
  let skill_calc_dict = {
    // total_skill.koujin.percent = 0 + (lv - 0) * 1  [lv<10]
    // total_skill.koujin.percent = 10 + (lv - 10) * 0.4 [lv>=10]
    "kj1": pfunc_gen(
      "koujin", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(0, 0, 1), pcalc_gen(10, CHECK_LEVEL, 0.4)
    ),
    "kj2": pfunc_gen(
      "koujin", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(2, 0, 1), pcalc_gen(12, CHECK_LEVEL, 0.5)
    ),
    "kj3": pfunc_gen(
      "koujin", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(5, 0, 1), pcalc_gen(15, CHECK_LEVEL, 0.6)
    ),
    "kj4": pfunc_gen(
      "koujin", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(6, 0, 1), pcalc_gen(16, CHECK_LEVEL, 0.8)
    ),
    "km1": pfunc_gen(
      "koujin", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(0, 0, 1), pcalc_gen(10, CHECK_LEVEL, 0,4)
    ),
    "mkj1": pfunc_gen(
      "magna", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(2, 0, 1), pcalc_gen(12, CHECK_LEVEL, 0.5)
    ),
    "mkj2": pfunc_gen(
      "magna", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(5, 0, 1), pcalc_gen(15, CHECK_LEVEL, 0.6)
    ),
    "mkm1": pfunc_gen(
      "magna", less_than_chklv(CHECK_LEVEL),
      (lv) => (lv), (lv) => (10 + (lv - CHECK_LEVEL) * 0.4)
    ),
    "unk1": pfunc_gen(
      "unknown", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(0, 0, 1), pcalc_gen(0, 0, 1)
    ),
    "unk2": pfunc_gen(
      "unknown", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(2, 0, 1), pcalc_gen(2, 0, 1)
    ),
    "unk3": pfunc_gen(
      "unknown", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(5, 0, 1), pcalc_gen(5, 0, 1)
    ),
    "ubw1": bwfunc_gen(
      "unknown", less_than_chklv(CHECL_LEVEL),
      (l) => (-0.3 + l * 1.8),
      (l) => (18)
    ),
    "ubw2": bwfunc_gen(
      "unknown", less_than_chklv(CHECL_LEVEL),
      (l) => (-0.4 + l * 2.4),
      (l) => (24)
    ),
    "ubw3": bwfunc_gen(
      "unknown", less_than_chklv(CHECL_LEVEL),
      (l) => (-0.5 + l * 3.0),
      (l) => (30)
    ),
    "str": pfunc_gen(
      "strength", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(5, 0, 1), pcalc_gen(5, 0, 1)
    ),
    "bha": pfunc_gen(
      "baha", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(19, 0, 1), pcalc_gen(30, CHECK_LEVEL, 0.4)
    ),
    "bhah": pfunc_gen(
      "baha", less_than_chklv(CHECK_LEVEL),
      pcalc_gen(9.5, 0, 0.5), pcalc_gen(15, 0, 0)
    ),
    "bw1": bwfunc_gen(
      "normal", less_than_chklv(CHECK_LEVEL),
      (l) => (-0.3 + l * 1.8),
      (l) => (18 + (l - CHECK_LEVEL) / 5 * 3)
    ),
    "bw2": bwfunc_gen(
      "normal", less_than_chklv(CHECK_LEVEL),
      (l) => (-0.4 + l * 2.4),
      (l) => (24 + (l - CHECK_LEVEL) / 5 * 6)
    ),
    "bw3": bwfunc_gen(
      "normal", less_than_chklv(CHECK_LEVEL),
      (l) => (-0.5 + l * 3.0),
      (l) => (30 + (l - CHECK_LEVEL) / 5 * 7.5)
    ),
    "mbw1": bwfunc_gen(
      "magna", less_than_chklv(CHECK_LEVEL),
      (l) => (-0.3 + l * 1.8),
      (l) => (18 + (l - CHECK_LEVEL) / 5 * 3)
    ),
    "mbw2": bwfunc_gen(
      "magna", less_than_chklv(CHECK_LEVEL),
      (l) => (-0.4 + l * 2.4),
      (l) => (24 + (l - CHECK_LEVEL) / 5 * 3)
    ),
    "mbw3": bwfunc_gen(
      "magna", less_than_chklv(CHECK_LEVEL),
      (l) => (-0.5 + l * 3.0),
      (l) => (30 + (l - CHECK_LEVEL) / 5 * 3)
    ),
    "ks": (lv) => {
      // hp_p_nは既に100で割られていることに注意
      if (lv >= 10) {
        total_skill["normal"]["konshin"] = hp_p_n * (20 + (lv - 10) * 0.6);
      } else {
        total_skill["normal"]["konshin"] = hp_p_n * (10 + lv);
      }
    }
  };
  /// スキルとパラメータの集計
  param_obj.weapon.forEach(function(weapon) {
    if (weapon.skill_level === 0) return;  // スキルレベル0はスキル未取得
    // スキルごとの計算
    weapon.skill_type.forEach(function(skill_type) {
      if (skill_type != "none") { skill_calc_dict[skill_type](weapon.skill_level); }
    });
  });

  // ステータスの上限等補正
  /// バハ攻%は50を超えない
  total_skill.baha.percent = total_skill.baha.percent > 50 ? 50 : total_skill.baha.percent;

  // 総合計算
  let total_atk = showed_atk;
  /// 通常攻刃
  total_atk *= 1 + (divine_percent.character + total_skill.baha.percent + (total_skill.koujin.percent * divine_percent.zeus / 100) ) / 100;
  /// 通常背水
  total_atk *= 1 + (total_skill.normal.backwater * divine_percent.zeus / 100) / 100;
  /// 通常渾身
  total_atk *= 1 + total_skill.normal.konshin / 100;
  /// マグナ攻刃
  total_atk *= 1 + (total_skill.magna.percent * divine_percent.magna / 100) / 100;
  /// マグナ背水
  total_atk *= 1 + (total_skill.magna.backwater * divine_percent.magna / 100) / 100;
  /// EX攻刃
  total_atk *= 1 + (total_skill.strength.percent + total_skill.unknown.percent * divine_percent.unknown / 100) / 100;
  /// 属性
  total_atk *= (divine_percent.attribute + attribute_bonus) / 100;
  /// 騎空艇ボーナス%
  total_atk *= 1 + param_obj.ship_bonus / 100;

  total_atk = Math.round(total_atk);
  showed_atk = Math.round(showed_atk);

  // 結果の返却
  return {
    "basic_atk": basic_atk,
    "showed_atk": showed_atk,
    "total_atk": total_atk
  };
}


// 武器1つのオブジェクトが妥当な形式かチェックする
export function is_valid_weapon_obj(weapon_obj) {
  if (!(weapon_obj instanceof Object)) {
    return false;
  }
  let weapon_keys = Object.keys(weapon_obj);
  // 攻撃力
  if (!(weapon_keys.includes("atk") && weapon_obj.atk >= 0)) {
    return false;
  }
  // 武器種別
  if (!(weapon_keys.includes("type") && typeof weapon_obj.type == "string")) {
    return false;
  }
  // スキルレベル
  if (!(weapon_keys.includes("skill_level") && weapon_obj.skill_level >= 0)) {
    return false;
  }
  // スキル種別
  if (!(weapon_keys.includes("skill_type") && weapon_obj.skill_type instanceof Array)) {
    return false;
  } else {
    for (let i = 0; i < weapon_obj.skill_type.length; i++) {
      if (!(typeof weapon_obj.skill_type[i] == "string")) {
        return false;
      }
    }
  }
  // コスモスか否か
  if (!(weapon_keys.includes("cosmos"))) {
    return false;
  }
  // チェックを全部パスした
  return true;
}


// 召喚1つのオブジェクトが妥当な形式かをチェックする
export function is_valid_summon_obj(summon_obj) {
  // 攻撃力
  if (!(summon_obj.atk >= 0)) {
    return false;
  }

  // 加護
  if (!(summon_obj.skill instanceof Array)) {
    return false;
  }
  for (let i = 0; i < summon_obj.skill.length; i++) {
    let chk_val = summon_obj.skill[i];
    if (!(chk_val instanceof Object)) {
      return false;
    }
    if (!(chk_val.hasOwnProperty("type") && typeof chk_val.type == "string")) {
      return false;
    }
    if (!(chk_val.hasOwnProperty("percent") && chk_val.percent >= 0)) {
      return false;
    }
  }

  // チェックを全て通った
  return true;
}
