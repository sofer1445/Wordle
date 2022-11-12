// function drawGrid() {
//     for (let i = 0; i < 6; i++) {
//         for (let j = 0; j < 6; j++) {
//             drawGridBoard(i * 100, j * 100, 100, 100);
//         }
//     }
// }
//
// let x = 0;
// let y = 0;
// let canvas = document.getElementsByClassName("Board");
// let ctx = canvas.getContext("2d");
//
// function drawGridBoard(x, y, width, height) {
//     ctx.fillRect(x, y, width, height);
//
// }
// for (let i = 0; i < 6; i++) {
//
//     for (let j = 0; j < 6; j++) {
//         drawGridBoard(x + j * 50, y + i * 50, 50, 50);
//     }
// }
function drawGridBoard(){
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let x = 0;
    let y = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            ctx.fillRect(x + j * 50, y + i * 50, 50, 50);
        }
    }
}
function checkWord() {
    let word = document.getElementById("row").value;
    let wordInHebrew = listOfWordsInHebrew();
    if (word == wordInHebrew) {
        alert("Correct");
    } else {
        alert("Wrong");
    }
}
function showWord(){
    let word = listOfWordsInHebrew();
    document.getElementById("row").innerText = word;

}
function listOfWordsInHebrew() {
    let words = ["כלב", "חתול", "פרח", "כוכב", "סלע", "פירות", "צליל",
        "ספר", "עץ", "גינה", "טלפון", "שולחן", "סכין",
        "כף", "כפפה", "כוס", "כלים", "כיסא", "מכונת כביסה",
        "מטאטא", "שוקולד", "מחשב", "אפרסק",];
    let randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;

}
function takeTheWordFromTheLines(){//לא עובד
    let words = document.getElementsByClassName("Board");
    for (let i = 0; i < 6; i++) {
        let wordsOfLine = words.getElementsByClassName("row");
        alert(wordsOfLine);
    }

}
