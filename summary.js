//DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// 関数（メソッド）
function addList(user) {
    if (user.id <= 5) {
        const list = document.createElement("li");
        list.innerText = user.name;
        lists.appendChild(list);
    }
}

async function getUsers() {
     // データのやり取り
     const res = await fetch("https://jsonplaceholder.typicode.com/users");
     const users = await res.json();
     return users;
}

async function listUsers () {

    const users = await getUsers();

    // DOM操作 (今回はボタンを押すとリストに追加される)
    users.forEach(addList);
}

// イベント
window.addEventListener("load",listUsers);
button.addEventListener("click",listUsers);

