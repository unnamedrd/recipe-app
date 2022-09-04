const express = require('express')
const router = express.Router()
const ingredientsController = require('../controllers/ingredients') 
const { ensureAuth } = require('../middleware/auth')

// router.get('/', ensureAuth, ingredientsController.getIngredients)
router.get('/:id', ingredientsController.getRecipeDetails)

router.post('/createIngredient/:id', ingredientsController.createIngredient)

router.put('/:id/markComplete', ingredientsController.markComplete)

router.put('/:id/markIncomplete', ingredientsController.markIncomplete)


router.put('/:id/markCompleteAll', ingredientsController.markCompleteAll)

router.put('/:id/markIncompleteAll', ingredientsController.markIncompleteAll)

router.delete('/:id/deleteIngredient', ingredientsController.deleteIngredient)

module.exports = router