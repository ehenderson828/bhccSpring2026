// Express import
const express = require('express');

// Initialize Express router
const router = express.Router();

// Middleware imports
const authMiddleware = require('../middleware/authMiddleware');
const redirectIfAuthenticated = require('../middleware/redirectIfAuthenticatedMiddleware');
const validationMiddleware = require('../middleware/validationMiddleware');

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
router.get('/users/register', redirectIfAuthenticated, newUserController.getRegisterForm);
router.post('/users/register', newUserController.register);

// Login page route - render login form and handle authentication
router.get('/users/login', redirectIfAuthenticated, loginUserController.getLoginForm);
router.post('/users/login', loginUserController.login);

// Homepage route — display all blog posts
router.get('/', homeController.getHomepage);

// New post form route — display creation form
router.get('/posts/new', authMiddleware, newPostController.getNewPostForm);

// New post submission route — save post without image & validate before request is finished
router.post('/posts/new', authMiddleware, newPostController.createPost); // Will only run if validation passes

// Single post view route — display one blog post by ID
router.get('/post/:id', getPostController.getSinglePost);

// Store post with image — save post with uploaded image & validate before request is finished
router.post('/posts/store', authMiddleware, validationMiddleware, storePostController.storePostWithImage); // Will only run if validation passes

// About page route
router.get('/about', aboutController.getAbout);

// Contact page route
router.get('/contact', contactController.getContact);

// Logout route
router.get('/logout', authMiddleware, logoutUserController.logout);

// Export router for use in index.js
module.exports = router;