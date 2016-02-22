// vim: sts=2 sw=2 ts=2 expandtab

// 渡された引数を強引に数値へ変換する関数
var val2int = (v) => (isNaN(v) ? 0 : Number(v));

// HTMLのフォームから値を読みとる
// jQueryが読みこまれているのが前提
function get_value_from_form() {
  var gv2i = (v) => (val2int(v.val()));  // get value to int
  var gv2s = (v) => (String(v.val()));  // get value to string

  // 基礎情報
  var rank = gv2i($("#rank"));
  var ship_bonus = gv2i($("#ship_bonus"));
  var affinity = gv2s($("#attribute_type"));
  var hp_percent = gv2i($("#hp_percent"));

  var job = gv2s($("#job"));

  var atk_bonus = {
    percent: gv2i($("input#atk_bonus_percent")),
    value: gv2i($("input#atk_bonus_value"))
  };

  // Zenith perk
  var zenith = {};
  zenith.atk = gv2i($("#zenith_atk"));
  zenith.weapon = [gv2i($("#zenith_weapon1")), gv2i($("#zenith_weapon2"))];
  zenith.attribute = gv2i($("#zenith_attribute"));

  // 召喚
  var summon = [];
  $("#summon_table > tr").each(function () {
    // 処理している要素の中で子孫要素の".weapon_select"を探してその最初の要素がチェックされているかどうか
    if ($(this).find(".summon_select").first().prop("checked") === true) {
      var r = {};
      r.atk = gv2i($(this).find("input.summon_atk"));
      r.skill = [
        {
          type: gv2s( $(this).find("input.summon_kind1") ),
          percent: gv2i( $(this).find("input.summon_percent1") )
        },
        {
          type: gv2s( $(this).find("input.summon_kind2") ),
          percent: gv2i( $(this).find("input.summon_percent2") )
        }
      ];
      summon.push(r);
    }
    if (summon.length >= 10) {
      return false;  // ループから抜ける
    }
  });

  // 武器
  var weapon = [];
  $("#weapon_table > tr").each(function () {
    if ($(this).find(".weapon_select").first().prop("checked") === true) {
      var r = {};
      r.atk = gv2i($(this).find("input.weapon_atk"));
      r.type = gv2s($(this).find("input.weapon_atk"));
      r.skill_level = gv2i($(this).find("select.weapon_skill_lv"));
      r.skill_type = [
        gv2s($(this).find("select.weapon_skill_type1")),
        gv2s($(this).find("select.weapon_skill_type2"))
      ];
      weapon.push(r);
    }
    if (weapon.length >= 10) {
      return false;  // ループから抜ける
    }
  });

  // 結果の返却
  return {
    "rank": rank,
    "ship_bonus": ship_bonus,
    "hp_percent": hp_percent,
    "job": job,
    "affinity": affinity,
    "zenith": zenith,
    "weapon": weapon,
    "summon": summon,
    "atk_bonus": atk_bonus
  };
}


// [value, 表示文字列]の組を受けとってoption内に展開する関数
function create_option_from_pair(tp_str) {
  var r = "";
  tp_str.forEach(function (i) {
    r = r + `<option value="${i[0]}">${i[1]}</option>`;
  });
  return r;
}

// option文字列を展開する関数
var expanded_option = {};
function expand_option_str () {
  // 短縮名
  var a2opt = create_option_from_pair;
  // テンプレート用対応定義
  var tp_summon_kind = [
    ["none", "無し"],
    ["attribute", "属性"],
    ["character", "キャラ"],
    ["magna", "マグナ"],
    ["unknown", "ｱﾝﾉｳﾝ"],
    ["zeus", "ｾﾞｳｽ枠"]
  ];
  var tp_weapon_kind = [
    ["sword", "剣"],
    ["dagger", "短剣"],
    ["spear", "槍"],
    ["axe", "斧"],
    ["stuff", "杖"],
    ["gun", "銃"],
    ["knuckle", "格闘"],
    ["bow", "弓"],
    ["instrument", "楽器"],
    ["blade", "刀"]
  ];
  var tp_weapon_skill_type = [
    ["none", "無し"],
    ["kj1", "攻刃(小)"],
    ["kj2", "攻刃(中)"],
    ["kj3", "攻刃(大)"],
    ["kj4", "攻刃Ⅱ"],
    ["bw1", "背水(小)"],
    ["bw2", "背水(中)"],
    ["bw3", "背水(大)"],
    ["mkj1", "Ｍ攻刃"],
    ["mkj2", "Ｍ攻刃Ⅱ"],
    ["mbw1", "Ｍ背水"],
    ["mbw2", "Ｍ背水Ⅱ"],
    ["bha", "バハ攻"],
    ["bhah", "バハ攻HP"],
    ["unk1", "ｱﾝﾉｳﾝⅠ"],
    ["unk2", "ｱﾝﾉｳﾝⅡ"],
    ["str", "ｺﾗﾎﾞ枠"]
  ];
  var tp_weapon_skill_lv = [
    ["0", "無し"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
    ["9", "9"],
    ["10", "10"],
    ["11", "11"],
    ["12", "12"],
    ["13", "13"],
    ["14", "14"],
    ["15", "15"]
  ];
  // オブジェクトに代入する
  expanded_option.summon_kind = a2opt(tp_summon_kind);
  expanded_option.weapon_kind = a2opt(tp_weapon_kind);
  expanded_option.weapon_skill_type = a2opt(tp_weapon_skill_type);
  expanded_option.weapon_skill_lv = a2opt(tp_weapon_skill_lv);
}
expand_option_str();  // 即実行

// 指定されたクラス(String)の中にいくつ要素があるかを数える
var count_elem_in_class = (cls_str) => ( $(cls_str).length );

var get_weapon_amount = () => ( count_elem_in_class(".weapon_tr") );
var get_summon_amount = () => ( count_elem_in_class(".summon_tr") );
var get_friend_amount = () => ( count_elem_in_class(".friend_tr") );



// 武器表の操作関数群

function weapon_insert(obj) {
  var tr_tag = `
  <tr class="weapon_tr">
  <td><input type="checkbox" class="weapon_lock" value="lock"></td>
  <td><input type="checkbox" onChange="update()" class="weapon_select" value="select"></td>
  <td><input type="text" class="weapon_name width150" onChange="update()"></td>
  <td><input type="text" class="weapon_atk width50" onChange="update()"></td>
  <td>
  <select onchange="update()" class="weapon_kind">
  ${expanded_option.weapon_kind}
  </select>
  </td>
  <td>
  <select onchange="update()" class="weapon_skill_type1">
  ${expanded_option.weapon_skill_type}
  </select>
  </td>
  <td>
  <select onchange="update()" class="weapon_skill_type2">
  ${expanded_option.weapon_skill_type}
  </select>
  </td>
  <td>
  <select onchange="update()" class="weapon_skill_lv">
  ${expanded_option.weapon_skill_lv}
  </select>
  </td>
  <td>
  <input type="button" id="up" value="▲" onClick="sort_up(this)">
  <input type="button" id="down" value="▼" onClick="sort_down(this)">
  <input type="button" id="ins" value="+" onClick="weapon_insert(this)">
  <input type="button" id="del" value="-" onClick="weapon_delete(this)">
  </td>
  </tr>
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


// 召喚表の操作関数群

function summon_insert(obj) {
  var tr_tag = `
  <tr class="summon_tr">
  <td><input type="checkbox" class="summon_lock" value="lock"></td>
  <td><input type="checkbox" onChange="update()" class="summon_select" value="select"></td>
  <td><input type="text" class="summon_name width150" onChange="update()"></td>
  <td><input type="text" class="summon_atk width50" onChange="update()"></td>
  <td>
  <select onchange="update()" class="summon_kind1">
  ${expanded_option.summon_kind}
  </select>
  </td>
  <td><input type="text" class="summon_percent1 width25" onChange="update()">%</td>
  <select onchange="update()" class="summon_kind2">
  ${expanded_option.summon_kind}
  </select>
  </td>
  <td><input type="text" class="summon_percent2 width25" onChange="update()">%</td>
  <td>
  <input type="button" id="up" value="▲" onClick="sort_up(this)">
  <input type="button" id="down" value="▼" onClick="sort_down(this)">
  <input type="button" id="ins" value="+" onClick="summon_insert(this)">
  <input type="button" id="del" value="-" onClick="summon_delete(this)">
  </td>
  </tr>
  `;

  var amount = get_weapon_amount();

  if (amount >= 20) return;

  if (obj === null) {
    $("#weapon_table").append(tr_tag);
  } else {
    $(obj).parents('tr').eq(0).after(tr_tag);
  }
}
