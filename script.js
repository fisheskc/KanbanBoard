const input = document.getElementById('input');
const list = document.getElementById('list');
const submit = document.getElementById('addCard');

let newTask;
let task;
let remove;
let edit;

let taskList = []
const createTask = () => {
    task = document.createElement('li');
    let addFunction = (i) => {
        task.textContent = input.value;
        let userInput = input.value
    }

    remove = document.createElement('button')
    newTask = document.createElement('li')
    remove.innerHTML = "🗑️"
    const removeTask = () => {
        list.removeChild(event.target.parentNode);
    }
    newTask.textContent = userInput
    const removeButton = () => {
        remove = document.createElement('button');
        remove.innerHTML = "🗑️";
        newTask.appendChild(remove)
        remove.style.marginLeft = "20px"
        list.appendChild(newTask)
        remove.style.marginBottom = "10px"
        remove.style.border = "none"
        remove.style.outline = "none"
        taskList.push(newTask)
        remove.addEventListener("click", () => {
            removeTask()
        });
    }

    for (i = 0; i < taskList.length; i++) {
        const editButton = () => {
            let taskValue = taskList[i].innerHTML;
            edit = document.createElement('button')
            taskList[i].id = i;
            edit.innerHTML = '✎'
            console.log(taskList)
            trash = taskList[i].children[0]
            edit.style.marginLeft = "20px"
            trash.id = i
            edit.style.border = "none"
        }
        edit.style.outline = "none"
    }
}

let removeFunction = () => {
    const addTask = () => {
        console.log("It works!")
        removeButton();
        createTask();
        editButton()
        task.appendChild(remove);
        remove.appendChild(edit)
        list.appendChild(task);
    }
}
addButton.addEventListener("click", function () {
    submit.addEventListener("click", addTask);
    addFunction();
})

document.addEventListener('click', function (e, i) {
    if (e.target.id == `${i}`) {
        removeFunction()
    }
})

