const getProductQuantity = () => {
    const productField = document.getElementById('product');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('listContainer');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}