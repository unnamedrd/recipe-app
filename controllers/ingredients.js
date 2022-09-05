const Ingredient = require('../models/Ingredient')
const Recipe = require('../models/Recipe')

module.exports = {
    // getIngredients: async (req,res)=>{
    //     console.log(req.user)
    //     try{
    //         const ingredientItems = await Ingredient.find({userId:req.user.id})
    //         const ingredientsLeft = await Ingredient.countDocuments({userId:req.user.id,completed: false})
    //         res.render('ingredients.ejs', {Ingredients: ingredientItems, left: ingredientsLeft, user: req.user})
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    getRecipeDetails: async (req,res) => {
        const pageName = req.params.id
      
        try {
            const recipeName = await Recipe.findOne({recipeName: pageName})
            const ingredientsCount = await Ingredient.countDocuments({recipe: pageName, completed:false})
            const ingredients = await Ingredient.find({recipe: pageName})
            res.render('ingredient.ejs', {recipeName: recipeName, count: ingredientsCount, ingredients: ingredients, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createIngredient: async (req, res)=>{
        const recipeName = req.params.id
        console.log(recipeName)
        
        try{
            await Ingredient.create({ingredient: req.body.ingredientItem, completed: false, recipe: recipeName, userId: req.user.id })
            console.log('Ingredient has been added!')
            res.redirect(`/ingredients/${recipeName}`)
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Ingredient.findOneAndUpdate({_id:req.params.id},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Ingredient.findOneAndUpdate({_id:req.params.id},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    markCompleteAll: async (req, res)=>{
        try{
            await Ingredient.updateMany({recipe:req.params.id},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncompleteAll: async (req, res)=>{
        try{
            await Ingredient.updateMany({recipe:req.params.id},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteIngredient: async (req, res)=>{
        console.log(req.params.id)
        try{
            await Ingredient.findOneAndDelete({_id:req.params.id})
            console.log('Deleted Ingredient')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    