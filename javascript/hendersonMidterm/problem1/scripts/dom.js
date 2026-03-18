// Builds and injects all page content into the DOM
export function buildDOM() {

    // Image data array — numbered 1–4; odd = flower shop, even = nursery
    const images = [
        {
            src: 'assets/images/flowerShops/onlyKhonFloralBoutique.webp',
            alt: 'Orly Khon Floral Boutique',
            href: 'https://www.orlykhon.com/'
        },
        {
            src: 'assets/images/nurseries/mahoneysGardenCenter.jpg',
            alt: "Mahoney's Garden Center",
            href: 'https://mahoneysgarden.com/'
        },
        {
            src: 'assets/images/flowerShops/tableAndTulip.jpeg',
            alt: 'Table & Tulip',
            href: 'https://tableandtulip.com/'
        },
        {
            src: 'assets/images/nurseries/westonNurseries.jpg',
            alt: 'Weston Nurseries',
            href: 'https://www.westonnurseries.com/'
        }
    ];

    // Header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to the End of Winter';
    header.appendChild(h1);
    document.body.appendChild(header);

    // Main content — 2x2 image grid
    const main = document.createElement('main');
    const grid = document.createElement('div');
    grid.className = 'grid';

    // Loop through each image
    images.forEach((imgData) => {
        const a = document.createElement('a');
        a.href = imgData.href; // Each corresponding link
        a.target = '_blank';  // Each opens in new tab
        a.rel = 'noopener noreferrer'; // Privacy from new tab opened

        const img = document.createElement('img');
        img.src = imgData.src; // Relative paths to assets
        img.alt = imgData.alt; // Hard coded descriptions

        // Label overlay — fades in/out via CSS on hover
        const label = document.createElement('span');
        label.className = 'label';
        label.textContent = imgData.alt;

        a.appendChild(img);    // Nest images as children of link tags
        a.appendChild(label);  // Nest label as sibling of image, inside link
        grid.appendChild(a); // Nest links as children of grid divs
    });

    main.appendChild(grid);
    document.body.appendChild(main);

    // Footer
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = 'Site authored by Eric Henderson © 2026';
    footer.appendChild(p);
    document.body.appendChild(footer);
}