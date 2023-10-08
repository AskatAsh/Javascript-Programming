// object using arrow function (implicit)
const age = (person) => person.age;
const myName = (person) => person.name;
const obj = {name: "askat", age: 24};
console.log(age(obj));
console.log(myName(obj));