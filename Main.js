function drawGridBoard() {
    let board = document.createElement('div');
    board.setAttribute('class', 'board');
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div");
        row.setAttribute('class', 'row');
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement("input");
            cell.setAttribute('id', 'cell'+j);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    document.body.appendChild(board);
}

function checkWord() {
    let word = takeTheWordFromTheLines();
    let wordFromList = listOfWordsInHebrew();
    if (word == wordFromList) {
        alert("good");
    } else {
        alert("bad");

    }
}

function showWord() {
    let word = listOfWordsInHebrew();
    let i = 0;
    while (i < 6) {
        let char = word.charAt(i);
        document.getElementsByTagName("input") [i].value = char;
        i++;
    }

}

function listOfWordsInHebrew() {
    let words = ["אפרסק"];
    let randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;

}

function takeTheWordFromTheLines() {//לא עובד
    let wordFromLines = document.getElementsByTagName("input");
    let word = "";
    let i = wordFromLines.length;
    while (i > 0) {
        word += wordFromLines[i-6].value;
        i = i - 6;
    }
    // for (let i = 0; i < wordFromLines.length; i++) {
    //     word += wordFromLines[i].value;
    // }
    return word;

}
