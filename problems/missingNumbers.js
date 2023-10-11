function findMissingNumbers(arr, start, end) {
    let missing = [];
    for(let i = start; i<=end; i++){
        let found = 0;
        for(let j=0; j<arr.length; j++){
            if(i === arr[j]){
                found++;
            }
        }
        if(found === 0) missing.push(i);
    }
    return missing;
}
console.log(findMissingNumbers([4, 7, 11, 15], 4, 15));