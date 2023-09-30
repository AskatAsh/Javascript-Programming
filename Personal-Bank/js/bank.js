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

// function to deposit
depositButton.addEventListener('click', function () {
    const depositInput = document.getElementById('depositInput');
    // console.log(depositInput.value);
    const inputValue = parseFloat(depositInput.value);
    // console.log(typeof(inputValue));

    const depositValue = parseFloat(deposit.innerText);
    // const toInt = parseInt(depositvalue);
    // console.log(typeof(depositvalue));
    // console.log(String(3).padStart(2, '0'));

    if (isNaN(inputValue)) {
        alert('Please enter the amount to deposit!');
    }
    else {
        if(deposit.innerText <= 8){
            // console.log('less is more');
            const total = depositValue + inputValue;
            // deposit.innerText ='0'+ total;
            deposit.innerText = String(total).padStart(2, '0');
        }
        else{
            deposit.innerText = depositValue + inputValue;
        }

        const newBalance = parseFloat(balance.innerText);
        // console.log(newBalance);
        balance.innerText = newBalance + inputValue;
    }
    

});

// function to withdraw
withdrawButton.addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawInput');
    // console.log(depositInput.value);
    const inputValue = parseFloat(withdrawInput.value);
    // console.log(typeof(inputValue));

    const withdrawValue = parseFloat(withdraw.innerText);
    // const toInt = parseInt(depositvalue);
    // console.log(typeof(depositvalue));

    // withdraw.innerText = withdrawValue + inputValue;

    const newBalance = parseFloat(balance.innerText);
    // console.log(newBalance);
    // balance.innerText = newBalance - inputValue;

    if (newBalance <= 0 || newBalance < inputValue) {
        alert('Sorry! You don\'t have enough balance to withdraw');
    }
    else {
        withdraw.innerText = withdrawValue + inputValue;
        balance.innerText = newBalance - inputValue;
    }

});