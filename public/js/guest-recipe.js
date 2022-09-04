
const submitButton = document.querySelector('#submit')

const recipeNameInput = document.querySelector('.recipeNameInput')
const recipeDescriptionInput = document.querySelector('.recipeDescriptionInput')
const recipeCategoryInput = document.querySelector('.recipeCategoryInput')

localStorage.setItem('recipeNames', [])
localStorage.setItem('recipeDescription', [])
localStorage.setItem('recipeCategories', [])

submitButton.addEventListener('click', storeValues)


   


function storeValues() {
    let recipeInput = recipeNameInput.value
    let descriptionInput = recipeDescriptionInput.value
    let categoryInput = recipeCategoryInput.value
    let recipes = {
        recipe: recipeInput,
        category: categoryInput,
        description: descriptionInput,
        
    }
    console.log(recipeCategoryInput.value)
    if(!localStorage.getItem('recipes'))  {
        window.localStorage.setItem('recipes', JSON.stringify(recipes))
    }  else {
        let rec = 'recipes'
        let i = 1
        while(localStorage.getItem(`${rec + i}`)) {
            rec += 1
            window.localStorage.setItem(`${rec}`, JSON.stringify(recipes))
        }
    }
   

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