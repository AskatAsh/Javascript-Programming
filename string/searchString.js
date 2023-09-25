function searchString(str, word){
    let doesExist = str.includes(word);
    return doesExist;
}

let myString = "Jao Pakhi bolo tare She jeno vole na moree shukhe theko valo theko Mone rekho ei Amare!!!";
let find = "More";
let searchResult = searchString(myString, find);
console.log(searchResult);