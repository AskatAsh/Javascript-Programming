const numbers = [4, 8, 12, 16, 25];
const squareRoot = numbers.map(num => num >=0 ? parseFloat(Math.sqrt(num).toFixed(2)) : null);
console.log(squareRoot);