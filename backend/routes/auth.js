// routes/auth.js
const mongoose = require('mongoose');
const User = require('../models/user');
const authRoutes = express.Router();
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');

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
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // Create a new user if not found
          user = new User({
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

module.exports = authRoutes;
