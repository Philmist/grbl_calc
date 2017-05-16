/******/!function(e){/******/
/******/
// The require function
/******/
function t(r){/******/
/******/
// Check if module is in cache
/******/
if(n[r])/******/
return n[r].exports;/******/
// Create a new module (and put it into the cache)
/******/
var a=n[r]={/******/
i:r,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}// webpackBootstrap
/******/
// The module cache
/******/
var n={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
t.m=e,/******/
/******/
// expose the module cache
/******/
t.c=n,/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
t.i=function(e){return e},/******/
/******/
// define getter function for harmony exports
/******/
t.d=function(e,n,r){/******/
t.o(e,n)||/******/
Object.defineProperty(e,n,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:r})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
t.n=function(e){/******/
var n=e&&e.__esModule?/******/
function(){return e.default}:/******/
function(){return e};/******/
/******/
return t.d(n,"a",n),n},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},/******/
/******/
// __webpack_public_path__
/******/
t.p="",t(t.s=35)}([/* 0 */
/***/
function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},/* 1 */
/***/
function(e,t,n){var r=n(24)("wks"),a=n(27),o=n(4).Symbol,i="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=i&&o[e]||(i?o:a)("Symbol."+e))}).store=r},/* 2 */
/***/
function(e,t,n){
// Thank's IE8 for his funny defineProperty
e.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 3 */
/***/
function(e,t,n){var r=n(4),a=n(0),o=n(19),i=n(9),u=function(e,t,n){var c,s,l,f=e&u.F,p=e&u.G,_=e&u.S,k=e&u.P,d=e&u.B,v=e&u.W,m=p?a:a[t]||(a[t]={}),y=m.prototype,g=p?r:_?r[t]:(r[t]||{}).prototype;p&&(n=t);for(c in n)
// contains in native
(s=!f&&g&&void 0!==g[c])&&c in m||(
// export native or passed
l=s?g[c]:n[c],
// prevent global pollution for namespaces
m[c]=p&&"function"!=typeof g[c]?n[c]:d&&s?o(l,r):v&&g[c]==l?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):k&&"function"==typeof l?o(Function.call,l):l,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
k&&((m.virtual||(m.virtual={}))[c]=l,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
e&u.R&&y&&!y[c]&&i(y,c,l)))};
// type bitmap
u.F=1,// forced
u.G=2,// global
u.S=4,// static
u.P=8,// proto
u.B=16,// bind
u.W=32,// wrap
u.U=64,// safe
u.R=128,// real proto method for `library` 
e.exports=u},/* 4 */
/***/
function(e,t){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},/* 5 */
/***/
function(e,t,n){var r=n(6),a=n(48),o=n(66),i=Object.defineProperty;t.f=n(2)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),a)try{return i(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},/* 6 */
/***/
function(e,t,n){var r=n(12);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},/* 7 */
/***/
function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},/* 8 */
/***/
function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},/* 9 */
/***/
function(e,t,n){var r=n(5),a=n(15);e.exports=n(2)?function(e,t,n){return r.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},/* 10 */
/***/
function(e,t,n){
// 7.1.13 ToObject(argument)
var r=n(11);e.exports=function(e){return Object(r(e))}},/* 11 */
/***/
function(e,t){
// 7.2.1 RequireObjectCoercible(argument)
e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},/* 12 */
/***/
function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},/* 13 */
/***/
function(e,t){e.exports={}},/* 14 */
/***/
function(e,t,n){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var r=n(60),a=n(21);e.exports=Object.keys||function(e){return r(e,a)}},/* 15 */
/***/
function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},/* 16 */
/***/
function(e,t,n){var r=n(24)("keys"),a=n(27);e.exports=function(e){return r[e]||(r[e]=a(e))}},/* 17 */
/***/
function(e,t){
// 7.1.4 ToInteger
var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},/* 18 */
/***/
function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},/* 19 */
/***/
function(e,t,n){
// optional / simple context binding
var r=n(43);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},/* 20 */
/***/
function(e,t,n){var r=n(12),a=n(4).document,o=r(a)&&r(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},/* 21 */
/***/
function(e,t){
// IE 8- don't enum bug keys
e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 22 */
/***/
function(e,t,n){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var r=n(18);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},/* 23 */
/***/
function(e,t,n){var r=n(5).f,a=n(8),o=n(1)("toStringTag");e.exports=function(e,t,n){e&&!a(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},/* 24 */
/***/
function(e,t,n){var r=n(4),a=r["__core-js_shared__"]||(r["__core-js_shared__"]={});e.exports=function(e){return a[e]||(a[e]={})}},/* 25 */
/***/
function(e,t,n){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var r=n(22),a=n(11);e.exports=function(e){return r(a(e))}},/* 26 */
/***/
function(e,t,n){
// 7.1.15 ToLength
var r=n(17),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},/* 27 */
/***/
function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},/* 28 */
/***/
function(e,t,n){"use strict";
// vim: sts=2 sw=2 ts=2 expandtab
// 各種パラメータをobject(dict)で受けとってobjectで返す関数
/*
  param_obj: 以下のような内容を持つオブジェクト
  {
    rank: ランク(Number),
    ship_bonus: 騎空艇補正(Number),
    hp_percent: 現在HPの最大HPに対する%(Number),
    job: 別データで表わされたクラス(職業)を示した文字列(String),
    affinity: 'good' | 'bad' | (それ以外) の文字列で示される属性補正(String),
    zenith: {
        atk: 星の数(0から3の整数)(Number),
        weapon: [得意武器1つ目の星の数(0-3の整数)(Number), ... ],
        attribute: 属性攻撃力の星の数(0-3の整数)(Number)
      }
    weapon: [ // 武器1つを配列の要素1つで表わす
        {
          atk: 武器攻撃力(Number),
          plus: 武器の＋数値(Number),
          type: 武器の種類を表わした文字列(String),
          skill_level: 武器のスキルレベル(Number),
          skill_slot: [武器のスキル1つ目の枠名の文字列(String), 同2つ目 ],
          skill_type: [武器のスキル1つ目の種別の文字列(String), 同2つ目 ],
        }, ...
      ],
    summon: [ // 召喚1つを配列の(ry 最初のものがメイン召喚石として計算される
        {
          atk: 召喚の攻撃力(Number),
          skill: [ // 加護1つを配列の要素1つで表わす
            {
              type: 加護種別を表わす文字列(String),
              percent: 加護のパーセンテージ(Number)
            }, ...
          ]
        }, ...
      ],
    atk_bonus: {
      percent: 攻撃力ボーナスのパーセンテージ(%, Number),
      value: 攻撃力ボーナスの値(Number)
    },
    friend: {  // フレンド召喚 だいたい通常召喚と一緒だが要素1個だけなのでオブジェクト
      atk: 召喚の攻撃力(Number),
      skill: [ // 加護1つを配列の要素1つで表わす
        {
          type: 加護種別を表わす文字列(String),
          percent: 加護のパーセンテージ(Number)
        }, ...
      ]
    }
  }
  job_data: 以下のような内容を持つオブジェクト
  {
    "(職業の英語名)": {
      specialty: ["(得意武器の英語名)", ... ],
      atk_value: 攻撃力ボーナス値(Number)
      atk_rate:  攻撃力ボーナス％(Number)
    }, ...
  }
*/
function r(e,t){// = 2 * (hp_p_n ** 2) - 5 * hp_p_n + 3
/// スキルの計算をするための関数を定義
//// ロジックの異なる部分を引数として受けとり関数として返す
//// type_str: "baha" | "normal" | "magna" | "ex"
//// lv_check_func: 引数としてskill_levelを受けとり条件を判断する関数
//// true_func: lv_check_funcで返された結果が真のときskill_levelを受けとり加算する%を返す関数
//// false_func: ほぼ同上だが偽の場合
function n(e,t,n,r){return function(a){t(a)?h[e].percent+=n(a):h[e].percent+=r(a)}}
//// この関数は天司に対応
//// ほぼ上の関数と一緒だが加算先が異なる
function r(e,t){return function(n){h[e].percent+=t}}
//// この関数は渾身に対応
//// ほぼ上の関数と一緒だが加算先が異なる
function a(e,t,n,r){return function(a){t(a)?h[e].konshin+=n(a):h[e].konshin+=r(a)}}
//// この関数は背水に対応
//// ほぼ上の関数と一緒だが以下の部分が相違
//// true_func, false_func: skill_levelを受けとりcoefficientを計算する関数
function o(e,t,n,r){return function(a){var o=0;o=t(a)?n(a):r(a),h[e].backwater+=E*o/3}}
//// 渡された数値がlevelより下かどうかをチェックする関数を返す関数
function i(e){return function(t){return t<e}}
//// addval + (lv - subval) * mulvalを計算する関数を返す関数
function u(e,t,n){return function(r){return e+(r-t)*n}}
//// addval + (lv - subval) * mulvalを計算し、さらにhp_p_nを掛ける関数
function c(e,t,n){return function(r){return e+(r-t)*n*b*b*b+2.222222222222222}}
// 攻撃力の定義
var s=0,l=0,f=0,p=0,_=Number(e.rank);l=40*_+1e3,_<2?l=1e3:_>100&&(l-=20*(_-100)),s=l;var k=0;1==e.zenith.atk?k=500:2==e.zenith.atk?k=1500:3==e.zenith.atk&&(k=3e3),s+=k;
// 召喚加護の計算
var d={attribute:100,character:0,magna:100,unknown:100,zeus:100,none:0};
// メイン召喚石
if(e.summon[0]){var v=e.summon[0];v.skill&&v.skill.forEach(function(e){e.type&&(d[e.type]+=e.percent)})}
// フレンド召喚石
if(e.friend){var m=e.friend;m.skill&&m.skill.forEach(function(e){e.type&&(d[e.type]+=e.percent)})}// コスモスのスキルタイプ
for(var y="no_cosmos",g=0;g<e.weapon.length;g++)if("cosmos"==e.weapon[g].skill_slot[0]||"cosmos"==e.weapon[g].skill_slot[1]){y=e.weapon[g].type,e.weapon[g].skill_type;break}
// 武器攻撃力の計算
s+=function(){
// 表示攻撃力に処理で得られた総合武器攻撃力を加算する
var n=0,r=[0,1,3,5,6,8,10],a=t[e.job];// 該当ジョブのデータを取得
// もし該当ジョブが存在するのなら
// ジョブ攻撃力ボーナス
return a&&(f=a.atk_value,p=a.atk_rate),e.weapon.forEach(function(t){var o=t.atk+5*t.plus,i=100,u=0;// Zenith追加%
if(a)
// もし該当ジョブが存在するのなら
// 得意武器の一覧を見て...
for(var c=0;c<a.specialty.length;c++)
// 得意武器が現在見ている武器と一致するなら倍率(%)を上げる
a.specialty[c]==t.type&&(i=120,u=r[e.zenith.weapon[c]],u=u||0);// コスモス該当武器の追加%
// 自身にもコスモス武器の倍率はかかる
// 武器攻撃力に倍率をかける
o=o*(i+u+(t.type==y?30:0))/100,
// 全武器攻撃力を更新する
n+=o}),n}(),// 定義した無名関数を即時実行する
// 召喚攻撃力
s+=function(){var t=0;return e.summon.forEach(function(e){t+=e.atk}),t}(),// 無名関数の即時実行
// ジョブボーナス
// TODO: 外部ファイルから読みこみも考えるべき
s+=e.atk_bonus.value+f,s=s*(100+e.atk_bonus.percent+p)/100;/* スキル */
// 属性補正
var w=0;w+=function(){var t=[0,1,3,5],n=0;return n+=e.zenith.attribute?t[e.zenith.attribute]:t[0],"good"==e.affinity?n+=50:"bad"==e.affinity&&(n-=25),n}();// 無名関数の即時実行
// 武器ごとのスキル計算
/// 変数の初期化
var h={baha:{percent:0},normal:{percent:0,backwater:0,konshin:0},magna:{percent:0,backwater:0,konshin:0},ex:{percent:0,backwater:0,konshin:0},angel:{percent:0,backwater:0,konshin:0},unknown:{percent:0,backwater:0,konshin:0}},b=e.hp_percent/100,E=2*b*b-5*b+3,O={
// total_skill.koujin.percent = 0 + (lv - 0) * 1  [lv<10]
// total_skill.koujin.percent = 10 + (lv - 10) * 0.4 [lv>=10]
normal_kj1:n("normal",i(10),u(0,0,1),u(10,10,.4)),normal_kj2:n("normal",i(10),u(2,0,1),u(12,10,.5)),normal_kj3:n("normal",i(10),u(5,0,1),u(15,10,.6)),normal_kj4:n("normal",i(10),u(8,0,1),u(18,10,1)),normal_kjt:n("normal",i(10),u(6,0,1),u(16,10,.8)),normal_km:n("normal",i(10),u(0,0,1),u(10,10,0)),magna_kj1:n("magna",i(10),u(0,0,1),u(10,10,.4)),magna_kj2:n("magna",i(10),u(2,0,1),u(12,10,.5)),magna_kj3:n("magna",i(10),u(5,0,1),u(15,10,.6)),magna_kj4:n("magna",i(10),u(8,0,1),u(18,10,1)),magna_km:n("magna",i(10),u(0,0,1),u(10,10,0)),ex_kj1:n("ex",i(10),u(0,0,1),u(10,10,.4)),ex_kj2:n("ex",i(10),u(2,0,1),u(12,10,.5)),ex_kj3:n("ex",i(10),u(5,0,1),u(15,10,.6)),ex_kj4:n("ex",i(10),u(8,0,1),u(18,10,1)),ex_km:n("ex",i(10),u(0,0,1),u(10,10,0)),unknown_kj1:n("unknown",i(10),u(0,0,1),u(10,10,.4)),unknown_kj2:n("unknown",i(10),u(2,0,1),u(12,10,.5)),unknown_kj3:n("unknown",i(10),u(5,0,1),u(15,10,.6)),unknown_km:n("unknown",i(10),u(0,0,1),u(10,10,0)),normal_bw1:o("normal",i(10),function(e){return 1.8*e-.3},function(e){return 18+(e-10)/5*3}),normal_bw2:o("normal",i(10),function(e){return 2.4*e-.4},function(e){return 24+(e-10)/5*6}),normal_bw3:o("normal",i(10),function(e){return 3*e-.5},function(e){return 30+(e-10)/5*7.5}),magna_bw1:o("magna",i(10),function(e){return 1.8*e-.3},function(e){return 18+(e-10)/5*3}),magna_bw2:o("magna",i(10),function(e){return 2.4*e-.4},function(e){return 24+(e-10)/5*3}),magna_bw3:o("magna",i(10),function(e){return 3*e-.5},function(e){return 30+(e-10)/5*3}),ex_bw1:o("ex",i(10),function(e){return 1.8*e-.3},function(e){return 18+(e-10)/5*3}),ex_bw2:o("ex",i(10),function(e){return 2.4*e-.4},function(e){return 24+(e-10)/5*3}),ex_bw3:o("ex",i(10),function(e){return 3*e-.5},function(e){return 30+(e-10)/5*3}),unknown_bw1:o("unknown",i(10),function(e){return 1.8*e-.3},function(e){return 18+(e-10)/5*3}),unknown_bw2:o("unknown",i(10),function(e){return 2.4*e-.4},function(e){return 24+(e-10)/5*3}),unknown_bw3:o("unknown",i(10),function(e){return 3*e-.5},function(e){return 30+(e-10)/5*3}),normal_ks3:a("normal",i(10),c(1.923633604,0,.7236096116),c(1.923633604,0,.7236096116)),magna_ks3:a("magna",i(10),c(1.923633604,0,.7236096116),c(1.923633604,0,.7236096116)),ex_ks3:a("ex",i(10),c(1.923633604,0,.7236096116),c(1.923633604,0,.7236096116)),unknown_ks3:a("unknown",i(10),c(1.923633604,0,.7236096116),c(1.923633604,0,.7236096116)),angel_bless1:r("angel",10),angel_bless2:r("angel",20),baha_atk:n("baha",i(10),u(19,0,1),u(30,10,.4)),baha_hp:n("baha",i(10),u(9.5,0,.5),u(15,0,0))};
/// スキルとパラメータの集計
e.weapon.forEach(function(e){
// スキルごとの計算
var t="";t=e.skill_slot[0]+"_"+e.skill_type[0],(e.skill_level>0||"angel"==e.skill_slot[0])&&"none"!=e.skill_type[0]&&O[t](e.skill_level),t=e.skill_slot[1]+"_"+e.skill_type[1],(e.skill_level>0||"angel"==e.skill_slot[1])&&"none"!=e.skill_type[1]&&O[t](e.skill_level)}),
// ステータスの上限等補正
/// バハ攻%は50を超えない
h.baha.percent=h.baha.percent>50?50:h.baha.percent;
// 総合計算
var x=s;
// 結果の返却
/// 通常攻刃
/// 通常背水
/// 通常渾身
/// マグナ攻刃
/// マグナ背水
/// マグナ渾身
/// EX攻刃
/// EX背水
/// EX渾身
/// 天司
/// 属性
/// 騎空艇ボーナス%
return x*=1+(d.character+h.baha.percent+h.normal.percent*d.zeus/100)/100,x*=1+h.normal.backwater*d.zeus/100/100,x*=1+h.normal.konshin*d.zeus/100/100,x*=1+h.magna.percent*d.magna/100/100,x*=1+h.magna.backwater*d.magna/100/100,x*=1+h.magna.konshin*d.magna/100/100,x*=1+(h.ex.percent+h.unknown.percent*d.unknown/100)/100,x*=1+(h.ex.backwater+h.unknown.backwater*d.unknown/100)/100,x*=1+(h.ex.konshin+h.unknown.konshin*d.unknown/100)/100,x*=1+h.angel.percent/100,x*=(d.attribute+w)/100,x*=1+e.ship_bonus/100,x=Math.round(x),s=Math.round(s),{basic_atk:l,showed_atk:s,total_atk:x}}
// 武器1つのオブジェクトが妥当な形式かチェックする
function a(e){if(!(e instanceof Object))return!1;var t=(0,u.default)(e);
// 攻撃力
if(!(t.includes("atk")&&e.atk>=0))return!1;
// 武器種別
if(!t.includes("type")||"string"!=typeof e.type)return!1;
// スキルレベル
if(!(t.includes("skill_level")&&e.skill_level>=0))return!1;
// スキル種別
if(!(t.includes("skill_type")&&e.skill_type instanceof Array))return!1;for(var n=0;n<e.skill_type.length;n++)if("string"!=typeof e.skill_type[n])return!1;
// スキル種別
if(!(t.includes("skill_slot")&&e.skill_type instanceof Array))return!1;for(var r=0;r<e.skill_type.length;r++)if("string"!=typeof e.skill_type[r])return!1;
// チェックを全部パスした
return!0}
// 召喚1つのオブジェクトが妥当な形式かをチェックする
function o(e){
// 攻撃力
if(!(e.atk>=0))return!1;
// 加護
if(!(e.skill instanceof Array))return!1;for(var t=0;t<e.skill.length;t++){var n=e.skill[t];if(!(n instanceof Object))return!1;if(!n.hasOwnProperty("type")||"string"!=typeof n.type)return!1;if(!(n.hasOwnProperty("percent")&&n.percent>=0))return!1}
// チェックを全て通った
return!0}Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),u=function(e){return e&&e.__esModule?e:{default:e}}(i);t.calculate_atkval=r,t.is_valid_weapon_obj=a,t.is_valid_summon_obj=o},/* 29 */
/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
// vim: set sw=2 sts=2 ts=2 expandtab
/*
 * ジョブの基礎的な情報を記した
 * 定数
 */
var r={Fighter:{// 職の英語名(計算機内部で参照される)
specialty:["sword","axe"],// 武器の英語名(計算機内部と表示で参照される)
atk_value:1500,// 攻撃力ボーナス(値)
atk_rate:0},Knight:{specialty:["sword","spear"],atk_value:0,atk_rate:0},Priest:{specialty:["stuff","spear"],atk_value:0,atk_rate:0},Wizard:{specialty:["stuff","dagger"],atk_value:0,atk_rate:0},Thief:{specialty:["dagger","gun"],atk_value:0,atk_rate:0},Enhancer:{specialty:["sword","dagger"],atk_value:0,atk_rate:0},Grappler:{specialty:["knuckle","knuckle"],atk_value:1e3,atk_rate:0},Ranger:{specialty:["bow","gun"],atk_value:500,atk_rate:0},Harpist:{specialty:["instrument","dagger"],atk_value:0,atk_rate:0},Lancer:{specialty:["spear","axe"],atk_value:0,atk_rate:5},Warrior:{specialty:["sword","axe"],atk_value:3e3,atk_rate:0},Fortress:{specialty:["sword","spear"],atk_value:0,atk_rate:0},Cleric:{specialty:["stuff","spear"],atk_value:0,atk_rate:0},Sorcerer:{specialty:["stuff","dagger"],atk_value:0,atk_rate:0},Raider:{specialty:["dagger","gun"],atk_value:0,atk_rate:0},ArcanaSword:{specialty:["sword","dagger"],atk_value:0,atk_rate:0},KungFu:{specialty:["knuckle","knuckle"],atk_value:2e3,atk_rate:0},Marksman:{specialty:["bow","gun"],atk_value:750,atk_rate:0},Minstrel:{specialty:["instrument","dagger"],atk_value:0,atk_rate:0},Dragoon:{specialty:["spear","axe"],atk_value:1e3,atk_rate:0},WeaponMaster:{specialty:["sword","axe"],atk_value:4500,atk_rate:0},HolySaber:{specialty:["sword","spear"],atk_value:0,atk_rate:0},Bishop:{specialty:["stuff","spear"],atk_value:0,atk_rate:0},Hermit:{specialty:["stuff","dagger"],atk_value:0,atk_rate:0},Hawkeye:{specialty:["dagger","gun"],atk_value:0,atk_rate:0},DarkFencer:{specialty:["sword","dagger"],atk_value:0,atk_rate:0},Ogre:{specialty:["knuckle","knuckle"],atk_value:2e3,atk_rate:0},Sidewinder:{specialty:["bow","gun"],atk_value:1e3,atk_rate:0},Superstar:{specialty:["instrument","dagger"],atk_value:0,atk_rate:0},Valkyrie:{specialty:["spear","axe"],atk_value:500,atk_rate:0},Berserk:{specialty:["sword","axe"],atk_value:6e3,atk_rate:0},Sparta:{specialty:["stuff","spear"],atk_value:0,atk_rate:0},Sage:{specialty:["sword","spear"],atk_value:0,atk_rate:0},Warlock:{specialty:["stuff","dagger"],atk_value:2e3,atk_rate:0},Gizoku:{specialty:["dagger","gun"],atk_value:0,atk_rate:0},ChaosRuler:{specialty:["sword","dagger"],atk_value:0,atk_rate:0},Wrestler:{specialty:["knuckle","knuckle"],atk_value:2e3,atk_rate:0},HoundDog:{specialty:["bow","gun"],atk_value:1800,atk_rate:0},Elysian:{specialty:["instrument","dagger"],atk_value:0,atk_rate:0},Apsaras:{specialty:["spear","axe"],atk_value:2e3,atk_rate:0},Alchemist:{specialty:["dagger","gun"],atk_value:0,atk_rate:0},Ninja:{specialty:["blade","knuckle"],atk_value:0,atk_rate:0},Samurai:{specialty:["blade","bow"],atk_value:3e3,atk_rate:0},SwordMaster:{specialty:["sword","blade"],atk_value:1500,atk_rate:0},Gunslinger:{specialty:["gun","gun"],atk_value:1e3,atk_rate:0},Mystic:{specialty:["stuff","stuff"],atk_value:0,atk_rate:0},Assassin:{specialty:["dagger","dagger"],atk_value:1e3,atk_rate:0}};t.default=r},/* 30 */
/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
// vim: sts=2 sw=2 ts=2 expandtab
// 最大チェック数
t.WEAPON_CHECKED_MAX=10,t.SUMMON_CHECKED_MAX=5,t.FRIEND_CHECKED_MAX=1},/* 31 */
/***/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});
// vim: sts=2 sw=2 ts=2 expandtab
/*
 * 編成最適化WebWorkerとのやりとりをするための
 * 定数群
 */
t.WORKER_STATE={STOP:"STOP",// 停止している状態
INITED:"INITED",// 初期化された状態
TERMINATE:"TERMINATE",// 最適化ルーチンが中断された状態
RUNNING:"RUNNING",// GAによる最適化ルーチンが走っている状態
FINISH:"FINISH"},t.WORKER_COMMAND={GET_STATE:"GET_STATE",// Workerの現在の状態を取得する
SET_GA_PARAM:"SET_GA_PARAM",// GAのパラメータを設定する
SET_BASIC_INFO:"SET_BASIC_INFO",// 基礎的な攻撃力等のパラメータを設定する
SET_WEAPON:"SET_WEAPON",// 武器の配列を設定する
SET_SUMMON:"SET_SUMMON",// 召喚の配列を設定する
SET_FRIEND:"SET_FRIEND",// フレンド召喚の配列を設定する
INIT:"INIT_OPTIMIZER",// 最適化計算機を初期化する
RUN:"RUN_OPTIMIZER",// 最適化計算機を走らせる
RESET:"RESET",// 内部状態をリセットする
TERMINATE:"TERMINATE_OPTIMIZER"}},/* 32 */
/***/
function(e,t,n){e.exports={default:n(40),__esModule:!0}},/* 33 */
/***/
function(e,t,n){"use strict";t.__esModule=!0;var r=n(37),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e,t,n){return t in e?(0,a.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},/* 34 */
/***/
function(e,t,n){"use strict";t.__esModule=!0;var r=n(36),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,a.default)(e)}},/* 35 */
/***/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}
// メインスレッドから送られてくるコマンドに対応する関数群
// メインスレッドから渡されたdataを引数に持つ
// 攻撃力を計算するための基本的な情報を受けとる関数
function a(e){e.data&&e.data instanceof Object?(E.basic_info=e.data,O.i_basic=!0,x({result:!0,message:"basic_info is set."})):x({result:!1,message:"data must be Object."})}
// 最適編成計算の対象になる武器一覧を受けとる関数
function o(e){if(e.data&&e.data instanceof Array){if(!e.data.every(y.is_valid_weapon_obj))return void x({result:!1,message:"data has invalid weapon object."});E.weapon=e.data,O.i_weapon=!0,x({result:!0,message:"Weapon data is set."})}else x({result:!1,message:"data must be Array."})}
// 最適編成計算の対象になる召喚一覧を受けとる関数
function i(e){if(e.data&&e.data instanceof Array){if(!e.data.every(y.is_valid_summon_obj))return void x({result:!1,message:"data has invalid summon object."});E.summon=e.data,O.i_summon=!0,x({result:!0,message:"Summon data is set."})}else x({result:!1,message:"data must be Array."})}
// 最適編成計算の対象になるフレンド召喚一覧を受けとる関数
function u(e){if(e.data&&e.data instanceof Array){// フレンド召喚も召喚
if(!e.data.every(y.is_valid_summon_obj))return void x({result:!1,message:"data has invalid friend object."});E.friend=e.data,O.i_friend=!0,x({result:!0,message:"friend data is set."})}else x({result:!1,message:"data must be Array."})}
// 実際に計算機を走らせる
function c(e){if(b==m.WORKER_STATE.STOP){// コスモス武器のチェック
for(var t=[];;)if(1==O.i_basic&&1==O.i_weapon&&1==O.i_summon&&1==O.i_friend)break;b=m.WORKER_STATE.RUNNING;for(var n=0,r=0,a=0;a<E.weapon.length;a++)1==E.weapon[a].locked&&(n++,"cosmos"!=E.weapon[a].skill_slot[0]&&"cosmos"!=E.weapon[a].skill_slot[1]||r++);if(console.log(n),n>h.WEAPON_CHECKED_MAX||r>1)return b=m.WORKER_STATE.TERMINATE,void x({message:"Optimizer terminated.",state:b});
// コスモス武器の個数と場所をチェック
var o=1;if(t.push(-1),n<h.WEAPON_CHECKED_MAX||1==r)
// ロックされてる武器本数が10本の場合、もしくはコスモス武器がロックされている場合は考慮しない
for(var i=0;i<E.weapon.length;i++)"cosmos"!=E.weapon[i].skill_slot[0]&&"cosmos"!=E.weapon[i].skill_slot[1]||(t.push(i),o++);
// 選択状態は一旦すべて解除
E.weapon.forEach(function(e,t){E.weapon[t].selected=!1}),E.summon.forEach(function(e,t){E.summon[t].selected=!1}),E.friend.forEach(function(e,t){E.friend[t].selected=!1});
// 自分の召喚全てを判定
for(var u=0,c=void 0,s=void 0,l=void 0,f=0,p=0,_=void 0,d=E.summon.length*E.friend.length,g=0;g<E.summon.length;g++){
// 自召喚のコピーを用意
s=E.summon.concat(),
// 指定召喚を一番上に移動
s.forEach(function(e,t){s[t].selected=!1}),s[g].selected=!0,
// 攻撃力順に並べ変え
s.sort(function(e,t){return 1==e.selected?-1:1==t.selected?1:e.atk>t.atk?-1:e.atk<t.atk?1:0}),console.log("自召喚切替"),console.log(s[0].name);
// フレンドの召喚全てを順番に判定
for(var A=0;A<E.friend.length;A++){
// フレ召喚のコピーを用意
l=E.friend[A];
// コスモス武器は個別に選択してチェック
for(var M=!1,S=0,j=0;j<o;j++){var T=0;
// 一旦選択状態を解除
E.weapon.forEach(function(e,t){E.weapon[t].selected=!1}),
// まずはコスモス武器を１つ選択固定
-1!=t[j]&&(E.weapon[t[j]].selected=!0,T++);
// ロックされている武器を選択固定
for(var R=0;R<E.weapon.length&&("cosmos"!=E.weapon[R].skill_slot[0]&&"cosmos"!=E.weapon[R].skill_slot[1]);R++)1==E.weapon[R].locked&&(E.weapon[R].selected=!0,T++);for(var N=T,I=0;I<E.weapon.length&&("cosmos"!=E.weapon[I].skill_slot[0]&&"cosmos"!=E.weapon[I].skill_slot[1])&&(0!=E.weapon[I].locked||(E.weapon[I].selected=!0,++N!=h.WEAPON_CHECKED_MAX));I++);
// 更新がされなくなるまでループ
for(;;){
// 変化フラグ初期化
M=!1;
// 武器10本を順番に切り替えて今より強くなるかを判断
for(var P=0;P<E.weapon.length;P++){var C=-1;//切り替える対象の武器
// 選択済でない場合は切り替え対象でないのでスキップ
if(0!=E.weapon[P].selected&&1!=E.weapon[P].locked)
// その武器がロックされている場合も切り替え対象でないのでスキップ
{
// 現在の攻撃力を一旦記憶
var W=E.weapon.filter(function(e){return e instanceof Object&&e.selected}),F=(0,v.default)({},E.basic_info,{weapon:W.slice(0,10),summon:s.slice(0,5),friend:l});S=(0,y.calculate_atkval)(F,w.default).total_atk,E.weapon[P].selected=!1;// 切り替えてテストするために一旦選択を外す
// 指定した武器に対して、現在装備していない武器を切り替えてテスト
for(var D=0;D<E.weapon.length;D++)
// 自分自身か、もしくは選択済である場合はスキップ
if(P!=D&&1!=E.weapon[D].selected){E.weapon[D].selected=!0,c=E.weapon.filter(function(e){return e instanceof Object&&e.selected});var K=(0,v.default)({},E.basic_info,{weapon:c.slice(0,10),summon:s.slice(0,5),friend:l}),z=(0,y.calculate_atkval)(K,w.default);
// 切り替えた結果が上回っているかどうかの判定
S<z.total_atk&&(C=D,S=z.total_atk),E.weapon[D].selected=!1}-1!=C?(E.weapon[C].selected=!0,// 武器を切り替えるために選択状態にする
M=!0):E.weapon[P].selected=!0}}
// 一度も切り替えが無かった場合は終了して次のチェックへ
if(0==M)break}}S>u&&(_=s.concat(),f=g,p=A,u=S,console.log("更新！ "+S),console.log(c.slice(0,10)),console.log(s.slice(0,5)),console.log(l));var H=A+g*E.friend.length;console.log("done:"+H+" max:"+d),x({message:"Optimizer is running....",state:b,percent:Math.floor(100*H/d)})}}E.summon.forEach(function(e,t){E.summon[t].selected=!1}),[].concat((0,k.default)(Array(h.SUMMON_CHECKED_MAX).keys())).forEach(function(e,t){_[t].selected=!0}),E.friend.forEach(function(e,t){E.friend[t].selected=!1}),E.friend[p].selected=!0,b=m.WORKER_STATE.FINISH,x({message:"Optimizer finished.",state:b,i_weapon:E.weapon,i_summon:E.summon,i_friend:E.friend,top_summon:f,top_friend:p})}}var s,l,f=n(33),p=r(f),_=n(34),k=r(_),d=n(32),v=r(d),m=n(31),y=n(28),g=n(29),w=r(g),h=n(30),b=m.WORKER_STATE.STOP,E={//< 最適化を行なうターゲット
basic_info:{},weapon:[],summon:[],friend:[]},O={// 設定されたかどうかのフラグ
i_basic:!1,i_weapon:!1,i_summon:!1,i_friend:!1},x=(s=self).postMessage.bind(s),A=(l={},(0,p.default)(l,m.WORKER_COMMAND.SET_BASIC_INFO,a),(0,p.default)(l,m.WORKER_COMMAND.SET_WEAPON,o),(0,p.default)(l,m.WORKER_COMMAND.SET_SUMMON,i),(0,p.default)(l,m.WORKER_COMMAND.SET_FRIEND,u),(0,p.default)(l,m.WORKER_COMMAND.RUN,c),(0,p.default)(l,m.WORKER_COMMAND.RESET,function(e){b=m.WORKER_STATE.STOP}),l);
// ワーカーのメイン(イベント待ち受け)
self.addEventListener("message",function(e){var t=e.data;
// コマンドが無いとどうしようもない
if(!t.command)return void x({result:!1,message:"Need command."});
// 計算機の停止時コマンドが該当するものならば
A.hasOwnProperty(t.command)&&A[t.command](t)},!1)},/* 36 */
/***/
function(e,t,n){e.exports={default:n(39),__esModule:!0}},/* 37 */
/***/
function(e,t,n){e.exports={default:n(41),__esModule:!0}},/* 38 */
/***/
function(e,t,n){e.exports={default:n(42),__esModule:!0}},/* 39 */
/***/
function(e,t,n){n(72),n(68),e.exports=n(0).Array.from},/* 40 */
/***/
function(e,t,n){n(69),e.exports=n(0).Object.assign},/* 41 */
/***/
function(e,t,n){n(70);var r=n(0).Object;e.exports=function(e,t,n){return r.defineProperty(e,t,n)}},/* 42 */
/***/
function(e,t,n){n(71),e.exports=n(0).Object.keys},/* 43 */
/***/
function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},/* 44 */
/***/
function(e,t,n){
// false -> Array#indexOf
// true  -> Array#includes
var r=n(25),a=n(26),o=n(65);e.exports=function(e){return function(t,n,i){var u,c=r(t),s=a(c.length),l=o(i,s);
// Array#includes uses SameValueZero equality algorithm
if(e&&n!=n){for(;s>l;)if((u=c[l++])!=u)return!0}else for(;s>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}}},/* 45 */
/***/
function(e,t,n){
// getting tag from 19.1.3.6 Object.prototype.toString()
var r=n(18),a=n(1)("toStringTag"),o="Arguments"==r(function(){return arguments}()),i=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,u;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=i(t=Object(e),a))?n:o?r(t):"Object"==(u=r(t))&&"function"==typeof t.callee?"Arguments":u}},/* 46 */
/***/
function(e,t,n){"use strict";var r=n(5),a=n(15);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},/* 47 */
/***/
function(e,t,n){e.exports=n(4).document&&document.documentElement},/* 48 */
/***/
function(e,t,n){e.exports=!n(2)&&!n(7)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},/* 49 */
/***/
function(e,t,n){
// check on default Array iterator
var r=n(13),a=n(1)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[a]===e)}},/* 50 */
/***/
function(e,t,n){
// call something on iterator step with safe closing on error
var r=n(6);e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&r(o.call(e)),t}}},/* 51 */
/***/
function(e,t,n){"use strict";var r=n(56),a=n(15),o=n(23),i={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
n(9)(i,n(1)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(i,{next:a(1,n)}),o(e,t+" Iterator")}},/* 52 */
/***/
function(e,t,n){"use strict";var r=n(54),a=n(3),o=n(63),i=n(9),u=n(8),c=n(13),s=n(51),l=n(23),f=n(59),p=n(1)("iterator"),_=!([].keys&&"next"in[].keys()),k=function(){return this};e.exports=function(e,t,n,d,v,m,y){s(n,t,d);var g,w,h,b=function(e){if(!_&&e in A)return A[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},E=t+" Iterator",O="values"==v,x=!1,A=e.prototype,M=A[p]||A["@@iterator"]||v&&A[v],S=M||b(v),j=v?O?b("entries"):S:void 0,T="Array"==t?A.entries||M:M;if(
// Fix native
T&&(h=f(T.call(new e)))!==Object.prototype&&(
// Set @@toStringTag to native iterators
l(h,E,!0),
// fix for some old engines
r||u(h,p)||i(h,p,k)),
// fix Array#{values, @@iterator}.name in V8 / FF
O&&M&&"values"!==M.name&&(x=!0,S=function(){return M.call(this)}),
// Define iterator
r&&!y||!_&&!x&&A[p]||i(A,p,S),
// Plug for library
c[t]=S,c[E]=k,v)if(g={values:O?S:b("values"),keys:m?S:b("keys"),entries:j},y)for(w in g)w in A||o(A,w,g[w]);else a(a.P+a.F*(_||x),t,g);return g}},/* 53 */
/***/
function(e,t,n){var r=n(1)("iterator"),a=!1;try{var o=[7][r]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var o=[7],i=o[r]();i.next=function(){return{done:n=!0}},o[r]=function(){return i},e(o)}catch(e){}return n}},/* 54 */
/***/
function(e,t){e.exports=!0},/* 55 */
/***/
function(e,t,n){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var r=n(14),a=n(58),o=n(61),i=n(10),u=n(22),c=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
e.exports=!c||n(7)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=r})?function(e,t){for(// eslint-disable-line no-unused-vars
var n=i(e),c=arguments.length,s=1,l=a.f,f=o.f;c>s;)for(var p,_=u(arguments[s++]),k=l?r(_).concat(l(_)):r(_),d=k.length,v=0;d>v;)f.call(_,p=k[v++])&&(n[p]=_[p]);return n}:c},/* 56 */
/***/
function(e,t,n){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var r=n(6),a=n(57),o=n(21),i=n(16)("IE_PROTO"),u=function(){},c=function(){
// Thrash, waste and sodomy: IE GC bug
var e,t=n(20)("iframe"),r=o.length;for(t.style.display="none",n(47).appendChild(t),t.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;r--;)delete c.prototype[o[r]];return c()};e.exports=Object.create||function(e,t){var n;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==e?(u.prototype=r(e),n=new u,u.prototype=null,n[i]=e):n=c(),void 0===t?n:a(n,t)}},/* 57 */
/***/
function(e,t,n){var r=n(5),a=n(6),o=n(14);e.exports=n(2)?Object.defineProperties:function(e,t){a(e);for(var n,i=o(t),u=i.length,c=0;u>c;)r.f(e,n=i[c++],t[n]);return e}},/* 58 */
/***/
function(e,t){t.f=Object.getOwnPropertySymbols},/* 59 */
/***/
function(e,t,n){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var r=n(8),a=n(10),o=n(16)("IE_PROTO"),i=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=a(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?i:null}},/* 60 */
/***/
function(e,t,n){var r=n(8),a=n(25),o=n(44)(!1),i=n(16)("IE_PROTO");e.exports=function(e,t){var n,u=a(e),c=0,s=[];for(n in u)n!=i&&r(u,n)&&s.push(n);
// Don't enum bug & hidden keys
for(;t.length>c;)r(u,n=t[c++])&&(~o(s,n)||s.push(n));return s}},/* 61 */
/***/
function(e,t){t.f={}.propertyIsEnumerable},/* 62 */
/***/
function(e,t,n){
// most Object methods by ES6 should accept primitives
var r=n(3),a=n(0),o=n(7);e.exports=function(e,t){var n=(a.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}},/* 63 */
/***/
function(e,t,n){e.exports=n(9)},/* 64 */
/***/
function(e,t,n){var r=n(17),a=n(11);
// true  -> String#at
// false -> String#codePointAt
e.exports=function(e){return function(t,n){var o,i,u=String(a(t)),c=r(n),s=u.length;return c<0||c>=s?e?"":void 0:(o=u.charCodeAt(c),o<55296||o>56319||c+1===s||(i=u.charCodeAt(c+1))<56320||i>57343?e?u.charAt(c):o:e?u.slice(c,c+2):i-56320+(o-55296<<10)+65536)}}},/* 65 */
/***/
function(e,t,n){var r=n(17),a=Math.max,o=Math.min;e.exports=function(e,t){return e=r(e),e<0?a(e+t,0):o(e,t)}},/* 66 */
/***/
function(e,t,n){
// 7.1.1 ToPrimitive(input [, PreferredType])
var r=n(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},/* 67 */
/***/
function(e,t,n){var r=n(45),a=n(1)("iterator"),o=n(13);e.exports=n(0).getIteratorMethod=function(e){if(void 0!=e)return e[a]||e["@@iterator"]||o[r(e)]}},/* 68 */
/***/
function(e,t,n){"use strict";var r=n(19),a=n(3),o=n(10),i=n(50),u=n(49),c=n(26),s=n(46),l=n(67);a(a.S+a.F*!n(53)(function(e){Array.from(e)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(e){var t,n,a,f,p=o(e),_="function"==typeof this?this:Array,k=arguments.length,d=k>1?arguments[1]:void 0,v=void 0!==d,m=0,y=l(p);
// if object isn't iterable or it's array with default iterator - use simple case
if(v&&(d=r(d,k>2?arguments[2]:void 0,2)),void 0==y||_==Array&&u(y))for(t=c(p.length),n=new _(t);t>m;m++)s(n,m,v?d(p[m],m):p[m]);else for(f=y.call(p),n=new _;!(a=f.next()).done;m++)s(n,m,v?i(f,d,[a.value,m],!0):a.value);return n.length=m,n}})},/* 69 */
/***/
function(e,t,n){
// 19.1.3.1 Object.assign(target, source)
var r=n(3);r(r.S+r.F,"Object",{assign:n(55)})},/* 70 */
/***/
function(e,t,n){var r=n(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
r(r.S+r.F*!n(2),"Object",{defineProperty:n(5).f})},/* 71 */
/***/
function(e,t,n){
// 19.1.2.14 Object.keys(O)
var r=n(10),a=n(14);n(62)("keys",function(){return function(e){return a(r(e))}})},/* 72 */
/***/
function(e,t,n){"use strict";var r=n(64)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
n(52)(String,"String",function(e){this._t=String(e),// target
this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})}]);