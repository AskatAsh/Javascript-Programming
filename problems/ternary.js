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