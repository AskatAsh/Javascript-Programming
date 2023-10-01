const key = prompt('Write the key you want to set');
const value = prompt('Write the value you want to set');

// set key and value to local storage
localStorage.setItem(key, value);

// set key and value from local storage
// localStorage.getItem(key)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if(key == null || key == 'height'){
    localStorage.removeItem(key);
}

if(key == 0){
    localStorage.clear();
}
for(let i = 0; i<localStorage.length; i++){
    console.log(`key at index ${i} is ${localStorage.key(i)}`);
}