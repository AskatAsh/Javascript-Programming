const getProductQuantity = () => {
    const productField = document.getElementById('product');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity);
    saveToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('listContainer');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getShopCart = () => {
    const savedCart = window.localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const saveToLocalStorage = (product, quantity) => {
    const cart = getShopCart();
    cart[product] = quantity;
    console.log(cart);
    const cartString = JSON.stringify(cart);
    window.localStorage.setItem('cart', cartString);
}

const showProductFromStorage = () => {
    const ul = document.getElementById('listContainer');

    const gotProduct = getShopCart();
    console.log(gotProduct);
    for (product in gotProduct) {
        const quantity = gotProduct[product];
        console.log(product, quantity);
        const li = document.createElement('li');
        li.innerText = `${product}: ${quantity}`;
        ul.appendChild(li);
    }
}
showProductFromStorage();