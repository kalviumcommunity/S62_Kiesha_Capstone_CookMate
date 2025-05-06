const express = require('express');
const router = express.Router();
const { setWeeklyBudget, updateBudget} = require('../controllers/budgetController');
const authenticateUser = require('../middleware/authMiddleware');  


router.post('/set-budget', authenticateUser, setWeeklyBudget);
router.put('/update-budget/:id', authenticateUser, updateBudget);
module.exports = router;
