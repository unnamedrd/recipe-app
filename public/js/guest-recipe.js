
const submitButton = document.querySelector('#submit')

const recipeNameInput = document.querySelector('.recipeNameInput')
const recipeDescriptionInput = document.querySelector('.recipeDescriptionInput')
const recipeCategoryInput = document.querySelector('.recipeCategoryInput')
const imageInput = document.querySelector('.imageInput')
const recipeSection = document.getElementById('recipeSection')
const sectionClone = recipeSection.cloneNode(true)

const placeName = document.getElementById('placeName')


submitButton.addEventListener('click', storeValues)


   

// Add Recipe Form
const restOfPage = document.querySelector('.restOfPage')

document.querySelector('.openForm').addEventListener('click', openForm)
document.querySelector('.closeForm').addEventListener('click', closeForm)

function openForm() {
    document.getElementById("myForm").style.display = "block";
    // hide the rest of the page when the form is visible and do the opposite when it's hidden.
    restOfPage.style.display = "none"
   
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    restOfPage.style.display = "block"
}


// const recipes = []



// const storedrecipes = JSON.parse(localStorage.getItem('recipes'))



function storeValues() {
    const arr = JSON.parse(localStorage.getItem('recipes')) || []
    
        arr.push({
            recipe: recipeNameInput.value,
            category: recipeCategoryInput.value,
            description: recipeDescriptionInput.value,
            image: imageInput.value, 
           
        })
        // if(arr[arr.length-3].trim() === "" || arr[arr.length-2].trim() === '') {
        //  return  closeForm()
        // }
        localStorage.setItem('recipes', JSON.stringify(arr)) 
        displayValue() 
}

function displayValue() {
    const arr = JSON.parse(localStorage.getItem('recipes')) || []
   const clone = document.body.appendChild(sectionClone)
  for(let i = 0; i < arr.length; i++) {


   // you want to modify a property of a node
const node = clone.getElementById('placeRecipe');

// innerText instead innerHTML
node.innerText = arr[i].recipe

  }
}







