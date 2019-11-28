const express = require('express');
const router = express.Router()

router.get('/', (req, res) => res.render('recipes/recipes-list', {
  user: req.user
}))

router.get('/search', (req, res) => res.render('recipes/recipes-fridge', {
  user: req.user
}))

// router.post('/search', (req,res) => {
// })

module.exports = router;