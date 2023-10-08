// function declaration
function add(a, b){
    return a+b;
}
console.log(add(23, 15));

// function expression
const add2 = function(x, y){
    return x+y;
}
console.log(add2(12, 24));

// arrow function
const add3 = (p, q) => p+q;

console.log(add3(40, 20));