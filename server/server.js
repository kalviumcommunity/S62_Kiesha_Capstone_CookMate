const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes= require('./routes/authRoutes');
const userRoutes= require('./routes/userRoutes');



dotenv.config();

const app = express();

// Connecting to DB
connectDB();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/user',userRoutes);




const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
