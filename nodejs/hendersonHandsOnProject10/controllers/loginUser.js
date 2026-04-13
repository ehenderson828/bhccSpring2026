// Import User Schema model
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Render login form
exports.getLoginForm = (req, res) => {
    res.render('login', { 
        success: req.flash('success'),
        error: req.flash('error')
    });
}

// Login user function
exports.login = async (req, res) => {
    // Deconstruct form values into variables
    const { username, password } = req.body;
    // Promise handling
    try {
        // Find user by username
        const user = await User.findOne({ username });

        // If user does not exist in 'users' collection
        if (!user) {
            // Flash an error
            req.flash('error', 'Invalid username or password.');
            // Reload the login page
            return res.redirect('/users/login');
        }

        // Compare submitted password against hashed password in database
        const isMatch = await bcrypt.compare(password, user.password);
        // If submitted and hashed passwords don't match
        if (!isMatch) {
            // Flash the user that their username or password are wrong
            req.flash('error', 'Invalid username or password.');
            // Reattempt login
            return res.redirect('/users/login');
        }

        // Store user in session
        req.session.userId = user._id;
        req.session.username = user.username;
        // Ensure session is fully saved before redirecting
        req.session.save((err) => {
            // Once username & password are verified and session is created, flash a success message and push to root
            req.flash('success', 'You have successfully logged in');
            res.redirect('/');
        });

    } 
    // Error handling
    catch (error) {
        // Log error to console
        console.log(error);
        // Flash error message to the user
        req.flash('error', 'Something went wrong. Please try again.');
        // Reload login page
        res.redirect('/users/login');
    }
}
