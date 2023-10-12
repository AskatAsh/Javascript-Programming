function reverseArray(arr){
    // const cloneArray = [...arr];
    return [...arr].reverse();
}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));