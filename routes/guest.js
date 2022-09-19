
const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const guestController = require('../controllers/guest')
const { ensureGuest } = require('../middleware/auth')
const { ensureAuth } = require('../middleware/auth')


// router.get('/', ensureGuest, guestController.getRecipes)

// router.get('/ingredients', ensureGuest, guestController.getIngredients)

// router.get('/', guestController.getRecipes)

// router.get('/ingredients', guestController.getIngredients)

// router.get('/', authController.getGuestLogin)
router.post('/', authController.postGuestLogin)

// router.get('/recipes',  guestController.getRecipes)
// router.get('/ingredients',  guestController.getIngredients)



module.exports = router