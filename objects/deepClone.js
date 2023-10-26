function deepClone(obj) {
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }
    
    if(Array.isArray(obj)){
        const clone = [];
        for(const item of obj){
            clone.push(deepClone(item));
        }
        return clone;
    }

    if(typeof obj === 'object'){
        const clone = {};
        for(const key in obj){
            if(obj.hasOwnProperty(key)){
                clone[key] = deepClone(obj[key]);
            }
        }
        return clone;
    }
    
}

const originalObject = [{
    name: 'John',
    age: 30,
    hobbies: ['Reading', 'Gaming'],
    address: {
        street: '123 Main St',
        city: 'Exampleville',
    },
}];

const clonedObject = deepClone(originalObject);
console.log(clonedObject)
