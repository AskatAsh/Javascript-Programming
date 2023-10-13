function sumOfEvenSquares(numbers, p){
    const evenSquares = numbers.filter(num => num%2==0).reduce((sum, num) => sum+Math.pow(num,2), 0);
    // const evenSquares = numbers.filter(num => num%2==0).reduce((prev, next) => Math.pow(prev,p)+Math.pow(next,p));
    // const evenSquares = numbers.filter(num => num%2==0).reduce((prev, next) => prev * Math.pow(next,p), 1);
    return evenSquares;
}

console.log(sumOfEvenSquares([1, 2, 3, 4]));
// console.log(sumOfEvenSquares([1, 2, 3, 4], 2));
// Should return 20 (2*2 + 4*4)
