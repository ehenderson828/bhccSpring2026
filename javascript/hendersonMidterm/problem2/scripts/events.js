// Attaches event listeners to DOM elements
import { getIncrement, buildTable } from './dom.js';

export function attachEvents() {
    // Button and wrapper creation
    const btn = document.getElementById('try-increment-btn');
    const wrapper = document.getElementById('tables-wrapper');

    // On click: prompt for a new increment and rebuild all three tables
    btn.addEventListener('click', () => {
        const increment = getIncrement();

        // Remove all existing table sections from the wrapper
        wrapper.replaceChildren();

        // Rebuild tables with new increment
        wrapper.appendChild(buildTable('Dollars ➡️ Euros',  '$ (USD)', '€ (EUR)',   0.93,  increment, 'theme-red'));
        wrapper.appendChild(buildTable('Dollars ➡️ Francs', '$ (USD)', '₣ (CHF)',   1.035, increment, 'theme-navy'));
        wrapper.appendChild(buildTable('Dollars ➡️ Pesos',  '$ (USD)', 'MX$ (MXN)', 15.63, increment, 'theme-green'));
    });
}
