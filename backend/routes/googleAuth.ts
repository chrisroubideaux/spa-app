// google auth routes
{/*
import User from "../models/user";
const express = require('express');
const googleRoutes = express.Router();
const passport = require('passport');
// Google OAuth registration route

googleRoutes.get(
  '/google/register',
  passport.authenticate('google', { scope: ['email', 'openid', 'profile'] })
);

// Google OAuth register/callback route
googleRoutes.get(
  '/google/callback/register',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req: { user: { email: any; fullName: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; user?: any; token?: never; redirectTo?: string; }): void; new(): any; }; }; }) => {
    try {
      const { email, fullName } = req.user;

      const registrationTimestamp = new Date();

        const newUser = new User({
            email,
            fullName,
            registrationTimestamp,
        });

    const token: undefined = undefined;
    
    res.status(201).json({
            message: 'User registered successfully',
            user: req.user,
            token,
            redirectTo: '/user',
    });
    } catch (err) {
      // Handle any errors that occur during the registration process
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
);

// Google OAuth login route
googleRoutes.get(
  '/google/login',
  passport.authenticate('google', { scope: ['email', 'openid', 'profile'] })
);

// Google OAuth login/callback route
googleRoutes.get(
  '/google/callback/login',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req: { user: { email: any; fullName: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; user?: any; token?: never; redirectTo?: string; }): void; new(): any; }; }; }) => {
    try {
        const { email, fullName } = req.user;

        const token: undefined = undefined;

        res.status(200).json({
            message: 'User logged in successfully',
            user: req.user, // User data from passport
            token,
            redirectTo: '/user',
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
  }
);

  */}