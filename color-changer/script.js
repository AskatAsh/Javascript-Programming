const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(event){
        // console.log(event);
        // console.log(event.target);
        // body.style.backgroundColor = 'green';
        if(event.target.id === "lightGray"){
            body.style.backgroundColor = 'lightgray';
        }
        if(event.target.id === "offWhite"){
            body.style.backgroundColor = 'wheat';
        }
        if(event.target.id === "lightBlue"){
            body.style.backgroundColor = 'lightblue';
        }
        if(event.target.id === "lightGreen"){
            body.style.backgroundColor = 'lightgreen';
        }
    })
});