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
console.log(finalResult);