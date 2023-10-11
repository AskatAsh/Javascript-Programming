function isPalindrome(string){
    const newString = string.split(' ').join('').toLowerCase();
    const reversed = newString.split('').reverse().join('');
    return newString == reversed;
}

const theString = "Hello";
// const theString = "A man a plan a canal Panama";
const result = isPalindrome(theString);
console.log(result);