const laptop = {
    name: "HP Elitebook",
    color: "silver",
    price: 35000,
    isSecondHand: true
}
// console.log(laptop);
// console.log(Object.keys(laptop));
const keys = Object.keys(laptop);
// console.log(keys);

const values = Object.values(laptop);
// console.log(values);

const pair = Object.entries(laptop);
console.log(pair);