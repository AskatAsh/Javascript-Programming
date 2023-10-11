function calculateSquares(arr) {
    return arr.map(n => n*n);
}
console.log(calculateSquares([-2, -1, 0, 1, 2]));
// Expected output: [4, 1, 0, 1, 4]