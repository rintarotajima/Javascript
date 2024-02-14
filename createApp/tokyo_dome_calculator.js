// DOM要素の取得
const button = document.getElementById("calculateBtn"); // ページ内のIDがcalculateBtnである要素を取得し，変数buttonに格納
const inputArea = document.getElementById("inputArea"); // ページ内のIDがinputAreaである要素を取得し，変数inpuAreaに格納
const reset = document.getElementById("resetBtn"); // ページ内のIDがresetBtnである要素を取得し，変数resetBtnに格納
const result = document.getElementById("result"); // ページ内のIDがresultである要素を取得し，変数resultに格納

// 東京ドームの面積（平方メートル）
const tokyoDomeArea = 46315;

// 東京ドーム何個分を計算して表示する関数
function calculateTokyoDome() {
    // 入力された面積を取得
    const area = parseFloat(inputArea.value); // 入力エリアから値を取得し，文字列を数値に変換して変数areaに格納

    // 東京ドームの個数を計算
    const numberOfTokyoDomes = area / tokyoDomeArea; // 入力された面積を東京ドームの面積で割り，東京ドームの個数を計算

    // 結果を表示
    result.textContent = `東京ドーム ${numberOfTokyoDomes.toFixed(1)} 個分です。`; // 結果を表示用の要素に表示する. toFixed() メソッドを使用して小数点以下1桁にする
}

function resetTokyoDome() {
    // 入力フィールドを空にする
    inputArea.value = "";
    // 計算結果を空にする
    result.textContent = "";
}


// イベントリスナーの設定
// ボタンがクリックされたときに，calulateTokyoDome 関数を呼び出す.
button.addEventListener("click", function() {
    calculateTokyoDome();
});
// ボタンがクリックされたときに，resetTokyoDome 関数を呼び出す.
reset.addEventListener("click", function() {
    resetTokyoDome();
});


/** Javascriptの知識
 * DOMとは？
 * DOM（Document Object Model）はWebページやXML文書のプロフラム内での表現を提供する階層的なオブジェクトの集合体
 * →HTMLやXML文書の構造を表現し，プロフラムからアクセスや操作が可能になる=Javascriptのオブジェクトとして扱える.
 * 
 * オブジェクトとは？
 * オブジェクトはデータとそのデータに関する操作をまとめたもので，特定のプロパティ（データ）とメソッド（操作）を持っている
 * 例）オブジェクトが自転車だとみなすと，プロパティとして色や速度，メソッドとして走る，止まるなどがあるイメージ
 * 
 * DOM要素の取得とは？
 * JavascriptによってHTML文書内の特定の要素にアクセスするためには，その要素を取得する必要がある．
 * そこで，document.getElementById()メソッドを使うとHTML要素のID属性に基づいて要素を取得する.
 * 
 * 
 */

