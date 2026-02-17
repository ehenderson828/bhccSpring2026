// Modular JS setup:

// Detect current page and load appropriate page-specific script
const currentPath = window.location.pathname;
// Create substring from current URL to cut out '.html'
const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1).replace('.html', '') || 'index';

// Map of page names and their corresponding scripts
const pageModules = {
    'index': 'scripts/index.js',
    'construction': '../scripts/construction.js',
    'euros': '../scripts/euros.js',
    'miles': '../scripts/miles.js'
};

// Load matching module with the page substring
if (pageModules[pageName]) {
    // Create new script tags
    const script = document.createElement('script');
    // Assign new src element for corresponding JS file
    script.src = pageModules[pageName];
    // Assign type attribute
    script.type = 'text/javascript';
    // Append these new tags to selected page
    document.head.appendChild(script);
}