// Attaches event listeners to DOM elements
import { getName, toProperCase } from './dom.js'; // Import getName and toProperCase functions

export function attachEvents() {
    const btn = document.getElementById('try-again-btn');
    const output = document.getElementById('output');

    // On click: prompt for a new name and update the output element
    btn.addEventListener('click', () => {
        // Repromt user and append formatted text to output
        output.textContent = toProperCase(getName());

        // Re-trigger the fadeUp animation
        output.style.animation = 'none';
        output.offsetHeight; // Force browser reflow
        output.style.animation = '';
    });
}
