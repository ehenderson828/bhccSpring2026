// Validation for blog post titles, bodies and images
module.exports = async (req, res, next) => {
    if (req.files == null || req.body.title.trim() === '' || req.body.body.trim() === '') {
        return res.redirect('/posts/new'); // Redirection if properties are empty or null
    }
    next();
};
