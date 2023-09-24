function randomWholeNum() {
    // return Math.floor(Math.random() * 10 + 1);
    // random number from 1 to 10;
    let random = Math.random();
    console.log(random);
    // return Math.floor(random*10) + 1;
    return Math.floor(random*10 + 1);
}

let myNum = randomWholeNum();
console.log(myNum);