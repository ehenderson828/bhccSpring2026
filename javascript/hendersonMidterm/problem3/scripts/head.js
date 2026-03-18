// Dynamically injects all <head> elements
export function loadHead() {
    // Character encoding
    const charset = document.createElement('meta');
    charset.setAttribute('charset', 'UTF-8');
    document.head.appendChild(charset);

    // Responsive viewport
    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(viewport);

    // Page title
    const title = document.createElement('title');
    title.textContent = 'Eric Henderson - Midterm Problem 3';
    document.head.appendChild(title);

    // Favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = 'assets/favicon/favicon.png';
    document.head.appendChild(favicon);

    // External stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles/connect.css';
    document.head.appendChild(link);
}
