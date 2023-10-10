function reverseString(str) {
    const reversed = str.split('').reverse().join('');
    return reversed;
}

const theString = "hello";
const stringReversed = reverseString(theString);
console.log(stringReversed);