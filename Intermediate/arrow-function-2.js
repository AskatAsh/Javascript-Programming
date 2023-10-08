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

// arrow function with return
const calculate = (a, b, c) => {
    const add = a+b+c;
    const sub = add - (a-b-c);
    const multi = a*b*c;
    const div = multi / a;
    return `
    Add = ${add}
    Sub = ${sub}
    Multi = ${multi}
    Div = ${div}`;
}
console.log(calculate(15, 23, 32));