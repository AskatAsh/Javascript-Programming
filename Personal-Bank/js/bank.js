const deposit = document.getElementById('deposit');
// console.log(deposit);

const withdraw = document.getElementById('withdraw');
// console.log(withdraw);

const balance = document.getElementById('balance');
// console.log(balance);

const depositButton = document.getElementById('depositButton');
// console.log(depositButton);

depositButton.addEventListener('click', function () {
    const depositInput = document.getElementById('depositInput');
    // console.log(depositInput.value);
    const inputValue = parseInt(depositInput.value);
    // console.log(typeof(inputValue));

    const depositvalue = parseInt(deposit.innerText);
    // const toInt = parseInt(depositvalue);
    // console.log(typeof(depositvalue));

    deposit.innerText = depositvalue + inputValue;

    const newBalance = parseInt(balance.innerText);
    // console.log(newBalance);
    balance.innerText = newBalance + inputValue;

});