// console.log( Math.floor(Math.random()*100)+1 );
// const randomNumber = parseInt(Math.random()*100+1);
const randomNumber = Math.floor(Math.random()*100)+1 ;
// console.log(randomNumber);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#numInput');
const numOfGuesses = document.querySelector('.guesses');
const guessesRemaining = document.querySelector('.remaining');
const lowOrHigh = document.querySelector('.lowOrHigh');
const starOver = document.querySelector('#results');
// console.log(starOver);

const p = document.createElement('p');

let prevGuess = [];
let guessCount = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    //validate input values of the input field
    if(isNaN(guess) || guess<1 || guess>100){
        alert("Invalid Input!");
    }
    else{
        prevGuess.push(guess);
        if(guessCount > 10){
            displayGuess(guess);
            displayMessage(`Game Over. The Random number was ${randomNumber}`);
        }
    }
}

function checkGuess(guess){
    // checks if the guessed value is correct
}

function displayGuess(guess){
    // displays previous guesses and remaining guessse
}

function displayMessage(message){
    // displays low or high message
}

function newGame(){
    // starts the game
}

function endGame(){
    // ends the game
}