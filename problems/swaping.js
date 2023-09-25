function swaping(num1, num2){
    let beforeSwap = "before swap: ";
    console.log(beforeSwap, num1, num2);

    let temp = num1;
    num1 = num2;
    num2 = temp;

    let afterSwap = "after swap: ";
    console.log(afterSwap, num1, num2);
}

swaping(23, 45);

function swapingAgain(first, second){
    let beforeSwap = "before swap: ";
    console.log(beforeSwap, first, second);

    [first, second] = [second, first];
    
    let afterSwap = "after swap: ";
    console.log(afterSwap, first, second);
}

swapingAgain(89, 46);