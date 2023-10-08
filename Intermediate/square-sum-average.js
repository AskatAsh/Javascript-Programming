const squareSumAverage = (...numbers) => {
    let sum = 0;
    for(const n of numbers){
        const power = Math.pow(n, 2);
        // console.log(power);
        sum += power;
    }
    const avg = sum/numbers.length;
    console.log(avg.toFixed(3));
}
squareSumAverage(2, 3, 4, 5, 6, 7);