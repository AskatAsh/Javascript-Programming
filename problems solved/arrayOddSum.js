function arrayOddSum(arr){
    let sum = 0;
    const oddElements = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
            sum = sum + arr[i];
            console.log(i,arr[i],sum);
            oddElements.push(arr[i]);
        }
    }
    console.log("odd sum of the array: "+ sum);
    return oddElements;
}
let myArray = [15, 22, 33, 15, 29, 10, 17];

// let result = arrayOddSum(myArray);
// console.log("odd sum of the array: "+result);

const oddElements = arrayOddSum(myArray);
console.log(oddElements);