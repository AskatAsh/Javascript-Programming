function stringToArray(str){
    const arr = [];
    for(let i=0;i<str.length;i++){
        // arr.unshift(str[i]);
        arr.push(str[i]);
    }
    
    return arr;
}

let myStr = "I am Askat";
let myArray = stringToArray(myStr);
console.log(myArray);