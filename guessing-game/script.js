// console.log( Math.floor(Math.random()*100)+1 );
// const randomNumber = parseInt(Math.random()*100+1);
let randomNumber = Math.floor(Math.random()*100)+1 ;
// console.log(randomNumber);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#numInput');
const numOfGuesses = document.querySelector('.guesses');
const guessesRemaining = document.querySelector('.remaining');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('#results');
// console.log(startOver);

// const p = document.createElement('p');

let prevGuess = [];
let guessCount = 1;
let playGame = true;


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
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
        if(guessCount > 9){
            displayGuess(guess);
            displayMessage(`Game Over. The Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // checks if the guessed value is correct
    if(guess === randomNumber){
        displayMessage(`You have guessed the correct number!!!`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage('Guess a Higher number!!!');
    }
    else if(guess > randomNumber){
        displayMessage('Guess a Lower number!!!');
    }
}

function displayGuess(guess){
    // displays previous guesses and remaining guessse
    userInput.value = '';
    numOfGuesses.innerHTML += `${guess}  `;
    guessesRemaining.innerHTML = `${10-guessCount}`;
    guessCount++;
}

function displayMessage(message){
    // displays low or high message
    lowOrHigh.innerHTML = message;
}

const p = document.createElement('p');
function endGame(){
    // ends the game
    userInput.innerHTML = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    // starts the game
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random()*100+1);
        // console.log(randomNumber);
        prevGuess = [];
        guessCount = 1;
        numOfGuesses.innerHTML = '';
        lowOrHigh.innerHTML = '';
        guessesRemaining.innerHTML = `${11-guessCount}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
