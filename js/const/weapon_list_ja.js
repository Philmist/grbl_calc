const WEAPON_LIST = [
  {
    "weapons": [
      {
        "attribute": "土",
        "type": "spear",
        "name": "[地槍]パイク",
        "min_atk": 57,
        "skill": [],
        "min_hp": 8,
        "max_atk": 495,
        "rarelity": "N",
        "max_hp": 57,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[炎槍]コルセスカ",
        "min_atk": 54,
        "skill": [],
        "min_hp": 8,
        "max_atk": 510,
        "rarelity": "N",
        "max_hp": 54,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[嵐槍]ブロンズハルベルト",
        "min_atk": 49,
        "skill": [],
        "min_hp": 7,
        "max_atk": 455,
        "rarelity": "N",
        "max_hp": 49,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[地槍]スチールパルチザン",
        "min_atk": 56,
        "skill": [],
        "min_hp": 8,
        "max_atk": 480,
        "rarelity": "N",
        "max_hp": 56,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[清槍]アイアンスピア",
        "min_atk": 55,
        "skill": [],
        "min_hp": 7,
        "max_atk": 465,
        "rarelity": "N",
        "max_hp": 55,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[清槍]ブロンズスピア",
        "min_atk": 52,
        "skill": [],
        "min_hp": 7,
        "max_atk": 440,
        "rarelity": "N",
        "max_hp": 52,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[清槍]スピア",
        "min_atk": 54,
        "skill": [],
        "min_hp": 7,
        "max_atk": 450,
        "rarelity": "N",
        "max_hp": 54,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[炎槍]グレイブ",
        "min_atk": 50,
        "skill": [],
        "min_hp": 7,
        "max_atk": 470,
        "rarelity": "N",
        "max_hp": 50,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[炎槍]ブロンズグレイブ",
        "min_atk": 48,
        "skill": [],
        "min_hp": 7,
        "max_atk": 460,
        "rarelity": "N",
        "max_hp": 48,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[地槍]ブロンズパルチザン",
        "min_atk": 51,
        "skill": [],
        "min_hp": 7,
        "max_atk": 445,
        "rarelity": "N",
        "max_hp": 51,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[炎槍]アイアングレイブ",
        "min_atk": 51,
        "skill": [],
        "min_hp": 7,
        "max_atk": 485,
        "rarelity": "N",
        "max_hp": 51,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[嵐槍]アイアンハルベルト",
        "min_atk": 52,
        "skill": [],
        "min_hp": 7,
        "max_atk": 480,
        "rarelity": "N",
        "max_hp": 52,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[地槍]アイアンパルチザン",
        "min_atk": 54,
        "skill": [],
        "min_hp": 7,
        "max_atk": 470,
        "rarelity": "N",
        "max_hp": 54,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[清槍]スチールスピア",
        "min_atk": 57,
        "skill": [],
        "min_hp": 8,
        "max_atk": 475,
        "rarelity": "N",
        "max_hp": 57,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[炎槍]スチールグレイブ",
        "min_atk": 53,
        "skill": [],
        "min_hp": 8,
        "max_atk": 495,
        "rarelity": "N",
        "max_hp": 53,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[嵐槍]スチールハルベルト",
        "min_atk": 54,
        "skill": [],
        "min_hp": 8,
        "max_atk": 490,
        "rarelity": "N",
        "max_hp": 54,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[蒼銀槍]ミスリルハルベルト",
        "min_atk": 78,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 710,
        "rarelity": "R",
        "max_hp": 78,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[戦歴]ハルベルト",
        "min_atk": 115,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1040,
        "rarelity": "R",
        "max_hp": 115,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[一黙]メザラク",
        "min_atk": 82,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 715,
        "rarelity": "R",
        "max_hp": 82,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[業焔]ファイアグレイブ",
        "min_atk": 117,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 17,
        "max_atk": 1065,
        "rarelity": "R",
        "max_hp": 117,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[巨威]クーゼ",
        "min_atk": 111,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1020,
        "rarelity": "R",
        "max_hp": 111,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[蒼銀槍]ミスリルグレイブ",
        "min_atk": 77,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 715,
        "rarelity": "R",
        "max_hp": 77,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[蒼銀槍]ミスリルスピア",
        "min_atk": 81,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 695,
        "rarelity": "R",
        "max_hp": 81,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[蒼銀槍]ミスリルパルチザン",
        "min_atk": 80,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 700,
        "rarelity": "R",
        "max_hp": 80,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[弧空]ランデベヴェ",
        "min_atk": 115,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1040,
        "rarelity": "R",
        "max_hp": 115,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[疾旋]風精の鉤爪槍",
        "min_atk": 76,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 12,
        "max_atk": 695,
        "rarelity": "R",
        "max_hp": 76,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[闇望]シャドウスピア",
        "min_atk": 79,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 13,
        "max_atk": 755,
        "rarelity": "R",
        "max_hp": 79,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[焔突]フレイムハルベルト",
        "min_atk": 122,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1110,
        "rarelity": "R",
        "max_hp": 122,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[地護]アースハルベルト",
        "min_atk": 120,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1050,
        "rarelity": "R",
        "max_hp": 120,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[双貫]アクアンキラー",
        "min_atk": 118,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 21,
        "max_atk": 1025,
        "rarelity": "R",
        "max_hp": 118,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[黒槍]ナイトホーン",
        "min_atk": 109,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1030,
        "rarelity": "R",
        "max_hp": 109,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[迷彩]ギリーフォーク",
        "min_atk": 118,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1060,
        "rarelity": "R",
        "max_hp": 118,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[白銀槍]シルバーポール",
        "min_atk": 121,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1045,
        "rarelity": "R",
        "max_hp": 121,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[天使]エンジェルスピア",
        "min_atk": 40,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 40,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[雷光牙]ヴァジュランダ",
        "min_atk": 265,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 1640,
        "rarelity": "SR",
        "max_hp": 179,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[凪命]蜻蛉切",
        "min_atk": 270,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1600,
        "rarelity": "SR",
        "max_hp": 178,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[革抗]パルチザン",
        "min_atk": 260,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1620,
        "rarelity": "SR",
        "max_hp": 184,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[飛閃]シューラヴァラ",
        "min_atk": 275,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1650,
        "rarelity": "SR",
        "max_hp": 186,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[]ロンギヌス",
        "min_atk": 190,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1220,
        "rarelity": "SR",
        "max_hp": 137,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[海嘯槍]レヴィアスパイン",
        "min_atk": 195,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1285,
        "rarelity": "SR",
        "max_hp": 147,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[海叉]トライデント",
        "min_atk": 255,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1610,
        "rarelity": "SR",
        "max_hp": 185,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[鳳凰槍]不死鳥の爪槍",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1260,
        "rarelity": "SR",
        "max_hp": 138,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[極芸]ナーヴァル",
        "min_atk": 285,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 1615,
        "rarelity": "SR",
        "max_hp": 175,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[砂槍]砂城の尖塔",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1340,
        "rarelity": "SR",
        "max_hp": 152,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[戦国]摩阿姫薙刀",
        "min_atk": 215,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1350,
        "rarelity": "SR",
        "max_hp": 150,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[輝騎槍]シュヴァリエスピア",
        "min_atk": 205,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1295,
        "rarelity": "SR",
        "max_hp": 145,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[蛇神槍]ミドガルドの大槍",
        "min_atk": 195,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1270,
        "rarelity": "SR",
        "max_hp": 144,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[魚突]アルバコアノーズ",
        "min_atk": 220,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1275,
        "rarelity": "SR",
        "max_hp": 137,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[漁魂]ハープーン",
        "min_atk": 215,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1335,
        "rarelity": "SR",
        "max_hp": 153,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[偽明]朽ち果てた槍",
        "min_atk": 1,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 1,
        "max_atk": 96,
        "rarelity": "SR",
        "max_hp": 30,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[怪緑針]アンノウンニードル",
        "min_atk": 185,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1225,
        "rarelity": "SR",
        "max_hp": 155,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[融撃]フレアグレイブ",
        "min_atk": 275,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 1605,
        "rarelity": "SR",
        "max_hp": 177,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[竜尖]竜鱗の槍",
        "min_atk": 210,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1285,
        "rarelity": "SR",
        "max_hp": 141,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[殲掃]スウィーピングモップ",
        "min_atk": 270,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1645,
        "rarelity": "SR",
        "max_hp": 187,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[狂輝槍]マギ・ディケイデッドスピア",
        "min_atk": 200,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1255,
        "rarelity": "SR",
        "max_hp": 141,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[祖龍槍]バハムートスピア",
        "min_atk": 265,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1545,
        "rarelity": "SR",
        "max_hp": 167,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[蒼龍]ドラグーンランス",
        "min_atk": 225,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1350,
        "rarelity": "SR",
        "max_hp": 150,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[鋼電槍]エレクトロフォーク",
        "min_atk": 200,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1270,
        "rarelity": "SR",
        "max_hp": 143,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[炙叩]藁焼き",
        "min_atk": 190,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1245,
        "rarelity": "SR",
        "max_hp": 143,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[]槍烏賊",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1435,
        "rarelity": "SR",
        "max_hp": 105,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[青緑槍]エメラルドスピア",
        "min_atk": 205,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1260,
        "rarelity": "SR",
        "max_hp": 140,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[幽幻]ゴーストツリー",
        "min_atk": 245,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1400,
        "rarelity": "SR",
        "max_hp": 160,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[大漁魂]チタンハープーン",
        "min_atk": 265,
        "skill": [
          {
            "type": "bw2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1640,
        "rarelity": "SR",
        "max_hp": 188,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[]レイジングハルバード",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1630,
        "rarelity": "SR",
        "max_hp": 181,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[刺爪]鱈場",
        "min_atk": 225,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1295,
        "rarelity": "SR",
        "max_hp": 139,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[青閃光]ブラウジャベリン",
        "min_atk": 200,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1310,
        "rarelity": "SR",
        "max_hp": 134,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[]ビッグフォーク",
        "min_atk": 275,
        "skill": [
          {
            "type": "bw2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1675,
        "rarelity": "SR",
        "max_hp": 190,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[古暴槍]タイラントフォーク",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1255,
        "rarelity": "SR",
        "max_hp": 143,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[]バリアントスパイク",
        "min_atk": 280,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1705,
        "rarelity": "SR",
        "max_hp": 193,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[獣突槍]竹槍",
        "min_atk": 190,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1240,
        "rarelity": "SR",
        "max_hp": 143,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[渦々槍]マルメテル・クシ",
        "min_atk": 195,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1330,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[猛炎槍]スヴァルハルバード",
        "min_atk": 205,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1255,
        "rarelity": "SR",
        "max_hp": 140,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[大天使]アークエンジェルスピア",
        "min_atk": 10,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "SR",
        "max_hp": 40,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[猛振]クレティネ",
        "min_atk": 385,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 43,
        "max_atk": 2305,
        "rarelity": "SSR",
        "max_hp": 259,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "ピラム",
        "min_atk": 380,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2240,
        "rarelity": "SSR",
        "max_hp": 249,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[烈伐]ピラム",
        "min_atk": 380,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2610,
        "rarelity": "SSR",
        "max_hp": 291,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[絶覇]ブリューナク",
        "min_atk": 395,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 41,
        "max_atk": 2315,
        "rarelity": "SSR",
        "max_hp": 257,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "グラーシーザー",
        "min_atk": 404,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 2325,
        "rarelity": "SSR",
        "max_hp": 255,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[仇閃]グラーシーザー",
        "min_atk": 404,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "bw2",
            "slot": "normal"
          }
        ],
        "min_hp": 39,
        "max_atk": 2810,
        "rarelity": "SSR",
        "max_hp": 309,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[幻逸]グランテピエ",
        "min_atk": 390,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 42,
        "max_atk": 2310,
        "rarelity": "SSR",
        "max_hp": 258,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "ウェルギリウス",
        "min_atk": 290,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 1855,
        "rarelity": "SSR",
        "max_hp": 205,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[氷冥槍]ウェルギリウス",
        "min_atk": 290,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 35,
        "max_atk": 2170,
        "rarelity": "SSR",
        "max_hp": 239,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[密智槍]ネフティスフォーク",
        "min_atk": 300,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1855,
        "rarelity": "SSR",
        "max_hp": 207,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "イフリートハルベルト",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1860,
        "rarelity": "SSR",
        "max_hp": 206,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[灼業槍]イフリートハルベルト",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2170,
        "rarelity": "SSR",
        "max_hp": 241,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "ティアマトグレイブ・マグナ",
        "min_atk": 340,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2085,
        "rarelity": "SSR",
        "max_hp": 233,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[吼嵐槍]ティアマトグレイブ・マグナ",
        "min_atk": 340,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2500,
        "rarelity": "SSR",
        "max_hp": 280,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[黎明]一伐槍",
        "min_atk": 370,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 42,
        "max_atk": 2235,
        "rarelity": "SSR",
        "max_hp": 251,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[彩命]ガルガンチュア",
        "min_atk": 380,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 44,
        "max_atk": 2300,
        "rarelity": "SSR",
        "max_hp": 260,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[水神戟]トリアイナ",
        "min_atk": 290,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 1870,
        "rarelity": "SSR",
        "max_hp": 213,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "セレストホーン・マグナ",
        "min_atk": 355,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2100,
        "rarelity": "SSR",
        "max_hp": 230,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[幽絶槍]セレストホーン・マグナ",
        "min_atk": 355,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2450,
        "rarelity": "SSR",
        "max_hp": 269,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[聖守槍]ローゼンメイデン",
        "min_atk": 410,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2360,
        "rarelity": "SSR",
        "max_hp": 260,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[黎明]一伐槍・真",
        "min_atk": 385,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 43,
        "max_atk": 2300,
        "rarelity": "SSR",
        "max_hp": 260,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[未之刻]天干地支刀・未之飾",
        "min_atk": 415,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 41,
        "max_atk": 2400,
        "rarelity": "SSR",
        "max_hp": 264,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[禍雷槍]雷神矛",
        "min_atk": 300,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1850,
        "rarelity": "SSR",
        "max_hp": 208,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[真尖軍]ロムルスの槍",
        "min_atk": 354,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2189,
        "rarelity": "SSR",
        "max_hp": 246,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[祖龍槍]バハムートスピア・ノヴム",
        "min_atk": 380,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2260,
        "rarelity": "SSR",
        "max_hp": 248,
        "type_name": "槍"
      },
      {
        "attribute": "土",
        "type": "spear",
        "name": "[蒐索槍]アワリティアスピア",
        "min_atk": 295,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 1845,
        "rarelity": "SSR",
        "max_hp": 209,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[己焔槍]ルーン",
        "min_atk": 400,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "bw1",
            "slot": "normal"
          }
        ],
        "min_hp": 42,
        "max_atk": 2350,
        "rarelity": "SSR",
        "max_hp": 262,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "青竜牙矛",
        "min_atk": 295,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1800,
        "rarelity": "SSR",
        "max_hp": 201,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[覇颶]青竜牙矛",
        "min_atk": 295,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2180,
        "rarelity": "SSR",
        "max_hp": 240,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[真咢]竜槍",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1890,
        "rarelity": "SSR",
        "max_hp": 209,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[慶賀槍]貫き門松",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 1860,
        "rarelity": "SSR",
        "max_hp": 204,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[錆骸槍]デスシンボル",
        "min_atk": 295,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 1895,
        "rarelity": "SSR",
        "max_hp": 217,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "レヴィアンスピア・マグナ",
        "min_atk": 325,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2070,
        "rarelity": "SSR",
        "max_hp": 236,
        "type_name": "槍"
      },
      {
        "attribute": "水",
        "type": "spear",
        "name": "[海叫槍]レヴィアンスピア・マグナ",
        "min_atk": 325,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2420,
        "rarelity": "SSR",
        "max_hp": 275,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[樹封槍]オールド・ナラクーバラ",
        "min_atk": 350,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2137,
        "rarelity": "SSR",
        "max_hp": 239,
        "type_name": "槍"
      },
      {
        "attribute": "風",
        "type": "spear",
        "name": "[]ナラクーバラ",
        "min_atk": 350,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj3",
            "slot": "normal"
          }
        ],
        "min_hp": 38,
        "max_atk": 2137,
        "rarelity": "SSR",
        "max_hp": 239,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[祖龍槍]バハムートスピア・フツルス",
        "min_atk": 380,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2640,
        "rarelity": "SSR",
        "max_hp": 290,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[律導槍]ランス・オブ・コスモス",
        "min_atk": 364,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 41,
        "max_atk": 2247,
        "rarelity": "SSR",
        "max_hp": 253,
        "type_name": "槍"
      },
      {
        "attribute": "闇",
        "type": "spear",
        "name": "[狂闘]双竜槍",
        "min_atk": 415,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2395,
        "rarelity": "SSR",
        "max_hp": 263,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[]クリスタルルーン",
        "min_atk": 380,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "bw1",
            "slot": "normal"
          }
        ],
        "min_hp": 43,
        "max_atk": 2295,
        "rarelity": "SSR",
        "max_hp": 260,
        "type_name": "槍"
      },
      {
        "attribute": "光",
        "type": "spear",
        "name": "[暁煌槍]グングニル",
        "min_atk": 345,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 2132,
        "rarelity": "SSR",
        "max_hp": 240,
        "type_name": "槍"
      },
      {
        "attribute": "火",
        "type": "spear",
        "name": "[劫炎槍]エリクトニオス",
        "min_atk": 355,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2142,
        "rarelity": "SSR",
        "max_hp": 238,
        "type_name": "槍"
      }
    ],
    "type": "槍"
  },
  {
    "weapons": [
      {
        "attribute": "水",
        "type": "instrument",
        "name": "[清奏]メイプルハープ",
        "min_atk": 52,
        "skill": [],
        "min_hp": 15,
        "max_atk": 455,
        "rarelity": "N",
        "max_hp": 52,
        "type_name": "楽器"
      },
      {
        "attribute": "火",
        "type": "instrument",
        "name": "[誘音]ラミアの竪琴",
        "min_atk": 105,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 980,
        "rarelity": "R",
        "max_hp": 105,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[夜静鈴]ナイトベル",
        "min_atk": 103,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 990,
        "rarelity": "R",
        "max_hp": 103,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[涼夜音]ナイトエアーベル",
        "min_atk": 104,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 28,
        "max_atk": 985,
        "rarelity": "R",
        "max_hp": 104,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[]銅鈴",
        "min_atk": 102,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 985,
        "rarelity": "R",
        "max_hp": 102,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[天使]エンジェルハープ",
        "min_atk": 40,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 40,
        "type_name": "楽器"
      },
      {
        "attribute": "風",
        "type": "instrument",
        "name": "[想奏]吟遊詩人の竪琴",
        "min_atk": 252,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 46,
        "max_atk": 1485,
        "rarelity": "SR",
        "max_hp": 161,
        "type_name": "楽器"
      },
      {
        "attribute": "風",
        "type": "instrument",
        "name": "[祓音]白金の竪琴",
        "min_atk": 212,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 1300,
        "rarelity": "SR",
        "max_hp": 140,
        "type_name": "楽器"
      },
      {
        "attribute": "土",
        "type": "instrument",
        "name": "[麗琴]アタナシウス",
        "min_atk": 250,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 50,
        "max_atk": 1530,
        "rarelity": "SR",
        "max_hp": 169,
        "type_name": "楽器"
      },
      {
        "attribute": "風",
        "type": "instrument",
        "name": "[幽月]ストラヴァリア",
        "min_atk": 260,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 48,
        "max_atk": 1540,
        "rarelity": "SR",
        "max_hp": 167,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[百煌琴]ヘカトンケイルハープ",
        "min_atk": 190,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 1210,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[妖奏]ドラキュラハープ",
        "min_atk": 275,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 45,
        "max_atk": 1555,
        "rarelity": "SR",
        "max_hp": 164,
        "type_name": "楽器"
      },
      {
        "attribute": "土",
        "type": "instrument",
        "name": "[古尊琴]バビロンの竪琴",
        "min_atk": 185,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 1205,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[聖奏]ホーリーチャンター",
        "min_atk": 255,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 49,
        "max_atk": 1535,
        "rarelity": "SR",
        "max_hp": 168,
        "type_name": "楽器"
      },
      {
        "attribute": "火",
        "type": "instrument",
        "name": "[竜奏]竜髭の弦",
        "min_atk": 205,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 1235,
        "rarelity": "SR",
        "max_hp": 131,
        "type_name": "楽器"
      },
      {
        "attribute": "風",
        "type": "instrument",
        "name": "[禍風琴]風司の琴",
        "min_atk": 195,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 1215,
        "rarelity": "SR",
        "max_hp": 131,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[怪緑琴]アンノウンハープ",
        "min_atk": 195,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 1215,
        "rarelity": "SR",
        "max_hp": 131,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[墜楽]朽ち果てた竪琴",
        "min_atk": 1,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 1,
        "max_atk": 96,
        "rarelity": "SR",
        "max_hp": 30,
        "type_name": "楽器"
      },
      {
        "attribute": "火",
        "type": "instrument",
        "name": "[極愛琴]バレンタインハープ",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 1255,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[祖龍琴]バハムートハープ",
        "min_atk": 285,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1575,
        "rarelity": "SR",
        "max_hp": 161,
        "type_name": "楽器"
      },
      {
        "attribute": "水",
        "type": "instrument",
        "name": "[癒樂]アクアリウムハープ",
        "min_atk": 245,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 51,
        "max_atk": 1525,
        "rarelity": "SR",
        "max_hp": 170,
        "type_name": "楽器"
      },
      {
        "attribute": "風",
        "type": "instrument",
        "name": "[渇欲琴]マモーナスハープ",
        "min_atk": 200,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 1230,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[輝影琴]ヴェセラゴハープ",
        "min_atk": 195,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 1225,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "楽器"
      },
      {
        "attribute": "土",
        "type": "instrument",
        "name": "[盾琴]ハープロン",
        "min_atk": 180,
        "skill": [
          {
            "type": "bw2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 1165,
        "rarelity": "SR",
        "max_hp": 137,
        "type_name": "楽器"
      },
      {
        "attribute": "風",
        "type": "instrument",
        "name": "[]オルフェウス",
        "min_atk": 190,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 1180,
        "rarelity": "SR",
        "max_hp": 126,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[鋼電琴]エレクトロハープ",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1225,
        "rarelity": "SR",
        "max_hp": 127,
        "type_name": "楽器"
      },
      {
        "attribute": "土",
        "type": "instrument",
        "name": "[]さざ波の砂弦",
        "min_atk": 250,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 54,
        "max_atk": 1560,
        "rarelity": "SR",
        "max_hp": 179,
        "type_name": "楽器"
      },
      {
        "attribute": "水",
        "type": "instrument",
        "name": "[魔響杖]リサウンドワンド",
        "min_atk": 170,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 1160,
        "rarelity": "SR",
        "max_hp": 130,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[オイラは]メロビィ",
        "min_atk": 175,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 1185,
        "rarelity": "SR",
        "max_hp": 125,
        "type_name": "楽器"
      },
      {
        "attribute": "風",
        "type": "instrument",
        "name": "[月樹琴]エントハープ",
        "min_atk": 196,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 1210,
        "rarelity": "SR",
        "max_hp": 130,
        "type_name": "楽器"
      },
      {
        "attribute": "火",
        "type": "instrument",
        "name": "[]マルメテル・カナデテミル",
        "min_atk": 225,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1395,
        "rarelity": "SR",
        "max_hp": 129,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[大天使]アークエンジェルハープ",
        "min_atk": 100,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 400,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "シュヴァリエハープ・マグナ",
        "min_atk": 325,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 61,
        "max_atk": 2005,
        "rarelity": "SSR",
        "max_hp": 218,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[崇騎琴]シュヴァリエハープ・マグナ",
        "min_atk": 325,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 61,
        "max_atk": 2340,
        "rarelity": "SSR",
        "max_hp": 249,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "セレストハープ・マグナ",
        "min_atk": 345,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 57,
        "max_atk": 2025,
        "rarelity": "SSR",
        "max_hp": 214,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[幽絶琴]セレストハープ・マグナ",
        "min_atk": 345,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 57,
        "max_atk": 2360,
        "rarelity": "SSR",
        "max_hp": 245,
        "type_name": "楽器"
      },
      {
        "attribute": "水",
        "type": "instrument",
        "name": "[水響]オーシャンハープ",
        "min_atk": 360,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 73,
        "max_atk": 2210,
        "rarelity": "SSR",
        "max_hp": 245,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[艶奏]九界琴",
        "min_atk": 340,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 65,
        "max_atk": 2100,
        "rarelity": "SSR",
        "max_hp": 228,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[艶奏楽]九界琴・真",
        "min_atk": 370,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 71,
        "max_atk": 2220,
        "rarelity": "SSR",
        "max_hp": 243,
        "type_name": "楽器"
      },
      {
        "attribute": "土",
        "type": "instrument",
        "name": "[夢幻音]砂城の宮樂弦",
        "min_atk": 365,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 72,
        "max_atk": 2215,
        "rarelity": "SSR",
        "max_hp": 244,
        "type_name": "楽器"
      },
      {
        "attribute": "水",
        "type": "instrument",
        "name": "[愁歎奏]ブランウェンハープ",
        "min_atk": 275,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 57,
        "max_atk": 1770,
        "rarelity": "SSR",
        "max_hp": 196,
        "type_name": "楽器"
      },
      {
        "attribute": "水",
        "type": "instrument",
        "name": "[真奏宴]ランゲレイク",
        "min_atk": 331,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 67,
        "max_atk": 2100,
        "rarelity": "SSR",
        "max_hp": 232,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[祖龍琴]バハムートハープ・ノヴム",
        "min_atk": 370,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 63,
        "max_atk": 2180,
        "rarelity": "SSR",
        "max_hp": 231,
        "type_name": "楽器"
      },
      {
        "attribute": "火",
        "type": "instrument",
        "name": "[真理焔]メビウス",
        "min_atk": 380,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 69,
        "max_atk": 2230,
        "rarelity": "SSR",
        "max_hp": 241,
        "type_name": "楽器"
      },
      {
        "attribute": "火",
        "type": "instrument",
        "name": "[伝継琴]エスカラスハープ",
        "min_atk": 295,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 53,
        "max_atk": 1790,
        "rarelity": "SSR",
        "max_hp": 192,
        "type_name": "楽器"
      },
      {
        "attribute": "風",
        "type": "instrument",
        "name": "[風妖唄]アネモイの銀琴",
        "min_atk": 320,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 59,
        "max_atk": 1950,
        "rarelity": "SSR",
        "max_hp": 211,
        "type_name": "楽器"
      },
      {
        "attribute": "風",
        "type": "instrument",
        "name": "[煌律]神授のリラ",
        "min_atk": 375,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 70,
        "max_atk": 2225,
        "rarelity": "SSR",
        "max_hp": 242,
        "type_name": "楽器"
      },
      {
        "attribute": "風",
        "type": "instrument",
        "name": "[瑞翠鈴]カエールベル",
        "min_atk": 290,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 55,
        "max_atk": 1785,
        "rarelity": "SSR",
        "max_hp": 195,
        "type_name": "楽器"
      },
      {
        "attribute": "水",
        "type": "instrument",
        "name": "[魅晶]メロディックスフィア",
        "min_atk": 365,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 74,
        "max_atk": 2245,
        "rarelity": "SSR",
        "max_hp": 249,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[凍真理]スノウリィメビウス",
        "min_atk": 370,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 70,
        "max_atk": 2210,
        "rarelity": "SSR",
        "max_hp": 242,
        "type_name": "楽器"
      },
      {
        "attribute": "土",
        "type": "instrument",
        "name": "[]オールド・ペルセウス",
        "min_atk": 322,
        "skill": [
          {
            "type": "kj1",
            "slot": "magna"
          },
          {
            "type": "kj2",
            "slot": "magna"
          }
        ],
        "min_hp": 65,
        "max_atk": 2044,
        "rarelity": "SSR",
        "max_hp": 226,
        "type_name": "楽器"
      },
      {
        "attribute": "土",
        "type": "instrument",
        "name": "[]ペルセウス",
        "min_atk": 322,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          },
          {
            "type": "kj2",
            "slot": "normal"
          }
        ],
        "min_hp": 65,
        "max_atk": 2044,
        "rarelity": "SSR",
        "max_hp": 226,
        "type_name": "楽器"
      },
      {
        "attribute": "闇",
        "type": "instrument",
        "name": "[]バハムートハープ・フツルス",
        "min_atk": 370,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 63,
        "max_atk": 2545,
        "rarelity": "SSR",
        "max_hp": 264,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[律導琴]ハープ・オブ・コスモス",
        "min_atk": 351,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 67,
        "max_atk": 2165,
        "rarelity": "SSR",
        "max_hp": 236,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[黄金花]ゴールデンブロッサム",
        "min_atk": 290,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 55,
        "max_atk": 1785,
        "rarelity": "SSR",
        "max_hp": 195,
        "type_name": "楽器"
      },
      {
        "attribute": "火",
        "type": "instrument",
        "name": "朱雀翼弦",
        "min_atk": 285,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1740,
        "rarelity": "SSR",
        "max_hp": 186,
        "type_name": "楽器"
      },
      {
        "attribute": "火",
        "type": "instrument",
        "name": "[凰哭琴]朱雀翼弦",
        "min_atk": 290,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj3",
            "slot": "normal"
          }
        ],
        "min_hp": 51,
        "max_atk": 2020,
        "rarelity": "SSR",
        "max_hp": 220,
        "type_name": "楽器"
      },
      {
        "attribute": "光",
        "type": "instrument",
        "name": "[]スレイプニルシュー",
        "min_atk": 332,
        "skill": [
          {
            "type": "bw1",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 63,
        "max_atk": 2054,
        "rarelity": "SSR",
        "max_hp": 224,
        "type_name": "楽器"
      }
    ],
    "type": "楽器"
  },
  {
    "weapons": [
      {
        "attribute": "風",
        "type": "bow",
        "name": "[短弓]ショートボウ",
        "min_atk": 45,
        "skill": [],
        "min_hp": 6,
        "max_atk": 510,
        "rarelity": "N",
        "max_hp": 45,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[単弓]セルフボウ",
        "min_atk": 50,
        "skill": [],
        "min_hp": 9,
        "max_atk": 515,
        "rarelity": "N",
        "max_hp": 50,
        "type_name": "弓"
      },
      {
        "attribute": "火",
        "type": "bow",
        "name": "[蒼銀弓]ミスリルボウ",
        "min_atk": 95,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 14,
        "max_atk": 1075,
        "rarelity": "R",
        "max_hp": 95,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "[戦弓]ウォーボウ",
        "min_atk": 103,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1120,
        "rarelity": "R",
        "max_hp": 103,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[補強弓]ラップドボウ",
        "min_atk": 101,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 16,
        "max_atk": 1130,
        "rarelity": "R",
        "max_hp": 101,
        "type_name": "弓"
      },
      {
        "attribute": "火",
        "type": "bow",
        "name": "[複合弓]コンポジットボウ",
        "min_atk": 103,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 15,
        "max_atk": 1160,
        "rarelity": "R",
        "max_hp": 103,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[長弓]ロングボウ",
        "min_atk": 102,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1085,
        "rarelity": "R",
        "max_hp": 102,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "[剛弦]パワーボウ",
        "min_atk": 108,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1170,
        "rarelity": "R",
        "max_hp": 108,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "[地穿]アースボウ",
        "min_atk": 111,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1200,
        "rarelity": "R",
        "max_hp": 111,
        "type_name": "弓"
      },
      {
        "attribute": "火",
        "type": "bow",
        "name": "[継精弓]ファイアボウ",
        "min_atk": 98,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 15,
        "max_atk": 1105,
        "rarelity": "R",
        "max_hp": 98,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[天使]エンジェルボウ",
        "min_atk": 40,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 40,
        "type_name": "弓"
      },
      {
        "attribute": "火",
        "type": "bow",
        "name": "[仕掛弓]サルンガ",
        "min_atk": 300,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1745,
        "rarelity": "SR",
        "max_hp": 157,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[落涙]烏号",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 1725,
        "rarelity": "SR",
        "max_hp": 161,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[神吹]エルフィンボウ",
        "min_atk": 295,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1740,
        "rarelity": "SR",
        "max_hp": 158,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[密智弓]ネフティスボウ",
        "min_atk": 225,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1390,
        "rarelity": "SR",
        "max_hp": 126,
        "type_name": "弓"
      },
      {
        "attribute": "闇",
        "type": "bow",
        "name": "[昏征弓]シャドウボウ",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1755,
        "rarelity": "SR",
        "max_hp": 155,
        "type_name": "弓"
      },
      {
        "attribute": "火",
        "type": "bow",
        "name": "[帝月]インペリアルボウ",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1810,
        "rarelity": "SR",
        "max_hp": 162,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[杜守]翠枝の弓",
        "min_atk": 300,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 1770,
        "rarelity": "SR",
        "max_hp": 160,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "[裁考弓]裁きの弓箭",
        "min_atk": 210,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1360,
        "rarelity": "SR",
        "max_hp": 126,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[水恵弓]マナウィダンボウ",
        "min_atk": 205,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1355,
        "rarelity": "SR",
        "max_hp": 127,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "[黒麗]漆弓",
        "min_atk": 230,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1460,
        "rarelity": "SR",
        "max_hp": 135,
        "type_name": "弓"
      },
      {
        "attribute": "闇",
        "type": "bow",
        "name": "[遊獣弓]ヘルウォードボウ",
        "min_atk": 235,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1385,
        "rarelity": "SR",
        "max_hp": 121,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[水神弓]ポセイドンボウ",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1375,
        "rarelity": "SR",
        "max_hp": 129,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[落暉]紅陽弓",
        "min_atk": 215,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1365,
        "rarelity": "SR",
        "max_hp": 125,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[愁歎弓]ブランウェンボウ",
        "min_atk": 215,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1400,
        "rarelity": "SR",
        "max_hp": 131,
        "type_name": "弓"
      },
      {
        "attribute": "闇",
        "type": "bow",
        "name": "[狂審]朽ち果てた弓",
        "min_atk": 1,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 1,
        "max_atk": 96,
        "rarelity": "SR",
        "max_hp": 30,
        "type_name": "弓"
      },
      {
        "attribute": "闇",
        "type": "bow",
        "name": "[]バハムートボウ",
        "min_atk": 285,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1680,
        "rarelity": "SR",
        "max_hp": 148,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[渇欲弓]マモーナスボウ",
        "min_atk": 230,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1410,
        "rarelity": "SR",
        "max_hp": 127,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[氷至]アイスボウ",
        "min_atk": 285,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1755,
        "rarelity": "SR",
        "max_hp": 163,
        "type_name": "弓"
      },
      {
        "attribute": "火",
        "type": "bow",
        "name": "[不融弓]コントラリーボウ",
        "min_atk": 230,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1395,
        "rarelity": "SR",
        "max_hp": 125,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[怪緑弓]秘丹弥虚羅多弓",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1370,
        "rarelity": "SR",
        "max_hp": 124,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "[山弓]クラフトボウ",
        "min_atk": 215,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1380,
        "rarelity": "SR",
        "max_hp": 128,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[朏弓]クレセントボーゲン",
        "min_atk": 210,
        "skill": [
          {
            "type": "bw2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1355,
        "rarelity": "SR",
        "max_hp": 126,
        "type_name": "弓"
      },
      {
        "attribute": "火",
        "type": "bow",
        "name": "[]グラスボウ",
        "min_atk": 305,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1775,
        "rarelity": "SR",
        "max_hp": 159,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[古暴弓]タイラントボウ",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1390,
        "rarelity": "SR",
        "max_hp": 120,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[宵弓]オネイロスボウ",
        "min_atk": 210,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1335,
        "rarelity": "SR",
        "max_hp": 124,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "[野生弓]木矢",
        "min_atk": 215,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1360,
        "rarelity": "SR",
        "max_hp": 125,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[大天使]アークエンジェルボウ",
        "min_atk": 10,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "SR",
        "max_hp": 40,
        "type_name": "弓"
      },
      {
        "attribute": "火",
        "type": "bow",
        "name": "エウリュトスボウ",
        "min_atk": 430,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2520,
        "rarelity": "SSR",
        "max_hp": 227,
        "type_name": "弓"
      },
      {
        "attribute": "火",
        "type": "bow",
        "name": "[黄金宝弓]エウリュトスボウ",
        "min_atk": 430,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 3040,
        "rarelity": "SSR",
        "max_hp": 275,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "シェキナーの弓",
        "min_atk": 425,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2515,
        "rarelity": "SSR",
        "max_hp": 228,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[智天閃]シェキナーの弓",
        "min_atk": 425,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 3040,
        "rarelity": "SSR",
        "max_hp": 276,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "虹の弓",
        "min_atk": 410,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2500,
        "rarelity": "SSR",
        "max_hp": 231,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[恵空]虹の弓",
        "min_atk": 410,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj2",
            "slot": "normal"
          }
        ],
        "min_hp": 40,
        "max_atk": 3020,
        "rarelity": "SSR",
        "max_hp": 279,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "アッキヌフォート",
        "min_atk": 415,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 2505,
        "rarelity": "SSR",
        "max_hp": 230,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "[必閃]アッキヌフォート",
        "min_atk": 415,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 3030,
        "rarelity": "SSR",
        "max_hp": 278,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "エーテリアルボウ",
        "min_atk": 430,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2555,
        "rarelity": "SSR",
        "max_hp": 232,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[輝風]エーテリアルボウ",
        "min_atk": 430,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 430,
        "rarelity": "SSR",
        "max_hp": 38,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[天眸]二王弓",
        "min_atk": 385,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2370,
        "rarelity": "SSR",
        "max_hp": 217,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "世界樹の蔦弓・マグナ",
        "min_atk": 360,
        "skill": [
          {
            "type": "bw3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2260,
        "rarelity": "SSR",
        "max_hp": 208,
        "type_name": "弓"
      },
      {
        "attribute": "土",
        "type": "bow",
        "name": "[万創弓]世界樹の蔦弓・マグナ",
        "min_atk": 360,
        "skill": [
          {
            "type": "bw3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2640,
        "rarelity": "SSR",
        "max_hp": 243,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "レヴィアンボウ・マグナ",
        "min_atk": 355,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2255,
        "rarelity": "SSR",
        "max_hp": 209,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[海叫弓]レヴィアンボウ・マグナ",
        "min_atk": 355,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2640,
        "rarelity": "SSR",
        "max_hp": 244,
        "type_name": "弓"
      },
      {
        "attribute": "闇",
        "type": "bow",
        "name": "ディアボロスボウ",
        "min_atk": 355,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2100,
        "rarelity": "SSR",
        "max_hp": 186,
        "type_name": "弓"
      },
      {
        "attribute": "闇",
        "type": "bow",
        "name": "[邪絶弓]ディアボロスボウ",
        "min_atk": 355,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 27,
        "max_atk": 2450,
        "rarelity": "SSR",
        "max_hp": 218,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "サジタリウスボウ",
        "min_atk": 330,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 2020,
        "rarelity": "SSR",
        "max_hp": 183,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[星鎧弓]サジタリウスボウ",
        "min_atk": 330,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 29,
        "max_atk": 2358,
        "rarelity": "SSR",
        "max_hp": 214,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[天眸]二王弓・真",
        "min_atk": 420,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2510,
        "rarelity": "SSR",
        "max_hp": 230,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[真獄殲]ローゼンボーゲン",
        "min_atk": 391,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2388,
        "rarelity": "SSR",
        "max_hp": 217,
        "type_name": "弓"
      },
      {
        "attribute": "闇",
        "type": "bow",
        "name": "[]バハムートボウ・ノヴム",
        "min_atk": 415,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2460,
        "rarelity": "SSR",
        "max_hp": 219,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[英雄弓]ヒロイックボウ",
        "min_atk": 435,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2525,
        "rarelity": "SSR",
        "max_hp": 224,
        "type_name": "弓"
      },
      {
        "attribute": "火",
        "type": "bow",
        "name": "[輝妖弓]ピンク・エーテリアル",
        "min_atk": 435,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2560,
        "rarelity": "SSR",
        "max_hp": 231,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[]オールド・アルテミス",
        "min_atk": 375,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2321,
        "rarelity": "SSR",
        "max_hp": 212,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[]アルテミス",
        "min_atk": 375,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2321,
        "rarelity": "SSR",
        "max_hp": 212,
        "type_name": "弓"
      },
      {
        "attribute": "闇",
        "type": "bow",
        "name": "[]バハムートボウ・フツルス",
        "min_atk": 415,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2870,
        "rarelity": "SSR",
        "max_hp": 256,
        "type_name": "弓"
      },
      {
        "attribute": "光",
        "type": "bow",
        "name": "[律導弓]アロー・オブ・コスモス",
        "min_atk": 396,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2446,
        "rarelity": "SSR",
        "max_hp": 224,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[]扇抜",
        "min_atk": 320,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2030,
        "rarelity": "SSR",
        "max_hp": 188,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "フィンブル",
        "min_atk": 320,
        "skill": [
          {
            "type": "ks3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2030,
        "rarelity": "SSR",
        "max_hp": 188,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[凍久弓]フィンブル",
        "min_atk": 320,
        "skill": [
          {
            "type": "ks3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2370,
        "rarelity": "SSR",
        "max_hp": 220,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[]シグルズの弓",
        "min_atk": 365,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj2",
            "slot": "normal"
          }
        ],
        "min_hp": 36,
        "max_atk": 2311,
        "rarelity": "SSR",
        "max_hp": 214,
        "type_name": "弓"
      },
      {
        "attribute": "風",
        "type": "bow",
        "name": "[]インドラリム",
        "min_atk": 380,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 2326,
        "rarelity": "SSR",
        "max_hp": 211,
        "type_name": "弓"
      },
      {
        "attribute": "水",
        "type": "bow",
        "name": "[]ヴェローナボウ",
        "min_atk": 310,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1990,
        "rarelity": "SSR",
        "max_hp": 188,
        "type_name": "弓"
      }
    ],
    "type": "弓"
  },
  {
    "weapons": [
      {
        "attribute": "光",
        "type": "gun",
        "name": "[輝弾]マスケット",
        "min_atk": 35,
        "skill": [],
        "min_hp": 5,
        "max_atk": 525,
        "rarelity": "N",
        "max_hp": 35,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[地弾]ウォル・ロック",
        "min_atk": 37,
        "skill": [],
        "min_hp": 5,
        "max_atk": 535,
        "rarelity": "N",
        "max_hp": 37,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[地弾]ホイルロック",
        "min_atk": 39,
        "skill": [],
        "min_hp": 5,
        "max_atk": 565,
        "rarelity": "N",
        "max_hp": 39,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[清弾]リトルトーピド",
        "min_atk": 38,
        "skill": [],
        "min_hp": 5,
        "max_atk": 530,
        "rarelity": "N",
        "max_hp": 38,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[嵐弾]イーグルティアーズ",
        "min_atk": 38,
        "skill": [],
        "min_hp": 6,
        "max_atk": 590,
        "rarelity": "N",
        "max_hp": 38,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[倒魔]ペトロネル",
        "min_atk": 83,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 13,
        "max_atk": 1270,
        "rarelity": "R",
        "max_hp": 83,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[爆撃]グレネード",
        "min_atk": 80,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 11,
        "max_atk": 1250,
        "rarelity": "R",
        "max_hp": 80,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[歴焔]マッチロック",
        "min_atk": 77,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 1190,
        "rarelity": "R",
        "max_hp": 77,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[]サーペンタイン",
        "min_atk": 73,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 1175,
        "rarelity": "R",
        "max_hp": 73,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[煉弾]ジェザイル",
        "min_atk": 78,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 17,
        "max_atk": 1260,
        "rarelity": "R",
        "max_hp": 78,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[虹弾]虹魚鱗飾",
        "min_atk": 58,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 9,
        "max_atk": 835,
        "rarelity": "R",
        "max_hp": 58,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "[光炎]シャインバレル",
        "min_atk": 57,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 9,
        "max_atk": 865,
        "rarelity": "R",
        "max_hp": 57,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[護命]セルフディフェンサー",
        "min_atk": 76,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 1180,
        "rarelity": "R",
        "max_hp": 76,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[素銃]ハンドピストル",
        "min_atk": 83,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 1270,
        "rarelity": "R",
        "max_hp": 83,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[飛水]ストレートアンカー",
        "min_atk": 84,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 15,
        "max_atk": 1230,
        "rarelity": "R",
        "max_hp": 84,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[礎銃]レンジャーピストル",
        "min_atk": 81,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 14,
        "max_atk": 1200,
        "rarelity": "R",
        "max_hp": 81,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[遊銃]クラッカー",
        "min_atk": 78,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 11,
        "max_atk": 1215,
        "rarelity": "R",
        "max_hp": 78,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[荒銃]ソードオフ",
        "min_atk": 82,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 1275,
        "rarelity": "R",
        "max_hp": 82,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[小型銃]デリンジャー",
        "min_atk": 84,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 12,
        "max_atk": 1300,
        "rarelity": "R",
        "max_hp": 84,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[懐銃]フレイムボルト",
        "min_atk": 86,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 12,
        "max_atk": 1330,
        "rarelity": "R",
        "max_hp": 86,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "[天使]エンジェルガン",
        "min_atk": 4,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 4,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[疾迅]ウィンドクロス",
        "min_atk": 340,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 2010,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[竜棘]ドラゴンテイル",
        "min_atk": 335,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1945,
        "rarelity": "SR",
        "max_hp": 127,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "[燕光]スワロウテイル",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1870,
        "rarelity": "SR",
        "max_hp": 124,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[至匠]スナップハンス",
        "min_atk": 315,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1875,
        "rarelity": "SR",
        "max_hp": 123,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[紫速]トラドール",
        "min_atk": 255,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1640,
        "rarelity": "SR",
        "max_hp": 112,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[嵐竜銃]ティアマトボルト",
        "min_atk": 240,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 1475,
        "rarelity": "SR",
        "max_hp": 97,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[海嘯銃]レヴィアンマズル",
        "min_atk": 230,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1505,
        "rarelity": "SR",
        "max_hp": 103,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[]レグロン",
        "min_atk": 330,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1940,
        "rarelity": "SR",
        "max_hp": 128,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[斧銃]ホイルロックアックス",
        "min_atk": 305,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1865,
        "rarelity": "SR",
        "max_hp": 125,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[氷冥筒]シモニア",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1460,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[蒼碧砲]アークゥイバス",
        "min_atk": 260,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1600,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[蛇神銃]ミドガルドの破弾",
        "min_atk": 230,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1490,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[蒼碧銃]アークゥイバス・カスタム",
        "min_atk": 340,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1980,
        "rarelity": "SR",
        "max_hp": 129,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[魚撃]アルバコアライフル",
        "min_atk": 255,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 11,
        "max_atk": 1500,
        "rarelity": "SR",
        "max_hp": 92,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[幽霧銃]セレストライフル",
        "min_atk": 260,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 1535,
        "rarelity": "SR",
        "max_hp": 97,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "[百煌銃]ヘカトンケイルマズル",
        "min_atk": 235,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1470,
        "rarelity": "SR",
        "max_hp": 98,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[暴狼銃]スキールニル",
        "min_atk": 225,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1480,
        "rarelity": "SR",
        "max_hp": 101,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[棄昏]朽ち果てた銃",
        "min_atk": 1,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 1,
        "max_atk": 96,
        "rarelity": "SR",
        "max_hp": 30,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[祖龍銃]バハムートマズル",
        "min_atk": 305,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1805,
        "rarelity": "SR",
        "max_hp": 115,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[蒐索銃]アワリティアガン",
        "min_atk": 225,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1465,
        "rarelity": "SR",
        "max_hp": 99,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[怪桃銃]アンノウンショット",
        "min_atk": 245,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 1480,
        "rarelity": "SR",
        "max_hp": 95,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[寧弩]クォレル",
        "min_atk": 300,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1860,
        "rarelity": "SR",
        "max_hp": 126,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[翼艶炎]ピーシーズ",
        "min_atk": 335,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 2000,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[]デザートアームズ",
        "min_atk": 310,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1895,
        "rarelity": "SR",
        "max_hp": 128,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[怪緑銃]秘丹弥虚羅多鉄砲",
        "min_atk": 255,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 1515,
        "rarelity": "SR",
        "max_hp": 95,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[蒼烈]ドライゼン",
        "min_atk": 240,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1400,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[廉銃]白竜騎士団制式ボルト",
        "min_atk": 245,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 1480,
        "rarelity": "SR",
        "max_hp": 96,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[聖隠銃]ステッキライフル",
        "min_atk": 235,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1510,
        "rarelity": "SR",
        "max_hp": 102,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[骸銃]オダヅモッキーモデル",
        "min_atk": 255,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 1550,
        "rarelity": "SR",
        "max_hp": 94,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[緑潜]グラスマスケット",
        "min_atk": 235,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 1470,
        "rarelity": "SR",
        "max_hp": 97,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[]カラフリャーガン",
        "min_atk": 305,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1860,
        "rarelity": "SR",
        "max_hp": 124,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[]ドルフェーン",
        "min_atk": 320,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1870,
        "rarelity": "SR",
        "max_hp": 122,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[鏡面銃]ヴェローナライフル",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1455,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[]ハンディ・アークゥイバス",
        "min_atk": 305,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1855,
        "rarelity": "SR",
        "max_hp": 125,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "[大天使]アークエンジェルガン",
        "min_atk": 10,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "SR",
        "max_hp": 40,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "ガストラフェテス",
        "min_atk": 460,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2785,
        "rarelity": "SSR",
        "max_hp": 187,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[鋼吼]ガストラフェテス",
        "min_atk": 460,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 3370,
        "rarelity": "SSR",
        "max_hp": 226,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "グラッドアイ",
        "min_atk": 460,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 2700,
        "rarelity": "SSR",
        "max_hp": 180,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[狂麗砲]グラッドアイ",
        "min_atk": 460,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 3260,
        "rarelity": "SSR",
        "max_hp": 218,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "裁きの鳴雷",
        "min_atk": 345,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2165,
        "rarelity": "SSR",
        "max_hp": 145,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[裁考筒]裁きの鳴雷",
        "min_atk": 345,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2530,
        "rarelity": "SSR",
        "max_hp": 169,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[絢爛]ジュエルリゾートモデル",
        "min_atk": 370,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 2265,
        "rarelity": "SSR",
        "max_hp": 150,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "コロッサスカービン・マグナ",
        "min_atk": 405,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2450,
        "rarelity": "SSR",
        "max_hp": 160,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[烈殻銃]コロッサスカービン・マグナ",
        "min_atk": 405,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2860,
        "rarelity": "SSR",
        "max_hp": 187,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "シュヴァリエボルト・マグナ",
        "min_atk": 395,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2440,
        "rarelity": "SSR",
        "max_hp": 162,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "[崇騎銃]シュヴァリエボルト・マグナ",
        "min_atk": 395,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2850,
        "rarelity": "SSR",
        "max_hp": 189,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[碧落]ファラウェイ",
        "min_atk": 455,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 2705,
        "rarelity": "SSR",
        "max_hp": 179,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "[黄昏]十狼雷",
        "min_atk": 415,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2550,
        "rarelity": "SSR",
        "max_hp": 170,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "[黄昏]十狼雷・真",
        "min_atk": 450,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2700,
        "rarelity": "SSR",
        "max_hp": 180,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[真奪撃]オリバー",
        "min_atk": 420,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2571,
        "rarelity": "SSR",
        "max_hp": 170,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[祖龍銃]バハムートマズル・ノヴム",
        "min_atk": 445,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2645,
        "rarelity": "SSR",
        "max_hp": 171,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[撒旋流]ヴリスラグナ",
        "min_atk": 440,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2690,
        "rarelity": "SSR",
        "max_hp": 182,
        "type_name": "銃"
      },
      {
        "attribute": "火",
        "type": "gun",
        "name": "[蒼導銃]ベネディーア",
        "min_atk": 505,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2980,
        "rarelity": "SSR",
        "max_hp": 196,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "ティアマトボルト・マグナ",
        "min_atk": 400,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "bw1",
            "slot": "magna"
          }
        ],
        "min_hp": 25,
        "max_atk": 2445,
        "rarelity": "SSR",
        "max_hp": 161,
        "type_name": "銃"
      },
      {
        "attribute": "風",
        "type": "gun",
        "name": "[吼嵐銃]ティアマトボルト・マグナ",
        "min_atk": 400,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "bw1",
            "slot": "magna"
          }
        ],
        "min_hp": 25,
        "max_atk": 2930,
        "rarelity": "SSR",
        "max_hp": 193,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[厳彗銃]ストラトゥムバンカー",
        "min_atk": 445,
        "skill": [
          {
            "type": "bw3",
            "slot": "normal"
          },
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 31,
        "max_atk": 2695,
        "rarelity": "SSR",
        "max_hp": 181,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[真鋭撃]ネブカドネザル",
        "min_atk": 435,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2585,
        "rarelity": "SSR",
        "max_hp": 167,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[連装弾]エーケイ・フォーエイ",
        "min_atk": 490,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2965,
        "rarelity": "SSR",
        "max_hp": 199,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[祖龍銃]バハムートマズル・フツルス",
        "min_atk": 445,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 3085,
        "rarelity": "SSR",
        "max_hp": 200,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "[律導銃]ガン・オブ・コスモス",
        "min_atk": 426,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 2633,
        "rarelity": "SSR",
        "max_hp": 176,
        "type_name": "銃"
      },
      {
        "attribute": "光",
        "type": "gun",
        "name": "[聖弾]ラファエル",
        "min_atk": 360,
        "skill": [
          {
            "type": "kj3",
            "slot": "ex"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 2170,
        "rarelity": "SSR",
        "max_hp": 142,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[鋼電発射装置]ギガントアームズ",
        "min_atk": 370,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 2180,
        "rarelity": "SSR",
        "max_hp": 140,
        "type_name": "銃"
      },
      {
        "attribute": "水",
        "type": "gun",
        "name": "[滅爆]メテオラ",
        "min_atk": 445,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "bw1",
            "slot": "normal"
          }
        ],
        "min_hp": 35,
        "max_atk": 2750,
        "rarelity": "SSR",
        "max_hp": 191,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "ケルベロス・オーダー",
        "min_atk": 375,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 2215,
        "rarelity": "SSR",
        "max_hp": 142,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "[遊獣笛]ケルベロス・オーダー",
        "min_atk": 375,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "bw1",
            "slot": "normal"
          }
        ],
        "min_hp": 20,
        "max_atk": 2585,
        "rarelity": "SSR",
        "max_hp": 167,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "マイムールヴィジョン",
        "min_atk": 399,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 2493,
        "rarelity": "SSR",
        "max_hp": 168,
        "type_name": "銃"
      },
      {
        "attribute": "闇",
        "type": "gun",
        "name": "サンダー・オブ・ファントム",
        "min_atk": 424,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 2518,
        "rarelity": "SSR",
        "max_hp": 163,
        "type_name": "銃"
      },
      {
        "attribute": "土",
        "type": "gun",
        "name": "[]ナイトメアバンカー",
        "min_atk": 450,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2700,
        "rarelity": "SSR",
        "max_hp": 180,
        "type_name": "銃"
      }
    ],
    "type": "銃"
  },
  {
    "weapons": [
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[嵐拳]ブロンズバグナウ",
        "min_atk": 49,
        "skill": [],
        "min_hp": 7,
        "max_atk": 475,
        "rarelity": "N",
        "max_hp": 49,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[清拳]ホラ",
        "min_atk": 52,
        "skill": [],
        "min_hp": 7,
        "max_atk": 460,
        "rarelity": "N",
        "max_hp": 52,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[炎拳]カエストス",
        "min_atk": 51,
        "skill": [],
        "min_hp": 8,
        "max_atk": 505,
        "rarelity": "N",
        "max_hp": 51,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[地拳]ブロンズナックル",
        "min_atk": 49,
        "skill": [],
        "min_hp": 7,
        "max_atk": 455,
        "rarelity": "N",
        "max_hp": 49,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[拳闘]手甲",
        "min_atk": 111,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 20,
        "max_atk": 1020,
        "rarelity": "R",
        "max_hp": 111,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[刺殴]パタ",
        "min_atk": 105,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 16,
        "max_atk": 1015,
        "rarelity": "R",
        "max_hp": 105,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[蒼銀拳]ミスリルバグナウ",
        "min_atk": 111,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 17,
        "max_atk": 1060,
        "rarelity": "R",
        "max_hp": 111,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[蒼銀拳]ミスリルナックル",
        "min_atk": 118,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 20,
        "max_atk": 1100,
        "rarelity": "R",
        "max_hp": 118,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[岩砕]クラッシュハンド",
        "min_atk": 78,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 735,
        "rarelity": "R",
        "max_hp": 78,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[光拳]シャインナックル",
        "min_atk": 80,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 13,
        "max_atk": 750,
        "rarelity": "R",
        "max_hp": 80,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[疾拳]疾風のバンテージ",
        "min_atk": 118,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1130,
        "rarelity": "R",
        "max_hp": 118,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[牙拳]フィッシュトゥース",
        "min_atk": 116,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 21,
        "max_atk": 1070,
        "rarelity": "R",
        "max_hp": 116,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[焦刃]ヒートパタ",
        "min_atk": 107,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1030,
        "rarelity": "R",
        "max_hp": 107,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[瀑拳]清流のバンテージ",
        "min_atk": 122,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 21,
        "max_atk": 1120,
        "rarelity": "R",
        "max_hp": 122,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[焦殴]ファイアボール",
        "min_atk": 112,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 17,
        "max_atk": 1090,
        "rarelity": "R",
        "max_hp": 112,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[魂拳]ブラストナックル",
        "min_atk": 114,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 19,
        "max_atk": 1080,
        "rarelity": "R",
        "max_hp": 114,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[岩裂]ロックカット",
        "min_atk": 121,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 20,
        "max_atk": 1120,
        "rarelity": "R",
        "max_hp": 121,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[旋棍]トンファー",
        "min_atk": 123,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1140,
        "rarelity": "R",
        "max_hp": 123,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[美食嗜]チョップスティックス",
        "min_atk": 118,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1135,
        "rarelity": "R",
        "max_hp": 118,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[往盾]ライトバックラー",
        "min_atk": 120,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1050,
        "rarelity": "R",
        "max_hp": 120,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[母掴]耐熱ミトン",
        "min_atk": 118,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1090,
        "rarelity": "R",
        "max_hp": 118,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[鉄甲]アイアンガード",
        "min_atk": 126,
        "skill": [
          {
            "type": "bw1",
            "slot": "normal"
          }
        ],
        "min_hp": 21,
        "max_atk": 1170,
        "rarelity": "R",
        "max_hp": 126,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[]エンチャントネイル",
        "min_atk": 113,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1080,
        "rarelity": "R",
        "max_hp": 113,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[盛夏麺]コールド・ヌードル",
        "min_atk": 116,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1065,
        "rarelity": "R",
        "max_hp": 116,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[]ビートプレート",
        "min_atk": 111,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 20,
        "max_atk": 1015,
        "rarelity": "R",
        "max_hp": 111,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[天使]エンジェルナックル",
        "min_atk": 40,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 40,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[猫爪]ネコパンチ",
        "min_atk": 265,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 1620,
        "rarelity": "SR",
        "max_hp": 174,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[拳刃]ジャマダハル",
        "min_atk": 275,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 1630,
        "rarelity": "SR",
        "max_hp": 172,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[帝撃]カイザーナックル",
        "min_atk": 250,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 1570,
        "rarelity": "SR",
        "max_hp": 166,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[]乾坤圏",
        "min_atk": 290,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1745,
        "rarelity": "SR",
        "max_hp": 185,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "[八角鬼]ジュル",
        "min_atk": 230,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1370,
        "rarelity": "SR",
        "max_hp": 146,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[機殻拳]コロッサスフィスト",
        "min_atk": 215,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1310,
        "rarelity": "SR",
        "max_hp": 136,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[羅象拳]世界樹の幹甲",
        "min_atk": 205,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1315,
        "rarelity": "SR",
        "max_hp": 141,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[土竜爪]モールハンド",
        "min_atk": 285,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1675,
        "rarelity": "SR",
        "max_hp": 179,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[氷冥爪]リンボ",
        "min_atk": 190,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1270,
        "rarelity": "SR",
        "max_hp": 137,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[厳砕甲]インパクトナックル",
        "min_atk": 270,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 1650,
        "rarelity": "SR",
        "max_hp": 176,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[紫晶拳]チェインナックル",
        "min_atk": 285,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1665,
        "rarelity": "SR",
        "max_hp": 174,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "[魚打]アルバコアヘッド",
        "min_atk": 225,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1300,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[墨撃]スキッドハンド",
        "min_atk": 175,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1145,
        "rarelity": "SR",
        "max_hp": 124,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "[不砕]朽ち果てた手甲",
        "min_atk": 1,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 1,
        "max_atk": 96,
        "rarelity": "SR",
        "max_hp": 30,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[猛虎]タイガーファング",
        "min_atk": 270,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1625,
        "rarelity": "SR",
        "max_hp": 173,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[炎撃甲]バルカンガントレット",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1450,
        "rarelity": "SR",
        "max_hp": 131,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[禍雷爪]雷司の爪",
        "min_atk": 205,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1280,
        "rarelity": "SR",
        "max_hp": 136,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[怪緑拳]アンノウングラブ",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1285,
        "rarelity": "SR",
        "max_hp": 135,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[壊撃]メタルグローブ",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1710,
        "rarelity": "SR",
        "max_hp": 183,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[饗炎]カップ＆ソーサー",
        "min_atk": 290,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 1695,
        "rarelity": "SR",
        "max_hp": 177,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[極愛拳]バレンタイングラブ",
        "min_atk": 215,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1325,
        "rarelity": "SR",
        "max_hp": 139,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "[祖龍拳]バハムートナックル",
        "min_atk": 270,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1575,
        "rarelity": "SR",
        "max_hp": 161,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[咎砕]無慈悲な制裁",
        "min_atk": 285,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1690,
        "rarelity": "SR",
        "max_hp": 178,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[願結]ミサンガ",
        "min_atk": 275,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1655,
        "rarelity": "SR",
        "max_hp": 176,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[迅雷拳]ブラストヘヴィナックル",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 1685,
        "rarelity": "SR",
        "max_hp": 179,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[青緑爪]エメラルドクロー",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1305,
        "rarelity": "SR",
        "max_hp": 137,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[瑞鳴拳]ゲコヘッド",
        "min_atk": 215,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1290,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[]ホーリーグローブ",
        "min_atk": 275,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1630,
        "rarelity": "SR",
        "max_hp": 170,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[哭砕]ショロトルスタンプ",
        "min_atk": 215,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1290,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[怪黒拳]ブラックガントレット",
        "min_atk": 195,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1280,
        "rarelity": "SR",
        "max_hp": 137,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[美獣輪]シルバーブレスレット",
        "min_atk": 215,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1300,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[]グレートタロン",
        "min_atk": 295,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 1725,
        "rarelity": "SR",
        "max_hp": 180,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[]シルバーリング",
        "min_atk": 275,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1715,
        "rarelity": "SR",
        "max_hp": 182,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[]ウォーターバルーン",
        "min_atk": 260,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1610,
        "rarelity": "SR",
        "max_hp": 174,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[大天使]アークエンジェルナックル",
        "min_atk": 10,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "SR",
        "max_hp": 40,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "獅子王戦拳",
        "min_atk": 390,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 47,
        "max_atk": 2350,
        "rarelity": "SSR",
        "max_hp": 250,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[闘頂]獅子王戦拳",
        "min_atk": 390,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 47,
        "max_atk": 2840,
        "rarelity": "SSR",
        "max_hp": 302,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "クリムゾンフィンガー",
        "min_atk": 400,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2360,
        "rarelity": "SSR",
        "max_hp": 248,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[溶魔爪]クリムゾンフィンガー",
        "min_atk": 400,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "bw2",
            "slot": "normal"
          }
        ],
        "min_hp": 40,
        "max_atk": 2850,
        "rarelity": "SSR",
        "max_hp": 300,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[水恵拳]マナウィダンガントレ",
        "min_atk": 295,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 1880,
        "rarelity": "SSR",
        "max_hp": 202,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "ティアマトガントレ・マグナ",
        "min_atk": 350,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2130,
        "rarelity": "SSR",
        "max_hp": 224,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[吼嵐拳]ティアマトガントレ・マグナ",
        "min_atk": 350,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2560,
        "rarelity": "SSR",
        "max_hp": 269,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "[獣魂]ココ＆ミミ",
        "min_atk": 410,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2380,
        "rarelity": "SSR",
        "max_hp": 245,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "コロッサスフィスト・マグナ",
        "min_atk": 355,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2135,
        "rarelity": "SSR",
        "max_hp": 223,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[烈殻拳]コロッサスフィスト・マグナ",
        "min_atk": 355,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2490,
        "rarelity": "SSR",
        "max_hp": 261,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[砕世]六崩拳",
        "min_atk": 360,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2220,
        "rarelity": "SSR",
        "max_hp": 236,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "紅陽扇",
        "min_atk": 305,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1890,
        "rarelity": "SSR",
        "max_hp": 200,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[天煽]紅陽扇",
        "min_atk": 305,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 32,
        "max_atk": 2210,
        "rarelity": "SSR",
        "max_hp": 234,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[砕世]六崩拳・真",
        "min_atk": 400,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2340,
        "rarelity": "SSR",
        "max_hp": 240,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[真闘神]鬼神の籠手",
        "min_atk": 372,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2245,
        "rarelity": "SSR",
        "max_hp": 235,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "[祖龍拳]バハムートナックル・ノヴム",
        "min_atk": 390,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2305,
        "rarelity": "SSR",
        "max_hp": 239,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[雅氷嵐]緋舞扇",
        "min_atk": 380,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 44,
        "max_atk": 2340,
        "rarelity": "SSR",
        "max_hp": 252,
        "type_name": "格闘"
      },
      {
        "attribute": "風",
        "type": "knuckle",
        "name": "[渇欲拳]マモーナスグローブ",
        "min_atk": 310,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1890,
        "rarelity": "SSR",
        "max_hp": 199,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[鋼電拳]ギガントナックル",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1910,
        "rarelity": "SSR",
        "max_hp": 203,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[赫獅子]リスレット",
        "min_atk": 300,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1880,
        "rarelity": "SSR",
        "max_hp": 201,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[破天華]梵天添甲",
        "min_atk": 415,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 41,
        "max_atk": 2440,
        "rarelity": "SSR",
        "max_hp": 256,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "白虎咆拳",
        "min_atk": 290,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1825,
        "rarelity": "SSR",
        "max_hp": 195,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[猛崩]白虎咆拳",
        "min_atk": 290,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2210,
        "rarelity": "SSR",
        "max_hp": 236,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[超闘]ストリートファイト",
        "min_atk": 285,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1820,
        "rarelity": "SSR",
        "max_hp": 196,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "[紅殻]シザーハンズ",
        "min_atk": 360,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 2140,
        "rarelity": "SSR",
        "max_hp": 150,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[]オールド・オベロン",
        "min_atk": 342,
        "skill": [
          {
            "type": "kj1",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 2166,
        "rarelity": "SSR",
        "max_hp": 233,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[星霜拳]オベロン",
        "min_atk": 342,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 2166,
        "rarelity": "SSR",
        "max_hp": 233,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "セレストクロー・マグナ",
        "min_atk": 365,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "bw1",
            "slot": "magna"
          }
        ],
        "min_hp": 32,
        "max_atk": 2145,
        "rarelity": "SSR",
        "max_hp": 221,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "[幽絶拳]セレストクロー・マグナ",
        "min_atk": 365,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "bw1",
            "slot": "magna"
          }
        ],
        "min_hp": 32,
        "max_atk": 2500,
        "rarelity": "SSR",
        "max_hp": 259,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "[]バハムートナックル・フツルス",
        "min_atk": 390,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2690,
        "rarelity": "SSR",
        "max_hp": 280,
        "type_name": "格闘"
      },
      {
        "attribute": "光",
        "type": "knuckle",
        "name": "[]ガントレット・オブ・コスモス",
        "min_atk": 371,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2294,
        "rarelity": "SSR",
        "max_hp": 243,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[蠱毒]毒手",
        "min_atk": 290,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 1860,
        "rarelity": "SSR",
        "max_hp": 204,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[]マグマガントレット",
        "min_atk": 410,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2400,
        "rarelity": "SSR",
        "max_hp": 252,
        "type_name": "格闘"
      },
      {
        "attribute": "土",
        "type": "knuckle",
        "name": "[]エンシェントバンテージ",
        "min_atk": 385,
        "skill": [
          {
            "type": "bw3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 43,
        "max_atk": 2345,
        "rarelity": "SSR",
        "max_hp": 251,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "玄武殻拳",
        "min_atk": 285,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1820,
        "rarelity": "SSR",
        "max_hp": 196,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[剛羅甲]玄武殻拳",
        "min_atk": 285,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj3",
            "slot": "normal"
          }
        ],
        "min_hp": 33,
        "max_atk": 2130,
        "rarelity": "SSR",
        "max_hp": 230,
        "type_name": "格闘"
      },
      {
        "attribute": "闇",
        "type": "knuckle",
        "name": "[可愛]リボン",
        "min_atk": 410,
        "skill": [
          {
            "type": "bw3",
            "slot": "normal"
          },
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 37,
        "max_atk": 2365,
        "rarelity": "SSR",
        "max_hp": 245,
        "type_name": "格闘"
      },
      {
        "attribute": "水",
        "type": "knuckle",
        "name": "[轟翔甲]ヴィルヘルム",
        "min_atk": 337,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2161,
        "rarelity": "SSR",
        "max_hp": 234,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[]天華簪",
        "min_atk": 390,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 41,
        "max_atk": 2325,
        "rarelity": "SSR",
        "max_hp": 253,
        "type_name": "格闘"
      },
      {
        "attribute": "火",
        "type": "knuckle",
        "name": "[猛炎拳]スヴァルガントレット",
        "min_atk": 310,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1900,
        "rarelity": "SSR",
        "max_hp": 197,
        "type_name": "格闘"
      }
    ],
    "type": "格闘"
  },
  {
    "weapons": [
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[嵐杖]クラブ",
        "min_atk": 55,
        "skill": [],
        "min_hp": 8,
        "max_atk": 425,
        "rarelity": "N",
        "max_hp": 55,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[地杖]スタッフ",
        "min_atk": 57,
        "skill": [],
        "min_hp": 8,
        "max_atk": 415,
        "rarelity": "N",
        "max_hp": 57,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[嵐杖]オークワンド",
        "min_atk": 60,
        "skill": [],
        "min_hp": 9,
        "max_atk": 460,
        "rarelity": "N",
        "max_hp": 60,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[炎杖]アイアンスタッフ",
        "min_atk": 52,
        "skill": [],
        "min_hp": 8,
        "max_atk": 460,
        "rarelity": "N",
        "max_hp": 52,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[地杖]メープルスタッフ",
        "min_atk": 59,
        "skill": [],
        "min_hp": 8,
        "max_atk": 425,
        "rarelity": "N",
        "max_hp": 59,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[炎杖]ブロンズロッド",
        "min_atk": 54,
        "skill": [],
        "min_hp": 8,
        "max_atk": 430,
        "rarelity": "N",
        "max_hp": 54,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[清杖]ブロンズメイス",
        "min_atk": 58,
        "skill": [],
        "min_hp": 8,
        "max_atk": 410,
        "rarelity": "N",
        "max_hp": 58,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[嵐杖]メープルワンド",
        "min_atk": 57,
        "skill": [],
        "min_hp": 8,
        "max_atk": 435,
        "rarelity": "N",
        "max_hp": 57,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[炎杖]アイアンロッド",
        "min_atk": 57,
        "skill": [],
        "min_hp": 8,
        "max_atk": 455,
        "rarelity": "N",
        "max_hp": 57,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[清杖]アイアンメイス",
        "min_atk": 61,
        "skill": [],
        "min_hp": 8,
        "max_atk": 435,
        "rarelity": "N",
        "max_hp": 61,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[地杖]アッシュスタッフ",
        "min_atk": 60,
        "skill": [],
        "min_hp": 8,
        "max_atk": 440,
        "rarelity": "N",
        "max_hp": 60,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[嵐杖]アッシュワンド",
        "min_atk": 58,
        "skill": [],
        "min_hp": 8,
        "max_atk": 450,
        "rarelity": "N",
        "max_hp": 58,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[清杖]アイアンワンド",
        "min_atk": 60,
        "skill": [],
        "min_hp": 8,
        "max_atk": 420,
        "rarelity": "N",
        "max_hp": 60,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[炎杖]スチールロッド",
        "min_atk": 59,
        "skill": [],
        "min_hp": 9,
        "max_atk": 465,
        "rarelity": "N",
        "max_hp": 59,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[清杖]スチールメイス",
        "min_atk": 63,
        "skill": [],
        "min_hp": 9,
        "max_atk": 445,
        "rarelity": "N",
        "max_hp": 63,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[地杖]オークスタッフ",
        "min_atk": 62,
        "skill": [],
        "min_hp": 9,
        "max_atk": 450,
        "rarelity": "N",
        "max_hp": 62,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[炎杖]棍",
        "min_atk": 60,
        "skill": [],
        "min_hp": 9,
        "max_atk": 480,
        "rarelity": "N",
        "max_hp": 60,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[嵐杖]ヤントック",
        "min_atk": 61,
        "skill": [],
        "min_hp": 9,
        "max_atk": 475,
        "rarelity": "N",
        "max_hp": 61,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[淨響]タイアハ",
        "min_atk": 130,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 22,
        "max_atk": 965,
        "rarelity": "R",
        "max_hp": 130,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[魔香]シャレラバディ",
        "min_atk": 135,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 22,
        "max_atk": 1015,
        "rarelity": "R",
        "max_hp": 135,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[蒼玉]ケーン",
        "min_atk": 128,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 23,
        "max_atk": 935,
        "rarelity": "R",
        "max_hp": 128,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[蒼銀杖]ミスリルロッド",
        "min_atk": 86,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 670,
        "rarelity": "R",
        "max_hp": 86,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[翼空]フェザースタッフ",
        "min_atk": 127,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 940,
        "rarelity": "R",
        "max_hp": 127,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[蒼銀杖]ミスリルメイス",
        "min_atk": 90,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 650,
        "rarelity": "R",
        "max_hp": 90,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[至術]フェザーワンド",
        "min_atk": 128,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 975,
        "rarelity": "R",
        "max_hp": 128,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[震棍]アースメイス",
        "min_atk": 133,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 985,
        "rarelity": "R",
        "max_hp": 133,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[秘水]ウォーターロッド",
        "min_atk": 134,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 24,
        "max_atk": 980,
        "rarelity": "R",
        "max_hp": 134,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[針鋲]スパイククラブ",
        "min_atk": 91,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 670,
        "rarelity": "R",
        "max_hp": 91,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[打棍]メイス",
        "min_atk": 87,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 640,
        "rarelity": "R",
        "max_hp": 87,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[清流]水精の牧杖",
        "min_atk": 94,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 680,
        "rarelity": "R",
        "max_hp": 94,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[紅蓮]火精の権杖",
        "min_atk": 90,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 15,
        "max_atk": 700,
        "rarelity": "R",
        "max_hp": 90,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[凶装]シャドウワンド",
        "min_atk": 88,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 710,
        "rarelity": "R",
        "max_hp": 88,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[聖十字]ザ・クロス",
        "min_atk": 124,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 17,
        "max_atk": 980,
        "rarelity": "R",
        "max_hp": 124,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[風祷]緑淡樹の杖",
        "min_atk": 125,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 950,
        "rarelity": "R",
        "max_hp": 125,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[翠嵐]ウィンドロッド",
        "min_atk": 131,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 21,
        "max_atk": 995,
        "rarelity": "R",
        "max_hp": 131,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[奸邪]イヴィルワンド",
        "min_atk": 130,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1030,
        "rarelity": "R",
        "max_hp": 130,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[緑鉱杖]エメラルドケーン",
        "min_atk": 137,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 21,
        "max_atk": 1040,
        "rarelity": "R",
        "max_hp": 137,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[蒼洋]オーシャンロッド",
        "min_atk": 137,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1005,
        "rarelity": "R",
        "max_hp": 137,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[魂火]呪炎の燭台",
        "min_atk": 130,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 20,
        "max_atk": 1000,
        "rarelity": "R",
        "max_hp": 130,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[聖木]ツリーワンド",
        "min_atk": 135,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 23,
        "max_atk": 1005,
        "rarelity": "R",
        "max_hp": 135,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[淡雪]スノウマンロッド",
        "min_atk": 140,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 24,
        "max_atk": 1025,
        "rarelity": "R",
        "max_hp": 140,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[燭台]松明",
        "min_atk": 132,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1020,
        "rarelity": "R",
        "max_hp": 132,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[歪岩杖]ストーンポール",
        "min_atk": 139,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1030,
        "rarelity": "R",
        "max_hp": 139,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[光灯杖]ライトスタッフ",
        "min_atk": 138,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1035,
        "rarelity": "R",
        "max_hp": 138,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[樹杖]宿樹の仙杖",
        "min_atk": 136,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1045,
        "rarelity": "R",
        "max_hp": 136,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[懐秋]アカネロッド",
        "min_atk": 138,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1065,
        "rarelity": "R",
        "max_hp": 138,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[叡典]ステューデントノート",
        "min_atk": 142,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1045,
        "rarelity": "R",
        "max_hp": 142,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[天使]エンジェルワンド",
        "min_atk": 40,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 40,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[鍛極]金剛杖",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 1320,
        "rarelity": "SR",
        "max_hp": 176,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[双蛇癒]ジェズル",
        "min_atk": 175,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1165,
        "rarelity": "SR",
        "max_hp": 159,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[導命]パストラルスタッフ",
        "min_atk": 245,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 1490,
        "rarelity": "SR",
        "max_hp": 200,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[麗美華]ジャカランダ",
        "min_atk": 205,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1255,
        "rarelity": "SR",
        "max_hp": 169,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[羅象杖]世界樹の雫枝",
        "min_atk": 185,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1205,
        "rarelity": "SR",
        "max_hp": 163,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[鳳凰杖]不死鳥の尾飾",
        "min_atk": 200,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1220,
        "rarelity": "SR",
        "max_hp": 160,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[魔樹理]森精の杖",
        "min_atk": 250,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1470,
        "rarelity": "SR",
        "max_hp": 194,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[酒精杖]ツォンペリ",
        "min_atk": 250,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1500,
        "rarelity": "SR",
        "max_hp": 195,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[焔祷]転生の祈杖",
        "min_atk": 195,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1180,
        "rarelity": "SR",
        "max_hp": 154,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[密智杖]ネフティスポール",
        "min_atk": 195,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1200,
        "rarelity": "SR",
        "max_hp": 158,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[裁考杖]裁きの天秤",
        "min_atk": 180,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 1170,
        "rarelity": "SR",
        "max_hp": 158,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[逐雷棍]ヤグルシ",
        "min_atk": 250,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 1540,
        "rarelity": "SR",
        "max_hp": 208,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[炎従]アーソン",
        "min_atk": 260,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1505,
        "rarelity": "SR",
        "max_hp": 197,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[光宿]ホーリーケーン",
        "min_atk": 250,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1495,
        "rarelity": "SR",
        "max_hp": 199,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[幽霧杖]セレストケーン",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1230,
        "rarelity": "SR",
        "max_hp": 158,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[遊獣杖]ヘルウォードセプター",
        "min_atk": 205,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1195,
        "rarelity": "SR",
        "max_hp": 153,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[風雅]エアリアルケーン",
        "min_atk": 255,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1500,
        "rarelity": "SR",
        "max_hp": 198,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[嘆骸]スカルワンド",
        "min_atk": 230,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1340,
        "rarelity": "SR",
        "max_hp": 172,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[征風]風詠みの杖",
        "min_atk": 265,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1555,
        "rarelity": "SR",
        "max_hp": 205,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[虚叡]朽ち果てた杖",
        "min_atk": 1,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 1,
        "max_atk": 96,
        "rarelity": "SR",
        "max_hp": 30,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[勝炎]サルヴトーチ",
        "min_atk": 265,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1530,
        "rarelity": "SR",
        "max_hp": 201,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[禍雷杖]雷司の杖",
        "min_atk": 185,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1175,
        "rarelity": "SR",
        "max_hp": 157,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[邪絶杖]ディアボロスセプター",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1230,
        "rarelity": "SR",
        "max_hp": 158,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[祖龍杖]バハムートスタッフ",
        "min_atk": 230,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1340,
        "rarelity": "SR",
        "max_hp": 172,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[蒼心]リトルウィッチセプター",
        "min_atk": 200,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1200,
        "rarelity": "SR",
        "max_hp": 150,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[]アーソン・デス",
        "min_atk": 270,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1560,
        "rarelity": "SR",
        "max_hp": 204,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[]サンシェードパラソル",
        "min_atk": 245,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 1510,
        "rarelity": "SR",
        "max_hp": 205,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[]カースドケーン",
        "min_atk": 270,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1515,
        "rarelity": "SR",
        "max_hp": 195,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[魔箒]魔女の箒",
        "min_atk": 275,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1585,
        "rarelity": "SR",
        "max_hp": 208,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[獣杖]アンライトセプター",
        "min_atk": 275,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 1540,
        "rarelity": "SR",
        "max_hp": 199,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[]フラワークラウン",
        "min_atk": 260,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1525,
        "rarelity": "SR",
        "max_hp": 202,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[オイラは]アスクレビィオスの杖",
        "min_atk": 180,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1140,
        "rarelity": "SR",
        "max_hp": 152,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[哭司]ショロトルケーン",
        "min_atk": 195,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1185,
        "rarelity": "SR",
        "max_hp": 154,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[覇翼]ファルコンメイス",
        "min_atk": 180,
        "skill": [
          {
            "type": "bw2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 1185,
        "rarelity": "SR",
        "max_hp": 160,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[]ホーリーインデックス",
        "min_atk": 255,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 1545,
        "rarelity": "SR",
        "max_hp": 206,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[]神秘の仙杖",
        "min_atk": 265,
        "skill": [
          {
            "type": "bw2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 1510,
        "rarelity": "SR",
        "max_hp": 196,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[]氷枝杖",
        "min_atk": 230,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 1470,
        "rarelity": "SR",
        "max_hp": 202,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[大天使]アークエンジェルワンド",
        "min_atk": 10,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "SR",
        "max_hp": 40,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "ケーリュケイオン",
        "min_atk": 350,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 46,
        "max_atk": 2095,
        "rarelity": "SSR",
        "max_hp": 277,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[遊翼]ケーリュケイオン",
        "min_atk": 350,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 46,
        "max_atk": 2530,
        "rarelity": "SSR",
        "max_hp": 323,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "アスクレピオスの杖",
        "min_atk": 365,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 47,
        "max_atk": 2160,
        "rarelity": "SSR",
        "max_hp": 288,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[極癒]アスクレピオスの杖",
        "min_atk": 365,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 47,
        "max_atk": 2610,
        "rarelity": "SSR",
        "max_hp": 348,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[輝杖]稜鏡の鎚杖",
        "min_atk": 370,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 50,
        "max_atk": 2230,
        "rarelity": "SSR",
        "max_hp": 298,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "氷晶杖",
        "min_atk": 340,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 48,
        "max_atk": 2080,
        "rarelity": "SSR",
        "max_hp": 280,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[春呼杖]氷晶杖",
        "min_atk": 340,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 48,
        "max_atk": 340,
        "rarelity": "SSR",
        "max_hp": 48,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "封鍵クラウストルム",
        "min_atk": 365,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 49,
        "max_atk": 2195,
        "rarelity": "SSR",
        "max_hp": 293,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[禁呪]封鍵クラウストルム",
        "min_atk": 365,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 49,
        "max_atk": 2560,
        "rarelity": "SSR",
        "max_hp": 342,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "ウロボロス",
        "min_atk": 355,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 49,
        "max_atk": 2155,
        "rarelity": "SSR",
        "max_hp": 289,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[蛇創杖]ウロボロス",
        "min_atk": 355,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 49,
        "max_atk": 2520,
        "rarelity": "SSR",
        "max_hp": 337,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "イリュージョンセプター",
        "min_atk": 370,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 46,
        "max_atk": 2170,
        "rarelity": "SSR",
        "max_hp": 286,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[万魔杖]イリュージョンセプター",
        "min_atk": 370,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 46,
        "max_atk": 2530,
        "rarelity": "SSR",
        "max_hp": 334,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[陽花]サンフラワーワンド",
        "min_atk": 360,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 44,
        "max_atk": 2100,
        "rarelity": "SSR",
        "max_hp": 276,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "レヴィアンセプター・マグナ",
        "min_atk": 305,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 44,
        "max_atk": 1940,
        "rarelity": "SSR",
        "max_hp": 262,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[海叫杖]レヴィアンセプター・マグナ",
        "min_atk": 305,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 44,
        "max_atk": 2270,
        "rarelity": "SSR",
        "max_hp": 306,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "コロッサスケーン・マグナ",
        "min_atk": 325,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 1960,
        "rarelity": "SSR",
        "max_hp": 258,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[烈殻杖]コロッサスケーン・マグナ",
        "min_atk": 325,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2290,
        "rarelity": "SSR",
        "max_hp": 302,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "アンノウンワンド",
        "min_atk": 275,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 1685,
        "rarelity": "SSR",
        "max_hp": 240,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[怪緑杖]アンノウンワンド",
        "min_atk": 275,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 1970,
        "rarelity": "SSR",
        "max_hp": 281,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[守約]プロミス",
        "min_atk": 325,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 1990,
        "rarelity": "SSR",
        "max_hp": 198,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[極叡]五神杖",
        "min_atk": 330,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 44,
        "max_atk": 2040,
        "rarelity": "SSR",
        "max_hp": 272,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[古尊杖]バビロンの導杖",
        "min_atk": 275,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 1730,
        "rarelity": "SSR",
        "max_hp": 232,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[極叡]五神杖・真",
        "min_atk": 360,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 48,
        "max_atk": 2160,
        "rarelity": "SSR",
        "max_hp": 288,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[極愛杖]バレンタインワンド",
        "min_atk": 300,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1755,
        "rarelity": "SSR",
        "max_hp": 227,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[真聖紋]ニルヴァーナ",
        "min_atk": 332,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 44,
        "max_atk": 2053,
        "rarelity": "SSR",
        "max_hp": 274,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[真頴悟]ケラウノス",
        "min_atk": 336,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 66,
        "max_atk": 2105,
        "rarelity": "SSR",
        "max_hp": 231,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[狂輝杖]マギ・リアリジスセプター",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 1735,
        "rarelity": "SSR",
        "max_hp": 231,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[祖龍杖]バハムートスタッフ・ノヴム",
        "min_atk": 360,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 41,
        "max_atk": 2120,
        "rarelity": "SSR",
        "max_hp": 276,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[不叶夢]カーラウロプス",
        "min_atk": 380,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 44,
        "max_atk": 2180,
        "rarelity": "SSR",
        "max_hp": 284,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[福鸚鵡]ゴトルベルケーン",
        "min_atk": 240,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 1500,
        "rarelity": "SSR",
        "max_hp": 200,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[灼劫]セプティアンバーナー",
        "min_atk": 315,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 1900,
        "rarelity": "SSR",
        "max_hp": 250,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[青緑導]ハイロイヤルポール",
        "min_atk": 290,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 1765,
        "rarelity": "SSR",
        "max_hp": 234,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[]トリート・ウロボロス",
        "min_atk": 385,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 45,
        "max_atk": 2215,
        "rarelity": "SSR",
        "max_hp": 289,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[魔封杖]ガンバンテイン",
        "min_atk": 395,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 53,
        "max_atk": 2375,
        "rarelity": "SSR",
        "max_hp": 317,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[聖祝杖]クリスマスワンド",
        "min_atk": 285,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 1795,
        "rarelity": "SSR",
        "max_hp": 241,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "世界樹の雫枝・マグナ",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 43,
        "max_atk": 1945,
        "rarelity": "SSR",
        "max_hp": 261,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[万創杖]世界樹の雫枝・マグナ",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 43,
        "max_atk": 2270,
        "rarelity": "SSR",
        "max_hp": 305,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "カピラヴァストゥ",
        "min_atk": 320,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 46,
        "max_atk": 2040,
        "rarelity": "SSR",
        "max_hp": 276,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[]リング・オブ・サン",
        "min_atk": 375,
        "skill": [
          {
            "type": "bw3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 47,
        "max_atk": 2205,
        "rarelity": "SSR",
        "max_hp": 291,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[祖龍杖]バハムートスタッフ・フツルス",
        "min_atk": 360,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 41,
        "max_atk": 2475,
        "rarelity": "SSR",
        "max_hp": 323,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[律導杖]ロッド・オブ・コスモス",
        "min_atk": 341,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 46,
        "max_atk": 2107,
        "rarelity": "SSR",
        "max_hp": 281,
        "type_name": "杖"
      },
      {
        "attribute": "火",
        "type": "stuff",
        "name": "[熱源]マグマストリーム",
        "min_atk": 295,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 1770,
        "rarelity": "SSR",
        "max_hp": 232,
        "type_name": "杖"
      },
      {
        "attribute": "風",
        "type": "stuff",
        "name": "[聖白]ホワイトウイング",
        "min_atk": 375,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 49,
        "max_atk": 2235,
        "rarelity": "SSR",
        "max_hp": 297,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[夜雫典]夢見の書",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 1700,
        "rarelity": "SSR",
        "max_hp": 235,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[譜奏律]フォニックロッド",
        "min_atk": 280,
        "skill": [
          {
            "type": "bw2",
            "slot": "ex"
          },
          {
            "type": "kj1",
            "slot": "ex"
          }
        ],
        "min_hp": 37,
        "max_atk": 1730,
        "rarelity": "SSR",
        "max_hp": 230,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "[遥竜杖]ウィーブルロッド",
        "min_atk": 300,
        "skill": [
          {
            "type": "kj3",
            "slot": "ex"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1750,
        "rarelity": "SSR",
        "max_hp": 226,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "白虎牙杖",
        "min_atk": 265,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 1675,
        "rarelity": "SSR",
        "max_hp": 225,
        "type_name": "杖"
      },
      {
        "attribute": "土",
        "type": "stuff",
        "name": "[猛咬喰]白虎牙杖",
        "min_atk": 265,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj3",
            "slot": "normal"
          }
        ],
        "min_hp": 37,
        "max_atk": 1960,
        "rarelity": "SSR",
        "max_hp": 260,
        "type_name": "杖"
      },
      {
        "attribute": "闇",
        "type": "stuff",
        "name": "ブラック・アンド・ダークネス",
        "min_atk": 343,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 2019,
        "rarelity": "SSR",
        "max_hp": 262,
        "type_name": "杖"
      },
      {
        "attribute": "光",
        "type": "stuff",
        "name": "[]キャピュレティオウス",
        "min_atk": 370,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 46,
        "max_atk": 2165,
        "rarelity": "SSR",
        "max_hp": 287,
        "type_name": "杖"
      },
      {
        "attribute": "水",
        "type": "stuff",
        "name": "[]モンタギュオウス",
        "min_atk": 380,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 44,
        "max_atk": 2175,
        "rarelity": "SSR",
        "max_hp": 283,
        "type_name": "杖"
      }
    ],
    "type": "杖"
  },
  {
    "weapons": [
      {
        "attribute": "風",
        "type": "sword",
        "name": "[嵐剣]スパタ",
        "min_atk": 42,
        "skill": [],
        "min_hp": 6,
        "max_atk": 510,
        "rarelity": "N",
        "max_hp": 42,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[嵐剣]ブロンズスパタ",
        "min_atk": 41,
        "skill": [],
        "min_hp": 6,
        "max_atk": 495,
        "rarelity": "N",
        "max_hp": 41,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[炎剣]スチールソード",
        "min_atk": 44,
        "skill": [],
        "min_hp": 7,
        "max_atk": 540,
        "rarelity": "N",
        "max_hp": 44,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[清剣]アイアンレイピア",
        "min_atk": 46,
        "skill": [],
        "min_hp": 6,
        "max_atk": 510,
        "rarelity": "N",
        "max_hp": 46,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[炎剣]ブロンズソード",
        "min_atk": 40,
        "skill": [],
        "min_hp": 6,
        "max_atk": 500,
        "rarelity": "N",
        "max_hp": 40,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[地剣]サーベル",
        "min_atk": 44,
        "skill": [],
        "min_hp": 6,
        "max_atk": 500,
        "rarelity": "N",
        "max_hp": 44,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[地剣]ブロンズサーベル",
        "min_atk": 43,
        "skill": [],
        "min_hp": 6,
        "max_atk": 485,
        "rarelity": "N",
        "max_hp": 43,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[清剣]ブロンズレイピア",
        "min_atk": 44,
        "skill": [],
        "min_hp": 6,
        "max_atk": 480,
        "rarelity": "N",
        "max_hp": 44,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[清剣]ブロードソード",
        "min_atk": 49,
        "skill": [],
        "min_hp": 7,
        "max_atk": 535,
        "rarelity": "N",
        "max_hp": 49,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[炎剣]グラディウス",
        "min_atk": 45,
        "skill": [],
        "min_hp": 7,
        "max_atk": 555,
        "rarelity": "N",
        "max_hp": 45,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[炎剣]ロングソード",
        "min_atk": 41,
        "skill": [],
        "min_hp": 6,
        "max_atk": 515,
        "rarelity": "N",
        "max_hp": 41,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[炎剣]アイアンソード",
        "min_atk": 42,
        "skill": [],
        "min_hp": 6,
        "max_atk": 530,
        "rarelity": "N",
        "max_hp": 42,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[嵐剣]アイアンスパタ",
        "min_atk": 43,
        "skill": [],
        "min_hp": 6,
        "max_atk": 525,
        "rarelity": "N",
        "max_hp": 43,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[地剣]アイアンサーベル",
        "min_atk": 45,
        "skill": [],
        "min_hp": 6,
        "max_atk": 515,
        "rarelity": "N",
        "max_hp": 45,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[嵐剣]スチールスパタ",
        "min_atk": 45,
        "skill": [],
        "min_hp": 7,
        "max_atk": 535,
        "rarelity": "N",
        "max_hp": 45,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[地剣]スチールサーベル",
        "min_atk": 47,
        "skill": [],
        "min_hp": 7,
        "max_atk": 530,
        "rarelity": "N",
        "max_hp": 47,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[清剣]スチールレイピア",
        "min_atk": 48,
        "skill": [],
        "min_hp": 7,
        "max_atk": 520,
        "rarelity": "N",
        "max_hp": 48,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[剛剣]クレイモア",
        "min_atk": 90,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 13,
        "max_atk": 1085,
        "rarelity": "R",
        "max_hp": 90,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[蒼銀剣]ミスリルレイピア",
        "min_atk": 68,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 10,
        "max_atk": 760,
        "rarelity": "R",
        "max_hp": 68,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[断魔]アネラス",
        "min_atk": 92,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 1115,
        "rarelity": "R",
        "max_hp": 92,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[潰打]ファルシオン",
        "min_atk": 95,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 14,
        "max_atk": 1140,
        "rarelity": "R",
        "max_hp": 95,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[雷光]サンダーレイピア",
        "min_atk": 99,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 16,
        "max_atk": 1155,
        "rarelity": "R",
        "max_hp": 99,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[蒼銀剣]ミスリルソード",
        "min_atk": 64,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 10,
        "max_atk": 780,
        "rarelity": "R",
        "max_hp": 64,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[蒼銀剣]ミスリルスパタ",
        "min_atk": 65,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 10,
        "max_atk": 775,
        "rarelity": "R",
        "max_hp": 65,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[蒼銀剣]ミスリルサーベル",
        "min_atk": 67,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 10,
        "max_atk": 765,
        "rarelity": "R",
        "max_hp": 67,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[緋焔]ファイアソード",
        "min_atk": 97,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 14,
        "max_atk": 1165,
        "rarelity": "R",
        "max_hp": 97,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[]バスターソード",
        "min_atk": 104,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1205,
        "rarelity": "R",
        "max_hp": 104,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[帝斬]インペリアルショテル",
        "min_atk": 69,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 11,
        "max_atk": 780,
        "rarelity": "R",
        "max_hp": 69,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[琥曲]アースカトラス",
        "min_atk": 100,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 17,
        "max_atk": 1145,
        "rarelity": "R",
        "max_hp": 100,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[凍刃]氷釘",
        "min_atk": 97,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1160,
        "rarelity": "R",
        "max_hp": 97,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[光風]ライトブリンガー",
        "min_atk": 90,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 15,
        "max_atk": 1200,
        "rarelity": "R",
        "max_hp": 90,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[陽幻]フレイムレイピア",
        "min_atk": 99,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 1190,
        "rarelity": "R",
        "max_hp": 99,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[氷刃]アイスソード",
        "min_atk": 103,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1170,
        "rarelity": "R",
        "max_hp": 103,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[誓剣]サイフォス",
        "min_atk": 102,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1180,
        "rarelity": "R",
        "max_hp": 102,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[純剣]トゥハンドソード",
        "min_atk": 98,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 17,
        "max_atk": 1125,
        "rarelity": "R",
        "max_hp": 98,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[祭剣]ダークソード",
        "min_atk": 95,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 12,
        "max_atk": 1175,
        "rarelity": "R",
        "max_hp": 95,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[海老竿]シュリンプルアー",
        "min_atk": 105,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 19,
        "max_atk": 1200,
        "rarelity": "R",
        "max_hp": 105,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[老手剣]オールドソード",
        "min_atk": 100,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1190,
        "rarelity": "R",
        "max_hp": 100,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[紙束]ハリセン",
        "min_atk": 100,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1150,
        "rarelity": "R",
        "max_hp": 100,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[紋剣]ホワイトソード",
        "min_atk": 108,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1220,
        "rarelity": "R",
        "max_hp": 108,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[]グラスティアー",
        "min_atk": 101,
        "skill": [
          {
            "type": "bw1",
            "slot": "normal"
          }
        ],
        "min_hp": 16,
        "max_atk": 1175,
        "rarelity": "R",
        "max_hp": 101,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[]木剣",
        "min_atk": 104,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1205,
        "rarelity": "R",
        "max_hp": 104,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[煎餅用]焼鏝",
        "min_atk": 101,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1220,
        "rarelity": "R",
        "max_hp": 101,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[櫛鍮]ハイメタルコーム",
        "min_atk": 100,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1145,
        "rarelity": "R",
        "max_hp": 100,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[]ブルークレスト",
        "min_atk": 94,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1100,
        "rarelity": "R",
        "max_hp": 94,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[天使]エンジェルソード",
        "min_atk": 40,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 40,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[閑麗]アロンダイト",
        "min_atk": 290,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1750,
        "rarelity": "SR",
        "max_hp": 150,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[帯薙]イルウーン",
        "min_atk": 285,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 1740,
        "rarelity": "SR",
        "max_hp": 150,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[讐心]フラガラッハ",
        "min_atk": 300,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1755,
        "rarelity": "SR",
        "max_hp": 147,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[破幸]ティルヴァング",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1700,
        "rarelity": "SR",
        "max_hp": 140,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[嵐竜剣]ティアマトブレード",
        "min_atk": 220,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1375,
        "rarelity": "SR",
        "max_hp": 117,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[羅象剣]世界樹の晶剣",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1410,
        "rarelity": "SR",
        "max_hp": 122,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[灼業剣]イフリートブレード",
        "min_atk": 225,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1380,
        "rarelity": "SR",
        "max_hp": 116,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[]ティソーナ",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1735,
        "rarelity": "SR",
        "max_hp": 151,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[宿輪環]カダラ",
        "min_atk": 220,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1340,
        "rarelity": "SR",
        "max_hp": 112,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[澄刃]アルマス",
        "min_atk": 290,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 1795,
        "rarelity": "SR",
        "max_hp": 157,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[瑠璃剣]タンザナイトソード",
        "min_atk": 270,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 1670,
        "rarelity": "SR",
        "max_hp": 146,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[百首鬼]ラム・ダオ",
        "min_atk": 290,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1690,
        "rarelity": "SR",
        "max_hp": 142,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[呪剣]マボムバーム",
        "min_atk": 295,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1800,
        "rarelity": "SR",
        "max_hp": 156,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[王華]ロイヤルレイピア",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1700,
        "rarelity": "SR",
        "max_hp": 165,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[執愛]ラスト",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1765,
        "rarelity": "SR",
        "max_hp": 145,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[氷冥剣]マケブランケ",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1360,
        "rarelity": "SR",
        "max_hp": 120,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[密智剣]ネフティスレイピア",
        "min_atk": 225,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1400,
        "rarelity": "SR",
        "max_hp": 118,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[輝騎剣]シュヴァリエソード",
        "min_atk": 225,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1415,
        "rarelity": "SR",
        "max_hp": 121,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[波閃]リプルレイピア",
        "min_atk": 295,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 1830,
        "rarelity": "SR",
        "max_hp": 159,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[旋風剣]スカートチェイサー",
        "min_atk": 285,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1685,
        "rarelity": "SR",
        "max_hp": 143,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[悪閃]無垢白刃",
        "min_atk": 315,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1800,
        "rarelity": "SR",
        "max_hp": 147,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[星鎧剣]サジタリウスブレード",
        "min_atk": 230,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1420,
        "rarelity": "SR",
        "max_hp": 120,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[失聖]朽ち果てた剣",
        "min_atk": 1,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 1,
        "max_atk": 96,
        "rarelity": "SR",
        "max_hp": 30,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[灯輝]ランタンブレード",
        "min_atk": 245,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1540,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[古尊剣]バビロンの刀剣",
        "min_atk": 210,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1365,
        "rarelity": "SR",
        "max_hp": 119,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[火符]護焔の剣",
        "min_atk": 306,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1785,
        "rarelity": "SR",
        "max_hp": 150,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[蒼空]旅立ちの剣",
        "min_atk": 250,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1500,
        "rarelity": "SR",
        "max_hp": 120,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[愁歎剣]ブランウェンレイピア",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1405,
        "rarelity": "SR",
        "max_hp": 123,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[狂輝剣]マギ・パニッシュメントソード",
        "min_atk": 215,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1370,
        "rarelity": "SR",
        "max_hp": 118,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[祖龍剣]バハムートソード",
        "min_atk": 285,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1685,
        "rarelity": "SR",
        "max_hp": 139,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[]タンザナイトソード・ミコー",
        "min_atk": 310,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1810,
        "rarelity": "SR",
        "max_hp": 152,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[不融剣]コントラリーソード",
        "min_atk": 230,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1400,
        "rarelity": "SR",
        "max_hp": 117,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[鋼電剣]エレクトロソード",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1390,
        "rarelity": "SR",
        "max_hp": 119,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[]パイレーツソード",
        "min_atk": 295,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1750,
        "rarelity": "SR",
        "max_hp": 148,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[幽撲鞭]オーラウィップ",
        "min_atk": 295,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1775,
        "rarelity": "SR",
        "max_hp": 152,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[オイラは]ビィスタードソード",
        "min_atk": 250,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1350,
        "rarelity": "SR",
        "max_hp": 110,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[廉剣]白竜騎士団制式帯剣",
        "min_atk": 235,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1425,
        "rarelity": "SR",
        "max_hp": 119,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[寿樹]まゆ玉",
        "min_atk": 223,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1370,
        "rarelity": "SR",
        "max_hp": 118,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[釘棍]釘バット",
        "min_atk": 225,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1470,
        "rarelity": "SR",
        "max_hp": 110,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[形見鍋]フライパン",
        "min_atk": 290,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 1770,
        "rarelity": "SR",
        "max_hp": 153,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[蒼誓]アルビオン制式帯剣",
        "min_atk": 250,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1350,
        "rarelity": "SR",
        "max_hp": 110,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[]デルタ・モヌメン",
        "min_atk": 285,
        "skill": [
          {
            "type": "bw2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1680,
        "rarelity": "SR",
        "max_hp": 144,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[猛炎剣]スヴァルカトラス",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1355,
        "rarelity": "SR",
        "max_hp": 120,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[大天使]アークエンジェルソード",
        "min_atk": 10,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "SR",
        "max_hp": 40,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "ダーインスレイブ",
        "min_atk": 445,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 2580,
        "rarelity": "SSR",
        "max_hp": 216,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[吸血剣]ダーインスレイブ",
        "min_atk": 445,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 3010,
        "rarelity": "SSR",
        "max_hp": 253,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "デュランダル",
        "min_atk": 410,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2510,
        "rarelity": "SSR",
        "max_hp": 218,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[不滅刃]デュランダル",
        "min_atk": 410,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 3035,
        "rarelity": "SSR",
        "max_hp": 263,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[龍戮]アスカロン",
        "min_atk": 415,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2515,
        "rarelity": "SSR",
        "max_hp": 217,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[始祖聖]カラドボルグ",
        "min_atk": 435,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2600,
        "rarelity": "SSR",
        "max_hp": 224,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[災神器]レーヴァテイン",
        "min_atk": 435,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2565,
        "rarelity": "SSR",
        "max_hp": 217,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[澄清宝]オートクレール",
        "min_atk": 440,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2640,
        "rarelity": "SSR",
        "max_hp": 226,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "ジュワユース",
        "min_atk": 430,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2560,
        "rarelity": "SSR",
        "max_hp": 218,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[宝輝剣]ジュワユース",
        "min_atk": 430,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 3090,
        "rarelity": "SSR",
        "max_hp": 264,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "宝剣アンダリス",
        "min_atk": 400,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2430,
        "rarelity": "SSR",
        "max_hp": 210,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[大賢聖]宝剣アンダリス",
        "min_atk": 400,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2940,
        "rarelity": "SSR",
        "max_hp": 245,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "輝剣クラウ・ソラス",
        "min_atk": 415,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 2550,
        "rarelity": "SSR",
        "max_hp": 222,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[聖輝流]輝剣クラウ・ソラス",
        "min_atk": 415,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 415,
        "rarelity": "SSR",
        "max_hp": 39,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[水恵剣]マナウィダンブレード",
        "min_atk": 315,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2015,
        "rarelity": "SSR",
        "max_hp": 175,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[聖刻]七星剣",
        "min_atk": 420,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2500,
        "rarelity": "SSR",
        "max_hp": 213,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "フロッティ",
        "min_atk": 425,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2560,
        "rarelity": "SSR",
        "max_hp": 220,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[輝勲]フロッティ",
        "min_atk": 425,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 425,
        "rarelity": "SSR",
        "max_hp": 37,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[魚斬]アルバコアブレード",
        "min_atk": 345,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2045,
        "rarelity": "SSR",
        "max_hp": 169,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "世界樹の晶剣・マグナ",
        "min_atk": 365,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2270,
        "rarelity": "SSR",
        "max_hp": 196,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[万創剣]世界樹の晶剣・マグナ",
        "min_atk": 365,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2650,
        "rarelity": "SSR",
        "max_hp": 229,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "バルムンク",
        "min_atk": 335,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2035,
        "rarelity": "SSR",
        "max_hp": 171,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[青焔]バルムンク",
        "min_atk": 335,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "bw1",
            "slot": "normal"
          }
        ],
        "min_hp": 26,
        "max_atk": 2380,
        "rarelity": "SSR",
        "max_hp": 200,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[聖刻]七星剣・真",
        "min_atk": 420,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2520,
        "rarelity": "SSR",
        "max_hp": 216,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[魂喰]ミストルテイン",
        "min_atk": 440,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2540,
        "rarelity": "SSR",
        "max_hp": 212,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[禍風剣]風神剣",
        "min_atk": 330,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2030,
        "rarelity": "SSR",
        "max_hp": 172,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[怪緑剣]アンノウンソード",
        "min_atk": 340,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2065,
        "rarelity": "SSR",
        "max_hp": 174,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[極愛剣]バレンタインソード",
        "min_atk": 325,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 2025,
        "rarelity": "SSR",
        "max_hp": 173,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[真救天]スコフニュング",
        "min_atk": 377,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2385,
        "rarelity": "SSR",
        "max_hp": 207,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[狂恋剣]ラスト・シン",
        "min_atk": 445,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 2580,
        "rarelity": "SSR",
        "max_hp": 216,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[祖龍剣]バハムートソード・ノヴム",
        "min_atk": 415,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2470,
        "rarelity": "SSR",
        "max_hp": 205,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[炎奏華]ローエングリン",
        "min_atk": 444,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 35,
        "max_atk": 2615,
        "rarelity": "SSR",
        "max_hp": 221,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[始原霊]フェアーソード",
        "min_atk": 330,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2015,
        "rarelity": "SSR",
        "max_hp": 173,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[蒼誓剣]ミュルグレス",
        "min_atk": 450,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 42,
        "max_atk": 2760,
        "rarelity": "SSR",
        "max_hp": 240,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[古黒刃]ディープデザイア",
        "min_atk": 420,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2555,
        "rarelity": "SSR",
        "max_hp": 221,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[万断剣]大地の剣",
        "min_atk": 351,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2201,
        "rarelity": "SSR",
        "max_hp": 190,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[黒彩宝]オブシダンソード",
        "min_atk": 335,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1980,
        "rarelity": "SSR",
        "max_hp": 164,
        "type_name": "剣"
      },
      {
        "attribute": "土",
        "type": "sword",
        "name": "[麗香茸]ウットリュフ串",
        "min_atk": 320,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 2020,
        "rarelity": "SSR",
        "max_hp": 174,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[滅龍剣]グラム",
        "min_atk": 455,
        "skill": [
          {
            "type": "bw3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 2625,
        "rarelity": "SSR",
        "max_hp": 219,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[烈光]光の剣",
        "min_atk": 350,
        "skill": [
          {
            "type": "kj3",
            "slot": "ex"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 2045,
        "rarelity": "SSR",
        "max_hp": 167,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[斬妖]ブラスト・ソード",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj3",
            "slot": "ex"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2010,
        "rarelity": "SSR",
        "max_hp": 176,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[幽麗鞭]オーラフラジェルム",
        "min_atk": 450,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2690,
        "rarelity": "SSR",
        "max_hp": 230,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[真極閃]アシュケロン",
        "min_atk": 397,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2405,
        "rarelity": "SSR",
        "max_hp": 203,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[]オールド・エッケザックス",
        "min_atk": 278,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "bw1",
            "slot": "magna"
          }
        ],
        "min_hp": 106,
        "max_atk": 1677,
        "rarelity": "SSR",
        "max_hp": 664,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[巨轟剣]エッケザックス",
        "min_atk": 278,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "bw1",
            "slot": "normal"
          }
        ],
        "min_hp": 106,
        "max_atk": 1677,
        "rarelity": "SSR",
        "max_hp": 664,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "シュヴァリエソード・マグナ",
        "min_atk": 370,
        "skill": [
          {
            "type": "kj1",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2275,
        "rarelity": "SSR",
        "max_hp": 195,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[崇騎剣]シュヴァリエソード・マグナ",
        "min_atk": 370,
        "skill": [
          {
            "type": "kj1",
            "slot": "magna"
          },
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 31,
        "max_atk": 2660,
        "rarelity": "SSR",
        "max_hp": 228,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[哭牙]ショロトルリッパー",
        "min_atk": 350,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 2050,
        "rarelity": "SSR",
        "max_hp": 168,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[祖龍剣]バハムートソード・フツルス",
        "min_atk": 415,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2885,
        "rarelity": "SSR",
        "max_hp": 240,
        "type_name": "剣"
      },
      {
        "attribute": "光",
        "type": "sword",
        "name": "[律導剣]ソード・オブ・コスモス",
        "min_atk": 398,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2458,
        "rarelity": "SSR",
        "max_hp": 211,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[誓花]コートシップ・ブーケ",
        "min_atk": 332,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2020,
        "rarelity": "SSR",
        "max_hp": 174,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[黒哭]ディスペアー",
        "min_atk": 460,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2665,
        "rarelity": "SSR",
        "max_hp": 223,
        "type_name": "剣"
      },
      {
        "attribute": "闇",
        "type": "sword",
        "name": "[守護剣]ブルトガング",
        "min_atk": 480,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2790,
        "rarelity": "SSR",
        "max_hp": 234,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[焔ノ剣]S・D",
        "min_atk": 335,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2025,
        "rarelity": "SSR",
        "max_hp": 170,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "青竜髭刃",
        "min_atk": 320,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 1965,
        "rarelity": "SSR",
        "max_hp": 167,
        "type_name": "剣"
      },
      {
        "attribute": "風",
        "type": "sword",
        "name": "[逆鱗鞭]青竜髭刃",
        "min_atk": 320,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj3",
            "slot": "normal"
          }
        ],
        "min_hp": 26,
        "max_atk": 2290,
        "rarelity": "SSR",
        "max_hp": 200,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[美然剣]アントウェルペン",
        "min_atk": 440,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2535,
        "rarelity": "SSR",
        "max_hp": 210,
        "type_name": "剣"
      },
      {
        "attribute": "火",
        "type": "sword",
        "name": "[赫照剣]パラスの剣",
        "min_atk": 387,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2342,
        "rarelity": "SSR",
        "max_hp": 198,
        "type_name": "剣"
      },
      {
        "attribute": "水",
        "type": "sword",
        "name": "[白氷剣]ナーゲルリング",
        "min_atk": 410,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2500,
        "rarelity": "SSR",
        "max_hp": 217,
        "type_name": "剣"
      }
    ],
    "type": "剣"
  },
  {
    "weapons": [
      {
        "attribute": "火",
        "type": "axe",
        "name": "[炎斧]ブロンズアックス",
        "min_atk": 35,
        "skill": [],
        "min_hp": 5,
        "max_atk": 525,
        "rarelity": "N",
        "max_hp": 35,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[炎斧]スチールアックス",
        "min_atk": 39,
        "skill": [],
        "min_hp": 6,
        "max_atk": 565,
        "rarelity": "N",
        "max_hp": 39,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[清斧]ブロンズザグナル",
        "min_atk": 39,
        "skill": [],
        "min_hp": 5,
        "max_atk": 505,
        "rarelity": "N",
        "max_hp": 39,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[嵐斧]スチールカリンガ",
        "min_atk": 40,
        "skill": [],
        "min_hp": 6,
        "max_atk": 560,
        "rarelity": "N",
        "max_hp": 40,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[地斧]アイアンハンマー",
        "min_atk": 40,
        "skill": [],
        "min_hp": 6,
        "max_atk": 540,
        "rarelity": "N",
        "max_hp": 40,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[嵐斧]ブロンズカリンガ",
        "min_atk": 36,
        "skill": [],
        "min_hp": 5,
        "max_atk": 520,
        "rarelity": "N",
        "max_hp": 36,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[地斧]ブロンズハンマー",
        "min_atk": 38,
        "skill": [],
        "min_hp": 5,
        "max_atk": 510,
        "rarelity": "N",
        "max_hp": 38,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[炎斧]アイアンアックス",
        "min_atk": 37,
        "skill": [],
        "min_hp": 6,
        "max_atk": 555,
        "rarelity": "N",
        "max_hp": 37,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[清斧]アイアンザグナル",
        "min_atk": 41,
        "skill": [],
        "min_hp": 6,
        "max_atk": 535,
        "rarelity": "N",
        "max_hp": 41,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[嵐斧]アイアンカリンガ",
        "min_atk": 38,
        "skill": [],
        "min_hp": 6,
        "max_atk": 550,
        "rarelity": "N",
        "max_hp": 38,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[清斧]スチールザグナル",
        "min_atk": 43,
        "skill": [],
        "min_hp": 6,
        "max_atk": 545,
        "rarelity": "N",
        "max_hp": 43,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[地斧]スチールハンマー",
        "min_atk": 42,
        "skill": [],
        "min_hp": 6,
        "max_atk": 550,
        "rarelity": "N",
        "max_hp": 42,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[清斧]ポールアックス",
        "min_atk": 44,
        "skill": [],
        "min_hp": 6,
        "max_atk": 560,
        "rarelity": "N",
        "max_hp": 44,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[嵐斧]ウォーピック",
        "min_atk": 41,
        "skill": [],
        "min_hp": 6,
        "max_atk": 575,
        "rarelity": "N",
        "max_hp": 41,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[曲月]タバール",
        "min_atk": 86,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 14,
        "max_atk": 1185,
        "rarelity": "R",
        "max_hp": 86,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[戦闘斧]バトルアックス",
        "min_atk": 80,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 12,
        "max_atk": 1140,
        "rarelity": "R",
        "max_hp": 80,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[雷斤]サンダーカリンガ",
        "min_atk": 88,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 14,
        "max_atk": 1210,
        "rarelity": "R",
        "max_hp": 88,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[地砕]アースザグナル",
        "min_atk": 89,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 15,
        "max_atk": 1205,
        "rarelity": "R",
        "max_hp": 89,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[蒼銀斧]ミスリルアックス",
        "min_atk": 57,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 9,
        "max_atk": 815,
        "rarelity": "R",
        "max_hp": 57,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[蒼銀斧]ミスリルザグナル",
        "min_atk": 61,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 9,
        "max_atk": 795,
        "rarelity": "R",
        "max_hp": 61,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[蒼銀斧]ミスリルハンマー",
        "min_atk": 60,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 9,
        "max_atk": 800,
        "rarelity": "R",
        "max_hp": 60,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[蒼銀斧]ミスリルカリンガ",
        "min_atk": 58,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 9,
        "max_atk": 810,
        "rarelity": "R",
        "max_hp": 58,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[断振]バルディッシュ",
        "min_atk": 86,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 16,
        "max_atk": 1145,
        "rarelity": "R",
        "max_hp": 86,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[豪猛]クリムゾンアックス",
        "min_atk": 60,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 10,
        "max_atk": 825,
        "rarelity": "R",
        "max_hp": 60,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[巌斧]ロックハンマー",
        "min_atk": 93,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1255,
        "rarelity": "R",
        "max_hp": 93,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[穹斧]スカイトマホーク",
        "min_atk": 83,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 13,
        "max_atk": 1155,
        "rarelity": "R",
        "max_hp": 83,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[収穫器]ハーベスター",
        "min_atk": 88,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1170,
        "rarelity": "R",
        "max_hp": 88,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[圧撃]ドラブンハンマー",
        "min_atk": 98,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1125,
        "rarelity": "R",
        "max_hp": 98,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[戦臨]傭兵の斧",
        "min_atk": 114,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 17,
        "max_atk": 1040,
        "rarelity": "R",
        "max_hp": 114,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[刑具]ネックチョッパー",
        "min_atk": 84,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 10,
        "max_atk": 1230,
        "rarelity": "R",
        "max_hp": 84,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[嵐旋]ウィンドアックス",
        "min_atk": 87,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 13,
        "max_atk": 1215,
        "rarelity": "R",
        "max_hp": 87,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[鋼棘]モーニングスター",
        "min_atk": 92,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 15,
        "max_atk": 1265,
        "rarelity": "R",
        "max_hp": 92,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[鍛冶鋏]アイアンペンチ",
        "min_atk": 82,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 1165,
        "rarelity": "R",
        "max_hp": 82,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[天使]エンジェルアックス",
        "min_atk": 40,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 40,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[]アクゥ",
        "min_atk": 215,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1390,
        "rarelity": "SR",
        "max_hp": 102,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[朱戦斧]ショカ",
        "min_atk": 300,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1820,
        "rarelity": "SR",
        "max_hp": 134,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[千齧]ブローバ",
        "min_atk": 295,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1815,
        "rarelity": "SR",
        "max_hp": 135,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[万馬斧]ホースマンズハンマー",
        "min_atk": 305,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1825,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[]ブージ",
        "min_atk": 315,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1890,
        "rarelity": "SR",
        "max_hp": 138,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[]ジャッドバラアクス",
        "min_atk": 305,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1880,
        "rarelity": "SR",
        "max_hp": 140,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[嵐竜斧]ティアマトアムード",
        "min_atk": 230,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1440,
        "rarelity": "SR",
        "max_hp": 104,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[機殻斧]コロッサスハーケン",
        "min_atk": 240,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1470,
        "rarelity": "SR",
        "max_hp": 104,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[悉断]フットマンズアックス",
        "min_atk": 252,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1500,
        "rarelity": "SR",
        "max_hp": 120,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[陽槌]サンハンマー",
        "min_atk": 320,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1925,
        "rarelity": "SR",
        "max_hp": 140,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[水恵斧]マナウィダンハーケン",
        "min_atk": 215,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1425,
        "rarelity": "SR",
        "max_hp": 107,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[輝騎斧]シュヴァリエブージ",
        "min_atk": 235,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1480,
        "rarelity": "SR",
        "max_hp": 108,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[灼業斧]イフリートアクス",
        "min_atk": 235,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1450,
        "rarelity": "SR",
        "max_hp": 103,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[幽霧斧]セレストザグナル",
        "min_atk": 255,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 1500,
        "rarelity": "SR",
        "max_hp": 104,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[星鎧斧]サジタリウスアックス",
        "min_atk": 240,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1490,
        "rarelity": "SR",
        "max_hp": 107,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[水神斧]ポセイドンハーケン",
        "min_atk": 215,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1425,
        "rarelity": "SR",
        "max_hp": 107,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[怪緑斧]アンノウンハンマー",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1410,
        "rarelity": "SR",
        "max_hp": 116,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[崩礎]朽ち果てた斧",
        "min_atk": 1,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 1,
        "max_atk": 96,
        "rarelity": "SR",
        "max_hp": 30,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[禍風斧]風司の鉞",
        "min_atk": 230,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1440,
        "rarelity": "SR",
        "max_hp": 104,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[凶戮]ヴォウジェ",
        "min_atk": 325,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1845,
        "rarelity": "SR",
        "max_hp": 129,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[祖龍斧]バハムートアクス",
        "min_atk": 300,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1765,
        "rarelity": "SR",
        "max_hp": 123,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[工魂]グレートハンマー",
        "min_atk": 305,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1855,
        "rarelity": "SR",
        "max_hp": 136,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[祝搗]杵",
        "min_atk": 245,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 1450,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[金塊棍]ゴールデンダッグ",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1860,
        "rarelity": "SR",
        "max_hp": 135,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[豪爆斧]マッシヴアクス",
        "min_atk": 315,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1835,
        "rarelity": "SR",
        "max_hp": 131,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[麗腰]レザーベルト",
        "min_atk": 220,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1415,
        "rarelity": "SR",
        "max_hp": 115,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[]メタルハマー",
        "min_atk": 240,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 1415,
        "rarelity": "SR",
        "max_hp": 97,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[]クラウドトマホーク",
        "min_atk": 310,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1830,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[]フレイメルンハンマー",
        "min_atk": 310,
        "skill": [
          {
            "type": "bw2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1880,
        "rarelity": "SR",
        "max_hp": 138,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[鋼電斧]エレクトロアックス",
        "min_atk": 245,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 1455,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[大天使]アークエンジェルアクス",
        "min_atk": 10,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "SR",
        "max_hp": 40,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "ウコンバサラ",
        "min_atk": 425,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2550,
        "rarelity": "SSR",
        "max_hp": 186,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[万雷斧]ウコンバサラ",
        "min_atk": 425,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2980,
        "rarelity": "SSR",
        "max_hp": 217,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "スラーンド",
        "min_atk": 430,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2630,
        "rarelity": "SSR",
        "max_hp": 194,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[狂奔]スラーンド",
        "min_atk": 430,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 3180,
        "rarelity": "SSR",
        "max_hp": 234,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "パラシュ",
        "min_atk": 440,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2680,
        "rarelity": "SSR",
        "max_hp": 196,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[断魔]パラシュ",
        "min_atk": 440,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj2",
            "slot": "normal"
          }
        ],
        "min_hp": 34,
        "max_atk": 3240,
        "rarelity": "SSR",
        "max_hp": 237,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[鳳凰斧]不死鳥の翼斧",
        "min_atk": 350,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 2120,
        "rarelity": "SSR",
        "max_hp": 152,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "閃刃の剣斧",
        "min_atk": 440,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2640,
        "rarelity": "SSR",
        "max_hp": 190,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[矜持の証]閃刃の剣斧",
        "min_atk": 440,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 3170,
        "rarelity": "SSR",
        "max_hp": 228,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "緋紋の絢斧",
        "min_atk": 450,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2650,
        "rarelity": "SSR",
        "max_hp": 190,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[緋絢]緋紋の絢斧",
        "min_atk": 450,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 3090,
        "rarelity": "SSR",
        "max_hp": 222,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[蛇神斧]ミドガルドの裂斧",
        "min_atk": 335,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2115,
        "rarelity": "SSR",
        "max_hp": 155,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "ティアマトアムード・マグナ",
        "min_atk": 390,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2390,
        "rarelity": "SSR",
        "max_hp": 172,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[吼嵐斧]ティアマトアムード・マグナ",
        "min_atk": 390,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2870,
        "rarelity": "SSR",
        "max_hp": 206,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[百煌斧]ヘカトンケイレス",
        "min_atk": 340,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 2120,
        "rarelity": "SSR",
        "max_hp": 154,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "シュヴァリエブージ・マグナ",
        "min_atk": 385,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 2385,
        "rarelity": "SSR",
        "max_hp": 173,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[崇騎斧]シュヴァリエブージ・マグナ",
        "min_atk": 385,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 2790,
        "rarelity": "SSR",
        "max_hp": 202,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[邪眼]ヴァサーゴ",
        "min_atk": 460,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 2660,
        "rarelity": "SSR",
        "max_hp": 188,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[歴礎]三寅斧",
        "min_atk": 405,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 2495,
        "rarelity": "SSR",
        "max_hp": 181,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "セレストザグナル・マグナ",
        "min_atk": 405,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2405,
        "rarelity": "SSR",
        "max_hp": 169,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[幽絶斧]セレストザグナル・マグナ",
        "min_atk": 405,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2810,
        "rarelity": "SSR",
        "max_hp": 198,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "グレイプニル",
        "min_atk": 330,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2110,
        "rarelity": "SSR",
        "max_hp": 156,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[暴狼斧]グレイプニル",
        "min_atk": 330,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 27,
        "max_atk": 2465,
        "rarelity": "SSR",
        "max_hp": 182,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[歴礎]三寅斧・真",
        "min_atk": 440,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2640,
        "rarelity": "SSR",
        "max_hp": 192,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[真覇王]アヴェンジャー",
        "min_atk": 416,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 2519,
        "rarelity": "SSR",
        "max_hp": 180,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[祖龍斧]バハムートアクス・ノヴム",
        "min_atk": 435,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2585,
        "rarelity": "SSR",
        "max_hp": 183,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[怪桃斧]アンノウンスタンプ",
        "min_atk": 340,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2141,
        "rarelity": "SSR",
        "max_hp": 157,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[輝影斧]ヴェセラゴハーケン",
        "min_atk": 345,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 2150,
        "rarelity": "SSR",
        "max_hp": 157,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "玄武甲槌",
        "min_atk": 320,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2045,
        "rarelity": "SSR",
        "max_hp": 151,
        "type_name": "斧"
      },
      {
        "attribute": "水",
        "type": "axe",
        "name": "[堅流]玄武甲槌",
        "min_atk": 320,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2480,
        "rarelity": "SSR",
        "max_hp": 180,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[聖角斧]レインディアーホーン",
        "min_atk": 345,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2175,
        "rarelity": "SSR",
        "max_hp": 159,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[葬奏斧]フライアウェイ",
        "min_atk": 455,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2695,
        "rarelity": "SSR",
        "max_hp": 193,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[祖龍斧]バハムートアクス・フツルス",
        "min_atk": 435,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 3015,
        "rarelity": "SSR",
        "max_hp": 214,
        "type_name": "斧"
      },
      {
        "attribute": "光",
        "type": "axe",
        "name": "[律導斧]サイス・オブ・コスモス",
        "min_atk": 417,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2575,
        "rarelity": "SSR",
        "max_hp": 187,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "ブラックアックス",
        "min_atk": 350,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 2130,
        "rarelity": "SSR",
        "max_hp": 150,
        "type_name": "斧"
      },
      {
        "attribute": "火",
        "type": "axe",
        "name": "[怪黒斧]ブラックアックス",
        "min_atk": 350,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 2490,
        "rarelity": "SSR",
        "max_hp": 175,
        "type_name": "斧"
      },
      {
        "attribute": "闇",
        "type": "axe",
        "name": "[]ソウルイーター",
        "min_atk": 465,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 2705,
        "rarelity": "SSR",
        "max_hp": 191,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[]黒旋風",
        "min_atk": 350,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2151,
        "rarelity": "SSR",
        "max_hp": 155,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[勇猛]ブラビューラ",
        "min_atk": 450,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2725,
        "rarelity": "SSR",
        "max_hp": 199,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[轟裂爆]ソロモンドライブ",
        "min_atk": 390,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "bw1",
            "slot": "normal"
          }
        ],
        "min_hp": 30,
        "max_atk": 2438,
        "rarelity": "SSR",
        "max_hp": 179,
        "type_name": "斧"
      },
      {
        "attribute": "風",
        "type": "axe",
        "name": "[木鬚斧]ファンゴルン",
        "min_atk": 345,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2120,
        "rarelity": "SSR",
        "max_hp": 150,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "マルメテル・ハンマー",
        "min_atk": 360,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 2140,
        "rarelity": "SSR",
        "max_hp": 174,
        "type_name": "斧"
      },
      {
        "attribute": "土",
        "type": "axe",
        "name": "[渦々斧]マルメテル・ハンマー",
        "min_atk": 360,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 2495,
        "rarelity": "SSR",
        "max_hp": 174,
        "type_name": "斧"
      }
    ],
    "type": "斧"
  },
  {
    "weapons": [
      {
        "attribute": "光",
        "type": "none",
        "name": "[継承]ウェポンミラージュ",
        "min_atk": 20,
        "skill": [],
        "min_hp": 1,
        "max_atk": 50,
        "rarelity": "N",
        "max_hp": 20,
        "type_name": "素材"
      },
      {
        "attribute": "闇",
        "type": "none",
        "name": "[小悪魔]プチデビルエレメント",
        "min_atk": 30,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 3,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 30,
        "type_name": "素材"
      },
      {
        "attribute": "闇",
        "type": "none",
        "name": "[悪魔]デビルエレメント",
        "min_atk": 100,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 300,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "素材"
      }
    ],
    "type": "素材"
  },
  {
    "weapons": [
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[炎刃]ダガー",
        "min_atk": 46,
        "skill": [],
        "min_hp": 7,
        "max_atk": 490,
        "rarelity": "N",
        "max_hp": 46,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[炎刃]ブロンズダガー",
        "min_atk": 45,
        "skill": [],
        "min_hp": 7,
        "max_atk": 480,
        "rarelity": "N",
        "max_hp": 45,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[嵐刃]スチールククリ",
        "min_atk": 50,
        "skill": [],
        "min_hp": 7,
        "max_atk": 510,
        "rarelity": "N",
        "max_hp": 50,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[清刃]アイアンナイフ",
        "min_atk": 51,
        "skill": [],
        "min_hp": 7,
        "max_atk": 485,
        "rarelity": "N",
        "max_hp": 51,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[清刃]ブロンズナイフ",
        "min_atk": 49,
        "skill": [],
        "min_hp": 7,
        "max_atk": 455,
        "rarelity": "N",
        "max_hp": 49,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[地刃]ブロンズクリス",
        "min_atk": 48,
        "skill": [],
        "min_hp": 7,
        "max_atk": 460,
        "rarelity": "N",
        "max_hp": 48,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[嵐刃]ブロンズククリ",
        "min_atk": 46,
        "skill": [],
        "min_hp": 7,
        "max_atk": 470,
        "rarelity": "N",
        "max_hp": 46,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[炎刃]アイアンダガー",
        "min_atk": 47,
        "skill": [],
        "min_hp": 7,
        "max_atk": 505,
        "rarelity": "N",
        "max_hp": 47,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[地刃]アイアンクリス",
        "min_atk": 50,
        "skill": [],
        "min_hp": 7,
        "max_atk": 490,
        "rarelity": "N",
        "max_hp": 50,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[嵐刃]アイアンククリ",
        "min_atk": 48,
        "skill": [],
        "min_hp": 7,
        "max_atk": 500,
        "rarelity": "N",
        "max_hp": 48,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[清刃]ナイフ",
        "min_atk": 50,
        "skill": [],
        "min_hp": 7,
        "max_atk": 470,
        "rarelity": "N",
        "max_hp": 50,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[炎刃]スチールダガー",
        "min_atk": 49,
        "skill": [],
        "min_hp": 7,
        "max_atk": 515,
        "rarelity": "N",
        "max_hp": 49,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[清刃]スチールナイフ",
        "min_atk": 53,
        "skill": [],
        "min_hp": 7,
        "max_atk": 495,
        "rarelity": "N",
        "max_hp": 53,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[地刃]スチールクリス",
        "min_atk": 52,
        "skill": [],
        "min_hp": 7,
        "max_atk": 500,
        "rarelity": "N",
        "max_hp": 52,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[炎刃]バゼラード",
        "min_atk": 50,
        "skill": [],
        "min_hp": 8,
        "max_atk": 530,
        "rarelity": "N",
        "max_hp": 50,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[蒼銀刃]ミスリルナイフ",
        "min_atk": 75,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 725,
        "rarelity": "R",
        "max_hp": 75,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[]ククリ",
        "min_atk": 102,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1030,
        "rarelity": "R",
        "max_hp": 102,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[波眩]クリス",
        "min_atk": 104,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1020,
        "rarelity": "R",
        "max_hp": 104,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[蒼銀刃]ミスリルククリ",
        "min_atk": 72,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 740,
        "rarelity": "R",
        "max_hp": 72,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[惡貫]キーラ",
        "min_atk": 105,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 19,
        "max_atk": 1015,
        "rarelity": "R",
        "max_hp": 105,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[密殺]アサシンダガー",
        "min_atk": 84,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 9,
        "max_atk": 1295,
        "rarelity": "R",
        "max_hp": 84,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[鎮魔]マンダウ",
        "min_atk": 100,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 14,
        "max_atk": 1200,
        "rarelity": "R",
        "max_hp": 100,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[繰幻]マインゴーシュ",
        "min_atk": 70,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 11,
        "max_atk": 700,
        "rarelity": "R",
        "max_hp": 70,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[蒼銀刃]ミスリルダガー",
        "min_atk": 71,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 745,
        "rarelity": "R",
        "max_hp": 71,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[蒼銀刃]ミスリルクリス",
        "min_atk": 74,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 730,
        "rarelity": "R",
        "max_hp": 74,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[錐刃]メイルブレイカー",
        "min_atk": 115,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 20,
        "max_atk": 1115,
        "rarelity": "R",
        "max_hp": 115,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[水波眩]ウォーターククリ",
        "min_atk": 112,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 20,
        "max_atk": 1090,
        "rarelity": "R",
        "max_hp": 112,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[]ミセリコルデ",
        "min_atk": 107,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 19,
        "max_atk": 1040,
        "rarelity": "R",
        "max_hp": 107,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[緑穣]リーフダガー",
        "min_atk": 107,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 17,
        "max_atk": 1080,
        "rarelity": "R",
        "max_hp": 107,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[波岩]土精の蛇行剣",
        "min_atk": 78,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 760,
        "rarelity": "R",
        "max_hp": 78,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[征魔]ホーリークリス",
        "min_atk": 110,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1100,
        "rarelity": "R",
        "max_hp": 110,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[緑鉱刃]エメラルドダガー",
        "min_atk": 114,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1155,
        "rarelity": "R",
        "max_hp": 114,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[黒耀]ダークナイフ",
        "min_atk": 106,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 1120,
        "rarelity": "R",
        "max_hp": 106,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[灼熱]ファイアバゼラード",
        "min_atk": 108,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 16,
        "max_atk": 1110,
        "rarelity": "R",
        "max_hp": 108,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[夏想]木彫りの短剣",
        "min_atk": 106,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 18,
        "max_atk": 1045,
        "rarelity": "R",
        "max_hp": 106,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[影刃]ブラッディピアース",
        "min_atk": 109,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 14,
        "max_atk": 1145,
        "rarelity": "R",
        "max_hp": 109,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[折刃]ギミックダガー",
        "min_atk": 111,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 15,
        "max_atk": 1170,
        "rarelity": "R",
        "max_hp": 111,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[忙厨]チョッパーナイフ",
        "min_atk": 113,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1190,
        "rarelity": "R",
        "max_hp": 113,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[酔狂刃]割れた酒瓶",
        "min_atk": 110,
        "skill": [
          {
            "type": "bw1",
            "slot": "normal"
          }
        ],
        "min_hp": 16,
        "max_atk": 1130,
        "rarelity": "R",
        "max_hp": 110,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[]リトルスカーレット",
        "min_atk": 103,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1055,
        "rarelity": "R",
        "max_hp": 103,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[天使]エンジェルナイフ",
        "min_atk": 40,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 40,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[夜天降]チンクエディア",
        "min_atk": 235,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1465,
        "rarelity": "SR",
        "max_hp": 147,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[瞬蜃]ミラージュナイフ",
        "min_atk": 265,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 1650,
        "rarelity": "SR",
        "max_hp": 168,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[穿遍]スティレット",
        "min_atk": 270,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1655,
        "rarelity": "SR",
        "max_hp": 167,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[]パナバス",
        "min_atk": 295,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1680,
        "rarelity": "SR",
        "max_hp": 162,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[鎮嵐]ストームクリス",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1350,
        "rarelity": "SR",
        "max_hp": 134,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[機殻刃]コロッサスブレイカー",
        "min_atk": 220,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1340,
        "rarelity": "SR",
        "max_hp": 131,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[海嘯刃]レヴィアンゲイズ",
        "min_atk": 200,
        "skill": [
          {
            "type": "kj2",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1340,
        "rarelity": "SR",
        "max_hp": 137,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[矜持賭]ファコン",
        "min_atk": 195,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1295,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[刻命]フセット",
        "min_atk": 280,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1665,
        "rarelity": "SR",
        "max_hp": 165,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[]バタディア",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1280,
        "rarelity": "SR",
        "max_hp": 125,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[騎千]アキナケス",
        "min_atk": 280,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1645,
        "rarelity": "SR",
        "max_hp": 167,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[破刃]ソードブレイカー",
        "min_atk": 315,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 1800,
        "rarelity": "SR",
        "max_hp": 174,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[憑操刃]傀儡の包丁",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1750,
        "rarelity": "SR",
        "max_hp": 148,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[裁考刃]裁きの霊剣",
        "min_atk": 200,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1300,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[水恵刃]マナウィダンダガー",
        "min_atk": 195,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1300,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[灼業刃]イフリートダガー",
        "min_atk": 215,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1315,
        "rarelity": "SR",
        "max_hp": 129,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[蛇神刃]ミドガルドの断刃",
        "min_atk": 205,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1320,
        "rarelity": "SR",
        "max_hp": 134,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[霧幻]ソウルエッジ",
        "min_atk": 275,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 1660,
        "rarelity": "SR",
        "max_hp": 166,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[想縁]絆の短剣",
        "min_atk": 275,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1610,
        "rarelity": "SR",
        "max_hp": 158,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[塵界]朽ち果てた刃",
        "min_atk": 1,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 1,
        "max_atk": 96,
        "rarelity": "SR",
        "max_hp": 30,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[純誓]ソード・オブ・リスブラン",
        "min_atk": 290,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 1725,
        "rarelity": "SR",
        "max_hp": 171,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[紅焔]紅陽刃",
        "min_atk": 205,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1305,
        "rarelity": "SR",
        "max_hp": 131,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[暴狼刃]レージング",
        "min_atk": 200,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1315,
        "rarelity": "SR",
        "max_hp": 135,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[邪絶刃]ディアボロスダガー",
        "min_atk": 235,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1365,
        "rarelity": "SR",
        "max_hp": 131,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[祖龍刃]バハムートダガー",
        "min_atk": 275,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1605,
        "rarelity": "SR",
        "max_hp": 155,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[沈命]シェイドナイフ",
        "min_atk": 305,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1740,
        "rarelity": "SR",
        "max_hp": 168,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[引切技]刺身包丁",
        "min_atk": 195,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 23,
        "max_atk": 1295,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[輝影刃]ヴェセラゴセイバー",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1325,
        "rarelity": "SR",
        "max_hp": 133,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[瑞玉剣]タッドポウルテイル",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1320,
        "rarelity": "SR",
        "max_hp": 128,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[聖等刃]ペティナイフ",
        "min_atk": 210,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1340,
        "rarelity": "SR",
        "max_hp": 135,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[蒼艶]エゴイズム",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1300,
        "rarelity": "SR",
        "max_hp": 130,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[怪黒刃]ブラックナイフ",
        "min_atk": 220,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1330,
        "rarelity": "SR",
        "max_hp": 127,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[]スカルペル",
        "min_atk": 310,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 1770,
        "rarelity": "SR",
        "max_hp": 170,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[宵刃]オネイロスダガー",
        "min_atk": 215,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1300,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[]キルナイフ",
        "min_atk": 275,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1685,
        "rarelity": "SR",
        "max_hp": 170,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[鏡面刀]ヴェローナククリ",
        "min_atk": 200,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 1300,
        "rarelity": "SR",
        "max_hp": 130,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[大天使]アークエンジェルナイフ",
        "min_atk": 10,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "SR",
        "max_hp": 40,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[滅闢]アゾット",
        "min_atk": 430,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2500,
        "rarelity": "SSR",
        "max_hp": 244,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "ベガルタ",
        "min_atk": 420,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2540,
        "rarelity": "SSR",
        "max_hp": 212,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[激情]ベガルタ",
        "min_atk": 420,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 3070,
        "rarelity": "SSR",
        "max_hp": 256,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[桜火]フローレンベルク",
        "min_atk": 350,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2115,
        "rarelity": "SSR",
        "max_hp": 209,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "カルンウェナン",
        "min_atk": 395,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 41,
        "max_atk": 2400,
        "rarelity": "SSR",
        "max_hp": 240,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[魔裂]カルンウェナン",
        "min_atk": 395,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj2",
            "slot": "normal"
          }
        ],
        "min_hp": 41,
        "max_atk": 2900,
        "rarelity": "SSR",
        "max_hp": 290,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[鳳凰刃]不死鳥の嘴刃",
        "min_atk": 320,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 1930,
        "rarelity": "SSR",
        "max_hp": 190,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[密智剣]ネフティスクリス",
        "min_atk": 315,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 1930,
        "rarelity": "SSR",
        "max_hp": 192,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[輝宝刃]ダイヤモンドエッジ",
        "min_atk": 400,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2450,
        "rarelity": "SSR",
        "max_hp": 245,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "世界樹の雫刃・マグナ",
        "min_atk": 345,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2160,
        "rarelity": "SSR",
        "max_hp": 218,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[万創刃]世界樹の雫刃・マグナ",
        "min_atk": 345,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2520,
        "rarelity": "SSR",
        "max_hp": 254,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "レヴィアンゲイズ・マグナ",
        "min_atk": 340,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2155,
        "rarelity": "SSR",
        "max_hp": 219,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[海叫刃]レヴィアンゲイズ・マグナ",
        "min_atk": 340,
        "skill": [
          {
            "type": "kj3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2520,
        "rarelity": "SSR",
        "max_hp": 255,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "ヘルウォードダガー",
        "min_atk": 330,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 1950,
        "rarelity": "SSR",
        "max_hp": 189,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[遊獣刃]ヘルウォードダガー",
        "min_atk": 330,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2275,
        "rarelity": "SSR",
        "max_hp": 221,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[界統]四天刃",
        "min_atk": 370,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2270,
        "rarelity": "SSR",
        "max_hp": 227,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[霹靂]雷公刃ユピテル",
        "min_atk": 415,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 41,
        "max_atk": 2480,
        "rarelity": "SSR",
        "max_hp": 248,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[奇矯]コムラビ",
        "min_atk": 430,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 37,
        "max_atk": 2460,
        "rarelity": "SSR",
        "max_hp": 240,
        "type_name": "短剣"
      },
      {
        "attribute": "火",
        "type": "dagger",
        "name": "[悪戯]トリック・オア・トリート",
        "min_atk": 420,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 2450,
        "rarelity": "SSR",
        "max_hp": 242,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[凍露]霧氷剣ペルソス",
        "min_atk": 390,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 42,
        "max_atk": 2390,
        "rarelity": "SSR",
        "max_hp": 242,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[界統]四天刃・真",
        "min_atk": 400,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 2400,
        "rarelity": "SSR",
        "max_hp": 240,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[真兇影]イペタム",
        "min_atk": 389,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 2301,
        "rarelity": "SSR",
        "max_hp": 224,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[真理創]ファウスト",
        "min_atk": 364,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2276,
        "rarelity": "SSR",
        "max_hp": 229,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[祖龍刃]バハムートダガー・ノヴム",
        "min_atk": 395,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2355,
        "rarelity": "SSR",
        "max_hp": 229,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[天雲宝]ヘヴンズクラウド",
        "min_atk": 405,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 39,
        "max_atk": 2405,
        "rarelity": "SSR",
        "max_hp": 239,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[尊緑御身]秘丹弥虚羅多包丁",
        "min_atk": 300,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 1915,
        "rarelity": "SSR",
        "max_hp": 195,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[久遠]エターナル・ラヴ",
        "min_atk": 445,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 43,
        "max_atk": 2645,
        "rarelity": "SSR",
        "max_hp": 263,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[真闇葬]ミセリコルデ",
        "min_atk": 375,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 36,
        "max_atk": 2285,
        "rarelity": "SSR",
        "max_hp": 227,
        "type_name": "短剣"
      },
      {
        "attribute": "土",
        "type": "dagger",
        "name": "[栄羅刃]アルセーヌ",
        "min_atk": 400,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 42,
        "max_atk": 2435,
        "rarelity": "SSR",
        "max_hp": 245,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[虚幻刃]オールド・コルタナ",
        "min_atk": 379,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2241,
        "rarelity": "SSR",
        "max_hp": 218,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[虚幻刃]コルタナ",
        "min_atk": 379,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2241,
        "rarelity": "SSR",
        "max_hp": 218,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[祖龍刃]バハムートダガー・フツルス",
        "min_atk": 395,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2750,
        "rarelity": "SSR",
        "max_hp": 268,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[律導刃]ダガー・オブ・コスモス",
        "min_atk": 379,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 38,
        "max_atk": 2341,
        "rarelity": "SSR",
        "max_hp": 234,
        "type_name": "短剣"
      },
      {
        "attribute": "光",
        "type": "dagger",
        "name": "[]デュアルヘリックス",
        "min_atk": 410,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 41,
        "max_atk": 2470,
        "rarelity": "SSR",
        "max_hp": 247,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "スパルナフェザー",
        "min_atk": 364,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj3",
            "slot": "normal"
          }
        ],
        "min_hp": 35,
        "max_atk": 2226,
        "rarelity": "SSR",
        "max_hp": 221,
        "type_name": "短剣"
      },
      {
        "attribute": "水",
        "type": "dagger",
        "name": "[財宝盗]ファントムシーフナイフ",
        "min_atk": 390,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 42,
        "max_atk": 2380,
        "rarelity": "SSR",
        "max_hp": 241,
        "type_name": "短剣"
      },
      {
        "attribute": "闇",
        "type": "dagger",
        "name": "[紅闇月]ブラッディスカー",
        "min_atk": 410,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 38,
        "max_atk": 2380,
        "rarelity": "SSR",
        "max_hp": 241,
        "type_name": "短剣"
      },
      {
        "attribute": "風",
        "type": "dagger",
        "name": "[]リユニオン",
        "min_atk": 450,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 42,
        "max_atk": 2650,
        "rarelity": "SSR",
        "max_hp": 260,
        "type_name": "短剣"
      }
    ],
    "type": "短剣"
  },
  {
    "weapons": [
      {
        "attribute": "土",
        "type": "blade",
        "name": "[暗針]苦無",
        "min_atk": 38,
        "skill": [],
        "min_hp": 6,
        "max_atk": 515,
        "rarelity": "N",
        "max_hp": 38,
        "type_name": "刀"
      },
      {
        "attribute": "水",
        "type": "blade",
        "name": "[始刀]太刀",
        "min_atk": 41,
        "skill": [],
        "min_hp": 8,
        "max_atk": 545,
        "rarelity": "N",
        "max_hp": 41,
        "type_name": "刀"
      },
      {
        "attribute": "火",
        "type": "blade",
        "name": "[豪刀]野太刀",
        "min_atk": 78,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 12,
        "max_atk": 1145,
        "rarelity": "R",
        "max_hp": 78,
        "type_name": "刀"
      },
      {
        "attribute": "水",
        "type": "blade",
        "name": "[蒼銀刀]霊銀刀",
        "min_atk": 86,
        "skill": [
          {
            "type": "kj1",
            "slot": "normal"
          }
        ],
        "min_hp": 16,
        "max_atk": 1185,
        "rarelity": "R",
        "max_hp": 86,
        "type_name": "刀"
      },
      {
        "attribute": "土",
        "type": "blade",
        "name": "[蒼銀針]霊銀針",
        "min_atk": 58,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 10,
        "max_atk": 810,
        "rarelity": "R",
        "max_hp": 58,
        "type_name": "刀"
      },
      {
        "attribute": "光",
        "type": "blade",
        "name": "[天使]天使刀",
        "min_atk": 40,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 4,
        "max_atk": 100,
        "rarelity": "R",
        "max_hp": 40,
        "type_name": "刀"
      },
      {
        "attribute": "火",
        "type": "blade",
        "name": "[伊達刀]虎鉄",
        "min_atk": 320,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 20,
        "max_atk": 1855,
        "rarelity": "SR",
        "max_hp": 128,
        "type_name": "刀"
      },
      {
        "attribute": "水",
        "type": "blade",
        "name": "[無穢刀]蛍丸",
        "min_atk": 295,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 1835,
        "rarelity": "SR",
        "max_hp": 132,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[瞑塗]蜥蜴丸",
        "min_atk": 325,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1865,
        "rarelity": "SR",
        "max_hp": 126,
        "type_name": "刀"
      },
      {
        "attribute": "光",
        "type": "blade",
        "name": "[]模造刀",
        "min_atk": 259,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 19,
        "max_atk": 1631,
        "rarelity": "SR",
        "max_hp": 115,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[]贋作刀",
        "min_atk": 279,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 15,
        "max_atk": 1651,
        "rarelity": "SR",
        "max_hp": 111,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[祖龍刀]バハムートブレイド",
        "min_atk": 300,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 17,
        "max_atk": 1790,
        "rarelity": "SR",
        "max_hp": 121,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[壊転]朽ち果てた太刀",
        "min_atk": 1,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 1,
        "max_atk": 96,
        "rarelity": "SR",
        "max_hp": 30,
        "type_name": "刀"
      },
      {
        "attribute": "土",
        "type": "blade",
        "name": "[蒐索刀]アワリティアブレード",
        "min_atk": 225,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1450,
        "rarelity": "SR",
        "max_hp": 104,
        "type_name": "刀"
      },
      {
        "attribute": "風",
        "type": "blade",
        "name": "[怪桃刀]アンノウンリッパー",
        "min_atk": 235,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1460,
        "rarelity": "SR",
        "max_hp": 102,
        "type_name": "刀"
      },
      {
        "attribute": "土",
        "type": "blade",
        "name": "[修刀]木刀",
        "min_atk": 230,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 18,
        "max_atk": 1475,
        "rarelity": "SR",
        "max_hp": 105,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[刺貫]つらぬき丸",
        "min_atk": 245,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 12,
        "max_atk": 1430,
        "rarelity": "SR",
        "max_hp": 96,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[斬甲]蟹鋏",
        "min_atk": 250,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 13,
        "max_atk": 1475,
        "rarelity": "SR",
        "max_hp": 99,
        "type_name": "刀"
      },
      {
        "attribute": "風",
        "type": "blade",
        "name": "[莫鉄]斬馬刀",
        "min_atk": 310,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 21,
        "max_atk": 1855,
        "rarelity": "SR",
        "max_hp": 129,
        "type_name": "刀"
      },
      {
        "attribute": "風",
        "type": "blade",
        "name": "[古樹刀]エントリッパー",
        "min_atk": 235,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 16,
        "max_atk": 1460,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "刀"
      },
      {
        "attribute": "光",
        "type": "blade",
        "name": "[大天使]大天使刀",
        "min_atk": 100,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 40,
        "max_atk": 400,
        "rarelity": "SR",
        "max_hp": 100,
        "type_name": "刀"
      },
      {
        "attribute": "火",
        "type": "blade",
        "name": "阿修羅",
        "min_atk": 455,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2675,
        "rarelity": "SSR",
        "max_hp": 186,
        "type_name": "刀"
      },
      {
        "attribute": "火",
        "type": "blade",
        "name": "[羅鬼]阿修羅",
        "min_atk": 455,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 3230,
        "rarelity": "SSR",
        "max_hp": 225,
        "type_name": "刀"
      },
      {
        "attribute": "土",
        "type": "blade",
        "name": "[神宝]丙子椒林剣",
        "min_atk": 440,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 2660,
        "rarelity": "SSR",
        "max_hp": 189,
        "type_name": "刀"
      },
      {
        "attribute": "水",
        "type": "blade",
        "name": "鬼丸国綱",
        "min_atk": 435,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 2655,
        "rarelity": "SSR",
        "max_hp": 190,
        "type_name": "刀"
      },
      {
        "attribute": "水",
        "type": "blade",
        "name": "[邪滅]鬼丸国綱",
        "min_atk": 435,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 34,
        "max_atk": 3210,
        "rarelity": "SSR",
        "max_hp": 229,
        "type_name": "刀"
      },
      {
        "attribute": "光",
        "type": "blade",
        "name": "[真鍛心]天叢雲剣",
        "min_atk": 411,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2543,
        "rarelity": "SSR",
        "max_hp": 179,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[真悪呪]千子村正",
        "min_atk": 431,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2563,
        "rarelity": "SSR",
        "max_hp": 175,
        "type_name": "刀"
      },
      {
        "attribute": "光",
        "type": "blade",
        "name": "[巡転]八命切",
        "min_atk": 410,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 30,
        "max_atk": 2530,
        "rarelity": "SSR",
        "max_hp": 178,
        "type_name": "刀"
      },
      {
        "attribute": "光",
        "type": "blade",
        "name": "[巡転]八命切・真",
        "min_atk": 413,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 2675,
        "rarelity": "SSR",
        "max_hp": 188,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[祖龍刀]バハムートブレイド・ノヴム",
        "min_atk": 440,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2620,
        "rarelity": "SSR",
        "max_hp": 179,
        "type_name": "刀"
      },
      {
        "attribute": "風",
        "type": "blade",
        "name": "薄緑",
        "min_atk": 450,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2680,
        "rarelity": "SSR",
        "max_hp": 187,
        "type_name": "刀"
      },
      {
        "attribute": "風",
        "type": "blade",
        "name": "[桜閃]薄緑",
        "min_atk": 450,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 3240,
        "rarelity": "SSR",
        "max_hp": 226,
        "type_name": "刀"
      },
      {
        "attribute": "風",
        "type": "blade",
        "name": "[屠竜]ドラゴンスレイヤー",
        "min_atk": 460,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2725,
        "rarelity": "SSR",
        "max_hp": 191,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[黒閃導]ニバンボシ",
        "min_atk": 360,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 2160,
        "rarelity": "SSR",
        "max_hp": 148,
        "type_name": "刀"
      },
      {
        "attribute": "水",
        "type": "blade",
        "name": "[直鋭種]太刀魚",
        "min_atk": 335,
        "skill": [
          {
            "type": "kj2",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 27,
        "max_atk": 2140,
        "rarelity": "SSR",
        "max_hp": 153,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[初魄]三日月",
        "min_atk": 465,
        "skill": [
          {
            "type": "bw3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 28,
        "max_atk": 2695,
        "rarelity": "SSR",
        "max_hp": 184,
        "type_name": "刀"
      },
      {
        "attribute": "火",
        "type": "blade",
        "name": "朱雀光剣",
        "min_atk": 345,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 2090,
        "rarelity": "SSR",
        "max_hp": 145,
        "type_name": "刀"
      },
      {
        "attribute": "火",
        "type": "blade",
        "name": "[永炎]朱雀光剣",
        "min_atk": 345,
        "skill": [
          {
            "type": "kj4",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 22,
        "max_atk": 2530,
        "rarelity": "SSR",
        "max_hp": 175,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[妖紅刀]不動国行",
        "min_atk": 475,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 29,
        "max_atk": 2740,
        "rarelity": "SSR",
        "max_hp": 188,
        "type_name": "刀"
      },
      {
        "attribute": "火",
        "type": "blade",
        "name": "コロッサスブレード・マグナ",
        "min_atk": 400,
        "skill": [
          {
            "type": "bw3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2425,
        "rarelity": "SSR",
        "max_hp": 168,
        "type_name": "刀"
      },
      {
        "attribute": "火",
        "type": "blade",
        "name": "[烈殻刀]コロッサスブレード・マグナ",
        "min_atk": 400,
        "skill": [
          {
            "type": "bw3",
            "slot": "magna"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2830,
        "rarelity": "SSR",
        "max_hp": 196,
        "type_name": "刀"
      },
      {
        "attribute": "光",
        "type": "blade",
        "name": "[申之刻]天干地支刀・申之飾",
        "min_atk": 465,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 32,
        "max_atk": 2770,
        "rarelity": "SSR",
        "max_hp": 194,
        "type_name": "刀"
      },
      {
        "attribute": "闇",
        "type": "blade",
        "name": "[]バハムートブレイド・フツルス",
        "min_atk": 440,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 3060,
        "rarelity": "SSR",
        "max_hp": 209,
        "type_name": "刀"
      },
      {
        "attribute": "光",
        "type": "blade",
        "name": "[律導刀]ブレイド・オブ・コスモス",
        "min_atk": 423,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 31,
        "max_atk": 2610,
        "rarelity": "SSR",
        "max_hp": 184,
        "type_name": "刀"
      },
      {
        "attribute": "土",
        "type": "blade",
        "name": "[]剣聖の袋竹刀",
        "min_atk": 345,
        "skill": [
          {
            "type": "none",
            "slot": "none"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 26,
        "max_atk": 2170,
        "rarelity": "SSR",
        "max_hp": 154,
        "type_name": "刀"
      },
      {
        "attribute": "火",
        "type": "blade",
        "name": "[火輪]レッド・サン",
        "min_atk": 355,
        "skill": [
          {
            "type": "kj3",
            "slot": "ex"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 24,
        "max_atk": 2150,
        "rarelity": "SSR",
        "max_hp": 150,
        "type_name": "刀"
      },
      {
        "attribute": "水",
        "type": "blade",
        "name": "[爽爽然]雷切",
        "min_atk": 440,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 33,
        "max_atk": 2660,
        "rarelity": "SSR",
        "max_hp": 189,
        "type_name": "刀"
      },
      {
        "attribute": "土",
        "type": "blade",
        "name": "[無人刀]木太刀",
        "min_atk": 345,
        "skill": [
          {
            "type": "kj3",
            "slot": "normal"
          },
          {
            "type": "none",
            "slot": "none"
          }
        ],
        "min_hp": 25,
        "max_atk": 2140,
        "rarelity": "SSR",
        "max_hp": 151,
        "type_name": "刀"
      }
    ],
    "type": "刀"
  }
];

export default WEAPON_LIST;
