// Conversion function
const convertEuros = () => {
    // Select DOM objects and assign to variables
    const inputField = document.getElementById('dollars');
    const outputField = document.querySelector('.euro_output');

    // Assign user provided value
    let inputValue = inputField.value;

    // Assign current exchange rate to variable
    const exchangeRate = 0.84;

    // Assign value of converted value to output value
    const outputValue = (inputValue * exchangeRate).toFixed(2);

    // Render converted value to the output field
    outputField.textContent = outputValue;

    // Reveal the output container
    const outputContainer = document.querySelector('.outputContainer');
    outputContainer.style.opacity = '1';
    outputContainer.style.visibility = 'visible';
    outputContainer.style.transform = 'translateY(0)';
}
