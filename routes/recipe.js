const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes') 
const { ensureAuth } = require('../middleware/auth')
//add controller for image

router.get('/', ensureAuth, recipesController.getRecipes)

router.post('/createRecipe', recipesController.createRecipe)


// created new route for sorted recipe list---havent tested.
router.get('/getSortedRecipe', recipesController.getSortedRecipe)


router.delete('/deleteRecipe', recipesController.deleteRecipe)

//add get statements and route to Controller for image

//router.get('/uploadImage', imagesController.uploadImage)

module.exports = router