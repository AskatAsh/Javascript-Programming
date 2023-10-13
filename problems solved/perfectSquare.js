function filterPerfectSquares(numbers){
    const perfectSquareNumbers = numbers.filter(num => Number.isInteger(Math.sqrt(num)));
    return perfectSquareNumbers;
}

console.log(filterPerfectSquares([1, 2, 3, 4, 5, 6, 7, 8, 9])); 
// Should return [1, 4, 9]
