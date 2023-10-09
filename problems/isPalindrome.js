function isPalindrome(string){
    const sliced = string.split(' ');
    let ans = '';
    for(const s of sliced){
        ans = ans + s;
    }

    let str = ans.toLowerCase();
    let temp = '';
    for(let i=str.length-1;i>=0;i--){
        temp = temp + str[i];
    }
    if(str == temp){
        return true;
    }
    return false;
}

const theString = "A man a plan a canal Panama";
const result = isPalindrome(theString);
console.log(result);