const express = require('express');
const router = express.Router();
const { generateWeeklyMealPlan } = require('../controllers/mealPlanController');
const authenticateUser = require('../middleware/authMiddleware');  

 
router.post('/generate-meal-plan', authenticateUser, generateWeeklyMealPlan);

module.exports = router;
