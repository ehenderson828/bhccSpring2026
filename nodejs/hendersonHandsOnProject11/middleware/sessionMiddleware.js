// Imports 
const session = require('express-session');
const flash = require('connect-flash');

module.exports = (app) => {
    // If login succeeds, and user has logged in
    app.use(session({ // Session starts
        secret: process.env.SESSION_SECRET, // Key signed by server and sent to browser
        resave: true, 
        saveUninitialized: true,
        cookie: { secure: false } // Set `secure: true` if using https - localhost only uses http
    }));
    // If login fails:
    app.use(flash());
}
