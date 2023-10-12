// JavaScript Object Notation (JSON)

const object = {id: 345, name: 'Askat', job: 'web developer'};

const stringified = JSON.stringify(object);

console.log(stringified);
console.log(typeof stringified);

const objectified = JSON.parse(stringified);

console.log(objectified);
console.log(typeof objectified);