const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes') 
const { ensureAuth } = require('../middleware/auth')
//add controller for image

router.get('/', ensureAuth, recipesController.getRecipes)

router.post('/createRecipe', recipesController.createRecipe)

<<<<<<< HEAD
// created new route for sorted recipe list---havent tested.
router.get('/getSortedRecipe', recipesController.getSortedRecipe)

=======
>>>>>>> 6e17cb8857563f1d226ae47f659bb01e206c9604
router.delete('/deleteRecipe', recipesController.deleteRecipe)

//add get statements and route to Controller for image

//router.get('/uploadImage', imagesController.uploadImage)

module.exports = router