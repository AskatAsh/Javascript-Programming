const key = prompt('Write the key you want to set');
const value = prompt('Write the value you want to set');

// set key and value to local storage
localStorage.setItem(key, value);

// set key and value from local storage
// localStorage.getItem(key)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);