// user route crud operations
const express = require('express');
const authRoutes = express.Router();

const User = require('../models/user'); // Import User model

const {
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

// Google OAuth callback route

// POST (create) new user profile route
authRoutes.post('/', async (req, res) => {
  try {
    const { email, fullName } = req.body;
    const newUser = await User.create({ email, fullName }); // Create new user using User model
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating new user profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET user profile page (protected route)
authRoutes.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = await getUserById(userId); // Use getUserById function to fetch user data
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching user profile by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (update) user profile (protected route)
authRoutes.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { fullName, email, newPassword } = req.body;

    await updateUser(userId, fullName, email, newPassword); // Use updateUser function to update user data

    res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE user profile (protected route)
authRoutes.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await deleteUser(userId); // Use deleteUser function to delete user data
    res.status(200).json({ message: 'User profile deleted successfully' });
  } catch (error) {
    console.error('Error deleting user profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = authRoutes;
