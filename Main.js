function squareBord() {
    let row = document.getElementsByClassName("grid");
    for (let i = 0; i < 6; i++) {

    }

}

let x = 0;
let y = 0;
let canvas = document.getElementsByClassName("grid");
let ctx = canvas.getContext("2d");

function drawGridBoard(x, y, width, height) {
    ctx.fillRect(x, y, width, height);
}

for (let i = 0; i < 6; i++) {

    for (let j = 0; j < 6; j++) {
        drawGridBoard(x + j * 50, y + i * 50, 50, 50);
    }
}
