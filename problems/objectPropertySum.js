function propertySum(arr, propName) {
    let sum = 0;
    for(const obj of arr){
        sum += obj[propName];
    }
    return sum;
}
console.log(propertySum([{x: 10}, {x: 20}, {x: 30}], 'x'));
// Expected output: 60