// express app
import express, { Request, Response, NextFunction } from 'express';

// Create an Express app
const app = express();
const port = 3001;

// Middleware to log requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
