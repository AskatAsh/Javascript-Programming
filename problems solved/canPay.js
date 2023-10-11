function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return "Khali khali Lage..!";
    }
    else{
        let len = changeArray.length;
        let sum = 0;
        while(len--){
            sum = sum + changeArray[len];
        }
        if(sum >= totalDue){
            return true;
        }
        else{
            return false;
        }
    }
}

let myArray = [2, 1, 3, 0];
let price = 10;
let result = canPay(myArray, price);
console.log(result);