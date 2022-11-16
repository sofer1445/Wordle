let indexTheFirstInput = 4;
let counter = 0;
let nameOfTheWord = "";
let numOfIteration = 6;
let randomWord = "";


function drawGridBoard() {
    console.log("drawGridBoard");
    randomWord = listOfWordsInHebrew();//מגריל מילה רנדומלית
    let board = document.createElement('div');
    board.setAttribute('class', 'board');
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("div");
        row.setAttribute('class', 'row');
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement("input");
            cell.setAttribute('id',  'cell' + (j + i*5));
            cell.maxLength = 1;
            cell.disabled = true;
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
    document.body.appendChild(board);
}

function checkWord() {
    console.log("checkWord");
    let arrayOfColor = [];
    let word = writingInTextBox();
    let wordFromList = listOfWordsInHebrew();
    if (word == wordFromList) {
        alert("good");
    } else {
        for (let i = indexTheFirstInput; i >= 0; i--) {
            arrayOfColor[i] = checkCell(i);
            console.log(arrayOfColor[i]);
        }
        numOfIteration--;
    }
    return arrayOfColor;
}

function checkCell(i) {
    console.log("checkCell");
    let cell = document.getElementById("cell" + i);
    let charOfWord = randomWord.charAt(indexTheFirstInput - i);
    console.log(indexTheFirstInput - i +"," +  randomWord.charAt(indexTheFirstInput - i));
    if (cell.value == charOfWord) {
        return "green"
    } else if (listOfWordsInHebrew().includes(cell.value)) {
        return "yellow"
    } else if (cell.value != charOfWord) {
        return "gray"
    }


}

function showWord() {
    console.log("showWord");
    let word = listOfWordsInHebrew();
    let i = 4;
    while (i >= 0) {
        let char = word.charAt(4 - i);
        document.getElementsByTagName("input") [i].value = char;
        i--;
    }

}

function listOfWordsInHebrew() {
    console.log("listOfWordsInHebrew");
    let words = ["אפרסק"];
    let randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;

}

function paintASquare() {
    console.log("paintASquare");
    let arrayOfColor = checkWord();
    for (let i = 0; i < arrayOfColor.length; i++) {
        document.getElementById("cell" + i).style.backgroundColor = arrayOfColor[i];

    }

}

function hebrewKeyboard() {
    console.log("hebrewKeyboard");
    let hebrewLetters = ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ", "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"];
    let keyboard = document.createElement('div');
    keyboard.setAttribute('class', 'keyboard');
    for (let i = 0; i < 3; i++) {
        let row = document.createElement("div");
        row.setAttribute('class', 'rowKeyboard');
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement("button");
            cell.innerText = hebrewLetters[j + (i * 9)];
            cell.setAttribute('onclick', 'writeOnTheLines(this)');
            row.appendChild(cell);
        }
        keyboard.appendChild(row);
    }
    document.body.appendChild(keyboard);

}

function writingInTextBox() {//מחזיר את המילה המלאה
    console.log("writingInTextBox");
    let theWord = "";
    if (nameOfTheWord.length == 5) {
        theWord += nameOfTheWord;
    }
    return theWord;
}

function writeOnTheLines(key) {
    if (counter == 5) {
        indexTheFirstInput += 5;
        counter = 0;
        nameOfTheWord = "";
    }
    console.log("writeOnTheLines");
    let cell = document.getElementById("cell" + (indexTheFirstInput-counter));
    cell.value = key.innerText;
    nameOfTheWord += key.innerText;
    counter++;
    console.log(nameOfTheWord);
}



