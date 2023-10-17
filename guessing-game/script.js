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
console.log(starOver);

const p = document.createElement('p');

let prevGuess = [];
let guessCount = 1;
let playGame = true;

function validateGuess(guess) {
    //validate input values of the input field
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