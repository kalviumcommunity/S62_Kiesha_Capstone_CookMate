const Budget = require('../models/Budget'); 

//  Creating user's  Weekly Budget
const setWeeklyBudget = async (req, res) => {
  try {
    const { userId, weeklyBudget } = req.body;

    // Checking if the user already has a weekly budget
    const existingBudget = await Budget.findOne({ userId });

    if (existingBudget) {
      return res.status(400).json({
        message: 'You already have a budget set for this week.',
        budget: existingBudget,
      });
    }

    // Calculate the start and end of the week
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Set to Sunday of the current week

    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // Set to Saturday of the current week

    // Setting the budget for the week
    const newBudget = new Budget({
      userId,
      weeklyBudget,
      startDate: startOfWeek,
      endDate: endOfWeek,
    });
    await newBudget.save();
    return res.status(201).json({
      message: 'Weekly budget set successfully',
      budget: newBudget,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({  message: 'Error setting weekly budget',  error: error.message,});
  }
};

const updateBudget = async (req, res) => {
    const { id } = req.params;
    const { weeklyBudget } = req.body;
  
    try {
      const updatedBudget = await Budget.findByIdAndUpdate(
        id,
        { weeklyBudget },
        { new: true }
      );
  
      if (!updatedBudget) {
        return res.status(404).json({ message: 'Budget not found' });
      }
  
      res.status(200).json({ message: 'Budget updated successfully', updatedBudget });
    } catch (error) {
      res.status(500).json({ message: 'Error updating budget', error });
    }
  };
module.exports = {setWeeklyBudget,updateBudget};
