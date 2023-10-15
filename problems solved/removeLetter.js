const removeLetterFromString = (str) => {
    // const newString = str.slice(0, -1);
    const newString = str.substring(0, str.length-1);
    const toNum = parseFloat(newString);
    return toNum;
}

const theString = "22.5K";
const resultString = removeLetterFromString(theString);
console.log(resultString);