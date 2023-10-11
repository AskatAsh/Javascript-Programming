const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8];
const newArray = [...arr1, ...arr2];
console.log(newArray);


const arr = [2, 4, 6, 8];
const element = 10;
const result = (arr, element) => [...arr,element];
console.log(result(arr, element));