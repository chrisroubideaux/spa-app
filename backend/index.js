// express server
const express = require('express');
const session = require('express-session');
const { json, urlencoded } = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// page import routes
const facialRoutes = require('./facials/facials');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const massageRoutes = require('./massages/massages');
const treatmentRoutes = require('./bodyTreatments/treatments');
const waxingRoutes = require('./waxings/waxings');
const ownerRoutes = require('./owners/owners');

// auth routes
// const authRoutes = require('./routes/auth');

// google auth
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Facebook = require('passport-facebook').Strategy;
const User = require('./models/user');

// variables from .env file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// mongoDB connection
const mongoURI = process.env.MONGO_URI;

// mongoose
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// CORS
const corsOptions = {
  origin: 'https://ivy-client-5e9387cb37e4.herokuapp.com',
};

app.use(cors(corsOptions));
app.use(json());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(verifyToken);

// Define the verifyToken middleware function

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  console.log('Token for Verification:', token);
  if (!token) {
    return res.status(401).json({ error: 'Authentication token is missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token has expired' });
      }
      console.error('Token verification error:', err);
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.userId = decoded.id;
    next();
  });
}

// Configure session middleware
const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || 'secret-key',
  resave: false,
  saveUninitialized: true,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);

app.use(sessionMiddleware);

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello!');
});

// page routes
app.use('/facials', facialRoutes);
app.use('/massages', massageRoutes);
app.use('/body-treatments', treatmentRoutes);
app.use('/waxing-treatments', waxingRoutes);
app.use('/owners', ownerRoutes);

// contact page
app.get('/contact', (req, res) => {
  res.send('Contact page');
});

// about page
app.get('/about', (req, res) => {
  res.send('About page');
});

// Google OAuth registration route
app.get(
  '/auth/google/register',
  passport.authenticate('google', {
    scope: ['openid', 'profile', 'email'],
  })
);

// Google OAuth register/callback route
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('https://ivy-client-5e9387cb37e4.herokuapp.com/user');
  }
);
// Google OAuth login route
app.get(
  '/auth/google/login',
  passport.authenticate('google', {
    scope: ['openid', 'profile', 'email'],
  })
);

// Google OAuth login callback route
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('https://ivy-client-5e9387cb37e4.herokuapp.com/user');
  }
);

// Facebook OAuth registration route
app.get(
  '/auth/facebook/register',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Facebook OAuth registration route
app.get(
  '/auth/facebook/register',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Facebook OAuth callback route for registration
app.get(
  '/auth/facebook/callback/register',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('https://ivy-client-5e9387cb37e4.herokuapp.com/user');
  }
);

// Callback routes for both registration and login
app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.redirect('https://ivy-client-5e9387cb37e4.herokuapp.com/user');
  }
);

// auth routes and profile routes
app.use('/auth', authRoutes);
app.post('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
