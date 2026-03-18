// Builds and injects all page content into the DOM
export function buildDOM() {

    // Prompt for name, then format it
    const formatted = toProperCase(getName());

    // Header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = "Eric's Name Formatter";
    header.appendChild(h1);
    document.body.appendChild(header);

    // Main — output card centered on page
    const main = document.createElement('main');
    const card = document.createElement('div');
    card.className = 'output-card';

    const output = document.createElement('div');
    output.id = 'output'; // Target for getElementById below
    card.appendChild(output);
    main.appendChild(card);

    // Try again button — sibling of card, both children of main
    const btn = document.createElement('button');
    btn.id = 'try-again-btn';
    btn.textContent = 'Try Another Name';
    main.appendChild(btn);
    document.body.appendChild(main);

    // Inject formatted name via getElementById
    document.getElementById('output').textContent = formatted;

    // Footer
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = 'Site authored by Eric Henderson © 2026';
    footer.appendChild(p);
    document.body.appendChild(footer);
}

// Prompts for full name — recursively re-prompts if fewer than 2 words entered
export function getName() {
    // Prompt the user
    const raw = prompt('Please enter your first and last name:');
    // Assign outcome of ternary to parts variable
    const parts = raw ? raw.trim().split(/\s+/) : []; // If raw is truthy, trim the whitespace and init an array with both names. if falsy, return an empty array
    // If array has less than two members, prompt again
    if (parts.length < 2) {
        return getName();
    }
    // Base case satisfaction - trim remaining whitespace and return valid value
    return raw.trim();
}

// Converts each word to proper case (First letter upper, rest lower)
export function toProperCase(name) {
    return name
        // Split words apart, create array[firstName, lastName]
        .split(/\s+/)
        // Map each member of array with first character capitalized and remaining characters lower case
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        // Join those two words together with a space in between
        .join(' ');
}
