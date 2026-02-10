// Import Express from node_modules
const express = require('express');
// Import Path module
const path = require('path');
// Create Express app
const app = express(); // -> Will define routes and middleware

// Root route:
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.html'));
});

// About route:
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'about.html'));
});

// Contact route:
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'contact.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});