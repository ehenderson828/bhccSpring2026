// Import Post module for MongoDB operations
const Post = require('../models/Post');

// GET /new-post — render the new post creation form
exports.getNewPostForm = (req, res) => {
    res.render('new-post');
};

// POST /new-post — save a new post (no image) and redirect home
exports.createPost = async (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body
    });
    await post.save();
    res.redirect('/');
};