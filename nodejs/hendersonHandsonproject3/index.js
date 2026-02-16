// Express import
const express = require('express');
// Import the path module
const path = require('path');

// Create the Express app
const app = express();

// Serve static files (CSS, JS, images) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route creation: index
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

// Route creation: about
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

// Route creation: contact
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});

// Route creation: post
app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});