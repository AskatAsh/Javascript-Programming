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
// console.log(pair);

// delete laptop.isSecondHand;
// console.log(laptop);

const {isSecondHand, ...others} = laptop;
// console.log(others);

// freezed object cannot be modified or removed
Object.freeze(laptop);
laptop.source = "Hello World";
delete laptop.price;
console.log(laptop);