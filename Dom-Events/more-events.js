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