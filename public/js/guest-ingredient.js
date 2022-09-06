
const submitButton = document.querySelector('#submit')

const ingredientInput = document.getElementById('ingredientInput')
const recipeName = document.getElementById('recipeName')
// const sectionClone = recipeSection.cloneNode(true)

// const placeName = document.getElementById('placeName')
console.log(ingredientInput.innerText)

ingredientInput.addEventListener('click', storeValues)


function storeValues() {
    const arr = JSON.parse(localStorage.getItem('ingredients')) || []
    const ingredientArr = []
        arr.push({
            recipe: recipeName.textContent,
            ingredients: ingredientInput.value
        })
            
        // if(arr[arr.length-3].trim() === "" || arr[arr.length-2].trim() === '') {
        //  return  closeForm()
        // }
        localStorage.setItem('ingredients', JSON.stringify(arr)) 
     
}
