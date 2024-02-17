// googleAuthController.js
{/*
import passport from 'passport';

function authenticateWithGoogle(req: any, res: any, next: any) {
    passport.authenticate('google', { scope: ['email'] })(req, res, next);
}
function handleGoogleCallback(req: any, res: { redirect: (arg0: string) => void; }, next: (arg0: any) => any) {
  passport.authenticate('google', {
    failureRedirect: '/login',
  })(req, res, (err: any) => {
    if (err) {
      return next(err);
    }

    res.redirect('/user');
  });
}

module.exports = {
  authenticateWithGoogle,
  handleGoogleCallback,
};

*/}