const deleteBtn = document.querySelectorAll('.del')
const ingredientItem = document.querySelectorAll('span.not')
const ingredientComplete = document.querySelectorAll('span.completed')

// assigning the name of the recipe text content a variable. 
const recipeName = document.querySelector('#recipeName').textContent.split(' ')[0]

// assigning variables for the cross all and uncross all buttons
const crossAllButton = document.querySelector('.crossAll')
const uncrossAllButton = document.querySelector('.uncrossAll')

// click events for the cross and uncross all buttons 
crossAllButton.addEventListener('click', crossAllIngredients)
uncrossAllButton.addEventListener('click', uncrossAllIngredients)

// callbacks that'll run on a the click events
async function crossAllIngredients() {

    try{
        const response = await fetch(`${recipeName}/markCompleteAll`, {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                // 'todoIdFromJSFile': ingredientId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
async function uncrossAllIngredients() {
    // const ingredientId = this.parentNode.dataset.id
    try{
        const response = await fetch(`${recipeName}/markIncompleteAll`, {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                // 'todoIdFromJSFile': ingredientId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}



Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteIngredient)
})

Array.from(ingredientItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(ingredientComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

async function deleteIngredient(){
    const ingredientId = this.parentNode.dataset.id
    try{
        const response = await fetch(`${ingredientId}/deleteIngredient`, {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': ingredientId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const ingredientId = this.parentNode.dataset.id
    try{
        const response = await fetch(`${ingredientId}/markComplete`, {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': ingredientId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const ingredientId = this.parentNode.dataset.id
    try{
        const response = await fetch(`${ingredientId}/markIncomplete`, {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': ingredientId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}