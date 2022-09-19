
const submitButton = document.querySelector('#submit')

const ingredientInput = document.getElementById('ingredientInput')
const recipeName = document.getElementById('recipeName')
// const sectionClone = recipeSection.cloneNode(true)
const ingredientUl = document.querySelector('.list-group')
const ingredientItem = document.querySelector('.ingredientItem')
const placeIngredient = document.querySelector('.placeIngredient')

const ingredientCount = document.getElementById('ingredientCount')
// const placeName = document.getElementById('placeName')
displayValue()
console.log(ingredientInput.innerText)

submitButton.addEventListener('click', storeValues)


function storeValues() {
    const arr = JSON.parse(localStorage.getItem('ingredients')) || []
        arr.push({
            recipe: recipeName.innerText,
            ingredients: ingredientInput.value,
            completed: false,
        })
            
        // if(arr[arr.length-3].trim() === "" || arr[arr.length-2].trim() === '') {
        //  return  closeForm()
        // }
        localStorage.setItem('ingredients', JSON.stringify(arr)) 
        location.reload()
     
     
}




function displayValue() {
    const arr = JSON.parse(localStorage.getItem('recipes')) || []

//    const clone = document.body.appendChild(sectionClone)
// const clone = document.body.appendChild(sectionClone)
//    const content = document.createTextNode()

        for(let i = 0; i < arr.length; i++) {
          
            const sectionClone = ingredientItem.cloneNode(true)

            sectionClone.classList.add('clone')

            ingredientUl.appendChild(sectionClone)


            // sectionClone.classList.remove('hidden')
            const ingredient = document.createTextNode(arr[i].ingredients)
      
            placeIngredient.appendChild(ingredient)

        }
        // document.createTextNode(e.recipe)
        let count = arr.length
        let content = document.createTextNode(`You have ${count} ingredient(s) left to get`)
        ingredientCount.appendChild(content)


    
  }