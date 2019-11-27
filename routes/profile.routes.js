const express = require('express');
const router = express.Router();
const User = require('../models/User.model')

router.get('/:id', (req, res) => {
  User.findById(req.query.id)
  .then(profile => res.render('profile/profile-public', {
    profile: profile
  }))
})

module.exports = router