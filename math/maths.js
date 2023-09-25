function absolute(num1, num2){
    let result = Math.abs(num1 - num2);
    return result;
}

// let absOfNum = absolute(12, 45);
let absOfNum = absolute(12.62521, 44.1281823);
console.log(absOfNum);

function power(num1, num2){
    let result = Math.pow(num1, num2);
    return result;
}

// let powOfNum = power(4, 2);
let powOfNum = power(2, -2);
console.log(powOfNum);

function round(num){
    let result = Math.round(num);
    return result;
}

// let roundOfNum = round(23.454221);
let roundOfNum = round(73.5991);
console.log(roundOfNum);

function foorAndCeil(num){
    let afterFloored = Math.floor(num);
    let afterCeiled = Math.ceil(num);

    let result = "floor of "+num+" is: "+ afterFloored +"\n"+"ceil of "+num+" is: "+ afterCeiled;
    return result;
}

let myNum = foorAndCeil(56.73927);
console.log(myNum);