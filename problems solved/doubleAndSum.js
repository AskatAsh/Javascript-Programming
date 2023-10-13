function doubleAndSum(numbers){
    const doubleSum = numbers.map(num => num*2).reduce((prev, next) => prev+next);
    // console.log(double);
    // const sum = double.reduce((prev, next) => prev+next);
    // console.log(sum);
    return doubleSum;
}

const result = doubleAndSum([1, 2, 3, 4]); // Should return 20 (1*2 + 2*2 + 3*2 + 4*2)
console.log(result);