const PantryItem = require('../models/PantryItem');

const addPantryItem = async (req, res) => {
  const { name, quantity,unit, pricePerUnit, expirationDate } = req.body;
  try {
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

module.exports = { addPantryItem };
