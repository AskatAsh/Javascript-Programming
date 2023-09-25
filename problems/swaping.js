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