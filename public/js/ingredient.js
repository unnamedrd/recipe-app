const deleteBtn = document.querySelectorAll('.del')
const ingredientItem = document.querySelectorAll('span.not')
const ingredientComplete = document.querySelectorAll('span.completed')

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