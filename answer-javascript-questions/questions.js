function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Rintaro';
    let age = 22;
}

//  sayHi();

/* 
選択肢
A: Rintaroとundefined
B: RintaroとRefference Error
C: Refference Errorと22
D: undefinedとRefference Error
*/

/* 
答え；D
関数内でvarキーワードを使って、name変数を宣言している。これは変数が定義されている行に実際到達するまで、変数がデフォルト値の
undefinedで初期化される（作成時にメモリ空間が設定される）ことを意味する
name変数をログ出力を実行している行では、まだ変数を定義していませんので、undefinedの値を保持しています。
letキーワード（またはconst）を持つ変数は持ち上げられますが、 varとは異なり、初期化されません。それらを宣言（初期化）する行の前にはアクセスできません。これは"temporal dead zone"と呼ばれます。
宣言される前に変数にアクセスしようとすると、JavaScriptは ReferenceErrorを投げ
*/

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1)
}

/*
選択肢
A: 0 1 2 and 0 1 2
B: 0 1 2 and 3 3 3
C: 3 3 3 and 0 1 2
*/

/* 
答え：C
JavaScriptのイベントキューのため、setTimeoutコールバック関数は、ループが実行された後に呼び出される。
最初のループ変数iはvarキーワードを使って宣言されているので、この値はグローバル変数となる。
単項演算子++を使用して、毎回iの値を1つずつインクリメントした。最初の例では、setTimeoutコールバック関数が呼び出されるまでにiは3となる。

2番目のループでは、変数iがletキーワードを使って宣言されている。let(またはconst)キーワードで宣言された変数はプロックスコープ
（ブロックは{}の間のもの）。それぞれの繰り返しの間、iは新しい値を持ち、それぞれの値はループの内側にある.
*/

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
};

/*
選択肢
A: 20と62.83185307179586
B: 20とNaN
C: 20と63
D: NaNと63
*/

/* 
答え:B
アロー関数はでは、thisキーワードは通常の関数と異なり、現在の周囲の範囲を参照する.
これは、perimeter関数を呼ぶと、shapeオブジェクトではなく、その周囲の範囲(例えばwindow)を参照することを意味する
そのオブジェクトには、radiusという値はなく、undefinedを返す
*/

+true;
!"Rintaro";

/*
選択肢
A: 1とfalse
B: falseとNaN
C: falseとfalse
*/

/*
答え: A
単項プラスは、オペラントを数値に変換する。数値じゃないものは数値に変換する。trueは1,falseは0である
文字列「Rintaro」はtruthy valueで、ここでは、「truthy value」はfalsyなのかを解いている！　falseを返す。
*/

const bird = {
    size: 'small'
};

const mouse = {
    name: 'Mickey',
    small: true
};

/*
A: mouse.bird.size is not valid
B: mouse[bird.size] is not valid
C: mouse[[bird.size]] is not valid
D: すべて有効でない

A
JavaScriptでは、すべてのオブジェクトキーは文字列です（Symbolでない限り）。
たとえそれを文字列として入力していなくても、それらは常にフードの下で文字列に変換されます。
JavaScriptは、ステートメントを解釈（または、ボックス解除）します。
大括弧表記を使用すると、最初の左大括弧 `[`を見て、右大括弧 `]`が見つかるまで進みます。その時だけ、そのステートメントを評価します。
`mouse [bird.size]`： まず最初に、`bird.size`が評価されます。これは文字列の `"small"`となります。 `mouse["small"]`は、`true`を返します。
しかし、ドット表記では、これは起こりません。 `mouse`は`bird`と呼ばれるキーを持っていません。 つまり`mouse.bird`は`undefined`となります。
また、ドット表記を使って `size`を求めます： `mouse.bird.size`。 mouse.birdは未定義なので、実際にはundefined.sizeを要求しています。
これは有効ではないので、`Cannot read property "size" of undefined`ような、エラーをスローします。
 */





