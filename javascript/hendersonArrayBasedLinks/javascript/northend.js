// Array holding each North End restaurant name and its URL
const restaurants = [
    { name: "Mamma Maria",    url: "https://www.mammamaria.com" },
    { name: "Giacomo's",      url: "https://www.giacomosboston.com" },
    { name: "Neptune Oyster", url: "https://www.neptuneoyster.com" },
    { name: "Carmelina's",    url: "https://www.carmelinasboston.com" },
    { name: "Bricco",         url: "https://www.bricco.com" },
    { name: "← Boston",       url: "index.html", internal: true }
];

// Grab the navbar container
const navbar = document.getElementById("navbar");

// Build one button-styled link per entry and insert into the navbar
restaurants.forEach((restaurant) => {
    const link       = document.createElement("a");
    link.href        = restaurant.url;
    link.textContent = restaurant.name;
    link.className   = "btn-link";
    // Check to see if link is internal
    if (!restaurant.internal) {
        link.target = "_blank";
        link.rel    = "noopener noreferrer";
    }
    // Append links to navbar
    navbar.appendChild(link);
});