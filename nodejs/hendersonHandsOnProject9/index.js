// Imports and dependency objects:
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const postRoutes = require('./routes/postRoutes');

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

// Connect to MongoDB:
mongoose.connect('mongodb://localhost:27017/my-database');

// Route application
app.use('/', postRoutes); // chain item #4 -> controller functions finish firing

// Server started:
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});