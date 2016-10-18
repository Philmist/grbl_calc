// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 武器の名前とそのパラメータを記した一覧
 * 武器名のオートコンプリートに使う
 */

const WEAPON_LIST = [
  {
    type: "剣",
    weapons: [
      {
        name: "ダーインスレイブ",
        skill: ["kj1"],
        atk: 2580,
        type: "sword",
        cosmos: false
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
