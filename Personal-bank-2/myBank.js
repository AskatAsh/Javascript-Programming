// get input value
function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    return inputValue

}
// get output value
function getOutput(outputId) {
    const output = document.getElementById(outputId);
    const outputValue = parseFloat(output.innerText);
    return outputValue;
}
// calculate total deposit
function totalDeposit() {
    const depositIn = getInput('depositInput');
    const depositOut = getOutput('deposit');
    const depositTotal = depositIn + depositOut;
    return depositTotal;
}
// calculate total withdraw
function totalWithdraw() {
    const withdrawIn = getInput('withdrawInput');
    const withdrawOut = getOutput('withdraw');
    const withdrawTotal = withdrawIn + withdrawOut;
    return withdrawTotal;
}
// calculate balance after deposit of withdraw
function totalBalance(dOrw){
    const balance = document.getElementById('balance');
    const balanceOutput = parseFloat(balance.innerText);
    if(dOrw === 'deposit'){
        const totalBalance = balanceOutput + getInput('depositInput');
        balance.innerText = totalBalance;
    }
    else{
        const totalBalance = balanceOutput - getInput('withdrawInput');
        balance.innerText = totalBalance;
    }
}

// click event for deposit
document.getElementById('depositButton').addEventListener('click', function () {
    const depositIn = getInput('depositInput');
    if (isNaN(depositIn)) {
        alert("Please, write the deposit amount!");
    }
    else {
        const deposit = document.getElementById('deposit');
        deposit.innerText = totalDeposit();

        // update total balance
        totalBalance('deposit');
    }
});

