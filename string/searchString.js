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

function startEnd(myString, theStartWord, theEndWord){
    let strLower = myString.toLowerCase();
    let startWordLower = theStartWord.toLowerCase();
    let endWordLower = theEndWord.toLowerCase();
    let stardedWith = strLower.startsWith(startWordLower);
    let endedWith = strLower.endsWith(endWordLower);
    let result1 = "started with " +theStartWord+ " = "+ stardedWith;
    let result2 = "ended with " +theEndWord+ " = "+ endedWith;
    return result1 +"\n"+ result2;
}

let startWord = 'jao';
let endword = 'amare';
console.log(startEnd(myString, startWord, endword));