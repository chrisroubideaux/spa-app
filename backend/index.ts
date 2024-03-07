// express app
import express, { Request, Response, NextFunction } from 'express';
const session = require('express-session');
const { json, urlencoded } = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// page import routes
import facialRoutes from './facials/facials';
import massageRoutes from './massages/massages';
import treatmentRoutes from './bodyTreatments/treatments';
import waxingRoutes from './waxings/waxings';
import ownerRoutes from './owners/owners';

// auth routes
//import authRoutes from './routes/auth'; 


// google auth
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Facebook = require('passport-facebook').Strategy;
const User = require('./models/user');

// variables from .env file
require('dotenv').config();

const app = express();
const PORT = process.env.PORT  || 3001;

// mongoDB connection
const mongoURI = process.env.MONGO_URI;

// mongoose
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error: any) => {
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

// Define the verifyToken middleware function

function verifyToken(req: { headers: { [x: string]: any; }; userId: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; }, next: () => void) {
  const token = req.headers['authorization'];
  console.log('Token for Verification:', token);
  if (!token) {
    return res.status(401).json({ error: 'Authentication token is missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err: { name: string; }, decoded: { id: any; }) => {
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

// google passport oAuth


// Middleware to log requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
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

// auth routes and profile routes
//app.use('/auth', authRoutes);

//app.post('/auth', authRoutes);

//app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});

