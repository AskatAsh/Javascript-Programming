function wordReverse(str){
    let words = str.split(' ');
    let reversedArray = [];
    // let reversed = '';
    for(let i=words.length-1; i>=0; i--){
        // reversed += words[i]+' ';
        reversedArray.push(words[i]);
    }
    let reversed = reversedArray.join(' ');
    return reversed;
}

let myString = 'I am a web developer';
let afterReverse = wordReverse(myString);
console.log(afterReverse);