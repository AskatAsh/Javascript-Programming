function titleCase(str) {
    const words = str.split(' ');

    let result = '';
    for(let word of words){
        const lowerCase = word.slice(1).toLowerCase();
        result += word[0].toUpperCase() + lowerCase + ' ';
    }
    // console.log(result);
    return result.trim();
}

console.log(titleCase("i love coding"));

