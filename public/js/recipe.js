const deleteBtn = document.querySelectorAll('.del')
// const recipeItem = document.querySelectorAll('span.not')
const recipeSpan = document.querySelectorAll('.recipeTitle')
const recipeForm = document.querySelector('.recipeForm')


Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteRecipe)
})


async function deleteRecipe(){
    const todoId = this.parentNode.parentNode.parentNode.parentNode.dataset.id
    console.log(todoId)
    try{
        const response = await fetch('recipes/deleteRecipe', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

// Recipe Form
document.querySelector('.openForm').addEventListener('click', openForm)
document.querySelector('.closeForm').addEventListener('click', closeForm)

function openForm() {
    document.getElementById("myForm").classList.toggle('hidden')
}
function closeForm() {
    document.getElementById("myForm").classList.add('hidden')
}