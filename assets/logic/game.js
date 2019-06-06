var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessedLetters = [];

var letterToGuess = [];

var updateGuessesLeft = function () {
    document.getElementById("guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessedLetters = function () {
    document.getElementById("guessed").innerHTML = guessedLetters.join(", ");
};

var newGame = function () {
    guessesLeft = 9;
    guessedLetters = [];
    updateGuessesLeft();
    updateLetterToGuess();
    updateGuessedLetters();
};

newGame();

document.onkeydown = function (event) {

    var letter = event.key;

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (event.repeat) { return };
        if (guessedLetters.includes(event.key)) {
            return;
        }
        guessedLetters.push(event.key);

        guessesLeft--;

        updateGuessesLeft();
        updateGuessedLetters();

        if (event.key === letterToGuess) {
            alert("Very good!  You knew the letter, it's " + letterToGuess + ".");
            wins++;
            document.getElementById("win").innerHTML = wins;
            newGame();
        }

        if (guessesLeft === 0) {
            alert("The letter I was thinking was " + letterToGuess + ".");
            losses++;
            document.getElementById("loss").innerHTML = losses;
            newGame();
        }
    };
};