function factoUsingFor(num){
    let facto = 1;
    for(let i=1;i<=num;i++){
        facto = facto * i;
    }
    return facto;
}

// let myNumber = 5;
// let factorial = factoUsingFor(myNumber);
// console.log(factorial);

function factoUsingWhile(num){
    let facto = 1;
    let i=1;
    while(num){
        facto = facto * num;
        num--;
    }
    return facto;
}

// let myNumber = 4;
// let factorial = factoUsingWhile(myNumber);
// console.log(factorial);

function factoWithoutLoop(num){

    if(num===1){
        return 1;
    }
    return num = num*factoWithoutLoop(num-1);
}

let myNumber = 4;
let factorial = factoWithoutLoop(myNumber);
console.log(factorial);