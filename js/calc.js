// vim: sts=2 sw=2 ts=2 expandtab
window.onload = function(){
  init();
  update();
};

function init(){
  /* テーブル生成 */
  for (var i=0; i<10; i++) {
    weapon_insert(null);
  }

  for (var i=0; i<5; i++) {
    summon_insert(null);
  }

  for (var i=0; i<1; i++) {
    friend_insert(null);
  }
}

function get_weapon_amount(){
  return $(".weapon_tr").length;
}

function get_summon_amount(){
  return $(".summon_tr").length;
}

function get_friend_amount(){
  return $(".friend_tr").length;
}


function weapon_insert(obj){
  var tr_tag = `
    <TR class="weapon_tr">
    <TD><input type="checkbox" class="weapon_lock" value="lock"></TD>
    <TD><input type="checkbox" onChange="update()" class="weapon_select" value="select"></TD>
    <TD><INPUT type="text" class="weapon_name width150" onChange="update()"></TD>
    <TD><INPUT type="text" class="weapon_atk width50" onChange="update()"></TD>
    <TD><SELECT onChange="update()" class="weapon_kind">
    <OPTION value="sword">剣</OPTION>
    <OPTION value="daggar">短剣</OPTION>
    <OPTION value="spear">槍</OPTION>
    <OPTION value="axe">斧</OPTION>
    <OPTION value="stuff">杖</OPTION>
    <OPTION value="gun">銃</OPTION>
    <OPTION value="knuckle">格闘</OPTION>
    <OPTION value="bow">弓</OPTION>
    <OPTION value="instrument">楽器</OPTION>
    <OPTION value="blade">刀</OPTION>
    </SELECT></TD>
    <TD><SELECT onChange="update()" class="weapon_skill_type1">
    <OPTION value="none">無し</OPTION>
    <OPTION value="kj1">攻刃(小)</OPTION>
    <OPTION value="kj2">攻刃(中)</OPTION>
    <OPTION value="kj3">攻刃(大)</OPTION>
    <OPTION value="kj4">攻刃Ⅱ</OPTION>
    <OPTION value="bw1">背水(小)</OPTION>
    <OPTION value="bw2">背水(中)</OPTION>
    <OPTION value="bw3">背水(大)</OPTION>
    <OPTION value="mkj1">Ｍ攻刃</OPTION>
    <OPTION value="mkj2">Ｍ攻刃Ⅱ</OPTION>
    <OPTION value="mbw1">Ｍ背水</OPTION>
    <OPTION value="mbw2">Ｍ背水Ⅱ</OPTION>
    <OPTION value="bha">バハ攻</OPTION>
    <OPTION value="bhah">バハ攻HP</OPTION>
    <OPTION value="unk1">ｱﾝﾉｳﾝⅠ</OPTION>
    <OPTION value="unk2">ｱﾝﾉｳﾝⅡ</OPTION>
    <OPTION value="str">ｺﾗﾎﾞ枠</OPTION>
    </SELECT></TD>
    <TD><SELECT onChange="update()" class="weapon_skill_type2">
    <OPTION value="none">無し</OPTION>
    <OPTION value="kj1">攻刃(小)</OPTION>
    <OPTION value="kj2">攻刃(中)</OPTION>
    <OPTION value="kj3">攻刃(大)</OPTION>
    <OPTION value="kj4">攻刃Ⅱ</OPTION>
    <OPTION value="bw1">背水(小)</OPTION>
    <OPTION value="bw2">背水(中)</OPTION>
    <OPTION value="bw3">背水(大)</OPTION>
    <OPTION value="mkj1">Ｍ攻刃</OPTION>
    <OPTION value="mkj2">Ｍ攻刃Ⅱ</OPTION>
    <OPTION value="mbw1">Ｍ背水</OPTION>
    <OPTION value="mbw2">Ｍ背水Ⅱ</OPTION>
    <OPTION value="bha">バハ攻</OPTION>
    <OPTION value="bhah">バハ攻HP</OPTION>
    <OPTION value="unk1">ｱﾝﾉｳﾝⅠ</OPTION>
    <OPTION value="unk2">ｱﾝﾉｳﾝⅡ</OPTION>
    <OPTION value="str">ｺﾗﾎﾞ枠</OPTION>
    </SELECT></TD>
    <TD><SELECT onChange="update()" class="weapon_skill_lv">
    <OPTION value="0">無し</OPTION>
    <OPTION value="1">1</OPTION>
    <OPTION value="2">2</OPTION>
    <OPTION value="3">3</OPTION>
    <OPTION value="4">4</OPTION>
    <OPTION value="5">5</OPTION>
    <OPTION value="6">6</OPTION>
    <OPTION value="7">7</OPTION>
    <OPTION value="8">8</OPTION>
    <OPTION value="9">9</OPTION>
    <OPTION value="10">10</OPTION>
    <OPTION value="11">11</OPTION>
    <OPTION value="12">12</OPTION>
    <OPTION value="13">13</OPTION>
    <OPTION value="14">14</OPTION>
    <OPTION value="15">15</OPTION>
    </SELECT></TD>
    <TD>
    <input type="button" id="up" value="▲" onClick="sort_up(this)">
    <input type="button" id="down" value="▼" onClick="sort_down(this)">
    <input type="button" id="ins" value="+" onClick="weapon_insert(this)">
    <input type="button" id="del" value="-" onClick="weapon_delete(this)">
    </TD>
    </TR>
    `;

  var amount = get_weapon_amount();

  if (amount >= 20) return;

  if (obj === null) {
    $("#weapon_table").append(tr_tag);
  } else {
    $(obj).parents('tr').eq(0).after(tr_tag);
  }
}

function weapon_delete(obj){
  var amount = get_weapon_amount();

  if (amount <= 10) return;

  $(obj).parents('tr').eq(0).remove();
}

function summon_insert(obj){
  var tr_tag = `
    <TR class="summon_tr">
    <TD><input type="checkbox" class="summon_lock" value="lock"></TD>
    <TD><input type="checkbox" onChange="update()" class="summon_select" value="select"></TD>
    <TD><INPUT type="text" class="summon_name width150" onChange="update()"></TD>
    <TD><INPUT type="text" class="summon_atk width50" onChange="update()"></TD>
    <TD><SELECT onChange="update()" class="summon_kind1">
    <OPTION value="none">無し</OPTION>
    <OPTION value="attribute">属性</OPTION>
    <OPTION value="character">キャラ</OPTION>
    <OPTION value="magna">マグナ</OPTION>
    <OPTION value="unknown">ｱﾝﾉｳﾝ</OPTION>
    <OPTION value="zeus">ｾﾞｳｽ枠</OPTION>
    </SELECT></TD>
    <TD><INPUT type="text" class="summon_percent1 width25" onChange="update()">%</TD>
    <TD><SELECT onChange="update()" class="summon_kind2">
    <OPTION value="none">無し</OPTION>
    <OPTION value="attribute">属性</OPTION>
    <OPTION value="character">キャラ</OPTION>
    <OPTION value="magna">マグナ</OPTION>
    <OPTION value="unknown">ｱﾝﾉｳﾝ</OPTION>
    <OPTION value="zeus">ｾﾞｳｽ枠</OPTION>
    </SELECT></TD>
    <TD><INPUT type="text" class="summon_percent2 width25" onChange="update()">%</TD>
    <TD>
    <input type="button" id="up" value="▲" onClick="sort_up(this)">
    <input type="button" id="down" value="▼" onClick="sort_down(this)">
    <input type="button" id="ins" value="+" onClick="summon_insert(this)">
    <input type="button" id="del" value="-" onClick="summon_delete(this)">
    </TD>
    </TR>
    `;

  var amount = get_summon_amount();

  if (amount >= 10) return;

  if (obj === null) {
    $("#summon_table").append(tr_tag);
  } else {
    $(obj).parents('tr').eq(0).after(tr_tag);
  }
}

function summon_delete(obj){
  var amount = get_summon_amount();

  if (amount <= 5) return;

  $(obj).parents('tr').eq(0).remove();
}

function friend_insert(obj){
  var tr_tag = `
    <TR class="friend_tr">
    <TD><input type="checkbox" class="friend_lock" value="lock"></TD>
    <TD><input type="checkbox" onChange="update()" class="friend_select" value="select"></TD>
    <TD><INPUT type="text" class="friend_name width150" onChange="update()"></TD>
    <TD><INPUT type="text" class="friend_atk width50" onChange="update()"></TD>
    <TD><SELECT onChange="update()" class="friend_kind1">
    <OPTION value="none">無し</OPTION>
    <OPTION value="attribute">属性</OPTION>
    <OPTION value="character">キャラ</OPTION>
    <OPTION value="magna">マグナ</OPTION>
    <OPTION value="unknown">ｱﾝﾉｳﾝ</OPTION>
    <OPTION value="zeus">ｾﾞｳｽ枠</OPTION>
    </SELECT></TD>
    <TD><INPUT type="text" class="friend_percent1 width25" onChange="update()">%</TD>
    <TD><SELECT onChange="update()" class="friend_kind2">
    <OPTION value="none">無し</OPTION>
    <OPTION value="attribute">属性</OPTION>
    <OPTION value="character">キャラ</OPTION>
    <OPTION value="magna">マグナ</OPTION>
    <OPTION value="unknown">ｱﾝﾉｳﾝ</OPTION>
    <OPTION value="zeus">ｾﾞｳｽ枠</OPTION>
    </SELECT></TD>
    <TD><INPUT type="text" class="friend_percent2 width25" onChange="update()">%</TD>
    <TD>
    <input type="button" id="up" value="▲" onClick="sort_up(this)">
    <input type="button" id="down" value="▼" onClick="sort_down(this)">
    <input type="button" id="ins" value="+" onClick="friend_insert(this)">
    <input type="button" id="del" value="-" onClick="friend_delete(this)">
    </TD>
    </TR>
    `;

  var amount = get_friend_amount();

  if (amount >= 5) return;

  if (obj === null) {
    $("#friend_table").append(tr_tag);
  } else {
    $(obj).parents('tr').eq(0).after(tr_tag);
  }
}

function friend_delete(obj){
  var amount = get_friend_amount();

  if (amount <= 1) return;

  $(obj).parents('tr').eq(0).remove();
}

function sort_up(obj){
  var this_tr = $(obj).parents('tr').eq(0);
  var prev_tr = this_tr.prev('tr');

  prev_tr.remove();
  this_tr.after(prev_tr);
}

function sort_down(obj){
  var this_tr = $(obj).parents('tr').eq(0);
  var next_tr = this_tr.next('tr');

  next_tr.remove();
  this_tr.before(next_tr);
}

function get_value_int(obj){
  var ret = parseInt( obj.val() );
  if (isNaN(ret)) ret = 0;
  return ret;
}


// 外部からjob_dataとしてJSONデータを取りこむ
function get_job_data(url) {
  var job_request = new Request(url ? "data/job_data.json" : url);
  // Promiseオブジェクトを返すことで待つことを可能にする
  // see_also: http://qiita.com/koki_cheese/items/c559da338a3d307c9d88
  return fetch(job_request).then(function(data) {
    var job_data = data.json();
    return job_data;
  });
}


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
          skill_type: [武器のスキル1つ目の種別の文字列(String), 同2つ目 ]
        }, ...
      ],
    summon: [ // 召喚1つを配列の(ry
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
function calculate_atkval(param_obj, job_data) {
  // 基本攻撃力の算出
  var basic_atk = param_obj.rank * 40 + 1000;
  if (param_obj.rank < 2) {
    basic_atk = 1000;
  } else if (param_obj.rank > 100) {
    basic_atk -= (param_obj.rank - 100) * 20;
  }
  var showed_atk = basic_atk;

  // ゼニス攻撃力の算出
  var zenith_atk = 0;
  if (param_obj.zenith.atk == 1) {
    zenith_atk = 500;
  } else if (param_obj.zenith.atk == 2) {
    zenith_atk = 1500;
  } else if (param_obj.zenith.atk == 3) {
    zenith_atk = 3000;
  }

  // 召喚加護の計算
  var divine_percent = {
    attribute: 100,
    character: 100,
    magna: 100,
    unknown: 100,
    zeus: 100
  };
  param_obj.summon.forEach(function(summon) {
    summon.skill.forEach(function(divine) {
      divine_percent[divine.type] += divine.percent;
    });
  });

  // 武器攻撃力の計算
  showed_atk += function () {  // 表示攻撃力に処理で得られた総合武器攻撃力を加算する
    var total_atk = 0;
    var zenith_bonus = [0, 1, 3, 5];  // 各zenithの星に対応する追加ボーナス%
    param_obj.weapon.forEach(function(weapon) {
      var atk = weapon.atk;  // 基礎攻撃力
      var specialty_basic = 100;  // 得意武器倍率
      var specialty_bonus = 0;  // Zenith追加%
      var job = job_data[param_obj.job];  // 該当ジョブのデータを取得
      if (job) {  // もし該当ジョブが存在するのなら
        // 得意武器の一覧を見て...
        for (var i = 0; i < job.specialty.length; i++) {
          // 得意武器が現在見ている武器と一致するなら倍率(%)を上げる
          if (job.specialty[i] == weapon.type) {
            specialty_basic = 120;
            specialty_bonus = zenith_bonus[param_obj.zenith.weapon[i]];
            specialty_bonus = specialty_bonus ? 0 : specialty_bonus;
          }
        }
      }
      // 武器攻撃力に倍率をかける
      atk = atk * (specialty_basic + specialty_bonus) / 100;
      // 全武器攻撃力を更新する
      total_atk += atk;
    });
    return total_atk;
  } ();  // 定義した無名関数を即時実行する

  // 召喚攻撃力
  showed_atk += function () {
    var total = 0;
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
  var attribute_bonus = 0;
  attribute_bonus += function() {
    var zenith_bonus = [0, 1, 3, 5];
    var result = 0;
    result += param_obj.zenith.attribute ? zenith_bonus[0] : zenith_bonus[param_obj.zenith.attribute];
    if (param_obj.affinity == "good") {
      result += 50;
    } else if (param_obj.affinity == "bad") {
      result -= 25;
    }
    return result;
  } ();  // 無名関数の即時実行

  // 武器ごとのスキル計算
  /// 変数の初期化
  var total_skill = {
    baha: {percent: 0},
    koujin: {percent: 0},
    magna: {percent: 0, backwater: 0},
    normal: {backwater: 0},
    unknown: {percent: 0},
    collabo: {percent: 0}
  };
  var hp_p_n = param_obj.hp_percent / 100;
  var hp_coefficient = 2 * hp_p_n * hp_p_n - 5 * hp_p_n + 3; // = 2 * (hp_p_n ** 2) - 5 * hp_p_n + 3
  /// スキルの計算をするための関数を定義
  //// ロジックの異なる部分を引数として受けとり関数として返す
  //// type_str: "baha" | "koujin" | "magna" | "normal" | "unknown" | "collabo"
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
      var bw_coefficient = 0;
      if (lv_check_func(level)) {
        bw_coefficient = true_func(level);
      } else {
        bw_coefficient = false_func(level);
      }
      total_skill[type_str]["backwater"] += hp_coefficient * bw_coefficient / 3;
    };
  }
  var CHECK_LEVEL = 10;
  //// 渡された数値がCHECK_LEVELより下かどうかをチェックする関数
  function less_than_chklv(n) { return (n < CHECK_LEVEL); }
  //// addval + (lv - subval) * mulvalを計算する関数を返す関数
  function pcalc_gen(addval, subval, mulval) {
    return function(lv) {
      return addval + (lv - subval) * mulval;
    };
  }
  /// スキルと関数を対応させる
  var skill_calc_dict = {
    "kj1": pfunc_gen(
      "koujin", less_than_chklv,
      pcalc_gen(0, 0, 1), pcalc_gen(10, CHECK_LEVEL, 0.4)
    ),
    "kj2": pfunc_gen(
      "koujin", less_than_chklv,
      pcalc_gen(2, 0, 1), pcalc_gen(12, CHECK_LEVEL, 0.5)
    ),
    "kj3": pfunc_gen(
      "koujin", less_than_chklv,
      pcalc_gen(5, 0, 1), pcalc_gen(15, CHECK_LEVEL, 0.6)
    ),
    "kj4": pfunc_gen(
      "koujin", less_than_chklv,
      pcalc_gen(6, 0, 1), pcalc_gen(16, CHECK_LEVEL, 0.8)
    ),
    "mkj1": pfunc_gen(
      "magna", less_than_chklv,
      pcalc_gen(2, 0, 1), pcalc_gen(12, CHECK_LEVEL, 0.5)
    ),
    "mkj2": pfunc_gen(
      "magna", less_than_chklv,
      pcalc_gen(5, 0, 1), pcalc_gen(15, CHECK_LEVEL, 0.6)
    ),
    "unk1": pfunc_gen(
      "unknown", less_than_chklv,
      pcalc_gen(2, 0, 1), pcalc_gen(12, 0, 0)  // (15,0,0) -> 15 + (lv - 0) * 0
    ),
    "unk2": pfunc_gen(
      "unknown", less_than_chklv,
      pcalc_gen(5, 0, 1), pcalc_gen(15, 0, 0)
    ),
    "str": pfunc_gen(
      "collabo", less_than_chklv,
      pcalc_gen(5, 0, 1), pcalc_gen(15, 0, 0)
    ),
    "bha": pfunc_gen(
      "baha", less_than_chklv,
      pcalc_gen(19, 0, 1), pcalc_gen(30, 0, 0)
    ),
    "bhah": pfunc_gen(
      "baha", less_than_chklv,
      pcalc_gen(9.5, 0, 0.5), pcalc_gen(15, 0, 0)
    ),
    "bw1": bwfunc_gen(
      "normal", less_than_chklv,
      (l) => (-0.3 + l * 1.8),
      (l) => (18 + (l - CHECK_LEVEL) / 5 * 3)
    ),
    "bw2": bwfunc_gen(
      "normal", less_than_chklv,
      (l) => (-0.4 + l * 2.4),
      (l) => (24 + (l - CHECK_LEVEL) / 5 * 3)
    ),
    "bw3": bwfunc_gen(
      "normal", less_than_chklv,
      (l) => (-0.5 + l * 3.0),
      (l) => (30 + (l - CHECK_LEVEL) / 5 * 3)
    ),
    "mbw1": bwfunc_gen(
      "magna", less_than_chklv,
      (l) => (-0.3 + l * 1.8),
      (l) => (18 + (l - CHECK_LEVEL) / 5 * 3)
    ),
    "mbw2": bwfunc_gen(
      "magna", less_than_chklv,
      (l) => (-0.5 + l * 3.0),
      (l) => (30 + (l - CHECK_LEVEL) / 5 * 3)
    )
  };
  /// スキルとパラメータの集計
  param_obj.weapon.forEach(function(weapon) {
    if (weapon.skill_level === 0) return;  // スキルレベル0はスキル未取得
    // スキルごとの計算
    weapon.skill_type.forEach(function(skill_type) {
      skill_calc_dict[skill_type](weapon.skill_level);
    });
  });

  // 総合計算
  showed_atk = Math.round(showed_atk);
  var total_atk = showed_atk;
  total_atk *= (100 + (total_skill.baha.percent + total_skill.koujin.percent * divine_percent.zeus / 100)) / 100;
  total_atk *= (100 + total_skill.normal.backwater * divine_percent.zeus / 100) / 100;
  total_atk *= (100 + total_skill.magna.percent * divine_percent.zeus / 100) / 100;
  total_atk *= (100 + total_skill.magna.backwater * divine_percent.magna / 100) / 100;
  total_atk *= (100 + (total_skill.collabo.percent + total_skill.unknown.percent * divine_percent.unknown / 100)) / 100;
  total_atk *= (divine_percent.attribute + attribute_bonus) / 100;
  total_atk *= (100 + param_obj.ship_bonus) / 100;
  total_atk = Math.round(total_atk);

  // 結果の返却
  return {
    "basic_atk": basic_atk,
    "showed_atk": showed_atk,
    "total_atk": total_atk
  };
}


function update(){
  /* 基本情報 */
  var rank = get_value_int( $('#rank') );
  var ship_bonus = get_value_int( $('#ship_bonus') );
  var attribute_type = get_value_int( $('#attribute_type') );
  var hp_percent = get_value_int( $('#hp_percent') );

  var job = $('#job').val();

  var atk_bonus = job_status[job].atk_bonus;
  var specialty1 = job_status[job].specialty1;
  var specialty2 = job_status[job].specialty2;

  /* 基本攻撃力 */
  var basic_atk = rank * 40 + 1000;
  if ( rank < 2 ) basic_atk = 1000;
  if ( rank > 100 ) basic_atk -= (rank-100) * 20;

  var showed_atk = basic_atk;

  /* ゼニス攻撃力 */
  var zenith_atk = 0;
  if ($("#zenith_atk").val() == "1") zenith_atk = 500;
  if ($("#zenith_atk").val() == "2") zenith_atk = 1500;
  if ($("#zenith_atk").val() == "3") zenith_atk = 3000;
  showed_atk += zenith_atk;

  var weapon_amount = get_weapon_amount();
  var summon_amount = get_summon_amount();
  var friend_amount = get_friend_amount();

  var select_weapon = {};
  var select_summon = {};
  var select_friend = 0;

  /* 使用武器・召喚判定 */
  var use_weapon = 0;
  for (var i=0; i<weapon_amount; i++) {
    if ( $(".weapon_select").eq(i).prop("checked") === true ) {
      if (use_weapon < 10) {
        select_weapon[use_weapon] = i;
        use_weapon++;
      }
    }
  }

  var use_summon = 0;
  for (var i=0; i<summon_amount; i++) {
    if ( $(".summon_select").eq(i).prop("checked") === true ) {
      if (use_summon < 5) {
        select_summon[use_summon] = i;
        use_summon++;
      }
    }
  }

  var use_friend = 0;
  for (var i=0; i<friend_amount; i++) {
    if ( $(".friend_select").eq(i).prop("checked") === true ) {
      select_friend = i;
      break;
    }
  }

  /* 召喚加護 */
  divine_chara_percent = 100;
  divine_attribute_percent = 100;
  divine_magna_percent = 100;
  divine_unknown_percent = 100;
  divine_zeus_percent = 100;

  var kind_class_name = [ ".summon_kind1", ".summon_kind2" ];
  var percent_class_name = [ ".summon_percent1", ".summon_percent2" ];

  for (var i=0; i<2; i++) {
    var tmp_percent = get_value_int( $(percent_class_name[i]).eq(0));
    if ( $(kind_class_name[i]).eq(0).val() == "attribute" ) divine_attribute_percent += tmp_percent;
    if ( $(kind_class_name[i]).eq(0).val() == "character" ) divine_chara_percent += tmp_percent;
    if ( $(kind_class_name[i]).eq(0).val() == "magna" ) divine_magna_percent += tmp_percent;
    if ( $(kind_class_name[i]).eq(0).val() == "unknown" ) divine_unknown_percent += tmp_percent;
    if ( $(kind_class_name[i]).eq(0).val() == "zeus" ) divine_zeus_percent += tmp_percent;
  }

  /* 武器攻撃力 */
  for (var i=0; i<use_weapon; i++) {
    var index = select_weapon[i];
    var weapon_atk = get_value_int( $('.weapon_atk').eq(index) );
    var weapon_type = $('.weapon_kind').eq(index).val();
    var specialty_basic = 100;
    var specialty_bonus = 0;
    if ( specialty1 == weapon_type ) {
      specialty_basic = 120;
      if ( $("#zenith_weapon1").val() == "1" ) specialty_bonus = 1;
      if ( $("#zenith_weapon1").val() == "2" ) specialty_bonus = 3;
      if ( $("#zenith_weapon1").val() == "3" ) specialty_bonus = 5;
    }
    if ( specialty2 == weapon_type ) {
      specialty_basic = 120;
      if ( $("#zenith_weapon2").val() == "1" ) specialty_bonus = 1;
      if ( $("#zenith_weapon2").val() == "2" ) specialty_bonus = 3;
      if ( $("#zenith_weapon2").val() == "3" ) specialty_bonus = 5;
    }

    showed_atk += weapon_atk * (specialty_basic + specialty_bonus) / 100;
  }

  /* 召喚攻撃力 */
  for (var i=0; i<use_summon; i++) {
    var index = select_summon[i];
    showed_atk += get_value_int( $('.summon_atk').eq(index) );
  }

  /* ジョブボーナス */
  var atk_bonus_percent = 100 + get_value_int( $('#atk_bonus_percent') );
  var atk_bonus_value = get_value_int( $('#atk_bonus_value') );
  showed_atk += atk_bonus_value;
  showed_atk = showed_atk * atk_bonus_percent / 100;
  showed_atk = Math.round(showed_atk);

  /* スキル */
  /* 属性補正 */
  var attribute_bonus = 0;
  if ( $("#zenith_attribute").val() == "1" ) attribute_bonus += 1;
  if ( $("#zenith_attribute").val() == "2" ) attribute_bonus += 3;
  if ( $("#zenith_attribute").val() == "3" ) attribute_bonus += 5;

  if ( $("#attribute_type").val() == "good" ) attribute_bonus += 50;
  if ( $("#attribute_type").val() == "bad" ) attribute_bonus -= 25;

  /* スキル計算 */
  var total_baha_percent = 0;
  var total_koujin_percent = 0;
  var total_magna_percent = 0;
  var total_magna_backwater = 0;
  var total_normal_backwater = 0;
  var total_unknown_percent = 0;
  var total_collabo_percent = 0;
  var hp_coefficient = 2 * hp_percent / 100 * hp_percent / 100 - 5 * hp_percent / 100 + 3;

  var skill_class_name = [ ".weapon_skill_type1", ".weapon_skill_type2" ];

  for (var i=0; i<use_weapon; i++) {
    for (var j=0; j<2; j++) {
      var index = select_weapon[i];
      var skill_level = get_value_int( $(".weapon_skill_lv").eq(index) );
      var skill_type = $(skill_class_name[j]).eq(index).val();

      if (skill_level === 0) continue;

      if (skill_type == "kj1") {
        if (skill_level < 10) {
          total_koujin_percent += 0 + skill_level;
        } else {
          total_koujin_percent += 10 + (skill_level - 10) * 0.4;
        }
      }
      if (skill_type == "kj2") {
        if (skill_level < 10) {
          total_koujin_percent += 2 + skill_level;
        } else {
          total_koujin_percent += 12 + (skill_level - 10) * 0.5;
        }
      }
      if (skill_type == "kj3") {
        if (skill_level < 10) {
          total_koujin_percent += 5 + skill_level;
        } else {
          total_koujin_percent += 15 + (skill_level - 10) * 0.6;
        }
      }
      if (skill_type == "kj4") {
        if (skill_level < 10) {
          total_koujin_percent += 6 + skill_level;
        } else {
          total_koujin_percent += 16 + (skill_level - 10) * 0.8;
        }
      }
      if (skill_type == "mkj1") {
        if (skill_level < 10) {
          total_magna_percent += 2 + skill_level;
        } else {
          total_magna_percent += 12 + (skill_level - 10) * 0.5;
        }
      }
      if (skill_type == "mkj2") {
        if (skill_level < 10) {
          total_magna_percent += 5 + skill_level;
        } else {
          total_magna_percent += 15 + (skill_level - 10) * 0.6;
        }
      }
      if (skill_type == "unk1") {
        if (skill_level < 10) {
          total_unknown_percent += 2 + skill_level;
        } else {
          total_unknown_percent += 12;
        }
      }
      if (skill_type == "unk2") {
        if (skill_level < 10) {
          total_unknown_percent += 5 + skill_level;
        } else {
          total_unknown_percent += 15;
        }
      }
      if (skill_type == "str") {
        if (skill_level < 10) {
          total_collabo_percent += 5 + skill_level;
        } else {
          total_collabo_percent += 15;
        }
      }
      if (skill_type == "bha") {
        if ( skill_level < 10 ) {
          total_baha_percent += 19 + skill_level;
        } else {
          total_baha_percent += 30;
        }
      }
      if (skill_type == "bhah") {
        if ( skill_level < 10 ) {
          total_baha_percent += 9.5 + skill_level / 2;
        } else {
          total_baha_percent += 15;
        }
      }
      if (skill_type == "bw1") {
        var bw_coefficient = 0;
        if ( skill_level >= 10 ) {
          bw_coefficient = 18 + (skill_level - 10) / 5 * 3;
        } else {
          bw_coefficient = -0.3 + skill_level * 1.8;
        }
        total_normal_backwater += hp_coefficient * bw_coefficient / 3;
      }
      if (skill_type == "bw2") {
        var bw_coefficient = 0;
        if ( skill_level >= 10 ) {
          bw_coefficient = 24 + (skill_level - 10) / 5 * 3;
        } else {
          bw_coefficient = -0.4 + skill_level * 2.4;
        }
        total_normal_backwater += hp_coefficient * bw_coefficient / 3;
      }
      if (skill_type == "bw3") {
        var bw_coefficient = 0;
        if ( skill_level >= 10 ) {
          bw_coefficient = 30 + (skill_level - 10) / 5 * 3;
        } else {
          bw_coefficient = -0.5 + skill_level * 3.0;
        }
        total_normal_backwater += hp_coefficient * bw_coefficient / 3;
      }
      if (skill_type == "mbw1") {
        var bw_coefficient = 0;
        if ( skill_level >= 10 ) {
          bw_coefficient = 18 + (skill_level - 10) / 5 * 3;
        } else {
          bw_coefficient = -0.3 + skill_level * 1.8;
        }
        total_magna_backwater += hp_coefficient * bw_coefficient / 3;
      }
      if (skill_type == "mbw2") {
        var bw_coefficient = 0;
        if ( skill_level >= 10 ) {
          bw_coefficient = 30 + (skill_level - 10) / 5 * 3;
        } else {
          bw_coefficient = -0.5 + skill_level * 3.0;
        }
        total_magna_backwater += hp_coefficient * bw_coefficient / 3;
      }
    }
  }

  /* 総合計算 */
  var total_atk = showed_atk;
  total_atk = showed_atk;
  total_atk *= (100 + (total_baha_percent + total_koujin_percent * divine_zeus_percent / 100)) / 100;
  total_atk *= (100 + total_normal_backwater * divine_zeus_percent / 100) / 100;
  total_atk *= (100 + total_magna_percent * divine_magna_percent / 100) / 100;
  total_atk *= (100 + total_magna_backwater * divine_magna_percent / 100) / 100;
  total_atk *= (100 + (total_collabo_percent + total_unknown_percent * divine_unknown_percent / 100)) / 100;
  total_atk *= (divine_attribute_percent + attribute_bonus) / 100;
  total_atk *= (100 + ship_bonus) / 100;
  total_atk = Math.round(total_atk);

  /* 表示 */
  $("#basic_atk").html(basic_atk);
  $("#showed_atk").html(showed_atk);
  $("#total_atk").html(total_atk);
}
