// Import Express & EJS
const express = require('express');
const ejs = require('ejs');

// Import the path module
const path = require('path');

// App creation
const app = express();

// Serve static files (CSS, JS, images) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use EJS as our templating engine
app.set('view engine', 'ejs');

// Route creation: index
app.get('/', (req, res) => {
    // Send client our index view
    res.render('index');
});

// Route creation: about
app.get('/about', (req, res) => {
    res.render('about');
});

// Route creation: contact
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Route creation: post
app.get('/post', (req, res) => {
    res.render('post');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});