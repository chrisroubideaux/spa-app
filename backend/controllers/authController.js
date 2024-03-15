// auth controller

const jwt = require('jsonwebtoken');
require('dotenv').config();

// Google OAuth callback handler
const googleAuthCallback = async (req, res) => {
  try {
    // Assuming the user information is populated by the OAuth middleware
    const user = req.user;

    // Generate a JWT token for the user
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    // Redirect to the profile page after successful authentication
    res.redirect(`/profile/${user._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// facebook controller

// Facebook OAuth registration route
function authenticateWithFacebookRegister(req, res, next) {
  passport.authenticate('facebook', { scope: ['email'] })(req, res, next);
}

// Facebook OAuth login route
function authenticateWithFacebookLogin(req, res, next) {
  passport.authenticate('facebook', { scope: ['email'] })(req, res, next);
}

// Facebook OAuth callback route for registration
function handleFacebookRegisterCallback(req, res, next) {
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  })(req, res, (err) => {
    if (err) {
      return next(err);
    }

    const token = jwt.sign({ _id: req.user._id }, process.env.JWT_SECRET);

    res.json({ token });
  });
}

// Facebook OAuth callback route for login
function handleFacebookLoginCallback(req, res, next) {
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  })(req, res, (err) => {
    if (err) {
      return next(err);
    }

    const token = jwt.sign({ _id: req.user._id }, process.env.JWT_SECRET);

    res.json({ token });
  });
}

module.exports = {
  googleAuthCallback,
  authenticateWithFacebookRegister,
  handleFacebookRegisterCallback,
  authenticateWithFacebookLogin,
  handleFacebookLoginCallback,

  // Add other controller functions as needed
};
