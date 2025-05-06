const express = require('express');
const router = express.Router();
const { addPantryItem,updatePantryItem, getPantryItems } = require('../controllers/pantryController');
const authenticateUser = require('../middleware/authMiddleware');  


router.post('/add-item', authenticateUser, addPantryItem);
router.put('/update-item/:id',authenticateUser, updatePantryItem);
router.get('/pantry-items', authenticateUser, getPantryItems);
module.exports = router;
