function stringReverese(str){
    let reversed = '';
    for(let i=str.length-1 ; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}

let afterReverse = stringReverese('Happy Coding');
console.log(afterReverse);