const numbers = [2, 5, 10, 13, 17];
const primes = numbers.filter(num => {
    for(let i=2;i<=Math.sqrt(num) || num ===2;i++){
        if(num%i !== 0 || num === 2){
            return num;
        }
        else{
            break;
        }
    }
});
console.log(primes);