let myString = "The quick brown fox jumps over the lazy dog.";

let afterSlice_1 = myString.slice(20);
let afterSlice_2 = myString.slice(4, 9);

let afterSlice_3 = myString.slice(-4);
let afterSlice_4 = myString.slice(-18, -14);

console.log(afterSlice_1);
console.log(afterSlice_2);
console.log(afterSlice_3);
console.log(afterSlice_4);
console.log(myString.slice(0, myString.length-1));