// const arrayToObject = (arr) => {
//     let object = {};
//     for(const str of arr){
//         object[str] = str.length;
//     }
//     return object;
// }

const array = ['apple', 'banana', 'cherry'];

const object = {};
const arrayToObject = array.forEach(string => {
    object[string] = string.length;
});
console.log(object);