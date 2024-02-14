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
button.addEventListener("click", calculateTokyoDome); // ボタンがクリックされたときに，calulateTokyoDome 関数を呼び出す.
reset.addEventListener("click", resetTokyoDome); // ボタンがクリックされたときに，resetTokyoDome 関数を呼び出す.

