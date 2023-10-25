function mergeObjects(obj1, obj2) {
    const newObject = {};
    return Object.assign(newObject, obj1, obj2);
}

const object1 = {
    name: 'Alice',
    age: 25,
};

const object2 = {
    city: 'New York',
    job: 'Engineer',
};

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);