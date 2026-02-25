// Numbers array generation
const numbers = Array.from({ length: 75 }, (_, i) => i + 1);

// DOM element selection
const button = document.querySelector('.renderButton');
const output = document.querySelector('.outputContainer');
const mainSection = document.querySelector('.mainSubContainer');

// Event listener addition and callback to build and render table
button.addEventListener('click', () => {
    // Variable declaration to create html table
    let htmlTable = `
        <table>
            <caption>
                Iteration Control Table: Values 1 - 75
            </caption>
            <thead>
                <tr>
                    <th>n</th>
                    <th>n²</th>
                    <th>n³</th>
                    <th>n × 3.33</th>
                </tr>
            </thead>
    `;

    // Start the tbody tag
    htmlTable += `<tbody>`;

    // Loop to calculate row values
    numbers.forEach((number) => {
        htmlTable += `
                <tr>
                    <td>${number}</td>
                    <td>${number ** 2}</td>
                    <td>${number ** 3}</td>
                    <td>${(number * 3.33).toFixed(1)}</td>
                </tr>
        `;
    });

    // Complete the tbody tag
    htmlTable += `</tbody>`;

    // Complete the table tag
    htmlTable += `</table>`;

    // Add Go Back button
    htmlTable += `<button class="goBackButton" type="button">Go Back</button>`;

    // Fade out main section, then swap to output
    mainSection.style.opacity = '0';
    setTimeout(() => {
        mainSection.classList.add('hidden');
        mainSection.style.opacity = '';

        output.innerHTML = htmlTable;
        output.style.opacity = '0';
        output.classList.remove('hidden');

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                output.style.opacity = '1';
            });
        });

        // Go Back button selection & event listener
        const goBackButton = output.querySelector('.goBackButton');
        goBackButton.addEventListener('click', () => {
            output.style.opacity = '0';
            setTimeout(() => {
                output.classList.add('hidden');
                output.style.opacity = '';

                mainSection.style.opacity = '0';
                mainSection.classList.remove('hidden');

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        mainSection.style.opacity = '1';
                    });
                });
            }, 1000);
        });
    }, 1000);
});