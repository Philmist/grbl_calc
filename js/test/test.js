// vim: sts=2 sw=2 ts=2 expandtab
// 以下のテストコードはmochaが読みこまれていて、
// expectがglobalとしてあることを想定している

// mocha+exceptのテストコードサンプル
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    });
  });
});

// calc.jsのテスト
// もちろんこのコードが実行される以前にcalc.jsが読みこまれていることが前提
describe('calc.js', function() {
  // このテストで使用する変数
  var param_for_test = {};
  var job_data;
  // テスト集合実行前の処理
  before("職業データを読みこむ", function(){
    return get_job_data("data/job_data.json").then(function(data) {
      job_data = data;
    });
  });
  // テストごとの前処理
  beforeEach("パラメータのテンプレートを作成", function() {
    // 以下の値はテストケース内で変更して使うことを想定している
    // テストごとに値を代入しているのは、一括で代入した場合、参照渡しで変更されるため
    param_for_test = {
      rank: 1,  // ランク
      ship_bonus: 0,  // 騎空艇補正
      hp_percent: 100,  // 現HPの割合(%)
      job: "fighter",  // "data/job_data.json"で定義されている職業(クラス)
      affinity: "none",  // 相性(none/good/bad)
      zenith: {  // Zenith Perk
        atk: 0,  // 攻撃力の星(0-3)
        weapon: [0, 0],  // 武器1, 武器2の星(0-3)
        attribute: 0  // 属性攻撃力の星(0-3)
      },
      weapon: [  // 武器
        /*
        {
          atk: 100,
          type: "sword",
          skill_level: 1,
          skill_type: ["none", "none"]
        },
        {
          atk: 1000,
          type: "stuff",
          skill_level: 20,
          skill_type: ["kj4", "bw3"]
        }
        */
      ],
      summon: [  // 召喚獣
        {
          atk: 0,
          skill: [
            /*
            {
              type: "attribute",
              percent: 50
            }
            */
          ]
        }
      ],
      atk_bonus: {  // 攻撃力ボーナス
        percent: 0,  // %
        value: 0  // 値
      }
    };
  });
  // 実際のテスト
  describe("calculate_atkval()", function() {
    it('何らかの値を返す', function() {
      expect(calculate_atkval(param_for_test, job_data)).to.be.ok();
    });
    it('デフォルトでは表示攻撃力は1000', function() {
      expect(calculate_atkval(param_for_test, job_data).showed_atk).to.be(1000);
    });
    it('デフォルトでは計算攻撃力は1000', function() {
      expect(calculate_atkval(param_for_test, job_data).total_atk).to.be(1000);
    });
  });
});

describe("get_param.js", function() {
  it("val2intは数でないものを渡された時0を返す", function() {
    expect(val2int("NOT A NUMBER")).to.be(0);
  });
  it("val2intは数の文字列を渡されたら数を返す", function() {
    expect(val2int("0")).to.be(0);
    expect(val2int("110.5")).to.be(110.5);
    expect(val2int("-5")).to.be(-5);
  });
});
