const products = [
    {name: 'shirt', price: 500, quantity: 2},
    {name: 'pant', price: 700, quantity: 3},
    {name: 'belt', price: 300, quantity: 1},
    {name: 'shoe', price: 900, quantity: 1}
]

function costOfProducts(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        let product = products[i];
        let totalQuantity = product.price * product.quantity;
        sum = sum + totalQuantity;
        console.log(product.name, product.price, product.quantity, totalQuantity);
    }
    console.log("total price of products: ",sum);
    
}

costOfProducts(products);