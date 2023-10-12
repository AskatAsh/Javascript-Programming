const numbers = [2, 5, 10, 13, 17];
const primes = numbers.filter(num => {
    if(num < 2) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
});
console.log(primes);