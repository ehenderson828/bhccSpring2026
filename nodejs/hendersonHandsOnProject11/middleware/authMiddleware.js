const User = require("../models/User");
// Verification of logged-in users that exist within MDB collection
module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.session.userId);
        if (!user) {
            return res.redirect('/'); // Redirection is user is not present in collection
        }
        
        next();
    } catch (error) {
        return res.redirect('/');
    }
};
