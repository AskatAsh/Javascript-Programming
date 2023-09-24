// random whole number that's greater than or equal to myMin and less than or equal to myMax.
function randomRange(myMin, myMax) {
    let random = Math.random();
    console.log("Generated Random Num "+ random);
    let minMax = myMax - myMin + 1;
    console.log("Max - Min + 1 = "+ minMax);
    let finalRandom = random * minMax;
    console.log(random + " * "+minMax+" = "+finalRandom);
    let afterFloored = Math.floor(finalRandom);
    console.log("floor of "+ finalRandom + " is: "+ afterFloored);
    console.log("floored random number + "+ myMin + " = ");
    return Math.floor(random * minMax) + myMin;
}

let myRandomNum = randomRange(1, 20);
console.log(myRandomNum);