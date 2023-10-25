function cloneObject(obj) {
    let copyObject = {};
    const keys = Object.keys(obj);
    for(let key of keys){
        copyObject[key] = obj[key];
    }
    return copyObject;
}

const originalObject = {
    name: 'John',
    age: 30,
    city: 'New York',
};

const clonedObject = cloneObject(originalObject);
console.log(clonedObject);