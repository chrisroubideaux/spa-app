const express = require('express');
const session = require('express-session');
const { json, urlencoded } = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./models/user');

// Import routes

const facialRoutes = require('./facials/facials');

const userRoutes = require('./routes/user');
//const authRoutes = require('./routes/auth');
const massageRoutes = require('./massages/massages');
const treatmentRoutes = require('./bodyTreatments/treatments');
const waxingRoutes = require('./waxings/waxings');
const ownerRoutes = require('./owners/owners');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// cors middleware
const corsOptions = {
  origin: 'https://ivy-client-5e9387cb37e4.herokuapp.com',
};
app.use(cors(corsOptions));
app.use(json());
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret-key',
    resave: false,
    saveUninitialized: true,
  })
);
// google passport oAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        'https://midwest-realtors-95d2cdb37007.herokuapp.com/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({
          email: profile.emails[0].value,
        });

        if (existingUser) {
          return done(null, existingUser);
        }

        // Create a new user with Google account details
        const newUser = new User({
          email: profile.emails[0].value,
          fullName: profile.displayName,
        });

        // Save the new user to the database
        await newUser.save();

        return done(null, newUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Serialize user data to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user data when retrieving from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware for verifying JWT token
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

// Routes
app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use('/facials', facialRoutes);
app.use('/massages', massageRoutes);
app.use('/body-treatments', treatmentRoutes);
app.use('/waxing-treatments', waxingRoutes);
app.use('/owners', ownerRoutes);

app.get('/contact', (req, res) => {
  res.send('Contact page');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// Google OAuth routes
app.get(
  '/auth/google/register',
  passport.authenticate('google', { scope: ['openid', 'profile', 'email'] })
);
app.get(
  '/auth/google/login',
  passport.authenticate('google', { scope: ['openid', 'profile', 'email'] })
);
app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('https://ivy-client-5e9387cb37e4.herokuapp.com/user');
  }
);

// Auth routes
//app.use('/auth', authRoutes);
app.use('/user', verifyToken, userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
