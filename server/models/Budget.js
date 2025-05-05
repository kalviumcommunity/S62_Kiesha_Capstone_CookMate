const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true, 
  },
  weeklyBudget: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required:true
  },
  endDate: {
    type: Date,
    required:true
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Budget', budgetSchema);
