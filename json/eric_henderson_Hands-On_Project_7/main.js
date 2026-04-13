// Do not load content until DOM loads
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
});

// Global variable decalaration to track API category
let currentCategory = "webdev";

/* Handle button clicks */
function setCategory(category, button) {
    currentCategory = category;

    document.querySelectorAll(".categories button").forEach((btn) => {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    loadContent(); 
}

/* Async function to fetch JSON goes here */
async function getJson(url) {
    // Print url being passed into this function (debugging)
    console.log('URL passed:', url);

    try {
        // Fetch data from url, handle promise
        const response = await fetch(url);

        // Check to see if response is bad
        if (!response.ok) {
            // Throw to catch block is response is bad
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // If response is good, await promise and parse JSON response
        const data = await response.json();

        // Log parsed response to the console
        console.log('Parsed data:', data);

        // Return parsed data
        return data;
    }
    catch (err) {
        // Log error type and message to the console
        console.error('Type:', err.name);
        console.error('Message:', err.message);
    }
}

/* Load articles from Dev.to */
async function loadContent() {
    console.log("Loading category:", currentCategory);

    const container = document.getElementById("results");
    container.innerHTML = "<p>Loading...</p>";

    let tag = currentCategory;
    if (tag === 'node') tag = 'nodejs';

    const data = await getJson(`https://dev.to/api/articles?tag=${tag}&per_page=12`);

    // Defensive guard if request is bad:
    if (!data) {
        container.innerHTML = "<p style='color: red; font-weight: bold; font-size: 2em;'>Failed to load content</p>";
        return;
    }

    container.innerHTML = "";

    data.forEach((article) => {
        const div = document.createElement("div");
        div.className = "card";

        // Use cover_image if available, else a placeholder
        const imgSrc = article.cover_image || "https://placehold.co/400x180?text=No+Image"; // placehold.co substitution

        div.innerHTML = `
            <img src="${imgSrc}" alt="${article.title}">
            <div class="card-content">
                <h3>${article.title}</h3>
                <p>By ${article.user.name}</p>
                <a href="${article.url}" target="_blank">Read article →</a>
            </div>
        `;

        container.appendChild(div);
    });
}