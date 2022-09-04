const deleteBtn = document.querySelectorAll('.del')
// const recipeItem = document.querySelectorAll('span.not')
const recipeSpan = document.querySelectorAll('.recipeTitle')



Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

// Array.from(recipeSpan).forEach((el)=>{
//     el.addEventListener('click', openThread)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
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

// Add Recipe Form
document.querySelector('.openForm').addEventListener('click', openForm)
document.querySelector('.closeForm').addEventListener('click', closeForm)

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// async function openThread() {
//     // const threadTitle = document.querySelectorAll('.recipeTitle')

//     // const comment = document.getElementById('postToRender').textContent

//     // const commentContent = document.querySelector('.postRender').textContent
//     const commentContent = this.parentNode.parentNode.childNodes[1].innerText

//     console.log(commentContent)

//     threadTitle.appendChild(threadTitle.innerText)
//     localStorage.setItem('thread',commentContent)
    
// }

// async function markComplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }