// Import 
const session = require('express-session');
const flash = require('connect-flash');

module.exports = (app) => {
    // If login succeeds, and user has logged in
    app.use(session({ // Session starts
        secret: 'cookieKey', // Key signed by server and sent to browser
        resave: false, // Only save to browser store if session was modified
        saveUninitialized: false,
        cookie: { secure: false } // Set `secure: true` if using https - localhost only uses http
    }));
    // If login fails:
    app.use(flash());
}
