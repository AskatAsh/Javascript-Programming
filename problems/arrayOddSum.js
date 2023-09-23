function arrayOddSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
            sum = sum + arr[i];
            console.log(i,arr[i],sum);
        }
    }
    // return sum;
}
let myArray = [15, 22, 33, 15, 29, 10, 17];
arrayOddSum(myArray);
// let result = arrayOddSum(myArray);
// console.log(result);