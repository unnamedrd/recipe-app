const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type:String, 
  }, 
  userId: {
    type: String,
    required: true
  },
  recipeCategory: {
    type: String,
    required: false,
  },
  recipeDescription: {
    type: String,
    required: false,
  },
  recipePhoto: {
    type: String, // change type
    required: false,
  }
})
// look into images later...

module.exports = mongoose.model('Recipe', RecipeSchema,'recipes')