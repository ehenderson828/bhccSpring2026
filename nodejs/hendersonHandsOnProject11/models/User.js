// Import Mongoose for schema definition and model creation
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema for user registration
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Hash password before saving to database
UserSchema.pre('save', async function() {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Export the UserSchema model mapped to the 'users' collection
module.exports = mongoose.model('User', UserSchema, 'users');