const express = require('express');
const router = express.Router()

router.get('/', (req, res) => res.render('recipes/recipes-list'))

module.exports = router;

