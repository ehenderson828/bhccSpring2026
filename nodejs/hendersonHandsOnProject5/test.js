const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

async function createBlogPost() {
  try {
    // Connect to MongoDB via mongoose
    await mongoose.connect('mongodb://localhost/my_database');
    
    // Create a blog post by inserting the data based on the schema defined in 'blogpost' 
    const blogpost = await BlogPost.create({
            title: 'Blog 2',
            body: 'Contents of Blog 2'
        });
    
    console.log(blogpost);
  } 
  catch (error) {
    console.log(error);
  } 
  finally {
    mongoose.connection.close();  
  }
}


createBlogPost();