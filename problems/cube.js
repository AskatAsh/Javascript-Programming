function cubeNumber(number) {
    if(typeof(number) === 'number'){
        let cubeOfNumber = Math.pow(number,3);
        // let cubeOfNumber = number*number*number;
        return cubeOfNumber;
    }
    else{
        return "invalid input";
    }
}

let result = cubeNumber(5);
console.log(result);