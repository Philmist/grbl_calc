/******/!function(t){/******/
// The require function
/******/
function e(r){/******/
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
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}// webpackBootstrap
/******/
// The module cache
/******/
var n={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// identity function for calling harmory imports with the correct context
/******/
/******/
// define getter function for harmory exports
/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
/******/
// __webpack_public_path__
/******/
return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){/******/
Object.defineProperty(t,e,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:n})},e.n=function(t){/******/
var n=t&&t.__esModule?/******/
function(){return t.default}:/******/
function(){return t};/******/
/******/
return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=112)}([/* 0 */
/***/
function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},/* 1 */
/***/
function(t,e,n){var r=n(47)("wks"),a=n(28),o=n(5).Symbol,i="function"==typeof o,u=t.exports=function(t){return r[t]||(r[t]=i&&o[t]||(i?o:a)("Symbol."+t))};u.store=r},/* 2 */
/***/
function(t,e,n){var r=n(7),a=n(81),o=n(97),i=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),a)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},/* 3 */
/***/
function(t,e,n){
// Thank's IE8 for his funny defineProperty
t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 4 */
/***/
function(t,e,n){var r=n(5),a=n(0),o=n(11),i=n(6),u="prototype",s=function(t,e,n){var c,f,l,p=t&s.F,_=t&s.G,h=t&s.S,v=t&s.P,d=t&s.B,m=t&s.W,y=_?a:a[e]||(a[e]={}),g=y[u],k=_?r:h?r[e]:(r[e]||{})[u];_&&(n=e);for(c in n)
// contains in native
f=!p&&k&&void 0!==k[c],f&&c in y||(
// export native or passed
l=f?k[c]:n[c],
// prevent global pollution for namespaces
y[c]=_&&"function"!=typeof k[c]?n[c]:d&&f?o(l,r):m&&k[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(l):v&&"function"==typeof l?o(Function.call,l):l,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
v&&((y.virtual||(y.virtual={}))[c]=l,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
t&s.R&&g&&!g[c]&&i(g,c,l)))};
// type bitmap
s.F=1,// forced
s.G=2,// global
s.S=4,// static
s.P=8,// proto
s.B=16,// bind
s.W=32,// wrap
s.U=64,// safe
s.R=128,// real proto method for `library` 
t.exports=s},/* 5 */
/***/
function(t,e){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},/* 6 */
/***/
function(t,e,n){var r=n(2),a=n(24);t.exports=n(3)?function(t,e,n){return r.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},/* 7 */
/***/
function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},/* 8 */
/***/
function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},/* 9 */
/***/
function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},/* 10 */
/***/
function(t,e){t.exports={}},/* 11 */
/***/
function(t,e,n){
// optional / simple context binding
var r=n(69);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,a){return t.call(e,n,r,a)}}return function(){return t.apply(e,arguments)}}},/* 12 */
/***/
function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},/* 13 */
/***/
function(t,e,n){
// 7.1.13 ToObject(argument)
var r=n(14);t.exports=function(t){return Object(r(t))}},/* 14 */
/***/
function(t,e){
// 7.2.1 RequireObjectCoercible(argument)
t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},/* 15 */
/***/
function(t,e,n){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var r=n(90),a=n(39);t.exports=Object.keys||function(t){return r(t,a)}},/* 16 */
/***/
function(t,e,n){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var r=n(22),a=n(14);t.exports=function(t){return r(a(t))}},/* 17 */
/***/
function(t,e,n){
// 7.1.15 ToLength
var r=n(27),a=Math.min;t.exports=function(t){return t>0?a(r(t),9007199254740991):0}},/* 18 */
/***/
function(t,e,n){"use strict";var r=n(95)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
n(23)(String,"String",function(t){this._t=String(t),// target
this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},/* 19 */
/***/
function(t,e,n){
// getting tag from 19.1.3.6 Object.prototype.toString()
var r=n(20),a=n(1)("toStringTag"),o="Arguments"==r(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=i(e=Object(t),a))?n:o?r(e):"Object"==(u=r(e))&&"function"==typeof e.callee?"Arguments":u}},/* 20 */
/***/
function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},/* 21 */
/***/
function(t,e,n){var r=n(11),a=n(41),o=n(40),i=n(7),u=n(17),s=n(29),c={},f={},e=t.exports=function(t,e,n,l,p){var _,h,v,d,m=p?function(){return t}:s(t),y=r(n,l,e?2:1),g=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");
// fast case for arrays with default iterator
if(o(m)){for(_=u(t.length);_>g;g++)if(d=e?y(i(h=t[g])[0],h[1]):y(t[g]),d===c||d===f)return d}else for(v=m.call(t);!(h=v.next()).done;)if(d=a(v,y,h.value,e),d===c||d===f)return d};e.BREAK=c,e.RETURN=f},/* 22 */
/***/
function(t,e,n){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var r=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},/* 23 */
/***/
function(t,e,n){"use strict";var r=n(85),a=n(4),o=n(93),i=n(6),u=n(12),s=n(10),c=n(83),f=n(25),l=n(89),p=n(1)("iterator"),_=!([].keys&&"next"in[].keys()),h="@@iterator",v="keys",d="values",m=function(){return this};t.exports=function(t,e,n,y,g,k,w){c(n,e,y);var b,x,E,O=function(t){if(!_&&t in S)return S[t];switch(t){case v:return function(){return new n(this,t)};case d:return function(){return new n(this,t)}}return function(){return new n(this,t)}},T=e+" Iterator",N=g==d,A=!1,S=t.prototype,R=S[p]||S[h]||g&&S[g],j=R||O(g),I=g?N?O("entries"):j:void 0,M="Array"==e?S.entries||R:R;if(
// Fix native
M&&(E=l(M.call(new t)),E!==Object.prototype&&(
// Set @@toStringTag to native iterators
f(E,T,!0),
// fix for some old engines
r||u(E,p)||i(E,p,m))),
// fix Array#{values, @@iterator}.name in V8 / FF
N&&R&&R.name!==d&&(A=!0,j=function(){return R.call(this)}),
// Define iterator
r&&!w||!_&&!A&&S[p]||i(S,p,j),
// Plug for library
s[e]=j,s[T]=m,g)if(b={values:N?j:O(d),keys:k?j:O(v),entries:I},w)for(x in b)x in S||o(S,x,b[x]);else a(a.P+a.F*(_||A),e,b);return b}},/* 24 */
/***/
function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},/* 25 */
/***/
function(t,e,n){var r=n(2).f,a=n(12),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!a(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},/* 26 */
/***/
function(t,e,n){var r=n(47)("keys"),a=n(28);t.exports=function(t){return r[t]||(r[t]=a(t))}},/* 27 */
/***/
function(t,e){
// 7.1.4 ToInteger
var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},/* 28 */
/***/
function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},/* 29 */
/***/
function(t,e,n){var r=n(19),a=n(1)("iterator"),o=n(10);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||o[r(t)]}},/* 30 */
/***/
function(t,e,n){n(101);for(var r=n(5),a=n(6),o=n(10),i=n(1)("toStringTag"),u=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var c=u[s],f=r[c],l=f&&f.prototype;l&&!l[i]&&a(l,i,c),o[c]=o.Array}},/* 31 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}
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
function a(t,e){// = 2 * (hp_p_n ** 2) - 5 * hp_p_n + 3
/// スキルの計算をするための関数を定義
//// ロジックの異なる部分を引数として受けとり関数として返す
//// type_str: "baha" | "normal" | "magna" | "ex"
//// lv_check_func: 引数としてskill_levelを受けとり条件を判断する関数
//// true_func: lv_check_funcで返された結果が真のときskill_levelを受けとり加算する%を返す関数
//// false_func: ほぼ同上だが偽の場合
function n(t,e,n,r){return function(a){e(a)?w[t].percent+=n(a):w[t].percent+=r(a)}}
//// この関数は渾身に対応
//// ほぼ上の関数と一緒だが加算先が異なる
function r(t,e,n,r){return function(a){e(a)?w[t].konshin+=n(a):w[t].konshin+=r(a)}}
//// この関数は背水に対応
//// ほぼ上の関数と一緒だが以下の部分が相違
//// true_func, false_func: skill_levelを受けとりcoefficientを計算する関数
function a(t,e,n,r){return function(a){var o=0;o=e(a)?n(a):r(a),w[t].backwater+=x*o/3}}
//// 渡された数値がlevelより下かどうかをチェックする関数を返す関数
function o(t){return function(e){return e<t}}
//// addval + (lv - subval) * mulvalを計算する関数を返す関数
function i(t,e,n){return function(r){return t+(r-e)*n}}
//// addval + (lv - subval) * mulvalを計算し、さらにhp_p_nを掛ける関数
function u(t,e,n){return function(r){return t+(r-e)*n*b*b*b+2.222222222222222}}
// 攻撃力の定義
var s=0,c=0,f=0,l=0,p=Number(t.rank);c=40*p+1e3,p<2?c=1e3:p>100&&(c-=20*(p-100)),s=c;var _=0;1==t.zenith.atk?_=500:2==t.zenith.atk?_=1500:3==t.zenith.atk&&(_=3e3),s+=_;
// 召喚加護の計算
var h={attribute:100,character:0,magna:100,unknown:100,zeus:100,none:0};
// メイン召喚石
if(t.summon[0]){var v=t.summon[0];v.skill&&v.skill.forEach(function(t){t.type&&(h[t.type]+=t.percent)})}
// フレンド召喚石
if(t.friend){var d=t.friend;d.skill&&d.skill.forEach(function(t){t.type&&(h[t.type]+=t.percent)})}// コスモスのスキルタイプ
for(var m="no_cosmos",y="normal",g=0;g<t.weapon.length;g++)if("cosmos"==t.weapon[g].skill_slot[0]||"cosmos"==t.weapon[g].skill_slot[1]){m=t.weapon[g].type,y=t.weapon[g].skill_type;break}
// 武器攻撃力の計算
s+=function(){
// 表示攻撃力に処理で得られた総合武器攻撃力を加算する
var n=0,r=[0,1,3,5,6,8,10],a=e[t.job];// 該当ジョブのデータを取得
// もし該当ジョブが存在するのなら
// ジョブ攻撃力ボーナス
return a&&(f=a.atk_value,l=a.atk_rate),t.weapon.forEach(function(e){var o=e.atk+5*e.plus,i=100,u=0;// Zenith追加%
if(a)
// もし該当ジョブが存在するのなら
// 得意武器の一覧を見て...
for(var s=0;s<a.specialty.length;s++)
// 得意武器が現在見ている武器と一致するなら倍率(%)を上げる
a.specialty[s]==e.type&&(i=120,u=r[t.zenith.weapon[s]],u=u?u:0);var c=e.type==m?30:0;// コスモス該当武器の追加%
// 自身にもコスモス武器の倍率はかかる
// 武器攻撃力に倍率をかける
o=o*(i+u+c)/100,
// 全武器攻撃力を更新する
n+=o}),n}(),// 定義した無名関数を即時実行する
// 召喚攻撃力
s+=function(){var e=0;return t.summon.forEach(function(t){e+=t.atk}),e}(),// 無名関数の即時実行
// ジョブボーナス
// TODO: 外部ファイルから読みこみも考えるべき
s+=t.atk_bonus.value+f,s=s*(100+t.atk_bonus.percent+l)/100;/* スキル */
// 属性補正
var k=0;k+=function(){var e=[0,1,3,5],n=0;return n+=t.zenith.attribute?e[t.zenith.attribute]:e[0],"good"==t.affinity?n+=50:"bad"==t.affinity&&(n-=25),n}();// 無名関数の即時実行
// 武器ごとのスキル計算
/// 変数の初期化
var w={baha:{percent:0},normal:{percent:0,backwater:0,konshin:0},magna:{percent:0,backwater:0,konshin:0},ex:{percent:0,backwater:0,konshin:0},unknown:{percent:0,backwater:0,konshin:0}},b=t.hp_percent/100,x=2*b*b-5*b+3,E=10,O={
// total_skill.koujin.percent = 0 + (lv - 0) * 1  [lv<10]
// total_skill.koujin.percent = 10 + (lv - 10) * 0.4 [lv>=10]
normal_kj1:n("normal",o(E),i(0,0,1),i(10,E,.4)),normal_kj2:n("normal",o(E),i(2,0,1),i(12,E,.5)),normal_kj3:n("normal",o(E),i(5,0,1),i(15,E,.6)),normal_kj4:n("normal",o(E),i(6,0,1),i(16,E,.8)),normal_km:n("normal",o(E),i(0,0,1),i(10,E,0,4)),magna_kj1:n("magna",o(E),i(0,0,1),i(10,E,.4)),magna_kj2:n("magna",o(E),i(2,0,1),i(12,E,.5)),magna_kj3:n("magna",o(E),i(5,0,1),i(15,E,.6)),magna_km:n("magna",o(E),i(0,0,1),i(10,E,0,4)),ex_kj1:n("ex",o(E),i(0,0,1),i(10,E,.4)),ex_kj2:n("ex",o(E),i(2,0,1),i(12,E,.5)),ex_kj3:n("ex",o(E),i(5,0,1),i(15,E,.6)),ex_km:n("ex",o(E),i(0,0,1),i(10,E,0,4)),unknown_kj1:n("unknown",o(E),i(0,0,1),i(10,E,.4)),unknown_kj2:n("unknown",o(E),i(2,0,1),i(12,E,.5)),unknown_kj3:n("unknown",o(E),i(5,0,1),i(15,E,.6)),unknown_km:n("unknown",o(E),i(0,0,1),i(10,E,0,4)),normal_bw1:a("normal",o(E),function(t){return-.3+1.8*t},function(t){return 18+(t-E)/5*3}),normal_bw2:a("normal",o(E),function(t){return-.4+2.4*t},function(t){return 24+(t-E)/5*6}),normal_bw3:a("normal",o(E),function(t){return-.5+3*t},function(t){return 30+(t-E)/5*7.5}),magna_bw1:a("magna",o(E),function(t){return-.3+1.8*t},function(t){return 18+(t-E)/5*3}),magna_bw2:a("magna",o(E),function(t){return-.4+2.4*t},function(t){return 24+(t-E)/5*3}),magna_bw3:a("magna",o(E),function(t){return-.5+3*t},function(t){return 30+(t-E)/5*3}),ex_bw1:a("ex",o(E),function(t){return-.3+1.8*t},function(t){return 18+(t-E)/5*3}),ex_bw2:a("ex",o(E),function(t){return-.4+2.4*t},function(t){return 24+(t-E)/5*3}),ex_bw3:a("ex",o(E),function(t){return-.5+3*t},function(t){return 30+(t-E)/5*3}),unknown_bw1:a("unknown",o(E),function(t){return-.3+1.8*t},function(t){return 18+(t-E)/5*3}),unknown_bw2:a("unknown",o(E),function(t){return-.4+2.4*t},function(t){return 24+(t-E)/5*3}),unknown_bw3:a("unknown",o(E),function(t){return-.5+3*t},function(t){return 30+(t-E)/5*3}),normal_ks3:r("normal",o(E),u(1.923633604,0,.7236096116),u(1.923633604,0,.7236096116)),magna_ks3:r("magna",o(E),u(1.923633604,0,.7236096116),u(1.923633604,0,.7236096116)),ex_ks3:r("ex",o(E),u(1.923633604,0,.7236096116),u(1.923633604,0,.7236096116)),unknown_ks3:r("unknown",o(E),u(1.923633604,0,.7236096116),u(1.923633604,0,.7236096116)),baha_atk:n("baha",o(E),i(19,0,1),i(30,E,.4)),baha_hp:n("baha",o(E),i(9.5,0,.5),i(15,0,0))};
/// スキルとパラメータの集計
t.weapon.forEach(function(t){if(0!==t.skill_level){// スキルレベル0はスキル未取得
// スキルごとの計算
var e="";e=t.skill_slot[0]+"_"+t.skill_type[0],"none"!=t.skill_type[0]&&O[e](t.skill_level),e=t.skill_slot[1]+"_"+t.skill_type[1],"none"!=t.skill_type[1]&&O[e](t.skill_level)}}),
// ステータスの上限等補正
/// バハ攻%は50を超えない
w.baha.percent=w.baha.percent>50?50:w.baha.percent;
// 総合計算
var T=s;
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
/// 属性
/// 騎空艇ボーナス%
return T*=1+(h.character+w.baha.percent+w.normal.percent*h.zeus/100)/100,T*=1+w.normal.backwater*h.zeus/100/100,T*=1+w.normal.konshin*h.zeus/100/100,T*=1+w.magna.percent*h.magna/100/100,T*=1+w.magna.backwater*h.magna/100/100,T*=1+w.magna.konshin*h.magna/100/100,T*=1+(w.ex.percent+w.unknown.percent*h.unknown/100)/100,T*=1+(w.ex.backwater+w.unknown.backwater*h.unknown/100)/100,T*=1+(w.ex.konshin+w.unknown.konshin*h.unknown/100)/100,T*=(h.attribute+k)/100,T*=1+t.ship_bonus/100,T=Math.round(T),s=Math.round(s),{basic_atk:c,showed_atk:s,total_atk:T}}
// 武器1つのオブジェクトが妥当な形式かチェックする
function o(t){if(!(t instanceof Object))return!1;var e=(0,s.default)(t);
// 攻撃力
if(!(e.includes("atk")&&t.atk>=0))return!1;
// 武器種別
if(!e.includes("type")||"string"!=typeof t.type)return!1;
// スキルレベル
if(!(e.includes("skill_level")&&t.skill_level>=0))return!1;
// スキル種別
if(!(e.includes("skill_type")&&t.skill_type instanceof Array))return!1;for(var n=0;n<t.skill_type.length;n++)if("string"!=typeof t.skill_type[n])return!1;
// スキル種別
if(!(e.includes("skill_slot")&&t.skill_type instanceof Array))return!1;for(var r=0;r<t.skill_type.length;r++)if("string"!=typeof t.skill_type[r])return!1;
// チェックを全部パスした
return!0}
// 召喚1つのオブジェクトが妥当な形式かをチェックする
function i(t){
// 攻撃力
if(!(t.atk>=0))return!1;
// 加護
if(!(t.skill instanceof Array))return!1;for(var e=0;e<t.skill.length;e++){var n=t.skill[e];if(!(n instanceof Object))return!1;if(!n.hasOwnProperty("type")||"string"!=typeof n.type)return!1;if(!(n.hasOwnProperty("percent")&&n.percent>=0))return!1}
// チェックを全て通った
return!0}Object.defineProperty(e,"__esModule",{value:!0});var u=n(36),s=r(u);e.calculate_atkval=a,e.is_valid_weapon_obj=o,e.is_valid_summon_obj=i},/* 32 */
/***/
function(t,e,n){t.exports={default:n(64),__esModule:!0}},/* 33 */
/***/
function(t,e,n){t.exports={default:n(61),__esModule:!0}},/* 34 */
/***/
function(t,e,n){t.exports={default:n(62),__esModule:!0}},/* 35 */
/***/
function(t,e,n){t.exports={default:n(65),__esModule:!0}},/* 36 */
/***/
function(t,e,n){t.exports={default:n(66),__esModule:!0}},/* 37 */
/***/
function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},/* 38 */
/***/
function(t,e,n){var r=n(9),a=n(5).document,o=r(a)&&r(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},/* 39 */
/***/
function(t,e){
// IE 8- don't enum bug keys
t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 40 */
/***/
function(t,e,n){
// check on default Array iterator
var r=n(10),a=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[a]===t)}},/* 41 */
/***/
function(t,e,n){
// call something on iterator step with safe closing on error
var r=n(7);t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},/* 42 */
/***/
function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},/* 43 */
/***/
function(t,e,n){var r=n(28)("meta"),a=n(9),o=n(12),i=n(2).f,u=0,s=Object.isExtensible||function(){return!0},c=!n(8)(function(){return s(Object.preventExtensions({}))}),f=function(t){i(t,r,{value:{i:"O"+ ++u,// object ID
w:{}}})},l=function(t,e){
// return primitive with prefix
if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){
// can't set metadata to uncaught frozen object
if(!s(t))return"F";
// not necessary to add metadata
if(!e)return"E";
// add missing metadata
f(t)}return t[r].i},p=function(t,e){if(!o(t,r)){
// can't set metadata to uncaught frozen object
if(!s(t))return!0;
// not necessary to add metadata
if(!e)return!1;
// add missing metadata
f(t)}return t[r].w},_=function(t){return c&&h.NEED&&s(t)&&!o(t,r)&&f(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:_}},/* 44 */
/***/
function(t,e,n){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var r=n(7),a=n(87),o=n(39),i=n(26)("IE_PROTO"),u=function(){},s="prototype",c=function(){
// Thrash, waste and sodomy: IE GC bug
var t,e=n(38)("iframe"),r=o.length,a="<",i=">";for(e.style.display="none",n(80).appendChild(e),e.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
t=e.contentWindow.document,t.open(),t.write(a+"script"+i+"document.F=Object"+a+"/script"+i),t.close(),c=t.F;r--;)delete c[s][o[r]];return c()};t.exports=Object.create||function(t,e){var n;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==t?(u[s]=r(t),n=new u,u[s]=null,n[i]=t):n=c(),void 0===e?n:a(n,e)}},/* 45 */
/***/
function(t,e){e.f={}.propertyIsEnumerable},/* 46 */
/***/
function(t,e,n){var r=n(6);t.exports=function(t,e,n){for(var a in e)n&&t[a]?t[a]=e[a]:r(t,a,e[a]);return t}},/* 47 */
/***/
function(t,e,n){var r=n(5),a="__core-js_shared__",o=r[a]||(r[a]={});t.exports=function(t){return o[t]||(o[t]={})}},/* 48 */
/***/
function(t,e){var n;
// This works in non-strict mode
n=function(){return this}();try{
// This works if eval is allowed (see CSP)
n=n||Function("return this")()||(0,eval)("this")}catch(t){
// This works if the window reference is available
"object"==typeof window&&(n=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
t.exports=n},/* 49 */
/***/
function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
// vim: set sw=2 sts=2 ts=2 expandtab
/*
 * ジョブの基礎的な情報を記した
 * 定数
 */
var n={Fighter:{// 職の英語名(計算機内部で参照される)
specialty:["sword","axe"],// 武器の英語名(計算機内部と表示で参照される)
atk_value:1500,// 攻撃力ボーナス(値)
atk_rate:0},Knight:{specialty:["sword","spear"],atk_value:0,atk_rate:0},Priest:{specialty:["stuff","spear"],atk_value:0,atk_rate:0},Wizard:{specialty:["stuff","dagger"],atk_value:0,atk_rate:0},Thief:{specialty:["dagger","gun"],atk_value:0,atk_rate:0},Enhancer:{specialty:["sword","dagger"],atk_value:0,atk_rate:0},Grappler:{specialty:["knuckle","knuckle"],atk_value:1e3,atk_rate:0},Ranger:{specialty:["bow","gun"],atk_value:500,atk_rate:0},Harpist:{specialty:["instrument","dagger"],atk_value:0,atk_rate:0},Lancer:{specialty:["spear","axe"],atk_value:0,atk_rate:5},Warrior:{specialty:["sword","axe"],atk_value:3e3,atk_rate:0},Fortress:{specialty:["sword","spear"],atk_value:0,atk_rate:0},Cleric:{specialty:["stuff","spear"],atk_value:0,atk_rate:0},Sorcerer:{specialty:["stuff","dagger"],atk_value:0,atk_rate:0},Raider:{specialty:["dagger","gun"],atk_value:0,atk_rate:0},ArcanaSword:{specialty:["sword","dagger"],atk_value:0,atk_rate:0},KungFu:{specialty:["knuckle","knuckle"],atk_value:2e3,atk_rate:0},Marksman:{specialty:["bow","gun"],atk_value:750,atk_rate:0},Minstrel:{specialty:["instrument","dagger"],atk_value:0,atk_rate:0},Dragoon:{specialty:["spear","axe"],atk_value:1e3,atk_rate:0},WeaponMaster:{specialty:["sword","axe"],atk_value:4500,atk_rate:0},HolySaber:{specialty:["sword","spear"],atk_value:0,atk_rate:0},Bishop:{specialty:["stuff","spear"],atk_value:0,atk_rate:0},Hermit:{specialty:["stuff","dagger"],atk_value:0,atk_rate:0},Hawkeye:{specialty:["dagger","gun"],atk_value:0,atk_rate:0},DarkFencer:{specialty:["sword","dagger"],atk_value:0,atk_rate:0},Ogre:{specialty:["knuckle","knuckle"],atk_value:2e3,atk_rate:0},Sidewinder:{specialty:["bow","gun"],atk_value:1e3,atk_rate:0},Superstar:{specialty:["instrument","dagger"],atk_value:0,atk_rate:0},Valkyrie:{specialty:["spear","axe"],atk_value:500,atk_rate:0},Berserk:{specialty:["sword","axe"],atk_value:6e3,atk_rate:0},Sparta:{specialty:["stuff","spear"],atk_value:0,atk_rate:0},Sage:{specialty:["sword","spear"],atk_value:0,atk_rate:0},Warlock:{specialty:["stuff","dagger"],atk_value:2e3,atk_rate:0},Gizoku:{specialty:["dagger","gun"],atk_value:0,atk_rate:0},ChaosRuler:{specialty:["sword","dagger"],atk_value:0,atk_rate:0},Wrestler:{specialty:["knuckle","knuckle"],atk_value:2e3,atk_rate:0},Alchemist:{specialty:["dagger","gun"],atk_value:0,atk_rate:0},Ninja:{specialty:["blade","knuckle"],atk_value:0,atk_rate:0},Samurai:{specialty:["blade","bow"],atk_value:3e3,atk_rate:0},SwordMaster:{specialty:["sword","blade"],atk_value:1500,atk_rate:0},Gunslinger:{specialty:["gun","gun"],atk_value:1e3,atk_rate:0},Mystic:{specialty:["stuff","stuff"],atk_value:0,atk_rate:0},Assassin:{specialty:["dagger","dagger"],atk_value:1e3,atk_rate:0}};e.default=n},/* 50 */
/***/
function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});
// vim: sts=2 sw=2 ts=2 expandtab
/*
 * 編成最適化WebWorkerとのやりとりをするための
 * 定数群
 */
e.WORKER_STATE={STOP:"STOP",// 停止している状態
INITED:"INITED",// 初期化された状態
TERMINATE:"TERMINATE",// 最適化ルーチンが中断された状態
RUNNING:"RUNNING",// GAによる最適化ルーチンが走っている状態
FINISH:"FINISH"},e.WORKER_COMMAND={GET_STATE:"GET_STATE",// Workerの現在の状態を取得する
SET_GA_PARAM:"SET_GA_PARAM",// GAのパラメータを設定する
SET_BASIC_INFO:"SET_BASIC_INFO",// 基礎的な攻撃力等のパラメータを設定する
SET_WEAPON:"SET_WEAPON",// 武器の配列を設定する
SET_SUMMON:"SET_SUMMON",// 召喚の配列を設定する
SET_FRIEND:"SET_FRIEND",// フレンド召喚の配列を設定する
INIT:"INIT_OPTIMIZER",// 最適化計算機を初期化する
RUN:"RUN_OPTIMIZER",// 最適化計算機を走らせる
RESET:"RESET",// 内部状態をリセットする
TERMINATE:"TERMINATE_OPTIMIZER"}},/* 51 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}
// [min, max]の乱整数を返す
// from: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// vim: sts=2 sw=2 ts=2 expandtab
/*
 * なにか上手いやり方をして
 * 全体の攻撃力を適当に最高なところまで
 * 引きあげる計算をするファイル
 */
function a(t,e){return Math.floor(Math.random()*(e-t+1))+t}Object.defineProperty(e,"__esModule",{value:!0}),e.GrblFormGAOptimizer=e.CALC_STATE=void 0;var o=n(60),i=r(o),u=n(55),s=r(u),c=n(58),f=r(c),l=n(59),p=r(l),_=n(36),h=r(_),v=n(34),d=r(v),m=n(33),y=r(m),g=n(32),k=r(g),w=n(56),b=r(w),x=n(57),E=r(x),O=n(31),T=e.CALC_STATE={UNINIT:"UNINIT",PARAM_INITED:"PARAM_INITED",GA_INITED:"GA_INITED",CALC_VALUE:"CALC_VALUE",SORT_POPULATION:"SORT_POPULATION",SELECT_POPULATION:"SELECT_POPULATION",INTERSECT_GENE:"INTERSECT_GENE",MUTATION:"MUTATION",LOOP_START:"LOOP_START",LOOP_END:"LOOP_END"};e.GrblFormGAOptimizer=function(){
// コンストラクタ
// 初期の計算状態を設定する
function t(){(0,b.default)(this,t),this.state={status:T.UNINIT}}
// 計算前の初期化関数
// 計算に必要な各オブジェクトを受けとる
// 戻り値としてジェネレータを返す
// TODO: (まだ)再度initされることは想定していない
return(0,E.default)(t,[{key:"init",value:function(t,e,n,r,a){
// 必要な変数に代入する
this.base=(0,k.default)({},t),this.weapon_list=(0,y.default)(e,function(t){return(0,O.is_valid_weapon_obj)(t)?t:null}),this.summon_list=(0,y.default)(n,function(t){return(0,O.is_valid_summon_obj)(t)?t:null}),this.friend_list=(0,y.default)(r,function(t){return(0,O.is_valid_summon_obj)(t)?t:null}),// フレンド召喚も召喚
this.job_data=a;// job_dataは変更されないことが前提
// 配列を辞書に変換する関数
var o=function(t){for(var e={},n=0;n<t.length;n++){var r=t[n];r instanceof Object&&("max"in r&&r.max>=0||(r.max=1),"min"in r&&r.min>=0||(r.min=0),e[String(n)]=r)}return e};
// 武器配列を辞書に変換する
this.weapon_obj=o(this.weapon_list),
// 召喚配列を辞書に変換する
this.summon_obj=o(this.summon_list),
// フレンド召喚配列を辞書に変換する
this.friend_obj=o(this.friend_list);
// 染色体用のリストを作る関数
var i=function(t){var e=[],n=!0,r=!1,a=void 0;try{for(var o,i=(0,d.default)((0,h.default)(t));!(n=(o=i.next()).done);n=!0)for(var u=o.value,s=0;s<t[u].max;s++)e.push(u)}catch(t){r=!0,a=t}finally{try{!n&&i.return&&i.return()}finally{if(r)throw a}}return e};
// ジェネレータを作って返す
// 染色体の参照リストを作る
// 染色体の最大長を設定する
// TODO: ハードコーディングなのでもっとマシにする
// 状態変数を初期状態に
return this.ref={weapon:i(this.weapon_obj),summon:i(this.summon_obj),friend:i(this.friend_obj)},this.weapon_max_chromo_length=this.ref.weapon.length>10?10:this.ref.weapon.length,this.summon_max_chromo_length=this.ref.summon.length>5?5:this.ref.summon.length,this.friend_max_chromo_length=this.ref.friend.length>1?1:this.ref.friend.length,this.state.status=T.PARAM_INITED,this.calculate_()}},{key:"create_first_ga_state",value:function(t,e,n,r){
// 集団の大きさをチェックする
t=t>0?t:50,
// 突然変異確率を指定する
e=e>0&&e<1?e:.01,n=n>0&&n<1?n:.01,r=r>0&&r<1?r:.01;for(var o=function(e,n,r){
// 初期集団を生成する
for(var o=Number(r),i=Number(n),u=Number(e),s=t,c=[],f=0;f<s;f++){// [0,1,2,...]
// 生成された順序列を乱雑なものにする
for(var l=[].concat((0,p.default)(Array(u).keys())),_=u-1;_>0;_--){var h=a(0,_),v=[l[_],l[h]];l[h]=v[0],l[_]=v[1]}
// 個体の生成
// 遺伝子は順序表現(残りの中で何番目にあるか)
// ※0ベース
var m=[],y=[].concat((0,p.default)(Array(u).keys())),g=!0,k=!1,w=void 0;try{for(var b,x=(0,d.default)(l);!(g=(b=x.next()).done);g=!0){var E=b.value,O=y.indexOf(E);m.push(O),y.splice(O,1)}}catch(t){k=!0,w=t}finally{try{!g&&x.return&&x.return()}finally{if(k)throw w}}c.push(m)}
// 生成された集団と各パラメータを返す
return[c,{mutation_probability:o,chromo_length:i,max_gene_number:u}]},i=o(this.ref.weapon.length,this.weapon_max_chromo_length,e),u=(0,f.default)(i,2),s=u[0],c=u[1],l=o(this.ref.summon.length,this.summon_max_chromo_length,n),_=(0,f.default)(l,2),h=_[0],v=_[1],m=o(this.ref.friend.length,this.friend_max_chromo_length,r),y=(0,f.default)(m,2),g=y[0],k=y[1],w={population:[],param:{weapon:c,summon:v,friend:k,base:this.base}},b=0;b<t;b++){var x={weapon:s[b],summon:h[b],friend:g[b],value:null};w.population.push(x)}
// 現在の状態を設定する
return w.max_population_length=t,this.state.status=T.GA_INITED,this.state.ga_state=w,!0}},{key:"conv_orderchromos_to_origchromos",value:function(t,e){var n=[].concat((0,p.default)(Array(e).keys())),r=[],a=!0,o=!1,i=void 0;try{for(var u,s=(0,d.default)(t);!(a=(u=s.next()).done);a=!0){var c=u.value;r.push(n[c]),n.splice(c,1)}}catch(t){o=!0,i=t}finally{try{!a&&s.return&&s.return()}finally{if(o)throw i}}return r}},{key:"conv_origchromos_to_objkeyarray",value:function(t,e){return t.map(function(t){return e[t]})}},{key:"conv_chromos_to_array",value:function(t,e){var n=this.conv_origchromos_to_objkeyarray(this.conv_orderchromos_to_origchromos(t,e.length),e);return n}},{key:"objkeyarray_to_objarray",value:function(t,e){var n=[];return t.forEach(function(t){n.push(e[String(t)])}),n}},{key:"evaluate_value",value:function(t){
// キーの配列に対して同じキーを指しているものが「ない」かをチェックする
function e(t){var e=new s.default(t);return e.size==t.length}
// 個体の染色体をキーを表わす配列に変換する
var n=[this.conv_chromos_to_array(t.weapon,this.ref.weapon),this.conv_chromos_to_array(t.summon,this.ref.summon),this.conv_chromos_to_array(t.friend,this.ref.friend)],r=n[0],a=n[1],o=n[2],i=[r,a,o],u=new Array;if(i.forEach(function(t){u.push(e(t))}),u.includes(!1))return 0;
// キー値を示す配列からパラメータを生成する
var c=this.objkeyarray_to_objarray(r,this.weapon_obj),f=this.objkeyarray_to_objarray(a,this.summon_obj),l=this.objkeyarray_to_objarray(o,this.friend_obj),p=(0,k.default)({},this.base,{weapon:c.slice(0,10),summon:f.slice(0,5),friend:l[0]}),_=void 0;return _=(0,O.calculate_atkval)(p,this.job_data),_=_.total_atk,[_,p]}},{key:"assign_value",value:i.default.mark(function t(){var e,n,r,a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:
// 現在のステートを実行前に設定する
this.state.status=T.CALC_VALUE,
// 分数形式の文字列として渡すために最大長を文字列として保管する
e=String(this.state.ga_state.population.length),
// 集団を個体に分解して価値を付ける
n=0;case 3:if(!(n<this.state.ga_state.population.length)){t.next=13;break}
// 個体を取りだす
// 価値を付ける
// 外に出すメッセージ用の文字列を設定する
// いったん中断する
return r=this.state.ga_state.population[n],a=this.evaluate_value(r),this.state.ga_state.population[n].value=a[0],this.state.message="ASSIGN VALUE: "+String(n+1)+"/"+String(e),t.next=10,this.state;case 10:n++,t.next=3;break;case 13:case"end":return t.stop()}},t,this)})},{key:"sort_population",value:function(){this.state.status=T.SORT_POPULATION,this.state.message="SORTING",this.state.ga_state.population.sort(function(t,e){return null===t&&null===e?0:null===e?-1:null===t?1:e.value-t.value}),this.state.message="SORTED"}},{key:"select_population",value:i.default.mark(function t(){var e=this;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:
// 価値が無い個体を削除する
return this.state.status=T.SELECT_POPULATION,this.state.message="START SELECTION",this.state.ga_state.population=this.state.ga_state.population.filter(function(t){return null!=t.value&&t.value>0}),t.next=5,this.state;case 5:if(!(this.state.ga_state.population.length>1)){t.next=7;break}return t.delegateYield(i.default.mark(function t(){var n,r,a,o,u,s;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(
// 全体の価値最大値を保存する
n=e.state.ga_state.population[0].value,r=e.state.ga_state.population.length,a=e.state.ga_state.population[r-1].value,
// 全体の半分以上になるまで選別する
// TODO: ハードコーディングしているのをどうにかする
o=Math.round(e.state.ga_state.population.length/2),u=e.state.ga_state.population.slice(0,Math.round(o/2)),s=0,e.state.ga_state.population.forEach(function(t){s+=t.value});o>u.length;)e.state.ga_state.population.forEach(function(t){Math.random()<t.value/s&&u.push(t)});return e.state.ga_state.population=u,e.state.message="SELECTION:"+String(e.state.ga_state.population.length),t.next=12,e.state;case 12:case"end":return t.stop()}},t,e)})(),"t0",7);case 7:return this.state.message="FINISH SELECTION",t.next=10,this.state;case 10:case"end":return t.stop()}},t,this)})},{key:"intersect",value:i.default.mark(function t(){var e,n,r,o,u,s,c,l,_,h,v,d;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.state.status=T.INTERSECT_GENE,this.state.message="START INTERSECTION",
// 2つの遺伝子を受けとり交叉して新しい2つの遺伝子を返す関数
// l_gene.length === r_gene.length
e=function(t,e){var n=[a(0,t.length),a(0,t.length)];
// 交叉する
if(n[0]===n[1]){if(0==n[0]||n[0]==t.length)return[e,t];if(n[0]<n[1]){var r=[n[0],n[1]];n[1]=r[0],n[0]=r[1]}var o=n[1]-n[0],i=t.splice(n[0],o),u=e.splice(n[0],o);t.splice.apply(t,[n[0],0].concat((0,p.default)(u))),e.splice.apply(e,[n[0],0].concat((0,p.default)(i)))}return[t,e]};
// 必要な分だけ交叉して個体を集団に追加する
case 3:if(!(this.state.ga_state.population.length<this.state.ga_state.max_population_length)){t.next=34;break}for(
// 交叉の対象となる2つの個体を選択する
// TODO: 1つしか個体が無かった場合の処理をどうにかする
n=[0,0];n[0]===n[1];)n[0]=a(0,this.state.ga_state.population.length-1),n[1]=a(0,this.state.ga_state.population.length-1);
// 交叉対象となる個体をコピーする
// そのまま代入すると元も変更されてしまう
// 交叉して結果をもらう
// intersect_geneは[遺伝子, 遺伝子]を返す
// TODO: データ構造が直前と違うのでどうにかしたい
return r={weapon:[],summon:[],friend:[]},o=(0,k.default)({},r),u=(0,k.default)({},r),o.weapon=(0,y.default)(this.state.ga_state.population[n[0]].weapon),o.summon=(0,y.default)(this.state.ga_state.population[n[0]].summon),o.friend=(0,y.default)(this.state.ga_state.population[n[0]].friend),u.weapon=(0,y.default)(this.state.ga_state.population[n[1]].weapon),u.summon=(0,y.default)(this.state.ga_state.population[n[1]].summon),u.friend=(0,y.default)(this.state.ga_state.population[n[1]].friend),s=[(0,k.default)(r),(0,k.default)(r)],c=e(o.weapon,u.weapon),l=(0,f.default)(c,2),s[0].weapon=l[0],s[1].weapon=l[1],_=e(o.summon,u.summon),h=(0,f.default)(_,2),s[0].summon=h[0],s[1].summon=h[1],v=e(o.friend,u.friend),d=(0,f.default)(v,2),s[0].friend=d[0],s[1].friend=d[1],this.state.ga_state.population=this.state.ga_state.population.concat(s),this.state.message="INTERSECTION: "+Number(this.state.ga_state.population.length),t.next=32,this.state;case 32:t.next=3;break;case 34:return this.state.message="FINISH INTERSECTION",t.next=37,this.state;case 37:case"end":return t.stop()}},t,this)})},{key:"mutation",value:i.default.mark(function t(){var e,n,r,o,u,s,c,f,l,_,h,v,m,y,g,w,b,x,E,O,N,A,S,R,j,I,M;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:
// 変異前に状態変更
return this.state.status=T.MUTATION,this.state.message="START MUTATION",t.next=4,this.state;case 4:
// 変異の開始
e=["weapon","summon","friend"],n=!0,r=!1,o=void 0,t.prev=8,u=(0,d.default)(this.state.ga_state.population);case 10:if(n=(s=u.next()).done){t.next=72;break}c=s.value,f=(0,k.default)({},c),l=!0,_=!1,h=void 0,t.prev=16,v=(0,d.default)(e);case 18:if(l=(m=v.next()).done){t.next=54;break}if(y=m.value,!(Math.random()<this.state.ga_state.param[y].mutation_probability)){t.next=51;break}
// そもそも対象の遺伝子の長さが1なら入れかえようがない
if(g=[0,0],1==c[y].length){t.next=51;break}
// ランダムに2つの遺伝子を選択する
for(;g[0]===g[1];)g[0]=a(0,c[y].length-1),g[1]=a(0,c[y].length-1);for(
// いったんキー(位置)に戻してから入れかえる
w=this.conv_orderchromos_to_origchromos(c[y],this.ref[y].length),
// キーを順序表記に変換する
b=[w[g[0]],w[g[1]]],w[g[1]]=b[0],w[g[0]]=b[1],x=[],E=this.state.ga_state.param[y].max_gene_number,O=[].concat((0,p.default)(Array(E).keys())),N=!0,A=!1,S=void 0,t.prev=34,R=(0,d.default)(w);!(N=(j=R.next()).done);N=!0)I=j.value,M=O.indexOf(I),x.push(M),O.splice(M,1);t.next=42;break;case 38:t.prev=38,t.t0=t.catch(34),A=!0,S=t.t0;case 42:t.prev=42,t.prev=43,!N&&R.return&&R.return();case 45:if(t.prev=45,!A){t.next=48;break}throw S;case 48:return t.finish(45);case 49:return t.finish(42);case 50:f[y]=x;case 51:l=!0,t.next=18;break;case 54:t.next=60;break;case 56:t.prev=56,t.t1=t.catch(16),_=!0,h=t.t1;case 60:t.prev=60,t.prev=61,!l&&v.return&&v.return();case 63:if(t.prev=63,!_){t.next=66;break}throw h;case 66:return t.finish(63);case 67:return t.finish(60);case 68:
// もし変異した結果のほうがよかったのなら入れかえる
this.evaluate_value(c)<this.evaluate_value(f)&&(c=f);case 69:n=!0,t.next=10;break;case 72:t.next=78;break;case 74:t.prev=74,t.t2=t.catch(8),r=!0,o=t.t2;case 78:t.prev=78,t.prev=79,!n&&u.return&&u.return();case 81:if(t.prev=81,!r){t.next=84;break}throw o;case 84:return t.finish(81);case 85:return t.finish(78);case 86:
// 変異後の状態変更
return this.state.message="FINISHED MUTATION",t.next=89,this.state;case 89:case"end":return t.stop()}},t,this,[[8,74,78,86],[16,56,60,68],[34,38,42,50],[43,,45,49],[61,,63,67],[79,,81,85]])})},{key:"calculate_",value:i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.status!=T.PARAM_INITED){t.next=5;break}return t.next=3,this.state;case 3:t.next=0;break;case 5:return t.delegateYield(this.assign_value(),"t0",6);case 6:return this.sort_population(),t.next=9,this.state;case 9:
// ループスタート
return this.state.status==T.LOOP_START,"Loop begin."==this.state.message,t.next=14,this.state;case 14:return t.delegateYield(this.select_population(),"t1",15);case 15:return t.delegateYield(this.intersect(),"t2",16);case 16:return t.delegateYield(this.mutation(),"t3",17);case 17:return t.delegateYield(this.assign_value(),"t4",18);case 18:return this.sort_population(),t.next=21,this.state;case 21:
// ループエンド
// トップの価値をメッセージにする
return this.state.status=T.LOOP_END,this.state.message="CURRENT TOP: "+String(this.state.ga_state.population[0].value),t.next=25,this.state;case 25:t.next=9;break;case 27:case"end":return t.stop()}},t,this)})}]),t}()},/* 52 */
/***/
function(t,e,n){t.exports={default:n(67),__esModule:!0}},/* 53 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(35),o=r(a);e.default=function(t,e,n){return e in t?(0,o.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},/* 54 */
/***/
function(t,e,n){t.exports={default:n(63),__esModule:!0}},/* 55 */
/***/
function(t,e,n){t.exports={default:n(68),__esModule:!0}},/* 56 */
/***/
function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},/* 57 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(35),o=r(a);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},/* 58 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(54),o=r(a),i=n(34),u=r(i);e.default=function(){function t(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=(0,u.default)(t);!(r=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,o.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},/* 59 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var a=n(33),o=r(a);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,o.default)(t)}},/* 60 */
/***/
function(t,e,n){t.exports=n(110)},/* 61 */
/***/
function(t,e,n){n(18),n(100),t.exports=n(0).Array.from},/* 62 */
/***/
function(t,e,n){n(30),n(18),t.exports=n(98)},/* 63 */
/***/
function(t,e,n){n(30),n(18),t.exports=n(99)},/* 64 */
/***/
function(t,e,n){n(102),t.exports=n(0).Object.assign},/* 65 */
/***/
function(t,e,n){n(103);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},/* 66 */
/***/
function(t,e,n){n(104),t.exports=n(0).Object.keys},/* 67 */
/***/
function(t,e,n){n(107),t.exports=n(0).Object.values},/* 68 */
/***/
function(t,e,n){n(105),n(18),n(30),n(106),n(108),t.exports=n(0).Set},/* 69 */
/***/
function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},/* 70 */
/***/
function(t,e){t.exports=function(){}},/* 71 */
/***/
function(t,e,n){var r=n(21);t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},/* 72 */
/***/
function(t,e,n){
// false -> Array#indexOf
// true  -> Array#includes
var r=n(16),a=n(17),o=n(96);t.exports=function(t){return function(e,n,i){var u,s=r(e),c=a(s.length),f=o(i,c);
// Array#includes uses SameValueZero equality algorithm
if(t&&n!=n){for(;c>f;)if(u=s[f++],u!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},/* 73 */
/***/
function(t,e,n){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var r=n(11),a=n(22),o=n(13),i=n(17),u=n(75);t.exports=function(t,e){var n=1==t,s=2==t,c=3==t,f=4==t,l=6==t,p=5==t||l,_=e||u;return function(e,u,h){for(var v,d,m=o(e),y=a(m),g=r(u,h,3),k=i(y.length),w=0,b=n?_(e,k):s?_(e,0):void 0;k>w;w++)if((p||w in y)&&(v=y[w],d=g(v,w,m),t))if(n)b[w]=d;else if(d)switch(t){case 3:return!0;// some
case 5:return v;// find
case 6:return w;// findIndex
case 2:b.push(v)}else if(f)return!1;return l?-1:c||f?f:b}}},/* 74 */
/***/
function(t,e,n){var r=n(9),a=n(82),o=n(1)("species");t.exports=function(t){var e;
// cross-realm fallback
return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),r(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},/* 75 */
/***/
function(t,e,n){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var r=n(74);t.exports=function(t,e){return new(r(t))(e)}},/* 76 */
/***/
function(t,e,n){"use strict";var r=n(2).f,a=n(44),o=n(46),i=n(11),u=n(37),s=n(14),c=n(21),f=n(23),l=n(42),p=n(94),_=n(3),h=n(43).fastKey,v=_?"_s":"size",d=function(t,e){
// fast case
var n,r=h(e);if("F"!==r)return t._i[r];
// frozen object case
for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,f){var l=t(function(t,r){u(t,l,e,"_i"),t._i=a(null),// index
t._f=void 0,// first entry
t._l=void 0,// last entry
t[v]=0,// size
void 0!=r&&c(r,n,t[f],t)});return o(l.prototype,{
// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function(){for(var t=this,e=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete e[n.i];t._f=t._l=void 0,t[v]=0},
// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
delete:function(t){var e=this,n=d(e,t);if(n){var r=n.n,a=n.p;delete e._i[n.i],n.r=!0,a&&(a.n=r),r&&(r.p=a),e._f==n&&(e._f=r),e._l==n&&(e._l=a),e[v]--}return!!n},
// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function(t){u(this,l,"forEach");for(var e,n=i(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)
// revert to the last existing entry
for(n(e.v,e.k,this);e&&e.r;)e=e.p},
// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function(t){return!!d(this,t)}}),_&&r(l.prototype,"size",{get:function(){return s(this[v])}}),l},def:function(t,e,n){var r,a,o=d(t,e);
// change existing entry
// add to index
return o?o.v=n:(t._l=o={i:a=h(e,!0),// <- index
k:e,// <- key
v:n,// <- value
p:r=t._l,// <- previous entry
n:void 0,// <- next entry
r:!1},t._f||(t._f=o),r&&(r.n=o),t[v]++,"F"!==a&&(t._i[a]=o)),t},getEntry:d,setStrong:function(t,e,n){
// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
f(t,e,function(t,e){this._t=t,// target
this._k=e,// kind
this._l=void 0},function(){
// revert to the last existing entry
for(var t=this,e=t._k,n=t._l;n&&n.r;)n=n.p;
// get next entry
// get next entry
// return step by kind
// or finish the iteration
return t._t&&(t._l=n=n?n.n:t._t._f)?"keys"==e?l(0,n.k):"values"==e?l(0,n.v):l(0,[n.k,n.v]):(t._t=void 0,l(1))},n?"entries":"values",!n,!0),
// add [@@species], 23.1.2.2, 23.2.2.2
p(e)}}},/* 77 */
/***/
function(t,e,n){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var r=n(19),a=n(71);t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return a(this)}}},/* 78 */
/***/
function(t,e,n){"use strict";var r=n(5),a=n(4),o=n(43),i=n(8),u=n(6),s=n(46),c=n(21),f=n(37),l=n(9),p=n(25),_=n(2).f,h=n(73)(0),v=n(3);t.exports=function(t,e,n,d,m,y){var g=r[t],k=g,w=m?"set":"add",b=k&&k.prototype,x={};
// create collection constructor
return v&&"function"==typeof k&&(y||b.forEach&&!i(function(){(new k).entries().next()}))?(k=e(function(e,n){f(e,k,t,"_c"),e._c=new g,void 0!=n&&c(n,m,e[w],e)}),h("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in b&&(!y||"clear"!=t)&&u(k.prototype,t,function(n,r){if(f(this,k,t),!e&&y&&!l(n))return"get"==t&&void 0;var a=this._c[t](0===n?0:n,r);return e?this:a})}),"size"in b&&_(k.prototype,"size",{get:function(){return this._c.size}})):(k=d.getConstructor(e,t,m,w),s(k.prototype,n),o.NEED=!0),p(k,t),x[t]=k,a(a.G+a.W+a.F,x),y||d.setStrong(k,t,m),k}},/* 79 */
/***/
function(t,e,n){"use strict";var r=n(2),a=n(24);t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}},/* 80 */
/***/
function(t,e,n){t.exports=n(5).document&&document.documentElement},/* 81 */
/***/
function(t,e,n){t.exports=!n(3)&&!n(8)(function(){return 7!=Object.defineProperty(n(38)("div"),"a",{get:function(){return 7}}).a})},/* 82 */
/***/
function(t,e,n){
// 7.2.2 IsArray(argument)
var r=n(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},/* 83 */
/***/
function(t,e,n){"use strict";var r=n(44),a=n(24),o=n(25),i={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
n(6)(i,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(i,{next:a(1,n)}),o(t,e+" Iterator")}},/* 84 */
/***/
function(t,e,n){var r=n(1)("iterator"),a=!1;try{var o=[7][r]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!a)return!1;var n=!1;try{var o=[7],i=o[r]();i.next=function(){return{done:n=!0}},o[r]=function(){return i},t(o)}catch(t){}return n}},/* 85 */
/***/
function(t,e){t.exports=!0},/* 86 */
/***/
function(t,e,n){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var r=n(15),a=n(88),o=n(45),i=n(13),u=n(22),s=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
t.exports=!s||n(8)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(// eslint-disable-line no-unused-vars
var n=i(t),s=arguments.length,c=1,f=a.f,l=o.f;s>c;)for(var p,_=u(arguments[c++]),h=f?r(_).concat(f(_)):r(_),v=h.length,d=0;v>d;)l.call(_,p=h[d++])&&(n[p]=_[p]);return n}:s},/* 87 */
/***/
function(t,e,n){var r=n(2),a=n(7),o=n(15);t.exports=n(3)?Object.defineProperties:function(t,e){a(t);for(var n,i=o(e),u=i.length,s=0;u>s;)r.f(t,n=i[s++],e[n]);return t}},/* 88 */
/***/
function(t,e){e.f=Object.getOwnPropertySymbols},/* 89 */
/***/
function(t,e,n){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var r=n(12),a=n(13),o=n(26)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=a(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},/* 90 */
/***/
function(t,e,n){var r=n(12),a=n(16),o=n(72)(!1),i=n(26)("IE_PROTO");t.exports=function(t,e){var n,u=a(t),s=0,c=[];for(n in u)n!=i&&r(u,n)&&c.push(n);
// Don't enum bug & hidden keys
for(;e.length>s;)r(u,n=e[s++])&&(~o(c,n)||c.push(n));return c}},/* 91 */
/***/
function(t,e,n){
// most Object methods by ES6 should accept primitives
var r=n(4),a=n(0),o=n(8);t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",i)}},/* 92 */
/***/
function(t,e,n){var r=n(15),a=n(16),o=n(45).f;t.exports=function(t){return function(e){for(var n,i=a(e),u=r(i),s=u.length,c=0,f=[];s>c;)o.call(i,n=u[c++])&&f.push(t?[n,i[n]]:i[n]);return f}}},/* 93 */
/***/
function(t,e,n){t.exports=n(6)},/* 94 */
/***/
function(t,e,n){"use strict";var r=n(5),a=n(0),o=n(2),i=n(3),u=n(1)("species");t.exports=function(t){var e="function"==typeof a[t]?a[t]:r[t];i&&e&&!e[u]&&o.f(e,u,{configurable:!0,get:function(){return this}})}},/* 95 */
/***/
function(t,e,n){var r=n(27),a=n(14);
// true  -> String#at
// false -> String#codePointAt
t.exports=function(t){return function(e,n){var o,i,u=String(a(e)),s=r(n),c=u.length;return s<0||s>=c?t?"":void 0:(o=u.charCodeAt(s),o<55296||o>56319||s+1===c||(i=u.charCodeAt(s+1))<56320||i>57343?t?u.charAt(s):o:t?u.slice(s,s+2):(o-55296<<10)+(i-56320)+65536)}}},/* 96 */
/***/
function(t,e,n){var r=n(27),a=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?a(t+e,0):o(t,e)}},/* 97 */
/***/
function(t,e,n){
// 7.1.1 ToPrimitive(input [, PreferredType])
var r=n(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
t.exports=function(t,e){if(!r(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!r(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},/* 98 */
/***/
function(t,e,n){var r=n(7),a=n(29);t.exports=n(0).getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},/* 99 */
/***/
function(t,e,n){var r=n(19),a=n(1)("iterator"),o=n(10);t.exports=n(0).isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||o.hasOwnProperty(r(e))}},/* 100 */
/***/
function(t,e,n){"use strict";var r=n(11),a=n(4),o=n(13),i=n(41),u=n(40),s=n(17),c=n(79),f=n(29);a(a.S+a.F*!n(84)(function(t){Array.from(t)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(t){var e,n,a,l,p=o(t),_="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,d=void 0!==v,m=0,y=f(p);
// if object isn't iterable or it's array with default iterator - use simple case
if(d&&(v=r(v,h>2?arguments[2]:void 0,2)),void 0==y||_==Array&&u(y))for(e=s(p.length),n=new _(e);e>m;m++)c(n,m,d?v(p[m],m):p[m]);else for(l=y.call(p),n=new _;!(a=l.next()).done;m++)c(n,m,d?i(l,v,[a.value,m],!0):a.value);return n.length=m,n}})},/* 101 */
/***/
function(t,e,n){"use strict";var r=n(70),a=n(42),o=n(10),i=n(16);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
t.exports=n(23)(Array,"Array",function(t,e){this._t=i(t),// target
this._i=0,// next index
this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,a(1)):"keys"==e?a(0,n):"values"==e?a(0,t[n]):a(0,[n,t[n]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
o.Arguments=o.Array,r("keys"),r("values"),r("entries")},/* 102 */
/***/
function(t,e,n){
// 19.1.3.1 Object.assign(target, source)
var r=n(4);r(r.S+r.F,"Object",{assign:n(86)})},/* 103 */
/***/
function(t,e,n){var r=n(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
r(r.S+r.F*!n(3),"Object",{defineProperty:n(2).f})},/* 104 */
/***/
function(t,e,n){
// 19.1.2.14 Object.keys(O)
var r=n(13),a=n(15);n(91)("keys",function(){return function(t){return a(r(t))}})},/* 105 */
/***/
function(t,e){},/* 106 */
/***/
function(t,e,n){"use strict";var r=n(76);
// 23.2 Set Objects
t.exports=n(78)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.2.3.1 Set.prototype.add(value)
add:function(t){return r.def(this,t=0===t?0:t,t)}},r)},/* 107 */
/***/
function(t,e,n){
// https://github.com/tc39/proposal-object-values-entries
var r=n(4),a=n(92)(!1);r(r.S,"Object",{values:function(t){return a(t)}})},/* 108 */
/***/
function(t,e,n){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var r=n(4);r(r.P+r.R,"Set",{toJSON:n(77)("Set")})},/* 109 */
/***/
function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(t){if(f===setTimeout)
//normal enviroments in sane situations
return setTimeout(t,0);
// if setTimeout wasn't available but was latter defined
if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return f(t,0)}catch(e){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return f.call(null,t,0)}catch(e){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return f.call(this,t,0)}}}function o(t){if(l===clearTimeout)
//normal enviroments in sane situations
return clearTimeout(t);
// if clearTimeout wasn't available but was latter defined
if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return l(t)}catch(e){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return l.call(null,t)}catch(e){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return l.call(this,t)}}}function i(){v&&_&&(v=!1,_.length?h=_.concat(h):d=-1,h.length&&u())}function u(){if(!v){var t=a(i);v=!0;for(var e=h.length;e;){for(_=h,h=[];++d<e;)_&&_[d].run();d=-1,e=h.length}_=null,v=!1,o(t)}}
// v8 likes predictible objects
function s(t,e){this.fun=t,this.array=e}function c(){}
// shim for using process in browser
var f,l,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var _,h=[],v=!1,d=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new s(t,e)),1!==h.length||v||a(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",// empty string to avoid regexp issues
p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},/* 110 */
/***/
function(t,e,n){/* WEBPACK VAR INJECTION */
(function(e){// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var r="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(
// Force reevalutation of runtime.js.
r.regeneratorRuntime=void 0,t.exports=n(111),a)
// Restore the original runtime.
r.regeneratorRuntime=o;else
// Remove the global property added by runtime.js.
try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}).call(e,n(48))},/* 111 */
/***/
function(t,e,n){/* WEBPACK VAR INJECTION */
(function(e,n){/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
!function(e){"use strict";function r(t,e,n,r){
// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var a=e&&e.prototype instanceof o?e:o,i=Object.create(a.prototype),u=new h(r||[]);
// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
return i._invoke=l(t,n,u),i}
// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function a(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}
// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function o(){}function i(){}function u(){}
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){this.arg=t}function f(t){function e(n,r,o,i){var u=a(t[n],t,r);if("throw"!==u.type){var s=u.arg,f=s.value;return f instanceof c?Promise.resolve(f.arg).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(f).then(function(t){
// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration. If the Promise is rejected, however, the
// result for this iteration will be rejected with the same
// reason. Note that rejections of yielded Promises are not
// thrown back into the generator function, as is the case
// when an awaited Promise is rejected. This difference in
// behavior between yield and await is important, because it
// allows the consumer to decide what to do with the yielded
// rejection (swallow it and continue, manually .throw it back
// into the generator, abandon iteration, whatever). With
// await, by contrast, there is no opportunity to examine the
// rejection reason outside the generator function, so the
// only option is to throw it from the await expression, and
// let the generator function handle the exception.
s.value=t,o(s)},i)}i(u.arg)}function r(t,n){function r(){return new Promise(function(r,a){e(t,n,r,a)})}
// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
return o=o?o.then(r,r):r()}"object"==typeof n&&n.domain&&(e=n.domain.bind(e));var o;
// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=r}function l(t,e,n){var r=E;return function(o,i){if(r===T)throw new Error("Generator is already running");if(r===N){if("throw"===o)throw i;
// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return d()}for(;;){var u=n.delegate;if(u){if("return"===o||"throw"===o&&u.iterator[o]===m){
// A return or throw (when the delegate iterator has no throw
// method) always terminates the yield* loop.
n.delegate=null;
// If the delegate iterator has a return method, give it a
// chance to clean up.
var s=u.iterator.return;if(s){var c=a(s,u.iterator,i);if("throw"===c.type){
// If the return method threw an exception, let that
// exception prevail over the original return or throw.
o="throw",i=c.arg;continue}}if("return"===o)
// Continue with the outer return, now that the delegate
// iterator has been terminated.
continue}var c=a(u.iterator[o],u.iterator,i);if("throw"===c.type){n.delegate=null,
// Like returning generator.throw(uncaught), but without the
// overhead of an extra function call.
o="throw",i=c.arg;continue}
// Delegate generator ran and handled its own exceptions so
// regardless of what the method was, we continue as if it is
// "next" with an undefined arg.
o="next",i=m;var f=c.arg;if(!f.done)return r=O,f;n[u.resultName]=f.value,n.next=u.nextLoc,n.delegate=null}if("next"===o)
// Setting context._sent for legacy support of Babel's
// function.sent implementation.
n.sent=n._sent=i;else if("throw"===o){if(r===E)throw r=N,i;n.dispatchException(i)&&(
// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
o="next",i=m)}else"return"===o&&n.abrupt("return",i);r=T;var c=a(t,e,n);if("normal"===c.type){
// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
r=n.done?N:O;var f={value:c.arg,done:n.done};if(c.arg!==A)return f;n.delegate&&"next"===o&&(
// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
i=m)}else"throw"===c.type&&(r=N,
// Dispatch the exception by looping back around to the
// context.dispatchException(arg) call above.
o="throw",i=c.arg)}}}function p(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){
// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function v(t){if(t){var e=t[k];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(y.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=m,e.done=!0,e};return r.next=r}}
// Return an iterator with no values.
return{next:d}}function d(){return{value:m,done:!0}}var m,y=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},k=g.iterator||"@@iterator",w=g.toStringTag||"@@toStringTag",b="object"==typeof t,x=e.regeneratorRuntime;if(x)
// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
return void(b&&(t.exports=x));
// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
x=e.regeneratorRuntime=b?t.exports:{},x.wrap=r;var E="suspendedStart",O="suspendedYield",T="executing",N="completed",A={},S=u.prototype=o.prototype;i.prototype=S.constructor=u,u.constructor=i,u[w]=i.displayName="GeneratorFunction",x.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;
// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},x.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,w in t||(t[w]="GeneratorFunction")),t.prototype=Object.create(S),t},
// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `value instanceof AwaitArgument` to determine if the yielded value is
// meant to be awaited. Some may consider the name of this method too
// cutesy, but they are curmudgeons.
x.awrap=function(t){return new c(t)},s(f.prototype),
// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
x.async=function(t,e,n,a){var o=new f(r(t,e,n,a));return x.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},
// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
s(S),S[k]=function(){return this},S[w]="Generator",S.toString=function(){return"[object Generator]"},x.keys=function(t){var e=[];for(var n in t)e.push(n);
// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}
// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
return n.done=!0,n}},x.values=v,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,
// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=m,this.done=!1,this.delegate=null,this.tryEntries.forEach(_),!t)for(var e in this)
// Not sure about the optimal order of these conditions:
"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return o.type="throw",o.arg=t,n.next=e,!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)
// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return e("end");if(a.tryLoc<=this.prev){var i=y.call(a,"catchLoc"),u=y.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&y.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(
// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?this.next=a.finallyLoc:this.complete(o),A},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),A}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}
// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:v(t),resultName:e,nextLoc:n},A}}}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
"object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,n(48),n(109))},/* 112 */
/***/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}
// メインスレッドから送られてくるコマンドに対応する関数群
// メインスレッドから渡されたdataを引数に持つ
// 現在のステートを返す関数
function a(t){j({result:!0,state:N,flags:R,can_run:(0,g.default)(R).every(function(t){return t})})}
// GAのパラメータを初期化する
function o(t){
// そもそもちゃんとパラメータが指定されているのか
if(t.data){var e=t.data,n=Number(e.population);
// 突然変異率の設定
if(n>10&&(A.population=Math.round(n),R.p_count=!0),e.mutation_probability){var r=e.mutation_probability,a=function(t){return t>=0&&t<1};r.hasOwnProperty("all")&&a(r.all)?(A.weapon=Number(r.all),A.summon=Number(r.all),A.friend=Number(r.all),R.m_weapon=!0,R.m_summon=!0,R.m_friend=!0):(r.weapon&&a(r.weapon)&&(A.weapon=Number(r.weapon),R.m_weapon=!0),r.summon&&a(r.summon)&&(A.summon=Number(r.summon),R.m_summon=!0),r.friend&&a(r.friend)&&(A.friend=Number(r.friend),R.m_friend=!0))}
// 世代数の設定
if(e.generation){var o=Number(e.generation);o>=10&&(A.generation=Math.round(o),R.g_count=!0)}j({result:!0,message:"GA parameter is set.",data:A})}else j({result:!1,message:"Can't recognize GA parameter."})}
// 攻撃力を計算するための基本的な情報を受けとる関数
function i(t){t.data&&t.data instanceof Object?((0,m.default)(S.basic_info,t.data),j({result:!0,message:"basic_info is set."}),R.i_basic=!0):j({result:!1,message:"data must be Object."})}
// 最適編成計算の対象になる武器一覧を受けとる関数
function u(t){if(t.data&&t.data instanceof Array){var e=t.data.every(b.is_valid_weapon_obj);if(!e)return void j({result:!1,message:"data has invalid weapon object."});S.weapon=t.data,R.i_weapon=!0,j({result:!0,message:"Weapon data is set."})}else j({result:!1,message:"data must be Array."})}
// 最適編成計算の対象になる召喚一覧を受けとる関数
function s(t){if(t.data&&t.data instanceof Array){var e=t.data.every(b.is_valid_summon_obj);if(!e)return void j({result:!1,message:"data has invalid summon object."});S.summon=t.data,R.i_summon=!0,j({result:!0,message:"Summon data is set."})}else j({result:!1,message:"data must be Array."})}
// 最適編成計算の対象になるフレンド召喚一覧を受けとる関数
function c(t){if(t.data&&t.data instanceof Array){var e=t.data.every(b.is_valid_summon_obj);// フレンド召喚も召喚
if(!e)return void j({result:!1,message:"data has invalid friend object."});S.friend=t.data,R.i_friend=!0,j({result:!0,message:"friend data is set."})}else j({result:!1,message:"data must be Array."})}
// GAを初期化する関数
function f(t){
// 必要なフラグが全部立っているかどうかをチェックする
// 必要なフラグが全部立っているかどうかをチェックする
// 計算機のインスタンスを作る
// ジェネレータ(generator.next()を呼びだすごとに値を返すやつ)を作る
// 変異率等を設定する
// 現在の状態を初期化されたことにする
return(0,g.default)(R).every(function(t){return t})?(O=new k.GrblFormGAOptimizer,T=O.init(S.basic_info,S.weapon,S.summon,S.friend,E.default),O.create_first_ga_state(A.population,A.mutation_probability.weapon,A.mutation_probability.summon,A.mutation_probability.friend),N=w.WORKER_STATE.INITED,void j({result:!0,message:"Optimizer is inited."})):void j({result:!1,message:"Cannot run optimizer because of missing parameter."})}
// 実際に最適化計算機を与えられたパラメータで走らせる
function l(t){
// 初期化されてないなら中止
if(N!=w.WORKER_STATE.INITED)return void j({result:!1,message:"Optimizer isn't inited."});
// 実際に編成計算機を走らせる
N=w.WORKER_STATE.RUNNING;for(var e=T.next().value,n=Math.round(0),r=0;r<A.generation&&N===w.WORKER_STATE.RUNNING;r++){for(;e&&e.status!=k.CALC_STATE.LOOP_END;)e=T.next().value;var a=Math.round(r/A.generation);n!=a&&(n=a,j({message:"Optimizer running.",percent:a,state:N}))}N=w.WORKER_STATE.FINISH;var o=e.ga_state.population[0],i=[O.conv_chromos_to_array(o.weapon,O.ref.weapon),O.conv_chromos_to_array(o.summon,O.ref.summon),O.conv_chromos_to_array(o.friend,O.ref.friend)],u=i[0],s=i[1],c=i[2];j({message:"Optimize finished.",state:N,top:e.ga_state.population[0],weapon:u,summon:s,friend:c})}var p,_,h=n(53),v=r(h),d=n(32),m=r(d),y=n(52),g=r(y),k=n(51),w=n(50),b=n(31),x=n(49),E=r(x),O=null,T=null,N=w.WORKER_STATE.STOP,A={//< GAのパラメータ
population:100,//< 個体数
mutation_probability:{//< 突然変異の確率([0,1))
weapon:.05,summon:.05,friend:.05},generation:100},S={//< 最適化を行なうターゲット
basic_info:{},weapon:[],summon:[],friend:[]},R={//< 設定されたパラメータを表わすフラグ
p_count:!1,//< 個体数
g_count:!1,//< 世代数
m_weapon:!1,//< 変異率(武器)
m_summon:!1,//< 変異率(召喚)
m_friend:!1,//< 変異率(フレンド)
i_basic:!1,//< 基本情報
i_weapon:!1,//< 武器情報
i_summon:!1,//< 召喚情報
i_friend:!1},j=(p=self).postMessage.bind(p),I=(_={},(0,v.default)(_,w.WORKER_COMMAND.GET_STATE,a),(0,v.default)(_,w.WORKER_COMMAND.SET_GA_PARAM,o),(0,v.default)(_,w.WORKER_COMMAND.SET_BASIC_INFO,i),(0,v.default)(_,w.WORKER_COMMAND.SET_WEAPON,u),(0,v.default)(_,w.WORKER_COMMAND.SET_SUMMON,s),(0,v.default)(_,w.WORKER_COMMAND.SET_FRIEND,c),(0,v.default)(_,w.WORKER_COMMAND.INIT,f),(0,v.default)(_,w.WORKER_COMMAND.RESET,function(t){T=null,O=null,N=w.WORKER_STATE.STOP}),_);
// ワーカーのメイン(イベント待ち受け)
self.addEventListener("message",function(t){var e=t.data;
// コマンドが無いとどうしようもない
// コマンドが無いとどうしようもない
// 計算機の停止時コマンドが該当するものならば
// 該当のコマンドを実行する
//< 初期化とリセット
//< 走っている間はパラメータ変更を受けつけない
//< 他は該当コマンドを実行
return e.command?void(I.hasOwnProperty(e.command)?e.command===w.WORKER_COMMAND.INIT||e.command===w.WORKER_COMMAND.RESET?(T=null,O=null,N=w.WORKER_STATE.STOP,e.command===w.WORKER_COMMAND.INIT&&I[e.command](e)):N===w.WORKER_STATE.RUNNING?j({result:!1,message:"Optimizer is running."}):I[e.command](e):e.command===w.WORKER_COMMAND.TERMINATE&&N===w.WORKER_STATE.RUNNING?N=w.WORKER_STATE.TERMINATE:e.command===w.WORKER_COMMAND.RUN?l(e):j({result:!1,message:"Unknown command type."})):void j({result:!1,message:"Need command."})},!1)}]);