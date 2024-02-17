// facebook controller
{/*
const passport = require('passport');
const jwt = require('jsonwebtoken');

// Facebook OAuth registration route
function authenticateWithFacebookRegister(req: any, res: any, next: any) {
  passport.authenticate('facebook', { scope: ['email'] })(req, res, next);
}

// Facebook OAuth login route
function authenticateWithFacebookLogin(req: any, res: any, next: any) {
  passport.authenticate('facebook', { scope: ['email'] })(req, res, next);
}

// Facebook OAuth callback route for registration
function handleFacebookRegisterCallback(req: { user: { _id: any; }; }, res: { json: (arg0: { token: any; }) => void; }, next: (arg0: any) => any) {
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  })(req, res, (err: any) => {
    if (err) {
      return next(err);
    }

    const token = jwt.sign({ _id: req.user._id }, process.env.JWT_SECRET);

    res.json({ token });
  });
}

// Facebook OAuth callback route for login
function handleFacebookLoginCallback(req: { user: { _id: any; }; }, res: { json: (arg0: { token: any; }) => void; }, next: (arg0: any) => any) {
  passport.authenticate('facebook', {
    failureRedirect: '/login',
  })(req, res, (err: any) => {
    if (err) {
      return next(err);
    }

    const token = jwt.sign({ _id: req.user._id }, process.env.JWT_SECRET);

    res.json({ token });
  });
}

module.exports = {
  authenticateWithFacebookRegister,
  handleFacebookRegisterCallback,
  authenticateWithFacebookLogin,
  handleFacebookLoginCallback,
};

*/}
