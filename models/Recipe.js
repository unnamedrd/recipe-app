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
<<<<<<< HEAD
  image:{       //adding img property into this schema, hopefully it works :)
    type: String
=======
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
>>>>>>> 6e17cb8857563f1d226ae47f659bb01e206c9604
  }
})
// look into images later...

module.exports = mongoose.model('Recipe', RecipeSchema,'recipes')