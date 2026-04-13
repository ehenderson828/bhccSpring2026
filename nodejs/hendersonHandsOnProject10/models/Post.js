// Import Mongoose for schema definition and model creation
const mongoose = require('mongoose');

// Define the schema for blog post document
const postSchema = new mongoose.Schema({
  title: String,  // Post title
  body: String,   // Post body content
  image: String   // Image filename stored in public/img & blogposts collection
});

// Export the Post model mapped to the 'blogposts' collection
module.exports = mongoose.model('Post', postSchema, 'blogposts');