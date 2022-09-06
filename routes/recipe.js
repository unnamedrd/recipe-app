const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes') 
const { ensureAuth } = require('../middleware/auth')
//add controller for image

router.get('/', ensureAuth, recipesController.getRecipes)

router.post('/createRecipe', recipesController.createRecipe)

router.delete('/deleteRecipe', recipesController.deleteRecipe)

//add get statements and route to Controller for image

//router.get('/uploadImage', imagesController.uploadImage)

module.exports = router