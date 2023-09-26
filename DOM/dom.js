// console.log('hello this is dom.js file');
// console.log(document);
// console.log(document.doctype);

let lists = document.getElementsByTagName('li');
for (const li of lists){
    // console.log(li.textContent);
    console.log(li.innerText);
}

let headings = document.getElementsByTagName('h1');
for (const h1 of headings){
    console.log(h1);
    console.log(h1.innerText);
}

let classList = document.getElementsByClassName('lists');
for (const list of classList){
    console.log(list.innerText);
}

let para = document.getElementById('para');
console.log(para);
// console.log(para.textContent);
console.log(para.innerText);

let myList = document.getElementsByClassName('list');
for(const items of myList){
    // console.log(items);
    console.log(items.innerText);
}

let myFruits = document.querySelectorAll('.fruits li');
for(const myFruit of myFruits){
    console.log(myFruit.innerText);
}

let favFruit = document.querySelector('.fruits .fruit');
favFruit.innerText = 'Mango';
console.log(favFruit);
console.log(favFruit.innerText);

document.getElementById('header').style.backgroundColor = 'lightgreen'
document.getElementById('header').style.color = 'darkgreen'
document.getElementById('header').style.textAlign = 'center'

// let title = document.getElementById('para')

// title.getAttribute('class')

// title.classList
// title.classList.add('font-normal')

// title.classList
// title.classList.remove('boxed')

// title.classList


// title = document.querySelector('.fruits .fruit')
// title.setAttribute('title', 'my favourite fruit')


// document.getElementsByClassName('fruits')[0]
// document.getElementsByClassName('fruits')[0].innerHTML

const myFruitList = document.getElementsByClassName('fruits')[0];
const details = myFruitList.innerHTML;
const detailedText = myFruitList.innerText
console.log(details);
console.log(detailedText);
// console.log(myFruitList);