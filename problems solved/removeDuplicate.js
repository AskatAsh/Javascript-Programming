function removeDuplicate(arr) {
    let unique = [];
    for(let i=0; i<arr.length; i++){
        let names = arr[i];
        if(unique.includes(names) === false){
            unique.push(names);
        }
    }
    return unique;
}

let myArray = ['jamil', 'kamil', 'shamil', 'hamil', 'kamil', 'babil', 'kabil', 'jamil', 'shamil'];
let onlyUniques = removeDuplicate(myArray);
console.log(onlyUniques);