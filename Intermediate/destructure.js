const person = {
    name: "askat",
    age: 24,
    phone: 1234987,
    balance: 456712389
}
// destructuring object
const {name, age, phone: mobile, balance: money} = person;


// destructuring using variable
// const name = person.name;
// const age = person.age;
// const phone = person.phone;
// const balance = person.balance;

// without destructuring
// console.log(person.name);
// console.log(person.age);
// console.log(person.phone);
// console.log(person.balance);
console.log(name);
console.log(age);
// console.log(phone);
console.log(mobile);
// console.log(balance);
console.log(money);

// array destructure
const numbers = [10, 20];
let [x, y] = numbers;
[x, y] = [30, 40];
console.log(x, y);

const multiply = (...nums) => {
    const [a, b, c] = [nums[0], nums[1], nums[2]];
    return [a*2, b*2, c*2];
}
// console.log(multiply(2, 5, 7));
const [product1, product2, product3] = multiply(2, 5, 7);
console.log(product1);
console.log(product2);
console.log(product3);