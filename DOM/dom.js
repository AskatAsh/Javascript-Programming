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

const sections = document.querySelectorAll('section');
for(const section of sections){
    console.log(section);
    section.style.border = '2px solid darkgray';
    section.style.borderRadius = '10px';
    section.style.margin = '5px 10px';
    section.style.padding = '10px';
    section.style.backgroundColor = 'lightyellow';
    section.style.marginBottom = '15px'
}

const allLists = document.querySelectorAll('li');
for(const list of allLists){
    list.style.listStyle = 'none';
}

const listElements = document.getElementsByClassName('lists')[0];
listElements.classList.add('dom-list');
listElements.classList.remove('lists');

const childContainer = document.getElementById('mylist').childNodes;
console.log(childContainer);

const firstElement = document.getElementById('mylist').firstChild;
console.log(firstElement);

const secondElement = document.getElementById('mylist').childNodes[1];
console.log(secondElement);

const thirdElement = document.getElementById('mylist').childNodes[3];
console.log(thirdElement);

const thirdElementsChilds = document.getElementById('mylist').childNodes[3].childNodes;
console.log(thirdElementsChilds);

const listSibling = document.getElementById('mylist').childNodes[3].childNodes[2].nextSibling;
console.log(listSibling);

const myUl = document.getElementById('myfruit').childNodes
console.log(myUl);

const ul = document.getElementById('myfruit').childNodes[3]
console.log(ul);

const ulChilds = ul.childNodes
console.log(ulChilds);

const ulThirdChild = ulChilds[5];
console.log(ulThirdChild);

const thirdChildsParent = ulThirdChild.parentElement;
console.log(thirdChildsParent);

const grandParent = thirdChildsParent.parentElement;
console.log(grandParent);
