// Array holding each restaurant name and its URL
const restaurants = [
    { name: "Legal Sea Foods",    url: "https://www.legalseafoods.com" },
    { name: "The Capital Grille", url: "https://www.thecapitalgrille.com" },
    { name: "Tasty Burger",       url: "https://www.tastyburger.com" },
    { name: "Myers + Chang",      url: "https://www.myersandchang.com" },
    { name: "Row 34",             url: "https://www.row34.com" },
    { name: "→ North End",        url: "northend.html", internal: true }
];

// Grab the navbar container
const navbar = document.getElementById("navbar");

// Build one text link per entry and insert into the navbar
restaurants.forEach((restaurant) => {
    const link       = document.createElement("a");
    link.href        = restaurant.url;
    link.textContent = restaurant.name;
    link.className   = "text-link";
    // Check to see if link is internal
    if (!restaurant.internal) {
        link.target = "_blank";
        link.rel    = "noopener noreferrer";
    }
    // Append 
    navbar.appendChild(link);
});