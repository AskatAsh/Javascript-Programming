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