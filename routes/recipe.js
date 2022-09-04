const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', ensureAuth, recipesController.getRecipes)

router.post('/createRecipe', recipesController.createRecipe)

// created new route for sorted recipe list---havent tested.
router.get('/getSortedRecipe', recipeController.getSortedRecipe)

router.delete('/deleteRecipe', recipesController.deleteRecipe)

module.exports = router