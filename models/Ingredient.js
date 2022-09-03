const mongoose = require('mongoose')

const IngredientSchema = new mongoose.Schema({
  ingredient: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  recipe: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Ingredient', IngredientSchema, 'ingredients')
