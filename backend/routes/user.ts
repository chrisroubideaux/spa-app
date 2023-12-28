import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {
  getUserById,
  updateUser,
  deleteUser as deleteUserController, // Renaming to avoid conflict
} from '../controllers/userController';
import User from '../models/user';

const userRoutes = express.Router();

// Define the verifyToken middleware function
function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const token = req.headers['authorization'];

  if (!token) {
    res.status(401).json({ error: 'Authentication token is missing' });
    return;
  }

  jwt.verify(token as string, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        res.status(401).json({ error: 'Token has expired' });
        return;
      }
      console.error('Token verification error:', err);
      res.status(401).json({ error: 'Invalid token' });
      return;
    }
    (req as any).userId = (decoded as { id: string }).id; // Adding userId to request object
    next();
  });
}

userRoutes.get('/', verifyToken, getUserById);

// GET user profile page by ID (protected route)
userRoutes.get('/:id', verifyToken, async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    console.log('User ID:', userId);
    const userData = await User.findById(userId);
    // Handle userData and send appropriate response
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching user profile by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (update) user profile (protected route)
userRoutes.put('/', verifyToken, async (req: Request<{}, {}, { fullName: string, email: string, newPassword: string }>, res: Response) => {
    try {
      const userId = (req as any).userId;
      const { fullName, email, newPassword } = req.body;
  
      // Assuming the update was successful, perform the logic to update the user
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      if (fullName) {
        user.fullName = fullName;
      }
      if (email) {
        user.email = email;
      }
      if (newPassword) {
        // Handle password update logic (hashing, etc.) as needed
        user.password = newPassword;
      }
  
      // Save the updated user data
      await user.save();
  
      res.status(200).json({ message: 'User profile updated successfully', fullName }); // Including fullName in the response
    } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

    // Inside the userRoutes.delete() handler, pass both userId and res to deleteUserController
    userRoutes.delete('/', verifyToken, async (req: Request, res: Response) => {
        try {
        const userId = (req as any).userId;
        await deleteUserController(userId, res); // Pass 'res' as the second argument
        } catch (error) {
        console.error('Error deleting user profile:', error);
        res.status(500).json({ error: 'Internal server error' });
        }
    });
export default userRoutes;
