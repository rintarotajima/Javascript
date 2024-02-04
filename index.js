let youtuber = {
    list: {
        business: {
            youtuber: [
                { name: "しまぶー", age: 20, teachProgramming() { } },
                { name: "あっちゃん", age: 37, teachHistory() { } }
            ],
            teach() { }
        },
        entertainment: {
            youtuber: [
                { name: "ヒカキン" },
                { name: "はじめしゃちょー" }
            ],
            makeSmile() { }
        }
    },
    plan() { },
    uploadVideo() { }
};


//windowやdocumentについて
window.console.log();

window.alert();

window.document.getElementById();


/**
 * Q. 変数とは？
 * A. データを保存しておくための箱
 * 料理でイメージすると調味料や肉や魚は必ず容器に入っているが，
 * その容器が変数の事で，中身がデータのことである．
 */
const foo = document.getElementById("foo");

const fooWidth =  foo.offsetWidth;

const fooHeight = foo.offsetHeight;

const fooArea = fooWidth * fooHeight;


/**
 * Q. どうやって変数を宣言するのか？
 * A. const 変数名 = 初期値；
 *    let 変数名 = 初期値;
 *    var 変数名 = 初期値;
 * 注意：変数名は識別子ともいわれる．
 */ 

/** 複数宣言することも出来る */
const foo1 = 100;
      foo2 = 100;
      foo3 = 1000;

/** 基本的に単独宣言する */
let bar = 200;
let bar1 = 300;
let bar2 = 400;

var baz = 300;

/** 変数名のルールは以下の3つ 
 * 一文字目に数字はダメ
*/
const eoo = 100;
const _eoo = 100;
const $eoo = 100;


const eooWidth = 100; // camelCase
const eoo_width = 100; // snake_Case
/** JavascriptではcamelCaseをよく使う */

/** 予約語は使えない */
//const if = 100とかはダメ，ifを変数に使うと条件文に影響あり

/** constの特徴
 * 再代入できない，再定義できない
 * 
 * 再代入の例 
 * const constNumber = 100;
 * constNumber = 200; にするとエラーになる．
 * 
 * 再定義の例
 * const constNumber = 100;
 * const constNumber = 200; にするとエラーになる．
 */

const obj = {
    foo: 123
};

console.log(obj.foo);

obj.foo = 456;

console.log(obj.foo);

//上記を出力すると456が出力されるためconstは厳密には定数ではない.

/** letの特徴
 * 再代入できる，再定義できない
 * 
 * 再代入の例
 * let letNumber = 100;
 * letNumber = 200;
 * console.log(LetNumber) をすると200が出力されるため再代入できる.
 * 
 * 再定義の例
 * let letNumber = 100;
 * let letNumber = 200; をするとエラーになる.
 */

/** var の特徴
 * 再代入できる，再定義できる
 * 
 * 再代入の例
 * var varNumber = 100;
 * varNumber = 200; をすると200が出力される
 * 
 * 再定義の例
 * var varNumber = 100;
 * var varNumber = 200; をすると200が出力される
 */


/** 使い分け
 * constを優先的に使い，letをしぶしぶ使い，varを使うと負けだと思う．
 * 厳密なほうが良い．
 */