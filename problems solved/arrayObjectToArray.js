
const people = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];

const newArray = people.map(obj => `${obj.name} is ${obj.age} years old`)
console.log(newArray);