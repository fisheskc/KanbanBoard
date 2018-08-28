let taskList = ['Task 1', 'Task 2']

let addCard = () => {
    let userInput = document.getElementById('toDoInput').value
    console.log(userInput)
}

document.getElementById('addToDoCard').addEventListener('click', function(){
    addCard()
})