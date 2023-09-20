var num1 = '10';
var num2 = '20';
console.log(num1 + num2);
console.log(typeof(num1 + num2));

num1 = parseInt(num1);
num2 = parseInt(num2);
console.log(num1 + num2);
console.log(typeof(num1 + num2));

var price = '234.56';
var amount = '5';
var total = price * amount;
console.log(total);
console.log(typeof(total));

console.log(parseFloat(price) * parseFloat(amount));
