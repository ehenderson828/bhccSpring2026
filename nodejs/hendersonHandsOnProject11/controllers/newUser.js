// Import User Schema model
const User = require('../models/User');

// Render registration form
exports.getRegisterForm = (req, res) => {
    res.render('register', {
        success: req.flash('success'),
        error: req.flash('error')
    });
}

// Register new user function
exports.register = async (req, res) => {
    // Deconstruc form data into variables
    const { username, password, confirmPassword } = req.body;
    // Check to ensure passwords have been confirmed
    if (password !== confirmPassword) {
        // Flash error if passwords do not match
        req.flash('error', 'Passwords do not match. Please try again.');
        // Reload register page
        return res.redirect('/users/register');
    }

    // Promise handling
    try {
        // await response to MongoDB users collection
        await User.create({ username, password });
        // Flash success message
        req.flash('success', 'Registration complete! Please use your credentials to login.');
        // Redirect user to login page to test credentials
        res.redirect('/users/login');
    } 
    // Catch errors
    catch (error) {
        // Log error to the console
        console.log(error);
        // If username is taken
        if (error.code === 11000) { // Duplicate key error
            req.flash('error', 'Username already exists. Please try another.');
        } 
        // Other error
        else {
            req.flash('error', 'Registration failed: ' + error.message);
        }
        // Direct user to try and register again
        res.redirect('/users/register');
    }
}
