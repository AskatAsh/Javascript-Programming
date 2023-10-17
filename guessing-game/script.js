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