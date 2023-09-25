function minMax(num1, num2, num3){
    let first = Math.max(num1, num2, num3);
    if(first === num1){
        console.log("jim gets first place with ", num1, " points.");
    }
    if(first === num2){
        console.log("kim gets first place with ", num2, " points.");
    }
    if(first === num3){
        console.log("Tim gets first place with ", num3, " points.");
    }
    // return first;
}

minMax(99, 98, 96);