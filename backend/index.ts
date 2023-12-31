// express app
import express, { Request, Response, NextFunction } from 'express';
const session = require('express-session');
const { json, urlencoded } = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// page import routes
import facialRoutes from './facials/facials';
import massageRoutes from './massages/massages';
import treatmentRoutes from './bodyTreatments/treatments';
// auth routes
import authRoutes from './routes/auth'; 

// variables from .env file
require('dotenv').config();

const app = express();
const port = 3001;
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
// cors middleware
const corsOptions = {
  origin: 'http://localhost:3000',
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

{
  /*}
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

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
*/
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
      secure: false, // Set to true if using HTTPS
    },
  })
);

app.use(sessionMiddleware);

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

// auth routes and profile routes
app.use('/auth', authRoutes);

app.post('/auth', authRoutes);

//app.use('/user', userRoutes);



// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
