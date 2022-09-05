
const submitButton = document.querySelector('#submit')

const recipeNameInput = document.querySelector('.recipeNameInput')
const recipeDescriptionInput = document.querySelector('.recipeDescriptionInput')
const recipeCategoryInput = document.querySelector('.recipeCategoryInput')



submitButton.addEventListener('click', storeValues)


   

// let recipes = []


 localStorage.setItem('recipes', JSON.stringify([]))
 let localRecipes = localStorage.getItem('recipes')

function storeValues() {

    let recipeInput = recipeNameInput.value
    let descriptionInput = recipeDescriptionInput.value
    let categoryInput = recipeCategoryInput.value
    let newRecipe =  {
        recipe: recipeInput,
        category: categoryInput,
        description: descriptionInput,
    }

    localRecipes.push(newRecipe)
  
    console.log(recipeCategoryInput.value)
   
       localStorage.setItem('recipes', JSON.stringify(localRecipes))
      
    
   

    // Array.from(inputs).forEach(e => {
    //     console.log(e.value)
    // })
}



// Add Recipe Form
document.querySelector('.openForm').addEventListener('click', openForm)
document.querySelector('.closeForm').addEventListener('click', closeForm)

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}