function makeLightBlue(){
    document.body.style.backgroundColor = 'lightblue';
}

function makeLightGreen(){
    document.body.style.backgroundColor = 'lightgreen';
}

const clickToChange = document.getElementById('makeLightGreen').onclick = makeLightGreen;

const pinkButton = document.getElementById('makePink');
// console.log(pinkButton);
pinkButton.onclick = function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// javascript add event listener

const greenButton = document.getElementById('makeGreen');
console.log(greenButton);

const greenText = document.getElementById('addText');
console.log(greenText);

function addGreenText(){
    greenText.innerText = 'Green after clicked';
    greenText.style.color = 'green';
    // greenText.style.backgroundColor = 'lightgreen';
    greenText.style.border = '2px solid green';
    greenText.style.width = '150px';
    greenText.style.textAlign = 'center';
    greenText.style.padding = '20px';

}

// greenButton.onclick = addGreenText;
greenButton.addEventListener('click', addGreenText);