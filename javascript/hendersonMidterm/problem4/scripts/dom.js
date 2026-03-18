// Builds and injects all page content into the DOM
export function buildDOM() {

    // Inject Google Fonts — Roboto
    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap';
    document.head.appendChild(font);

    // Get inputs then calculate results
    const { distance, speed } = getInputs();
    const { hours, minutes, tolls } = calculate(distance, speed);

    // Header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = "Eric's Trip Planner";
    header.appendChild(h1);
    document.body.appendChild(header);

    // Main — result card with single output element
    const main = document.createElement('main');
    const card = document.createElement('div');
    card.className = 'result-card';

    // Output div creation and appending to card -> main
    const output = document.createElement('div');
    output.id = 'output';
    card.appendChild(output);
    main.appendChild(card);

    // Try another journey button — sibling of card
    const btn = document.createElement('button');
    btn.id = 'try-journey-btn';
    btn.textContent = 'Try Another Journey';
    main.appendChild(btn);

    // Append main -> body
    document.body.appendChild(main);

    // Render structured output into #output
    renderOutput(document.getElementById('output'), distance, speed, hours, minutes, tolls);

    // Footer
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = 'Site authored by Eric Henderson © 2026';
    footer.appendChild(p);
    document.body.appendChild(footer);
}

// Prompts for both inputs — each re-prompts recursively if invalid
export function getInputs() {
    return { distance: getDistance(), speed: getSpeed() };
}

// Prompts for distance — re-prompts if not a positive number
function getDistance() {
    // Prompt user for miles traveled
    const val = parseFloat(prompt('Enter total distance to travel (miles):')); // parseFloat() for string conversion
    // Check is input is not a number, or is negative
    if (isNaN(val) || val <= 0) {
        // If not valid, recursive call
        return getDistance();
    }
    // Base case satisfied - return miles
    return val;
}

// Prompts for speed — re-prompts if not a positive number
function getSpeed() {
    // Prompt user for speed
    const val = parseFloat(prompt('Enter average speed (mph):'));
    // Check for inputs that are not numbers, negative numbers
    if (isNaN(val) || val <= 0) {
        // Recursive call, not valid
        return getSpeed();
    }
    // Base case satisfied, return speed
    return val;
}

// Calculates travel time and toll cost
export function calculate(distance, speed) {
    // Time calculation
    const totalHours = distance / speed;
    // Hours calculation
    const hours = Math.floor(totalHours); // Round down to largest int <= totalHours
    // Minutes calculation
    const minutes = Math.round((totalHours % 1) * 60); // Round remainder from totalHours by 60 to nearest int
    // Tolls calculation
    const tolls = (Math.floor(distance / 50) * 2.50).toFixed(2); // Two sig figs
    // Return an object of calculated totals
    return { hours, minutes, tolls };
}

// Builds and renders all output into the provided element - gets passed to events.js
export function renderOutput(outputEl, distance, speed, hours, minutes, tolls) {
    outputEl.replaceChildren();
    outputEl.appendChild(buildTimeline(distance, speed, hours, minutes, tolls));
    outputEl.appendChild(buildTollStrip(distance));
}

// Builds the route timeline — vertical line with stats grid
function buildTimeline(distance, speed, hours, minutes, tolls) {
    const container = document.createElement('div');
    container.className = 'route-timeline';

    // Left column — vertical route line with endpoint dots
    const routeLine = document.createElement('div');
    routeLine.className = 'route-line';

    const dotA = document.createElement('div');
    dotA.className = 'route-dot';

    const lineBar = document.createElement('div');
    lineBar.className = 'route-bar';

    const dotB = document.createElement('div');
    dotB.className = 'route-dot';

    // Append these child elements to routeLine
    routeLine.appendChild(dotA);
    routeLine.appendChild(lineBar);
    routeLine.appendChild(dotB);

    // Right column — 2x2 stats grid
    const statsGrid = document.createElement('div');
    statsGrid.className = 'route-stats';

    // Pass function arguments into temp array of stat objects
    [
        { label: 'Distance',     value: `${distance} miles` },
        { label: 'Average Speed',    value: `${speed} mph` },
        { label: 'Travel Time',  value: `${hours} hours & ${minutes} minutes` },
        { label: 'Tolls',        value: `$${tolls}` }
    ]
    // Loop over each object
    .forEach(({ label, value }) => {
        // Create required elements
        const stat = document.createElement('div');
        stat.className = 'stat';

        const lbl = document.createElement('div');
        lbl.className = 'stat-label';
        lbl.textContent = label;

        const val = document.createElement('div');
        val.className = 'stat-value';
        val.textContent = value;

        stat.appendChild(lbl);
        stat.appendChild(val);
        statsGrid.appendChild(stat);
    });
    // Append routeLine and statsGrid to container element
    container.appendChild(routeLine);
    container.appendChild(statsGrid);
    // Return container element
    return container;
}

// Builds the toll marker strip — horizontal bar with charge dots
function buildTollStrip(distance) {
    // Calculate how many tolls for entire trip
    const tollCount = Math.floor(distance / 50);
    // Feature container creation
    const container = document.createElement('div');
    container.className = 'toll-strip';

    // Label creation
    const label = document.createElement('div');
    label.className = 'toll-strip-label';
    // Nested terinaries -> Outer: decides whole tolls message && Inner: handles single vs. plural tolls
    label.textContent = tollCount === 0
        ? 'No toll stops'
        : `${tollCount} toll stop${tollCount > 1 ? 's' : ''} · $2.50 each`;
    container.appendChild(label);

    // Track creation
    const track = document.createElement('div');
    track.className = 'toll-track';

    // Start endpoint creation
    const startDot = document.createElement('div');
    startDot.className = 'toll-dot endpoint';
    startDot.style.left = '0%';
    track.appendChild(startDot);

    // Charge dots at every 50 miles -> adds a dot for each toll
    for (let miles = 50; miles <= distance; miles += 50) {
        const dot = document.createElement('div');
        dot.className = 'toll-dot charge';
        dot.style.left = `${(miles / distance) * 100}%`;
        track.appendChild(dot);
    }

    // End endpoint creation
    const endDot = document.createElement('div');
    endDot.className = 'toll-dot endpoint';
    endDot.style.left = '100%';
    track.appendChild(endDot);

    // Append this toll track to the container
    container.appendChild(track);

    // Mile markers below track
    const markers = document.createElement('div');
    markers.className = 'toll-markers';

    const startMarker = document.createElement('span');
    startMarker.textContent = '0';

    const endMarker = document.createElement('span');
    endMarker.textContent = `${distance} mi`;

    markers.appendChild(startMarker);
    markers.appendChild(endMarker);
    container.appendChild(markers);

    return container;
}