function titleCase(str) {
    const words = str.split(' ');

    let result = '';
    for(let word of words){
        const lowerCase = word.slice(1, word.length).toLowerCase();
        result = result + word[0].toUpperCase() + lowerCase + ' ';
    }
    // console.log(result);
    return result;
}

console.log(titleCase("i love coding"));

