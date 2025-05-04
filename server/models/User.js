const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dietaryPreferences: {
    type: String, // e.g., "Vegetarian", "Vegan", "Standard"
    enum: ['None', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Paleo', 'Keto'],
    default: 'None',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
