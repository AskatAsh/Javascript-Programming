function inchToFeet(inch) {
    var feet;
    feet = inch / 12;
    return feet.toFixed(5);
}
var inchValue = 1;
result = parseFloat(inchToFeet(inchValue));
console.log(result);