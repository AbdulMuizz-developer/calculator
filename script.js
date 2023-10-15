// Function to update the display
function updateDisplay(value) {
    document.getElementById('display').value = value;
}

// Store calculator state
let currentInput = '';
let previousInput = '';
let operator = '';

// Add event listeners to calculator buttons
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonValue = this.innerText;

        // Handle number and operator buttons
        if (!isNaN(buttonValue) || buttonValue === '.') {
            currentInput += buttonValue;
            updateDisplay(currentInput);
        } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
            if (currentInput !== '') {
                previousInput = currentInput;
                currentInput = '';
                operator = buttonValue;
            }
        } else if (buttonValue === '=') {
            if (currentInput !== '' && previousInput !== '' && operator !== '') {
                // Perform the calculation based on the operator
                let result;
                switch (operator) {
                    case '+':
                        result = parseFloat(previousInput) + parseFloat(currentInput);
                        break;
                    case '-':
                        result = parseFloat(previousInput) - parseFloat(currentInput);
                        break;
                    case '*':
                        result = parseFloat(previousInput) * parseFloat(currentInput);
                        break;
                    case '/':
                        result = parseFloat(previousInput) / parseFloat(currentInput);
                        break;
                }
                // Update the display with the result
                updateDisplay(result);
                currentInput = result.toString();
                previousInput = '';
                operator = '';
            }
        } else if (buttonValue === 'C') {
            // Clear the calculator
            currentInput = '';
            previousInput = '';
            operator = '';
            updateDisplay('0');
        } else if (buttonValue === 'CE') {
            // Clear the last input
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput);
        }
    });
});
