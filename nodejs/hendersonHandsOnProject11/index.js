// Imports and dependency objects:
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const sessionMiddleware = require('./middleware/sessionMiddleware');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();

// Create Express app:
const app = express();

// Configure EJS as our templating engine:
app.set('view engine', 'ejs');

// Serve static files from the public directory:
app.use(express.static(path.join(__dirname, 'public'))); // Chain item number 1

// Body-parser middleware:
app.use(bodyParser.urlencoded({ extended: true })); // Chain item #2

// FileUpload registration:
app.use(fileUpload()); // chain item #3

// Session and flash middleware:
sessionMiddleware(app); // Global import

// Make session data available to all views:
app.use((req, res, next) => {
    // Check to see if user is logged in
    if (req.session.userId) {
      // Indicate to all views that user is logged in
      res.locals.isLoggedIn = true;
    }
    else {
      res.locals.isLoggedIn = false;
    }
    // Middleware next call
    next();
});

// Connect to MongoDB:
mongoose.connect(process.env.MONGO_URI);

// Route application
app.use('/', postRoutes); // chain item #4 -> controller functions finish firing

// 404 handler — catches any route not matched above
app.use((_req, res) => {
    res.status(404).render('error');
});

// Server started:
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});