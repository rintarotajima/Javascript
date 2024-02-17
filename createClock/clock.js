function updateClock() {
    // 現在の日時を取得
    const now = new Date();

    // 現在の時，分，秒を取得
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 時，分, 秒が1桁の場合は0を追加
    const displayHours = hours.toString();
    console.log(displayHours);
    const displayMinutes = minutes.toString();
    console.log(displayMinutes);
    const displaySeconds = seconds.toString();
    console.log(displaySeconds);

    // 時計の要素の取得
    const clockElement = document.getElementById("clock");

    clockElement.textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

setInterval(updateClock, 1000);

updateClock();