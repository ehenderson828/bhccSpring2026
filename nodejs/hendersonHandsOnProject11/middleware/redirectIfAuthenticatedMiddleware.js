// Redirection for logged in users from accessing pages for guests
module.exports = async (req, res, next) => {
    if (req.session.userId) {
        return res.redirect('/');
    }
    next();
};
