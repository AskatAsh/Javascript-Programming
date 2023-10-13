function concatAndCountVowels(strings){
    let newString = strings.join('');
    // const result = strings.forEach(word => {
    //     // console.log(word);
    //     newString += word;
    // })

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // console.log(newString.split(''));
    // const newArray = newString.split('');
    const onlyVowels = newString.split('').reduce((count, char) => {
        if(vowels.includes(char.toLowerCase())){
            return count + 1;
        }
        return count;
    }, 0);
    // console.log(onlyVowels);
    return onlyVowels;
}

console.log(concatAndCountVowels(['hello', 'world'])); // Should return 3 (e, o, o)