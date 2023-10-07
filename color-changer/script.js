const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(event){
        // console.log(event);
        // console.log(event.target);
        // body.style.backgroundColor = 'green';
        if(event.target.id === "lightgray"){
            // body.style.backgroundColor = 'lightgray';
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "wheat"){
            // body.style.backgroundColor = 'wheat';
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "lightblue"){
            // body.style.backgroundColor = 'lightblue';
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "lightgreen"){
            // body.style.backgroundColor = 'lightgreen';
            body.style.backgroundColor = event.target.id;
        }
    })
});
