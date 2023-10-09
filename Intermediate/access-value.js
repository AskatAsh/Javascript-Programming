const data = [{id: 369, name: "Bulbul", age: 45, address: "Mollar Bari"}];

// console.log(data[0].address);

const products = {
    count: 4500,
    data: [
        {id: 1, name: "lenovo", price: 25000, stock: 43},
        {id: 2, name: "dell", price: 34000, stock: 23}
    ]
}

// console.log(products.data[1].price);

const user = {
    id: 245890,
    name: "shariful",
    address: {
        street: {
            first: "121 - dumur road",
            second: "mia bari koloni",
            third: "Stay at home"
        }
    }
}

console.log(user.address.street.second);