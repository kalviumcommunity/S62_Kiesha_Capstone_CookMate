const mongoose = require('mongoose');

const spendingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mealPlanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MealPlan',
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  ingredientCosts: [{
    ingredientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PantryItem',
      required: true,
    },
    quantityUsed: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  }],
  spendingDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SpendingData', spendingSchema);

