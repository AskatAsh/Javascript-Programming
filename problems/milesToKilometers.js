function milesToKilometers(miles) {
    var kilometers;
    kilometers = miles * 1.6;
    return kilometers.toFixed(5);
}
var milesValue = 20;
result = parseFloat(milesToKilometers(milesValue));
console.log(result);