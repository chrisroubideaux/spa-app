import { Request, Response } from 'express';
import User from '../models/user';


import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';

require('dotenv').config();

// Function to check if a string contains at least one digit and one special character
function isPasswordValid(password: string): boolean {
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/; 

    return (
        password.length >= 10 &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    );
}

// Register a new user
export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password, confirmPassword, fullName } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
        res.status(409).json({ message: 'Email already exists' });
        return;
    }
   
// Validate email format using the 'isEmail' function from 'validator'
if (!validator.isEmail(email)) {
    res.status(400).json({ message: 'Invalid email address' });
    return;
  }

    if (!isPasswordValid(password)) {
        res.status(400).json({
            message:
                'Password must be at least 10 characters long and contain at least one number and one special character.',
        });
        return;
    }

    // Check if the password and its confirmation match
    if (password !== confirmPassword) {
        res.status(400).json({
            message: 'Password and password confirmation do not match.',
        });
        return Promise.resolve();
    }

    // Hash the password before saving it
    const saltRounds = 10;

    res.status(400).json({
        message: 'Password and password confirmation do not match.',
    });
    const hashedPassword = await bcrypt.hash(password, saltRounds);

   
    const newUser = new User({ email, password: hashedPassword, fullName });
    await newUser.save();

    // Generate a JWT token for the new user
    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET || '');

   
    res.status(201).json({
      message: 'User registered successfully',
      user: newUser,
      token,
      redirectTo: `/profile/${newUser._id}`, 
    });
  } catch (err) {
   
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login an existing user
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
        res.status(401).json({ message: 'Invalid email or password' });
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password || '');

    if (!passwordMatch) {
        res.status(401).json({ message: 'Invalid email or password' });
        return;
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || '');
   
    const redirectTo = `/profile/${user._id}`;
    console.log('Generated Token:', token);

    res.status(200).json({ message: 'Login successful', user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
