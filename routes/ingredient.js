const express = require('express')
const router = express.Router()
const ingredientsController = require('../controllers/ingredients') 
const { ensureAuth } = require('../middleware/auth')

// router.get('/', ensureAuth, ingredientsController.getIngredients)
router.get('/:id', ingredientsController.getRecipeDetails)

router.post('/createIngredient/:id', ingredientsController.createIngredient)

router.put('/markComplete', ingredientsController.markComplete)

router.put('/markIncomplete', ingredientsController.markIncomplete)

router.delete('/deleteIngredient', ingredientsController.deleteIngredient)

module.exports = router