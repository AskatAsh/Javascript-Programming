const numbers = [10, 20, 30, 40, 50, 60, 70, 15, 25, 35, 45, 55, 65, 75];

const result = numbers.reduce((prev, curr) => prev+curr, 0);
console.log(result);