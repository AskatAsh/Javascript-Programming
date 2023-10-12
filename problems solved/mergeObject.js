const obj1 = { name: 'Alice', age: 30 };
const obj2 = { country: 'USA', hobbies: ['reading', 'hiking'] };
const mergedObject = {...obj1, ...obj2};
console.log(mergedObject);