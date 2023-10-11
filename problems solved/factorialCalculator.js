// function factorial(n) {
//     if(n==0){
//         return 1;
//     }
//     return n*factorial(n-1);
// }

function factorial(n) {
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(5));
