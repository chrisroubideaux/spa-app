{/*
import express, { Request, Response } from 'express';
import User from '../models/user';
import { register, login } from '../controllers/authController';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';
//import passport from 'passport';
import dotenv from 'dotenv';

dotenv.config();

function isPasswordValid(password: string): boolean {
  const digitRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*]/;

  return (
    password.length >= 10 &&
    digitRegex.test(password) &&
    specialCharRegex.test(password)
  );
}

const authRoutes = express.Router();

authRoutes.post('/register', async (req: Request, res: Response) => {
  const { email, password, confirmPassword, fullName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    if (!isPasswordValid(password)) {
      return res.status(400).json({
        message: 'Password must be at least 10 characters long and contain at least one number and one special character.',
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: 'Password and password confirmation do not match.',
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ email, password: hashedPassword, fullName });
    await newUser.save();

    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET || '');
    console.log('Generated Token:', token);

    res.status(201).json({
      message: 'User registered successfully',
      user: newUser,
      token,
      redirectTo: `/user/${newUser._id}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

authRoutes.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || '', {
      expiresIn: '1h',
    });
    console.log('Generated Token:', token);

    const redirectTo = `/user/${user._id}`;

    res.status(200).json({ message: 'Login successful', token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default authRoutes;

*/}
