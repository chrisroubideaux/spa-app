// routes/auth.js
const mongoose = require('mongoose');
const express = require('express');
const Users = require('../models/users');
const authRoutes = express.Router();
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const { Strategy: FacebookStrategy } = require('passport-facebook');

require('dotenv').config();

// Configure Passport to use Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        'https://ivy-database-87df4cfe65bb.herokuapp.com/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if the user already exists in the database
        let user = await Users.findOne({ googleId: profile.id });

        if (!user) {
          // Create a new user if not found
          user = new Users({
            googleId: profile.id,
            googleDisplayName: profile.displayName,
            googleEmail: profile.emails[0].value,
          });
          await user.save();
        }

        // Pass the user to the next middleware
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

// Google OAuth login route
authRoutes.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google OAuth callback route
authRoutes.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Redirect to profile page after successful authentication
    res.redirect('/profile');
  }
);

// facebook passport oAuth

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL:
        process.env.FACEBOOK_CALLBACK_URL ||
        'https://ivy-database-87df4cfe65bb.herokuapp.com/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'emails'],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('Facebook Profile Data:', profile);

      try {
        // Check if the Facebook user is already registered in your database
        const existingUser = await Users.findOne({ 'facebook.id': profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        // Create a new user with Facebook account details
        const newUser = new Users({
          facebook: {
            id: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
          },
        });

        await newUser.save();

        return done(null, newUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Facebook OAuth login route
authRoutes.get(
  '/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Facebook OAuth callback route
authRoutes.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/profile');
  }
);

module.exports = authRoutes;
