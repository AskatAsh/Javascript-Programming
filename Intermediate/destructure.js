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