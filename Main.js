let indexTheFirstInput = 4;
let counter = 0;
let nameOfTheWord = "";
let numOfIteration = 6;
let randomWords = "";
let score = "Total points:";


function drawGridBoard() {
    console.log("drawGridBoard");
    listOfWordsInHebrew();
    gameButtons();
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
    if (word == randomWords) {
        alert("Well done you made it! , try again to improve your vocabulary");
        countingPoints();
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
    let charOfWord = randomWords.charAt(indexTheFirstInput - i);
    console.log(indexTheFirstInput - i +"," +  randomWords.charAt(indexTheFirstInput - i));
    if (cell.value == charOfWord) {
        return "green"
    } else if (randomWords.includes(cell.value)) {
        return "yellow"
    } else if (cell.value != charOfWord) {
        return "gray"
    }


}

function showWord() {
    console.log("showWord");
    let char;
    let i = 4;
    while (i >= 0) {
        char = randomWords.charAt(indexTheFirstInput - i);
        console.log(char);
        document.getElementsByTagName("input") [i].value = char;
        i--;
    }

}

function listOfWordsInHebrew() {
    console.log("listOfWordsInHebrew");
    let words = ["אפרסק","אתרוג","מחברת","רשימה","אבטיח","צפרדע"];
    randomWords = words[Math.floor(Math.random() * words.length)];
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
function countingPoints(){
    let count = document.getElementById("score");
    count.innerText = score + " " + numOfIteration;

}
function showHowToPlay(){
    let howToPlay = document.createElement('div');
    howToPlay.setAttribute('class', 'howToPlay');
    addPicture();
    document.body.appendChild(howToPlay);

}
function addPicture(){
    let picture = document.createElement('img');
    picture.setAttribute('class', 'picture');
    picture.alt = "howToPlay.png";
    picture.src = "howToPlay.png";
    document.body.appendChild(picture);


}
function gameButtons(){
    let button = document.createElement('div');
    button.setAttribute('class', 'button');
    let showWordButton = document.createElement('button');
    showWordButton.innerText = "Show Word";
    showWordButton.setAttribute('onclick', 'showWord()');
    let checkWordButton = document.createElement('button');
    checkWordButton.innerText = "Check Word";
    checkWordButton.setAttribute('onclick', 'paintASquare()');
    let howToPlayButton = document.createElement('button');
    howToPlayButton.innerText = "How To Play";
    howToPlayButton.setAttribute('onclick', 'showHowToPlay()');
    let newGameButton = document.createElement('button');
    newGameButton.innerText = "New Game";
    newGameButton.setAttribute('onclick', 'newGame()');
    let hebrewKeyboardButton = document.createElement('button');
    hebrewKeyboardButton.innerText = "Hebrew Keyboard";
    hebrewKeyboardButton.setAttribute('onclick', 'hebrewKeyboard()');
    button.appendChild(showWordButton);
    button.appendChild(checkWordButton);
    button.appendChild(howToPlayButton);
    button.appendChild(newGameButton);
    button.appendChild(hebrewKeyboardButton);
    document.body.appendChild(button);

}
function newGame(){
    location.reload();
}



