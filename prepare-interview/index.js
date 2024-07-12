// FizzBuzz問題
// for (let i=1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 ==0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }


// 奇数・偶数判定
function isEven(n) {
    return n % 2 == 0
}

// 配列の最大値：与えられた配列の要素の最大値を返す
function findMax(arr) {
    return Math.max(...arr)
}

// 文字列の長さ：与えられた文字列の長さを返す
function stringLength(s) {
    return s.length
}


// 配列の合計値：与えられた配列の要素の合計値を返す
function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val)
}

// 文字列の逆転：与えられた文字列を反転させて返す。
function reverseString(s) {
    return s.split('').reverse().join('')
}

// N回繰り返し：与えられた文字列をN回繰り返して表示する。
function repeatString(s, n) {
    return s.repeat(n);
}

// 特定の文字のカウント：与えられた文字列内の特定の文字数をカウントするプログラム
function countChar(s, char) {
    return s.split(char).length - 1
}


// 配列の平均値：与えられた整数の配列の平均値を求めるプログラム
function avrageArray(arr) {
    return arr.reduce((acc, val) => acc + val , 0) / arr.length
}

// 文字列の大文字化：与えられた文字列を大文字に変換するプログラム
function toUpperCase(s) {
    return s.toUpperCase()
}

// 配列の逆転
function reverseArray(arr) {
    return arr.reverse()
}
console.log(reverseArray([1,3,4,5,8]))

// 最小値のインデックス：与えられた整数の配列から最小値のインデックスを返す
function findMinIndex(arr) {
    return arr.indexOf(Math.min(...arr))
}

