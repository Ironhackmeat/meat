const passport = require('passport');
const User = require('../models/User.model');

passport.serializeUser((loggedInUser, cb) => {
  console.log(loggedInUser, "loggedinuser")
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession)
    .populate('events')
    .populate('guests')
    .then(userDocument => {
      cb(null, userDocument);
    })
    .catch(err => {
      cb(err);
    })
});