
const submitButton = document.querySelector('#submit')

const recipeNameInput = document.querySelector('.recipeNameInput')
const recipeDescriptionInput = document.querySelector('.recipeDescriptionInput')
const recipeCategoryInput = document.querySelector('.recipeCategoryInput')
const imageInput = document.querySelector('.imageInput')
const recipeSection = document.getElementById('recipeSection')
// const sectionClone = recipeSection.cloneNode(true)
const recipeCount = document.getElementById('recipeCount')
const recipeContainer = document.querySelector('.recipeContainer')


const placeName = document.getElementById('placeName')
const placeCategory = document.getElementById('placeCategory')
const placeDescription = document.getElementById('placeDescription')

const restOfPage = document.querySelector('.restOfPage')
const originalClone = document.querySelector('.original')

displayValue()





submitButton.addEventListener('click', storeValues)

// trashIcon.addEventListener('click', deleteRecipe)


// const recipes = []

// const trashIconArr = Array.from(trashIcon)


// const storedrecipes = JSON.parse(localStorage.getItem('recipes'))

function deleteRecipe() {
    const arr = JSON.parse(localStorage.getItem('recipes')) || []
    
    const recipeName = this.parentNode.parentNode.childNodes[1].textContent
    console.log(recipeName)
    const indexDelete = arr.filter(e => e.recipe === recipeName)
    console.log(indexDelete)
    arr.splice(indexDelete,1)
    localStorage.setItem('recipes', JSON.stringify(arr))
    location.reload()
}


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
        document.getElementById("myForm").classList.remove('toggle') 
        location.reload()
        
}

 


function displayValue() {
    const arr = JSON.parse(localStorage.getItem('recipes')) || []

//    const clone = document.body.appendChild(sectionClone)
// const clone = document.body.appendChild(sectionClone)
//    const content = document.createTextNode()

        for(let i = 0; i < arr.length; i++) {

            const sectionClone = recipeSection.cloneNode(true)
            recipeContainer.appendChild(sectionClone)
           
            


            // sectionClone.classList.remove('hidden')
            const recipe = document.createTextNode(arr[i].recipe)
            const category = document.createTextNode(arr[i].category)
            const description = document.createTextNode(arr[i].description)
            placeName.appendChild(recipe)
            placeCategory.appendChild(category)
            placeDescription.appendChild(description)
            
        }
        // document.createTextNode(e.recipe)
        let count = arr.length
        let content = document.createTextNode(`You have ${count} recipes!`)
        recipeCount.appendChild(content)
  }




  const trashIcon = document.querySelectorAll('.trashIcon')
  Array.from(trashIcon).forEach(e => {
      e.addEventListener('click', deleteRecipe)
  })



document.querySelector('.openForm').addEventListener('click', openForm)
document.querySelector('.closeForm').addEventListener('click', closeForm)

function openForm() {
    document.getElementById("myForm").classList.add('toggle') 
    // hide the rest of the page when the form is visible and do the opposite when it's hidden.
    // restOfPage.style.display = "none"
}
function closeForm() {
    document.getElementById("myForm").classList.remove('toggle') 
    
    // restOfPage.style.display = "block"
}
