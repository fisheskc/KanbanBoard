const addButton = document.getElementById('addCard')
const input = document.getElementById('input')
const list = document.getElementById('list')

let newTask;
let remove;

let taskList = []

let addFunction = (i) => {
    let userInput = input.value

    remove = document.createElement('button')
    newTask = document.createElement('li')

    remove.innerHTML = "🗑️"

    newTask.textContent = userInput

    newTask.appendChild(remove)
    list.appendChild(newTask)

    taskList.push(newTask)

    for (i = 0; i < taskList.length; i++) {
        let taskValue = taskList[i].innerHTML;
        taskList[i].id = i;
        console.log(taskList)

        trash = taskList[i].children[0]
        trash.id = i
    }
}

let removeFunction = () => {
    console.log("It works!")
}

addButton.addEventListener("click", function () {
    addFunction();
})

document.addEventListener('click', function (e, i) {
    if (e.target.id == `${i}`) {
        removeFunction()
    }
})