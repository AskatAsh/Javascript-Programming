function sum(a, b, c){
    const args = [...arguments];
    console.log(args);
    // console.log(arguments);
    return a+b+c;
}

const total = sum(12, 34, 10, 5, 9);
console.log(total);