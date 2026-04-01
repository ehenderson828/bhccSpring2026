// Import Post module for MongoDB operations
const Post = require('../models/Post');

// Import the path module for resolving file upload path conflicts
const path = require('path');

// POST /posts/store — move uploaded image to public/img then save post to DB
exports.storePostWithImage = (req, res) => {
    // Extract uploaded image from request
    let image = req.files.image;
    // Resolve upload path relative to project root (one layer up from controllers/)
    image.mv(path.resolve(__dirname, '../public/img', image.name), async (error) => {
        // Save new post document to MongoDB
        await Post.create({ ...req.body, image: image.name });
        // Redirect to homepage
        res.redirect('/');
    });
};