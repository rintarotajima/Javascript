// DOM要素の取得
const button = document.getElementById("calculateBtn");
const inputArea = document.getElementById("inputArea");
const result = document.getElementById("result");

// 東京ドームの面積（平方メートル）
const tokyoDomeArea = 46315;

// 東京ドーム何個分を計算して表示する関数
function calculateTokyoDome() {
    // 入力された面積を取得
    const area = parseFloat(inputArea.value);

    // 東京ドームの個数を計算
    const numberOfTokyoDomes = area / tokyoDomeArea;

    // 結果を表示
    result.textContent = `東京ドーム ${numberOfTokyoDomes.toFixed(2)} 個分です。`;
}

// イベントリスナーの設定
button.addEventListener("click", calculateTokyoDome);


