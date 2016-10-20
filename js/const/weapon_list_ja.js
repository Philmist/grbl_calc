// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 武器の名前とそのパラメータを記した一覧
 * 武器名のオートコンプリートに使う
 */

const WEAPON_LIST = [  // 配列で表記する
  {  // それぞれの武器単体はオブジェクト
    type: "剣",  // 項目名(武器種別)を表記される通りに
    weapons: [  // それぞれの武器も配列で
      {  // 武器1つも配列のオブジェクト
        name: "ダーインスレイブ",  // 武器名(表記通り)
        skill: ["kj1"],  // スキル名(内部表記-ここでは攻刃小)
        atk: 2580,  // 最大攻撃力(この数値が自動的に入力される)
        type: "sword",  // 武器種別の内部表記
        cosmos: false  // この武器がコスモス武器か否か
      },
      {
        name: "[吸血剣]ダーインスレイブ",
        skill: ["kj1"],
        atk: 3010,
        type: "sword",
        cosmos: false
      }
    ]
  },
  {
    type: "槍",
    weapons: [
      {
        name: "ピラム",
        skill: ["kj1"],
        atk: 2240,
        type: "spear",
        cosmos: false
      },
      {
        name: "[烈伐]ピラム",
        skill: ["kj1"],
        atk: 2610,
        type: "spear",
        cosmos: false
      }
    ]
  }
];

export default WEAPON_LIST;
