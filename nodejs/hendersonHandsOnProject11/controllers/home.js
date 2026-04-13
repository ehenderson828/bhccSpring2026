// Import Post model for database operations
const Post = require('../models/Post');

// GET / — fetch all posts from DB and render homepage
exports.getHomepage = async (req, res) => {
    // Log session cookie data to terminal
    console.log('Session data:', req.session);
    // Await all documents in collection -> use imported schema to find
    const posts = await Post.find();
    // Render and send data to homepage
    res.render('index', {
        posts: posts,
        success: req.flash('success'),
        error: req.flash('error')
    });
};