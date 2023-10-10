const numbers = [10, 20, 30, 40, 50, 60, 70, 15, 25, 35, 45, 55, 65, 75];

const result = numbers.filter(n => n > 50);
// console.log(result);

const evenNumbers = numbers.filter(n => n%2 === 0);
console.log(evenNumbers);