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

module.exports = {setWeeklyBudget};
