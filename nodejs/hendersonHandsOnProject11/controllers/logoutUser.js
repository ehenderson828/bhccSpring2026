// Logout user function
exports.logout = (req, res) => {
    // Destroy and clear the session from the server
    req.session.destroy(() => {
        // Clear the session cookie from the browser
        res.clearCookie('connect.sid');
        // Redirect user to homepage
        res.redirect('/');
    });
}