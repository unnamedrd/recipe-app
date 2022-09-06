




module.exports = {
    getRecipes: (req,res) => {
        res.render('guest-recipe.ejs')
    },
    getIngredients: (req,res) => {
        res.render('guest-ingredient.ejs')
    },
  
    
}