function factoUsingFor(num){
    let facto = 1;
    for(let i=1;i<=num;i++){
        facto = facto * i;
    }
    return facto;
}

let myNumber = 5;
let factorial = factoUsingFor(myNumber);
console.log(factorial);