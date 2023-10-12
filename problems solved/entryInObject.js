// function addProperties(obj, entries){
//     return {...obj, ...entries};
// }

function addProperties(obj, keyValuePairs){
    return {...obj, ...Object.fromEntries(keyValuePairs)};
    // return {...Object.fromEntries(keyValuePairs)};
}

const baseObject = { a: 1, b: 2 };
const additionalProps = { c: 3, d: 4 };
// const updatedObject = addProperties(baseObject, ['c', 3], ['d', 4]);
const updatedObject = addProperties(baseObject, Object.entries(additionalProps));
console.log(updatedObject);
// console.log(...Object.entries(additionalProps));
