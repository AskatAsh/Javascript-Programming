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
