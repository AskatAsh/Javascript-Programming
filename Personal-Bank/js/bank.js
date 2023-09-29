const deposit = document.getElementById('deposit');
// console.log(deposit);

const withdraw = document.getElementById('withdraw');
// console.log(withdraw);

const balance = document.getElementById('balance');
// console.log(balance);

const depositButton = document.getElementById('depositButton');
// console.log(depositButton);

const withdrawButton = document.getElementById('withdrawButton');
// console.log(depositButton);

depositButton.addEventListener('click', function () {
    const depositInput = document.getElementById('depositInput');
    // console.log(depositInput.value);
    const inputValue = parseInt(depositInput.value);
    // console.log(typeof(inputValue));

    const depositValue = parseInt(deposit.innerText);
    // const toInt = parseInt(depositvalue);
    // console.log(typeof(depositvalue));

    deposit.innerText = depositValue + inputValue;

    const newBalance = parseInt(balance.innerText);
    // console.log(newBalance);
    balance.innerText = newBalance + inputValue;

});

withdrawButton.addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawInput');
    // console.log(depositInput.value);
    const inputValue = parseInt(withdrawInput.value);
    // console.log(typeof(inputValue));

    const withdrawValue = parseInt(withdraw.innerText);
    // const toInt = parseInt(depositvalue);
    // console.log(typeof(depositvalue));

    withdraw.innerText = withdrawValue + inputValue;

    const newBalance = parseInt(balance.innerText);
    // console.log(newBalance);
    balance.innerText = newBalance - inputValue;

});