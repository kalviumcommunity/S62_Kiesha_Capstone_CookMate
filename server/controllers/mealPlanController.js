require('dotenv').config();  

const MealPlan = require('../models/MealPlan');
const PantryItem = require('../models/PantryItem');
const axios = require('axios');

const spoonacularApiKey = process.env.SPOONACULAR_API_KEY;
// Function to generate meal for one day
const generateMealForDay = async (userId, date) => {
  try {
    const pantryItems = await PantryItem.find({ userId });
    const ingredients = pantryItems.map(item => item.name).join(","); 
    // Fetching mdata for each meal from Spoonacular API using the ingredients from the pantry
    const mealPlan = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
      params: {
        ingredients: ingredients,
        number: 3,  
        apiKey: spoonacularApiKey, 
      },
    });
    // Save the generated meals to the database for the specific day
    const newMealPlan = new MealPlan({
      name: `Meal Plan ${date.toLocaleDateString()}`, 
      ingredients: mealPlan.data.map(recipe => recipe.id),
      userId: userId,
      mealDate: date,
    });
    await newMealPlan.save();
    return newMealPlan;
  } catch (err) {
    throw new Error(`Failed to generate meal for ${date.toLocaleDateString()}: ${err.message}`);
  }
};
//  generating weekly meal plan
const generateWeeklyMealPlan = async (req, res) => {
  const { userId } = req.body;  
   const today = new Date();
  const weeklyMealPlans = [];
  try {
    // Loop through the next 7 days to generate meals for each day
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);  // Increment day by 1 for each iteration
      
      // Generate meal for the specific day
      try {
          const mealPlan = await generateMealForDay(userId, date);
          if (mealPlan) {
            weeklyMealPlans.push(mealPlan);
          }
        } catch (error) {
          console.error(`Failed to generate meal for day ${date.toLocaleDateString()}:`, error);
          throw error;
        }
    } 
    res.status(200).json({
      message: 'Weekly meal plan generated successfully!',
      weeklyMealPlans,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error generating weekly meal plan',
      error: err.message,
    });
  }
};

const getMealPlanForDay = async (req, res) => {
    const userId = req.user.id;
    const { date } = req.query;
  
    if (!date) {
      return res.status(400).json({ message: 'Date is required' });
    }
  
    try {
      const targetDate = new Date(date);
      const startOfDay = new Date(targetDate.setHours(0, 0, 0, 0));
      const endOfDay = new Date(targetDate.setHours(23, 59, 59, 999));
  
      const mealPlan = await MealPlan.findOne({
        userId,
        mealDate: { $gte: startOfDay, $lte: endOfDay },
      });
  
      if (!mealPlan) {
        return res.status(404).json({ message: 'No meal plan was generated for this date.' });
      }
  
      res.status(200).json({ mealPlan });
    } catch (err) {
      res.status(500).json({ message: 'Error retrieving meal plan', error: err.message });
    }
  };
  

module.exports = { generateWeeklyMealPlan, getMealPlanForDay };
