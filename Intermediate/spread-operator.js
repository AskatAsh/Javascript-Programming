const maxNum = Math.max(12, 34, 44, 29, 92, 73, 57);
console.log(maxNum);

// using spread operator
const numArray = [30, 40, 50, 83, 98, 23];
// console.log(...numArray);
const myMax = Math.max(...numArray);
console.log(myMax);

// array to array reference
const myArray = [10, 20, 30, 40, 50, 60];
const copyArray = myArray;
copyArray.push(70);

// console.log(`original array = ${myArray}`);
// console.log(`copy array = ${copyArray}`);
console.log("original array = ", myArray);
console.log("copy array = ", copyArray);

// stop array referencing using spread operator

const mySecondArray = [10, 20, 30, 40, 50, 60, 70];
const secondCopy = [...mySecondArray, 80, 90];
// secondCopy.push(80);
console.log("original array = ", mySecondArray);
console.log("copy array = ", secondCopy);