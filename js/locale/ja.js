// vim: sts=2 sw=2 ts=2 expandtab

let text = {
  zenith: {
    header: {
      attack: "攻撃力",
      weapon1: "得意武器1",
      weapon2: "得意武器2",
      attribute: "属性攻撃力"
    },
    list: {
      zero: "無し",
      one: "★",
      two: "★★",
      three: "★★★",
      four: "★★★★",
      five: "★★★★★",
      six: "★★★★★★"
    }
  },
  weapon: {
    title: "武器",
    header: {
      list: "順",
      select: "選",
      lock: "鍵",
      name: "名前",
      value: "攻撃力",
      plus: "＋",
      type: "種別",
      skill1: "スキル1",
      skill2: "スキル2",
      lv: "LV",
      add_del: "追加・削除"
    },
    kind: {
      sword: "剣",
      dagger: "短剣",
      spear: "槍",
      axe: "斧",
      stuff: "杖",
      gun: "銃",
      knuckle: "格闘",
      bow: "弓",
      instrument: "楽器",
      blade: "刀"
    },
    slot: {
      normal: "通常",
      magna: "方陣",
      ex: "ＥＸ",
      unknown: "ｱﾝﾉｳﾝ",
      baha: "バハ",
      cosmos: "ｺｽﾓｽ"
    },
    skill_normal: {
      none: "無し",
      kj1: "攻刃(小)",
      kj2: "攻刃(中)",
      kj3: "攻刃(大)",
      kj4: "攻刃II",
      bw1: "背水(小)",
      bw2: "背水(中)",
      bw3: "背水(大)",
      km: "神威",
      ks: "渾身",
      atk: "攻",
      hp: "攻HP"
    },
    skill_magna: {
      none: "無し",
      kj1: "攻刃(小)",
      kj2: "攻刃(中)",
      kj3: "攻刃(大)",
      kj4: "攻刃II",
      bw1: "背水(小)",
      bw2: "背水(中)",
      bw3: "背水(大)",
      km: "神威",
      ks: "渾身",
    },
    skill_ex: {
      none: "無し",
      kj1: "攻刃(小)",
      kj2: "攻刃(中)",
      kj3: "攻刃(大)",
      kj4: "攻刃II",
      bw1: "背水(小)",
      bw2: "背水(中)",
      bw3: "背水(大)",
      km: "神威",
      ks: "渾身",
    },
    skill_baha: {
      none: "無し",
      atk: "攻",
      hp: "攻HP"
    },
    skill_cosmos: {
      normal: "通常",
      at: "AT"
    },
    lv: {
      0: "無",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15"
    }
  },
  system: {
    slot: "スロット",
    name: "名前",
    saveload_header: "保存/呼出",
    save: "保存",
    load: "呼出"
  },
  summon: {
    header: {
      list: "順",
      select: "選",
      lock: "鍵",
      name: "召喚名",
      value: "攻撃力",
      type1: "加護1",
      type2: "加護2",
      add_del: "追加・削除"
    },
    type: {
      none: "無し",
      attribute: "属性",
      character: "キャラ",
      magna: "マグナ",
      unknown: "ｱﾝﾉｳﾝ",
      zeus: "ｾﾞｳｽ枠"
    },
    title: "召喚獣"
  },
  friend: {
    title: "フレンド召喚"
  },
  calculator: {
    result: {
      title: "結果",
      basic_atk: "基本値",
      showed_atk: "表示攻撃力",
      total_atk: "総合攻撃力"
    },
    title: "グランブルーファンタジー攻撃力計算機（新）"
  },
  basic_information: {
    job: {
      type: {
        "fighter": "ファイター",
        "knight": "ナイト",
        "priest":  "プリースト"
      },
      title: "ジョブ"
    },
    rank: {
      title: "ランク"
    },
    ship_bonus: {
      title: "騎空艇補正"
    },
    attribute_bonus: {
      title: "属性補正",
      good: "有利",
      bad: "不利",
      normal: "無し"
    },
    hp_percent: {
      title: "HP/MAXHP"
    },
    atk_bonus: {
      title: "発動中の<br />攻撃力ボーナス"
    },
    title: "基本情報"
  }
};

export default text;
