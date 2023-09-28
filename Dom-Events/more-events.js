const mouseEnterButton = document.getElementById('mouseEnter');
// console.log(mouseEnterButton);
mouseEnterButton.addEventListener('mouseenter', function(){
    mouseEnterButton.style.backgroundColor = 'lightyellow';
    console.log("mouse enter change");
});

const mouseOverButton = document.getElementById('mouseOver');
// console.log(mouseOverButton);
mouseOverButton.addEventListener('mouseover', function(){
    mouseOverButton.style.backgroundColor = 'lightgreen';
    console.log("mouse Over change");
});

const mouseMoveButton = document.getElementById('mouseMove');
// console.log(mouseOverButton);
mouseMoveButton.addEventListener('mousemove', function(){
    mouseMoveButton.style.backgroundColor = 'lightblue';
    console.log("mouse Move change");
});

const focusField = document.getElementById('inputField');
// console.log(focusField);
focusField.addEventListener('focus', function(){
    console.log('you have triggered the focus event');
});

focusField.addEventListener('blur', function(){
    console.log('you have triggered the blur event');
});


const keyUp = document.getElementById('keyupField');
keyUp.addEventListener('keyup', function(event){
    const keyUpText = document.getElementById('afterKeyUp');
    // console.log(event.target.value);
    keyUpText.innerText = event.target.value;
});

const keyDown = document.getElementById('keydownField');
keyDown.addEventListener('keydown', function(event){
    const keyDownText = document.getElementById('afterKeyDown');
    // console.log(event.target.value);
    keyDownText.innerText = event.target.value;
});

const keyPress = document.getElementById('keypressField');
keyPress.addEventListener('keypress', function(event){
    const keyPressText = document.getElementById('afterKeyPress');
    // console.log(event.target.value);
    keyPressText.innerText = event.target.value;
});

// write delete to delete a text

const deleteBtn = document.getElementById('deleteButton');
deleteBtn.addEventListener('click', function(){
    const textToDelete = document.getElementById('deleteText');
    textToDelete.style.display = 'none';
})

const textField = document.getElementById('deleteField');
textField.addEventListener('keyup',function(event){
    const text = event.target.value;
    console.log(text);
    if(text === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
})