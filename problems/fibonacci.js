function fibonacci(num) {
    let result = [];
    let first = 0;
    let second = 1;
    for (let i = 1; i < num; i++) {
        if (i <= 1) {
            first = 0;
            second = 1;
            result.push(first);
            result.push(second);
        }
        else {
            let fibo = first + second;
            result.push(fibo);
            first = second;
            second = fibo;
        }
    }
    return result;
}

console.log(fibonacci(6));