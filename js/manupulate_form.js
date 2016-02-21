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
