/**
 * Web APIとは？
 * 実際に叩いてみる → https://jsonplaceholder.typicode.com/
 * 
 * こういったAPIをつくるのがバックエンドの仕事.
 * 主にフロントエンドはバックエンドが作ったAPIを使ってUIを構築する．
 * APIをプログラム側（Javascript）から叩いてデータのやり取りを行う．
 */

//

async function callApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json();
    console.log(users);
}

callApi();

/** async await以外の書き方
 *  function callApi() {
 *      fetch("https://jsonplaceholder.typicode.com/users")
 *       .then(functon(res) {
 *          return res.json();
 *      })
 *       .then(function(users) {
 *          console.log(users);
 *      });
 * }
 * 
 * callApi();
 */

