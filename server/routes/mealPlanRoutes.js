const express = require('express');
const router = express.Router();
const { generateWeeklyMealPlan,getMealPlanForDay } = require('../controllers/mealPlanController');
const authenticateUser = require('../middleware/authMiddleware');  

 
router.post('/generate-meal-plan', authenticateUser, generateWeeklyMealPlan);
router.get('/meal-plan-day', authenticateUser, getMealPlanForDay);
module.exports = router;
