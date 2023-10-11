function chunkArray(arr, chunkSize) {
    let newArr = [];
    for(let i=0; i<arr.length; i+=chunkSize){
        newArr.push(arr.slice(i,i+chunkSize));
    }
    return newArr;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
// Expected output: [[1, 2], [3, 4], [5]]