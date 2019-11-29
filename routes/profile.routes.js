const express = require('express')
const router = express.Router();
const User = require('../models/User.model')


router.get('/:id', (req, res) => {
  User.findById(req.params.id)
  .populate('events')
  .then(profile => res.render('profile/profile-public', {
    profile
  }))
  		.catch(err => console.log(err));
  		})

module.exports = router