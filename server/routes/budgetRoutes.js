const express = require('express');
const router = express.Router();
const { setWeeklyBudget } = require('../controllers/budgetController');
const authenticateUser = require('../middleware/authMiddleware');  


router.post('/set-budget', authenticateUser, setWeeklyBudget);

module.exports = router;
