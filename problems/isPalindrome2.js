function isPalindrome(string){
    const newString = string.split(' ').join('').toLowerCase();
    console.log(newString);
}

const theString = "A man a plan a canal Panama";
const result = isPalindrome(theString);
// console.log(result);