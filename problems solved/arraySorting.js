const myArray = [100, 543, 1.1, 5.4, 3.6, 113, 1.1, 233, 4.5, 241, 2.6, 7.6];

const descending = (myArray) => {
    myArray.sort((a, b) => b - a);
    // console.log(myArray);
    return myArray;
}
console.log(descending(myArray));