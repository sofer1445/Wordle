let lineRow = 0;

function drawGridBoard() {
    let board = document.createElement('div');
    board.setAttribute('class', 'board');
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div");
        row.setAttribute('class', 'row');
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement("input");
            cell.setAttribute('id', 'cell' + j);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    document.body.appendChild(board);
}

function checkWord() {
    let arrayOfColor = [];
    let word = takeTheWordFromTheLines();
    let wordFromList = listOfWordsInHebrew();
    if (word == wordFromList) {
        alert("good");
    } else {
        for (let i = word.length - 1; i >= 0; i--) {
            arrayOfColor[i] = checkCell(i);
            alert(arrayOfColor[i]);
        }

        // lineRow++;//change the line
    }
    return arrayOfColor;
}

function checkCell(i) {
    let cell = document.getElementById("cell" + i);
    let charOfWord = listOfWordsInHebrew().charAt(4 - i);
    if (cell.value == charOfWord) {
        return "green"
    } else if (listOfWordsInHebrew().includes(cell.value)) {
        return "yellow"
    } else if (cell.value != charOfWord) {
        return "gray"
    }


}

function showWord() {
    let word = listOfWordsInHebrew();
    let i = 4;
    while (i >= 0) {
        let char = word.charAt(4 - i);
        document.getElementsByTagName("input") [i].value = char;
        i--;
    }

}

function listOfWordsInHebrew() {
    let words = ["אפרסק"];
    let randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;

}

function takeTheWordFromTheLines() {
    let word = "";
    for (let i = 4; i >= 0; i--) {
        let wordFromLines = document.getElementById("cell" + i).value;
        word = word + wordFromLines;
    }

    return word;

}

function paintASquare() {
    let arrayOfColor = checkWord();
    for (let i = 0; i < arrayOfColor.length; i++) {
        document.getElementById("cell" + i).style.backgroundColor = arrayOfColor[i];

    }

}

function hebrewKeyboard() {
    let hebrewLetters = ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ","ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת","ץ"];
    let keyboard = document.createElement('div');
    keyboard.setAttribute('class', 'keyboard');
    for (let i = 0; i < 3; i++) {
        let row = document.createElement("div");
        row.setAttribute('class', 'rowKeyboard');
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement("button");
            cell.setAttribute('onclick', 'writeOnTheLines(this)');
            cell.innerText = hebrewLetters[j + (i * 9)];
            row.appendChild(cell);
        }
        keyboard.appendChild(row);
    }
    document.body.appendChild(keyboard);
}
function writingFromKeyboard(){
    let wordKeyboard = document.getElementsByTagName("button");
    let char = wordKeyboard.innerText;
    alert(char);

}

