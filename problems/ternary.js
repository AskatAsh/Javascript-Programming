function checkEqual(a, b) {
    let ans = a ===b ? "Equal": "Not Equal";
    return ans;
}
console.log(checkEqual(3, 3));

function checkMax(a, b) {
    let ans = a > b ? "max is: "+a : "max is: "+b;
    return ans;
}
console.log(checkMax(3, 5));

function maxMinEqual(a, b) {
    let ans = a === b ? "Equal" : a > b ? "max: "+a+" min: "+b : "max: "+b+" min: "+a;
    return ans;
}

console.log(maxMinEqual(33, 13));