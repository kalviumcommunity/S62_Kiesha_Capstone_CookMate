const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes= require('./routes/authRoutes');
const userRoutes= require('./routes/userRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const mealPlanRoutes = require('./routes/mealPlanRoutes');
const pantryRoutes = require('./routes/pantryRoutes');


dotenv.config();

const app = express();

// Connecting to DB
connectDB();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/user',userRoutes);
app.use('/budget', budgetRoutes);
app.use('/meal-plan', mealPlanRoutes);
app.use('/pantry', pantryRoutes);




const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
