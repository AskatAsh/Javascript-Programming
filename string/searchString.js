function searchString(str, word) {
    let lowerString = str.toLowerCase();
    let lowerWord = word.toLowerCase();
    let doesExist = lowerString.includes(lowerWord);
    let location = lowerString.indexOf(lowerWord);
    // return doesExist;
    if (doesExist) {
        let existsAt = "Yess..! Found " + word + " at index no: " + location;
        return existsAt;
    }
    else{
        return "Sorry..! couldn't find the word";
    }
}

let myString = "Jao Pakhi bolo tare She jeno vole na moree shukhe theko valo theko Mone rekho ei Amare!!!";
let find = "pakhi";
let searchResult = searchString(myString, find);
console.log(searchResult);