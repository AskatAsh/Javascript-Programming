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
