const numbers = [2, 3, 4, 5, 6, 7];

// for Each loop doesn't return anything but map does
const result = numbers.forEach(n => {
    console.log(n*n*n);
})
// console.log(result);