const numbers = [2, 4, 6, 8, 10, 12];
// for(let i=0;i<numbers.length;i++){}
for(const num of numbers){
    // console.log(num);
}

const myString = "Hello Bangladesh";
for(const char of myString){
    // console.log(char);
}
// for of cannnot be used in object

const laptop = {
    name: "HP Elitebook",
    color: "silver",
    price: 35000,
    isSecondHand: true
}

for(const key in laptop){
    const value = laptop[key];
    // console.log(key, value);
}

const keys = Object.keys(laptop);

for(const key of keys){
    const value = laptop[key];
    console.log(key, value);
}