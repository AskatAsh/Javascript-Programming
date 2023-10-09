const arr1 = [2, 4, 5, 7, 9];

function doubleNum(num){
    return num * 2;
}

const doubleNum2 = n => n * 2;

const result = arr1.map(doubleNum);
// console.log(result);

const output = arr1.map(doubleNum2);
// console.log(output);

const finalResult = arr1.map(n => n*2);
// console.log(finalResult);

const numbers = [1, 3, 5, 7, 9, 11];

const square = numbers.map(n => n*n);
// console.log(square);

const members = ['asif', 'rakib', 'shihab', 'rahim', 'hannan'];
const nameLength = members.map(member => member.length);
// console.log(nameLength);
const firstLetter = members.map(first => first[0]);
console.log(firstLetter);