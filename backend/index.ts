// express app
import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3001;

// Middleware to log requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
