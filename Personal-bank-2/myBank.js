// get deposit input value
function getDeposit(inputId) {
    const deposit = document.getElementById(inputId);
    const depositValue = parseFloat(deposit.value);
    return depositValue

}