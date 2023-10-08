// const sum = (a, b, c) => {
//     const arr = [a, b, c];
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// console.log(sum(12, 13, 14));

// rest parameter for function parameter
const sum = (...arr) => {
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sum(10, 20, 30));

// another example of rest parameter
const asManyas = (...args) =>{
    return `You have passed ${args.length} arguments`;
}
console.log(asManyas(1, 2, 3));
console.log(asManyas("string", null, [1, 2, 3], { }));