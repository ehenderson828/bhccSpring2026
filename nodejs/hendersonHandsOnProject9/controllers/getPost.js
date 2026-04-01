// Import Post model for database operations
const Post = require('../models/Post');

// GET /post/:id — fetch a single post by ID and render it
exports.getSinglePost = async (req, res) => {
    // Try to retrieve single post
    try {
        // Await MongoDB response
        const blogpost = await Post.findById(req.params.id);
        console.log('blogpost results:', blogpost);
        // If blog post not found in collection
        if (!blogpost) {
            // Inform user
            return res.status(404).send('Blog post not found');
        }
        // If found, render on page
        res.render('post', { blogpost });
    }
    // If error contacting MongoDB
    catch (error) {
        // Log error to console
        console.error('Error fetching blog post', error);
        // Send 500 response
        res.status(500).send('Error fetching blog post');
    }
};