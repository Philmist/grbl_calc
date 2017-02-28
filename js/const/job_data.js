// vim: set sw=2 sts=2 ts=2 expandtab

/*
 * ジョブの基礎的な情報を記した
 * 定数
 */

let job_data = {
  "Fighter": {  // 職の英語名(計算機内部で参照される)
    "specialty" : ["sword", "axe"],  // 武器の英語名(計算機内部と表示で参照される)
    "atk_value" : 1500,  // 攻撃力ボーナス(値)
    "atk_rate"  : 0,  // 攻撃力ボーナス(％)
  },
  "Knight": {
    "specialty" : ["sword", "spear"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Priest": {
    "specialty" : ["stuff", "spear"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Wizard": {
    "specialty" : ["stuff", "dagger"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Thief": {
    "specialty" : ["dagger", "gun"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Enhancer": {
    "specialty" : ["sword", "dagger"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Grappler": {
    "specialty" : ["knuckle", "knuckle"],
    "atk_value" : 1000,
    "atk_rate"  : 0,
  },
  "Ranger": {
    "specialty" : ["bow", "gun"],
    "atk_value" : 500,
    "atk_rate"  : 0,
  },
  "Harpist": {
    "specialty" : ["instrument", "dagger"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Lancer": {
    "specialty" : ["spear", "axe"],
    "atk_value" : 0,
    "atk_rate"  : 5,
  },
  "Warrior": {
    "specialty" : ["sword", "axe"],
    "atk_value" : 3000,
    "atk_rate"  : 0,
  },
  "Fortress": {
    "specialty" : ["sword", "spear"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Cleric": {
    "specialty" : ["stuff", "spear"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Sorcerer": {
    "specialty" : ["stuff", "dagger"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Raider": {
    "specialty" : ["dagger", "gun"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "ArcanaSword": {
    "specialty" : ["sword", "dagger"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "KungFu": {
    "specialty" : ["knuckle", "knuckle"],
    "atk_value" : 2000,
    "atk_rate"  : 0,
  },
  "Marksman": {
    "specialty" : ["bow", "gun"],
    "atk_value" : 750,
    "atk_rate"  : 0,
  },
  "Minstrel": {
    "specialty" : ["instrument", "dagger"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Dragoon": {
    "specialty" : ["spear", "axe"],
    "atk_value" : 1000,
    "atk_rate"  : 0,
  },
  "WeaponMaster": {
    "specialty" : ["sword", "axe"],
    "atk_value" : 4500,
    "atk_rate"  : 0,
  },
  "HolySaber": {
    "specialty" : ["sword", "spear"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Bishop": {
    "specialty" : ["stuff", "spear"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Hermit": {
    "specialty" : ["stuff", "dagger"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Hawkeye": {
    "specialty" : ["dagger", "gun"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "DarkFencer": {
    "specialty" : ["sword", "dagger"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Ogre": {
    "specialty" : ["knuckle", "knuckle"],
    "atk_value" : 2000,
    "atk_rate"  : 0,
  },
  "Sidewinder": {
    "specialty" : ["bow", "gun"],
    "atk_value" : 1000,
    "atk_rate"  : 0,
  },
  "Superstar": {
    "specialty" : ["instrument", "dagger"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Valkyrie": {
    "specialty" : ["spear", "axe"],
    "atk_value" : 500,
    "atk_rate"  : 0,
  },
  "Berserk": {
    "specialty" : ["sword", "axe"],
    "atk_value" : 6000,
    "atk_rate"  : 0,
  },
  "Sparta": {
    "specialty" : ["stuff", "spear"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Sage": {
    "specialty" : ["sword", "spear"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Warlock": {
    "specialty" : ["stuff", "dagger"],
    "atk_value" : 2000,
    "atk_rate"  : 0,
  },
  "Gizoku": {
    "specialty" : ["dagger", "gun"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "ChaosRuler": {
    "specialty" : ["sword", "dagger"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Wrestler": {
    "specialty" : ["knuckle", "knuckle"],
    "atk_value" : 2000,
    "atk_rate"  : 0,
  },
  "Alchemist": {
    "specialty" : ["dagger", "gun"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Ninja": {
    "specialty" : ["blade", "knuckle"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Samurai": {
    "specialty" : ["blade", "bow"],
    "atk_value" : 3000,
    "atk_rate"  : 0,
  },
  "SwordMaster": {
    "specialty" : ["sword", "blade"],
    "atk_value" : 1500,
    "atk_rate"  : 0,
  },
  "Gunslinger": {
    "specialty" : ["gun", "gun"],
    "atk_value" : 1000,
    "atk_rate"  : 0,
  },
  "Mystic": {
    "specialty" : ["stuff", "stuff"],
    "atk_value" : 0,
    "atk_rate"  : 0,
  },
  "Assassin": {
    "specialty" : ["dagger", "dagger"],
    "atk_value" : 1000,
    "atk_rate"  : 0,
  }
};

export default job_data;
