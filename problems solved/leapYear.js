function leapYear(year) {
    if((year%4===0 && year%100!==0) || (year%400===0)){
        return year+" is a Leap Year!!!";
    }
    else{
        return year+" is Not a Leap Year!!!";
    }
}
var year = 2024;
result = leapYear(year);
console.log(result);