function searchString(str, word){
    let lowerString = str.toLowerCase();
    let lowerWord = word.toLowerCase();
    let doesExist = lowerString.includes(lowerWord);
    return doesExist;
}

let myString = "Jao Pakhi bolo tare She jeno vole na moree shukhe theko valo theko Mone rekho ei Amare!!!";
let find = "pakhi";
let searchResult = searchString(myString, find);
console.log(searchResult);