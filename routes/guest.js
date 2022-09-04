
const express = require('express')
const router = express.Router()
const guestController = require('../controllers/guest')


router.get('/', guestController.getRecipes)
router.get('/ingredients', guestController.getIngredients)

module.exports = router