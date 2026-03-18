// Attaches event listeners to DOM elements
import { getInputs, calculate, renderOutput } from './dom.js';

export function attachEvents() {
    // Select try another journey button
    const btn = document.getElementById('try-journey-btn');

    // On click: prompt for new inputs, recalculate, and re-render output
    btn.addEventListener('click', () => {
        // Deconstruct prompted inputs once prompted again
        const { distance, speed } = getInputs();
        // Deconstruct time and tolls after calculating
        const { hours, minutes, tolls } = calculate(distance, speed);
        // Render values on DOM
        renderOutput(document.getElementById('output'), distance, speed, hours, minutes, tolls);
    });
}
