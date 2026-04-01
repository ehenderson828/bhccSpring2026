// Form Validation function - validates that required new-post form fields are present before completing request
const validateForm = (req, res, next) => {
    // Check to see if new post form title and body are present before submission
    if (!req.body.title || !req.body.body) {
        // Failure -> reload new post page -> kill the request
        return res.redirect('/new-post');
    }
    else {
        // If present -> move on
        next(); 
    }

}
// Image Validation function - validates that an image file is present before completing request
const validateImage = (req, res, next) => {
    // Check to see if an image file has been uploaded before submission
    if (!req.files || !req.files.image) {
        // Failure -> reload new post page -> kill the request
        return res.redirect('/new-post');
    }
    else {
        // If present -> move on
        next();
    }
}

// Export middleware functions
module.exports = { validateForm, validateImage };