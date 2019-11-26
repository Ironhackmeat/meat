const express = require('express');
const router = express.Router()

router.get('/', (req, res) => res.render('recipes/recipes-list'))

router.get('/search', (req, res) => res.render('recipes/recipes-fridge'))

// router.post('/search', (req,res) => {
// })

module.exports = router;