function newArray(arr, index){
    const beforeIndex = arr.slice(0, index);
    const afterIndex = arr.slice(index+1);
    const newArray = [...beforeIndex, ...afterIndex];
    return newArray;
}
const arr = ['apple', 'banana', 'cherry', 'date'];
const index = 1;
console.log(newArray(arr, index));