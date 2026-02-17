// Conversion function
const convertMiles = () => {
    // Select DOM objects and assign to variables
    const inputField = document.getElementById('miles');
    const outputField = document.querySelector('.kilometer_output');

    // Assign user provided value
    let inputValue = inputField.value;

    // Assign conversion rate to variable
    const conversionRate = 1.60934;

    // Assign value of converted value to output value
    const outputValue = (inputValue * conversionRate).toFixed(1);

    // Render converted value to the output field
    outputField.textContent = outputValue;

    // Reveal the output container
    const outputContainer = document.querySelector('.outputContainer');
    outputContainer.style.opacity = '1';
    outputContainer.style.visibility = 'visible';
    outputContainer.style.transform = 'translateY(0)';
}
