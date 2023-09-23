const myObj = {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
        "CD",
        "8T",
        "LP"
    ],
    "gold": true
}

let obj_to_array = Object.keys(myObj);
console.log(obj_to_array);

for(let i=0;i<obj_to_array.length;i++){
    // console.log(myObj[obj_to_array[i]]);
    if(typeof(myObj[obj_to_array[i]]) === 'number'){
        var found_number = myObj[obj_to_array[i]];
    }
    else if( Array.isArray(myObj[obj_to_array[i]]) ){
        var found_array = myObj[obj_to_array[i]];
        for(let j=0;j<found_array.length;j++){
            if(found_array[j] === 'LP'){
                var found_format = found_array[j];
                break;
                // console.log(found_format);
            }
            else{
                var found_format = "Not Found";
            }
        }
    }
}
// console.log(found_number);
console.log(found_array);
console.log(found_format);
// console.log(found_array.length);
// console.log(Array.isArray(myObj.gold));