const inputField = document.querySelector('#inputField');
const outputField = document.querySelector('#ouputField');
const convertBtn = document.querySelector('#convertBtn');

const fromText = document.querySelector('.from');
const toText = document.querySelector('.to');

const selectedPxtorem = document.querySelector('#pxtorem');
const selectedRemtopx = document.querySelector('#remtopx');

const headerText = document.querySelector('.headerText');

let pxOrrem = 'pxtorem';

convertBtn.addEventListener('click', function () {
    const inputValue = inputField.value;
    console.log(inputValue);
    if (pxOrrem == 'remtopx') {
        remtopx(inputValue);
    }
    else {
        pxTorem(inputValue);
    }
    // inputField.value = '';
    console.log(pxOrrem);
})

// this function converts pixel to rem
const pxTorem = (px) => {
    const toRem = px / 16;
    // console.log(toRem);
    outputField.innerHTML = toRem;
}

// this function converts pixel to rem
const remtopx = (rem) => {
    // const toPx = Math.floor(rem * 16);
    const toPx = rem * 16;
    // console.log(toPx);
    outputField.innerHTML = toPx;
}

selectedRemtopx.addEventListener('click', (e) => {
    e.target.classList.add('selected');
    selectedPxtorem.classList.remove('selected');
    // console.log("selected px to rem");
    fromText.innerHTML = 'rem';
    toText.innerHTML = 'pixel';
    pxOrrem = 'remtopx';
    inputField.value = '';
    outputField.innerText = '';
    headerText.innerText = 'Rem to Pixel';
})

selectedPxtorem.addEventListener('click', (e) => {
    e.target.classList.add('selected');
    selectedRemtopx.classList.remove('selected');
    // console.log("selected px to rem");
    fromText.innerHTML = 'pixel';
    toText.innerHTML = 'rem';
    pxOrrem = 'pxtorem';
    inputField.value = '';
    outputField.innerText = '';
    headerText.innerText = 'Pixel to Rem';
})