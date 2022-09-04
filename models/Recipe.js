const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  userId: {
    type: String,
    required: true
  },
  image:{       //adding img property into this schema, hopefully it works :)
    type: String
  }
})
// look into images later...

module.exports = mongoose.model('Recipe', RecipeSchema,'recipes')