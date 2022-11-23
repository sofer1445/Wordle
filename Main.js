let indexTheFirstInput = 4;
let counter = 0;
let nameOfTheWord = "";
let numOfIteration = 6;
let randomWords = "";
let score = "Total points:";
let hiddenKeyboard = true;
let gameOver = 0;
let randomWordList = [];

const ROW_NUMBER = 6;
const COLUMN_NUMBER = 5;
const TIME_OUT5SEC = 5000;
const TIME_OUT2SEC = 2000;
const TIME_OUT6SEC = 6000;
const TIME_OUT3SEC = 3000;
const ROW_KEY_BOARD = 4;
const LETTERS_IN_LINES = 9;





function drawGridBoard() {
    console.log("drawGridBoard");
    listOfWordsInHebrew();
    gameButtons();
    let board = document.createElement('div');
    board.setAttribute('class', 'board');
    for (let i = 0; i < ROW_NUMBER; i++) {
        let row = document.createElement("div");
        row.setAttribute('class', 'row');
        for (let j = 0; j < COLUMN_NUMBER; j++) {
            let cell = document.createElement("input");
            cell.setAttribute('id', 'cell' + (j + i * COLUMN_NUMBER));
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
    let counter = 0;
    let arrayOfColor = [];
    let word = writingInTextBox();
    for (let i = 0; i <= indexTheFirstInput; i++) {
        arrayOfColor[i] = checkCell(i);
        console.log(arrayOfColor[i]);
        counter++;
    }
    if (word === randomWords) {
        setTimeout(() => {
                alert("Well done you made it! , try again to improve your vocabulary");
            }
            , TIME_OUT2SEC);
        countingPoints();
        setTimeout(() => {
            newGame();
        }, TIME_OUT6SEC);
    } else {
        gameOver++;
        finishGame();
    }
    numOfIteration--;

    return arrayOfColor;
}

function checkCell(i) {
    console.log("checkCell");
    let map = new Map();
    let cell = document.getElementById("cell" + i);
    console.log(cell.value);

    let charOfWord = randomWords.charAt(indexTheFirstInput - i);
    console.log(indexTheFirstInput - i + "," + randomWords.charAt(indexTheFirstInput - i));
    if (cell.value === charOfWord) {
        map.set("green", cell.value);
        return map;
    } else if (randomWords.includes(cell.value)) {
        map.set("yellow", cell.value);
        return map;
    } else if (cell.value !== charOfWord) {
        map.set("gray", cell.value);
        return map;
    }
}

function showWord() {
    console.log("showWord");
    let char;
    let i = indexTheFirstInput;
    while (i >= 0) {
        char = randomWords.charAt(indexTheFirstInput - i);
        console.log(char);
        document.getElementById("cell" + (i)).value = char;
        i--;
    }
    setTimeout(() => {
        alert("You are starting a new game ! :)")
        newGame();
    }, TIME_OUT3SEC);
}

function listOfWordsInHebrew() {
    console.log("listOfWordsInHebrew");
    randomWordList = ["אפרסק", "אתרוג", "מחברת", "רשימה", "אבטיח", "מכללה",
        "גירפה", "צפרדע", "נקודה", "מועצה", "עיבוד",
        "תאגיד", "תפילה", "צילום", "חישוב", "בקבוק",
        "תהליך", "אישור", "ילקוט", "ללמוד", "סוודר"];
    randomWords = randomWordList[Math.floor(Math.random() * randomWordList.length)];
    console.log(randomWords);
}

function paintASquare() {
    let arrayOfColor = checkWord();
    console.log("paintASquare");

    if (counter % COLUMN_NUMBER !== 0) {
        alert("You need to write a 5 letter word, try again :)");
        return;
    }

    let stringOfColor = "";
    let partOfTheWord = "";
    let count = 0;

    for (let i = indexTheFirstInput - 4; i < arrayOfColor.length; i++) {
        if (partOfTheWord.length <= COLUMN_NUMBER) {
            partOfTheWord += randomWords.charAt(count);

            count++;
        }

        if ((!stringOfColor.includes(arrayOfColor[i].values().next().value)) ||
            (countHowManyTimesTheLetter(partOfTheWord) > 1)) {

            stringOfColor += arrayOfColor[i].values().next().value;
            document.getElementById("cell" + (i)).style.backgroundColor = arrayOfColor[i].keys().next().value;
            document.getElementById("char " + (arrayOfColor[i].values().next().value)).style.backgroundColor = arrayOfColor[i].keys().next().value;


        } else {
            document.getElementById("cell" + (i)).style.backgroundColor = arrayOfColor[i].keys().next().value;
            document.getElementById("char " + (arrayOfColor[i].values().next().value)).style.backgroundColor = arrayOfColor[i].keys().next().value;
            if (arrayOfColor[i].keys().next().value === "gray") {
                document.getElementById("char " + (arrayOfColor[i].values().next().value)).disabled = true;
            }
        }

    }
    if (counter === 5) {
        indexTheFirstInput += 5;
        counter = 0;
        nameOfTheWord = "";
    }
}

function hebrewKeyboard() {
    console.log("hebrewKeyboard");
    let cell;
    if (hiddenKeyboard) {
        let hebrewLetters = ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ", "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ"];
        let keyboard = document.createElement('div');
        keyboard.setAttribute('class', 'keyboard');
        for (let i = 0; i < ROW_KEY_BOARD; i++) {
            let row = document.createElement("div");
            row.setAttribute('class', 'rowKeyboard');
            if (i === 3) {
                let enterButton = document.createElement("button");
                enterButton.innerText = "Enter";
                enterButton.setAttribute('onclick', 'paintASquare()');
                keyboard.appendChild(enterButton);
                keyboard.appendChild(row);
                let deleteButton = document.createElement("button");
                deleteButton.innerText = "Delete";
                deleteButton.setAttribute('onclick', 'deleteChar()');
                keyboard.appendChild(deleteButton);
                keyboard.appendChild(row);
                break;
            }
            for (let j = 0; j < LETTERS_IN_LINES; j++) {
                cell = document.createElement("button");
                cell.innerText = hebrewLetters[j + (i * LETTERS_IN_LINES)];
                cell.setAttribute('onclick', 'writeOnTheLines(this)');
                cell.setAttribute('id', 'char ' + hebrewLetters[j + (i * 9)]);
                row.appendChild(cell);
            }
            keyboard.appendChild(row);
        }
        document.body.appendChild(keyboard);
    }
    hiddenKeyboard = false;

}

function writingInTextBox() {
    console.log("writingInTextBox");
    let theWord = "";
    if (nameOfTheWord.length === COLUMN_NUMBER) {
        theWord += nameOfTheWord;
    }
    return theWord;
}

function writeOnTheLines(key) {
    console.log("writeOnTheLines");
    if (counter !== COLUMN_NUMBER) {
        let cell = document.getElementById("cell" + (indexTheFirstInput - counter));
        cell.value = key.innerText;
        nameOfTheWord += key.innerText;
        counter++;
        console.log(nameOfTheWord);
    }
}

function countingPoints() {
    let count = document.getElementById("score");
    count.innerText = score + " " + numOfIteration;

}

function showHowToPlay() {
    let howToPlay = document.createElement('div');
    howToPlay.setAttribute('class', 'howToPlay');
    addPicture();
    document.body.appendChild(howToPlay);
}

function addPicture() {
    let picture = document.createElement('img');
    picture.setAttribute('class', 'picture');
    picture.alt = "howToPlay.png";
    picture.src = "howToPlay.png";
    document.body.appendChild(picture);
    setTimeout(() => {
        picture.remove();

    }, TIME_OUT5SEC);
}

function gameButtons() {
    let button = document.createElement('div');
    button.setAttribute('class', 'button');
    let showWordButton = document.createElement('button');
    showWordButton.innerText = "Show Word";
    showWordButton.setAttribute('onclick', 'showWord()');
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
    button.appendChild(howToPlayButton);
    button.appendChild(newGameButton);
    button.appendChild(hebrewKeyboardButton);
    document.body.appendChild(button);

}

function newGame() {
    location.reload();
}

function deleteChar() {
    console.log("counter = " + counter);
    if (counter) {
        let cell = document.getElementById("cell" + (indexTheFirstInput - counter + 1));
        cell.value = "";
        cell.innerText = "";
        nameOfTheWord = nameOfTheWord.substring(0, nameOfTheWord.length - 1);
        counter--;
        console.log(nameOfTheWord);
    }
}

function finishGame() {
    if (gameOver === ROW_NUMBER) {
        alert("Game Over");
        showWord()
        setTimeout(() => {
                location.reload();
            }
            , TIME_OUT5SEC);
    }

}

function countHowManyTimesTheLetter(string) {
    console.log("countHowManyTimesTheLetter");
    console.log(string);
    let count = 0;
    if (string.length === 0) {
        return 0;
    }
    let letter = string.charAt(string.length - 1);
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) {
            count++;
        }
    }
    console.log("count = " + count);
    return count;
}