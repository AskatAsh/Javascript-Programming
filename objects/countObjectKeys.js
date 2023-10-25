function countObjectKeys(obj) {
    const keys = Object.keys(obj);
    return keys.length;
}

const myObject = {
    name: 'John',
    age: 30,
    job: 'Developer',
    country: 'USA',
};

const keyCount = countObjectKeys(myObject);
console.log(keyCount);
