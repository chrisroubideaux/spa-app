// userController from controllers folder
{/*
import { Request, Response } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Document } from 'mongoose';

require('dotenv').config();

interface UserType {
  fullName: string;
  email: string;

}

type UserDocument = Document & UserType;

const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).userId;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const userUserData = {
      fullName: user.fullName,
      email: user.email,
    
    };

    res.status(200).json({ message: 'User profile data', user: userUserData });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).userId;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const userData = {
      fullName: user.fullName,
      email: user.email,
     
    };

    res.status(200).json({ message: 'User profile data', user: userData });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).userId;
    const { fullName, email, newPassword } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    if (fullName) {
      user.fullName = fullName;
    }
    if (email) {
      user.email = email;
    }

    if (newPassword) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
      user.password = hashedPassword;
    }

    await user.save();

    res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// Update the deleteUser function to accept two arguments: userId and res
const deleteUser = async (userId: string, res: Response) => {
  try {
    // Your logic to delete the user
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User profile deleted successfully' });
  } catch (error) {
    console.error('Error deleting user profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export { getUser, getUserById, updateUser, deleteUser };
*/}