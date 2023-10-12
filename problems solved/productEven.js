const numbers = [2, 7, 10, 13, 20];
// const numbers = [1, 3, 5, 7];
// const numbers = [2, 4, 6, 8];

const evenProduct = numbers.reduce((prev, curr) => {
    if(curr%2 === 0){
        return prev * curr;
    }
    return prev;
});
console.log(evenProduct);