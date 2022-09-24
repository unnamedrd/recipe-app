
const Recipe = require('../models/Recipe')
const cloudinary = require('../middleware/cloudinary')

module.exports = {
    getRecipes: async (req,res)=>{
    
        console.log(req.user)
        try{
            const recipeNames = await Recipe.find({userId:req.user.id})
            const recipesCount = await Recipe.countDocuments({userId:req.user.id})
            res.render('recipe.ejs', {recipes: recipeNames, count: recipesCount, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
 
    createRecipe: async (req, res)=>{
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            await Recipe.create({
                recipeName: req.body.recipeName,
                userId: req.user.id,
                recipeCategory: req.body.recipeCategory,
                recipeDescription: req.body.recipeDescription,
                recipePhoto: result.secure_url,
                cloudinaryID: result.public_id,
            })
            console.log('Recipe has been added!')
            res.redirect('/recipes')
        }catch(err){
            console.log(err)
        }
    },

    deleteRecipe: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try {
            await cloudinary.uploader.destroy(post.cloudinaryID)
            await Recipe.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted recipe')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },

    getSortedRecipe: async (req,res) =>{  //added new async funtion to try to sort the recipe A-Z Please take a look at this!!!  havent tested yet
        try{
            const sortedRecipe = await Recipe.find({userId:req.user.id}).sort({recipeName:1}).lean();
            const recipesCount = await Recipe.countDocuments({userId:req.user.id})
            res.render('recipe.ejs',{recipes: sortedRecipe, count:recipesCount, user: req.user})
        }catch(err){
            console.log(err)
        }
    }
   
  


}    