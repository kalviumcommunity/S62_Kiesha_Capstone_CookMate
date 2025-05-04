const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// Register a new user
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Please provide name, email, and password" });
      }
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    const token = createToken(user._id);
    res.status(201).json({ message: "User registered successfully", user:user });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    const token = createToken(user._id);
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };
    res.status(200).json({ message:"User logged in successfully",token, userResponse });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Logout user
const logout = async (req, res) => {
  //This will be handled in frontend later on.
  res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = { register, login, logout };
