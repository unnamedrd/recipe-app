
const Recipe = require('../models/Recipe')
module.exports = {
    getRecipes: async (req,res)=>{
        console.log(req.user)
        try{
            const recipeItems = await Recipe.find({userId:req.user.id})
            const recipesCount = await Recipe.countDocuments({userId:req.user.id})
            res.render('recipe.ejs', {recipes: recipeItems, count: recipesCount, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createRecipe: async (req, res)=>{
        try{
            // await Todo.create({todo: req.body.todoItem, userId: req.user.id})
            await Recipe.create({recipe: req.body.recipeItem, userId: req.user.id})
            console.log('Todo has been added!')
            res.redirect('/recipes')
        }catch(err){
            console.log(err)
        }
    },

    deleteRecipe: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    