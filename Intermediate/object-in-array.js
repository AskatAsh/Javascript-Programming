const products = [
    {id: 1, name: "hp", price: 35000},
    {id: 2, name: "dell", price: 50500},
    {id: 3, name: "lenovo", price: 75000},
    {id: 4, name: "apple", price: 134000}
];

const productsName = products.map(product => product.name);
// console.log(productsName);
const productsPrice = products.map(product => product.price);
// console.log(productsPrice);

products.forEach(product => console.log(product.id));

const pricyProduct = products.filter(product => product.price > 60000);
// console.log(pricyProduct);

const findProduct = products.find(product => product.id === 3);
console.log(findProduct);

const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalPrice);