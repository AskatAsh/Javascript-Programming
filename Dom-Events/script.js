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