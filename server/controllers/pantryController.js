const PantryItem = require('../models/PantryItem');

const addPantryItem = async (req, res) => {
  const { name, quantity,unit, pricePerUnit, expirationDate } = req.body;
  try {
    if (!req.user || !req.user._id) {
         return res.status(401).json({ error: 'User not authenticated or user ID missing' });
           }
    const newItem = new PantryItem({
      name,
      quantity,
      unit,
      pricePerUnit,
      expirationDate,
      userId: req.user._id
    });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add pantry item' });
  }
};
const updatePantryItem = async (req, res) => {
    const { id } = req.params;
    const { name, quantity, unit, pricePerUnit, expirationDate } = req.body;
    try {
      const updatedItem = await PantryItem.findByIdAndUpdate(
        id,
        { name, quantity, unit, pricePerUnit, expirationDate},
        { new: true }
      );
  
      if (!updatedItem) {
        return res.status(404).json({ message: 'Pantry item not found' });
      }
  
      res.status(200).json({ message: 'Pantry item updated successfully', updatedItem });
    } catch (error) {
      res.status(500).json({ message: 'Error updating pantry item', error:error.message });
    }
  };

  const getPantryItems = async (req, res) => {
    const userId  = req.user.id;
  
    try {
      const items = await PantryItem.find({ userId });
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch pantry items', error: err.message });
    }
  };

module.exports = { addPantryItem , updatePantryItem,getPantryItems};
