function findLongestWordLength(str) {
    const words = str.split(' ');
    // console.log(words.length);
    let longest = words[0].length;
    for(let i=0;i<words.length;i++){
        // console.log(words[i], words[i].length);
        const len = words[i].length;
        if(len > longest){
            longest = len;
        }
    }
    return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
