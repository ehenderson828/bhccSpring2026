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
const newUserController = require('../controllers/newUser');
const loginUserController = require('../controllers/loginUser');
const logoutUserController = require('../controllers/logoutUser');

// Register page route - render form to register new users
router.get('/users/register', newUserController.getRegisterForm);
router.post('/users/register', newUserController.register);

// Login page route - render login form and handle authentication
router.get('/users/login', loginUserController.getLoginForm);
router.post('/users/login', loginUserController.login);

// Homepage route — display all blog posts
router.get('/', homeController.getHomepage);

// New post form route — display creation form
router.get('/new-post', newPostController.getNewPostForm);

// New post submission route — save post without image & validate before request is finished
router.post('/new-post', validateForm, newPostController.createPost); // Will only run if validation passes

// Single post view route — display one blog post by ID
router.get('/post/:id', getPostController.getSinglePost);

// Store post with image — save post with uploaded image & validate before request is finished
router.post('/posts/store', validateForm, validateImage, storePostController.storePostWithImage); // Will only run if validation passes

// About page route
router.get('/about', aboutController.getAbout);

// Contact page route
router.get('/contact', contactController.getContact);

// Logout route
router.get('/logout', logoutUserController.logout);

// Export router for use in index.js
module.exports = router;