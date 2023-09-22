var shoppingCart = {
    sunglasses: 2,
    tshirts: 3,
    shoes: 2,
    belts: 1,
    facewash: 1,
    watch: 1
}
// console.log(shoppingCart);
var keys = Object.keys(shoppingCart);
console.log(keys);

var values = Object.values(shoppingCart);
console.log(values);

for(var i=0; i<keys.length; i++){
    var propertyName = keys[i];
    // console.log(propertyName);
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}