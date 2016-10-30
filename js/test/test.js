// vim: sts=2 sw=2 ts=2 expandtab

import { expect } from 'chai';
import get_job_data from "../get_job_data.js";
import calculate_atkval from "../atk_calc.js";


// 以下の値はテストケース内で変更して使うことを想定している
const param_for_test = {
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


// mocha+chaiのテストコードサンプル
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    });
  });
});


// calc.jsのテスト
describe('atk_calc.js', function() {
  // ジョブデータの読みこみ
  let job_data;
  before(function(done){
    get_job_data().then(function(data) {
      job_data = data;
      done();
    });
  });
  // テストデータの作成
  let test_data;
  beforeEach(function() {
    test_data = Object.assign(param_for_test);
  });
  // 実際のテスト
  describe('シンプルな武器攻撃力計算のテスト', function() {
    it('何らかの値を返す', function() {
      expect(calculate_atkval(test_data, job_data)).to.be.ok;
    });
    it('デフォルトでは表示攻撃力は1000', function() {
      expect(calculate_atkval(test_data, job_data).showed_atk).to.equal(1000);
    });
    it('デフォルトでは計算攻撃力は1000', function() {
      expect(calculate_atkval(test_data, job_data).total_atk).to.equal(1000);
    });
  });
  describe('攻刃武器単体のテスト(fighter,sword,ATK:100,SLV:10,kj4,kj3)', function() {
    let result;
    before('武器を作って計算する', function() {
      let param;
      param = Object.assign({}, param_for_test);
      param.weapon = [{
        atk: 100,
        skill_level: 10,
        skill_type: ['kj4', 'kj3'],
        type: 'sword'
      }];
      param.job = 'fighter';
      result = calculate_atkval(param, job_data);
    });
    it('表示攻撃力は1120', () => {
      expect(result.showed_atk).to.equal(1120);
    });
    it('総合攻撃力は1467', () => {
      expect(result.total_atk).to.equal(1467);
    });
  });
  describe('背水武器単体のテスト(fighter)(sword,ATK:100,SLV:10,bw3,mbw3,hp%:30,affinity:"good")', function() {
    let result;
    before('武器を作って計算する', function() {
      let param = Object.assign({}, param_for_test);
      param.weapon = [{
        atk: 100,
        skill_level: 10,
        skill_type: ['bw3', 'mbw3'],
        type: 'sword'
      }];
      param.job = 'fighter';
      param.hp_percent = 30;
      param.affinity = 'good';
      result = calculate_atkval(param, job_data);
    });
    it('表示攻撃力は1120', () => {
      expect(result.showed_atk).to.equal(1120);
    });
    it('総合攻撃力は2292', () => {
      expect(result.total_atk).to.equal(2292);
    });
  });
  describe('単純な召喚1つのテスト(fighter)(ATK:100,SLV:0,affinity:"none",type:"sword")(ATK:100,attribute30%,character20%)', function() {
    let result;
    before('武器と召喚を作って計算する', function() {
      let param = Object.assign({}, param_for_test);
      param.job = 'fighter';
      param.weapon = [{
        atk: 100,
        skill_level: 0,
        skill_type: ['none', 'none'],
        type: 'sword'
      }];
      param.summon = [
        {
          atk: 100,
          skill: [
            { type: 'attribute', percent: 30 },
            { type: 'character', percent: 20 }
          ]
        }
      ];
      result = calculate_atkval(param, job_data);
    });
    it('表示攻撃力は1220', () => { expect(result.showed_atk).to.equal(1220); });
    it('総合攻撃力は1903', () => { expect(result.total_atk).to.equal(1903); });
  });
});
