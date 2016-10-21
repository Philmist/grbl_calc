// vim: set sw=2 sts=2 ts=2 expandtab

/*
 * ジョブの基礎的な情報を記した
 * 定数
 */

let job_data = {
  "fighter": {  // 職の英語名(計算機内部で参照される)
    "specialty" : ["sword", "axe"],  // 武器の英語名(計算機内部と表示で参照される)
    "atk_bonus" : 1500,  // 攻撃力ボーナス
  },
  "knight": {
    "specialty" : ["sword", "spear"],
    "atk_bonus" : 0,
  },
  "priest": {
    "specialty" : ["stuff", "spear"],
    "atk_bonus" : 0,
  }
};

export default job_data;
