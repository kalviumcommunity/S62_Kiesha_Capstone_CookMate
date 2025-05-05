const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [Number],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mealDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('MealPlan', mealPlanSchema);


