const express = require('express');
const router = express.Router();
const { addPantryItem,updatePantryItem } = require('../controllers/pantryController');
const authenticateUser = require('../middleware/authMiddleware');  


router.post('/add-item', authenticateUser, addPantryItem);
router.put('/update-item/:id',authenticateUser, updatePantryItem);
module.exports = router;
