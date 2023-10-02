// Function to update the output based on the stored value
function updateOutput() {
    const key = 'number';
    const storedValue = localStorage.getItem(key);
    const output = document.getElementById('output');
    if (storedValue) {
        output.innerText = storedValue;
    }
}

// Event listener for the button click
document.getElementById('push').addEventListener('click', function() {
    const input = document.getElementById('input');
    const inputValue = input.value;

    const key = 'number';
    localStorage.setItem(key, inputValue);

    // Update the output when the button is clicked
    updateOutput();
});

// Call the updateOutput function when the page loads
window.addEventListener('load', function() {
    updateOutput();
});
