// Express import
const express = require('express');

// Initialize Express router
const router = express.Router();

// Field Validation import
const { validateForm, validateImage } = require('../middleware/fieldValidation');

// Controller imports
const getPostController = require('../controllers/getPost');
const newPostController = require('../controllers/newPost');
const storePostController = require('../controllers/storePost');
const homeController = require('../controllers/home');
const aboutController = require('../controllers/about');
const contactController = require('../controllers/contact');

// Homepage — display all blog posts
router.get('/', homeController.getHomepage);

// New post form — display creation form
router.get('/new-post', newPostController.getNewPostForm);

// New post submit — save post without image & validate before request is finished
router.post('/new-post', validateForm, newPostController.createPost); // Will only run if validation passes

// Single post — display one blog post by ID
router.get('/post/:id', getPostController.getSinglePost);

// Store post with image — save post with uploaded image & validate before request is finished
router.post('/posts/store', validateForm, validateImage, storePostController.storePostWithImage); // Will only run if validation passes

// About page
router.get('/about', aboutController.getAbout);

// Contact page
router.get('/contact', contactController.getContact);

// Export router for use in index.js
module.exports = router;