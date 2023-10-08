// object using arrow function (implicit)
const age = (person) => person.age;
const myName = (person) => person.name;
const obj = {name: "askat", age: 24};
console.log(age(obj));
console.log(myName(obj));

// array using arrow function 
const thirdNum = (numbers) => numbers[2];
const myArray = [12, 34, 45, 56, 67, 78];
console.log(thirdNum(myArray));

// no parameter in arrow function
const getPI = () => Math.PI;
console.log(getPI().toFixed(4));