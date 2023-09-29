document.getElementById('item-2').addEventListener('click', function(event){
    console.log('item-2 is Clicked!');
    event.stopPropagation();
});

document.getElementById('myList').addEventListener('click', function(event){
    console.log('ul myList is Clicked!');
    event.stopImmediatePropagation();
});

document.getElementById('listContainer').addEventListener('click', function(){
    console.log('list container is Clicked!');
});

document.getElementById('theBody').addEventListener('click', function(){
    console.log('the body is Clicked!');
});
