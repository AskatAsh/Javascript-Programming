function inchToFeet(inch) {
    var feet;
    feet = inch / 12;
    return feet.toFixed(5);
}
var inchValue = 1;
console.log(inchToFeet(inchValue));