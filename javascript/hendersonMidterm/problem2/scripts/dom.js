// Builds and injects all page content into the DOM
export function buildDOM() {

    // Append increment value
    const increment = getIncrement();

    // Header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Currency Conversions';
    header.appendChild(h1);
    document.body.appendChild(header);

    // Three conversion tables inside a wrapper — cleared and rebuilt on increment change
    const main = document.createElement('main');
    const wrapper = document.createElement('div');
    wrapper.id = 'tables-wrapper';
    wrapper.appendChild(buildTable('Dollars ➡️ Euros',  '$ (USD)', '€ (EUR)',   0.93,  increment, 'theme-red'));
    wrapper.appendChild(buildTable('Dollars ➡️ Francs', '$ (USD)', '₣ (CHF)',   1.035, increment, 'theme-navy'));
    wrapper.appendChild(buildTable('Dollars ➡️ Pesos',  '$ (USD)', 'MX$ (MXN)', 15.63, increment, 'theme-green'));
    main.appendChild(wrapper);

    // Try a different increment button — sibling of tables-wrapper
    const btn = document.createElement('button');
    btn.id = 'try-increment-btn';
    btn.textContent = 'Try a Different Increment';
    main.appendChild(btn);

    document.body.appendChild(main);

    // Footer
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = 'Site authored by Eric Henderson © 2026';
    footer.appendChild(p);
    document.body.appendChild(footer);
}

// Prompts user for loop increment — recursively re-prompts on invalid input
export function getIncrement() {
    // Append prompted user response to variable 'raw' - will return a string
    const raw = prompt('Enter a loop increment (whole number between 1 and 100):');
    // Parse string response, return integer
    const val = parseInt(raw, 10); // Arguent 10 is a radix, instruction to process response as a base-10 number
    // Check to see if response is not a number, negative or greater than 100
    if (isNaN(val) || val < 1 || val > 100) {
        // If check passes, prompt the user again
        return getIncrement();
    }
    // If base case is satisifed, return the increment value
    return val;
}

// Builds and returns a single conversion table
export function buildTable(title, fromHeader, toHeader, rate, increment, colorClass) { // Check on lines 15-17 for arguments
    // Section and table creation
    const section = document.createElement('section');
    section.className = colorClass; // Drives per-table color theme in CSS

    // Section title
    const h2 = document.createElement('h2');
    h2.textContent = title;
    section.appendChild(h2);

    const table = document.createElement('table');

    // Table header row
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    // Assign table head labels by looping through temp array
    [fromHeader, toHeader].forEach(label => { 
        const th = document.createElement('th');
        th.textContent = label;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Table body rows — loop from 1 to 100 by increment
    const tbody = document.createElement('tbody');
    // Loop through starting and ending points, by increment
    for (let i = 1; i <= 100; i += increment) {
        const tr = document.createElement('tr');

        const tdFrom = document.createElement('td');
        tdFrom.textContent = `$${i.toFixed(2)}`; // Limit to two significant digits

        const tdTo = document.createElement('td');
        tdTo.textContent = (i * rate).toFixed(2);

        tr.appendChild(tdFrom);
        tr.appendChild(tdTo);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    section.appendChild(table);
    // Return section to be appended in buildDom()
    return section;
}
