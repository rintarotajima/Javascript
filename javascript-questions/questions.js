function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Rintaro';
    let age = 22;
}

 sayHi();

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
