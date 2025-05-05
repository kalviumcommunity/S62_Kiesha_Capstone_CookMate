const express = require('express');
const router = express.Router();
const { addPantryItem } = require('../controllers/pantryController');
const authenticateUser = require('../middleware/authMiddleware');  


router.post('/add-item', authenticateUser, addPantryItem);

module.exports = router;
