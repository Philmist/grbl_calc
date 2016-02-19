// vim: sts=2 sw=2 ts=2 expandtab
window.onload = function(){
  init();
  update();
}

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

  if (obj == null) {
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

  if (obj == null) {
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

  if (obj == null) {
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
    if ( $(".weapon_select").eq(i).prop("checked") == true ) {
      if (use_weapon < 10) {
        select_weapon[use_weapon] = i;
        use_weapon++;
      }
    }
  }

  var use_summon = 0;
  for (var i=0; i<summon_amount; i++) {
    if ( $(".summon_select").eq(i).prop("checked") == true ) {
      if (use_summon < 5) {
        select_summon[use_summon] = i;
        use_summon++;
      }
    }
  }

  var use_friend = 0;
  for (var i=0; i<friend_amount; i++) {
    if ( $(".friend_select").eq(i).prop("checked") == true ) {
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

      if (skill_level == 0) continue;

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
