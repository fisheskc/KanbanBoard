const input = document.getElementById('input');
const list = document.getElementById('list');
const submit = document.getElementById('addCard');

let task;
let remove;
let edit;

const createTask = () => {
    task = document.createElement('li');
    task.textContent = input.value;
}

const removeTask = () => {
    list.removeChild(event.target.parentNode);
}

const removeButton = () => {
    remove = document.createElement('button');
    remove.innerHTML = "🗑️";

    remove.style.marginLeft = "20px"
    remove.style.marginBottom = "10px"
    remove.style.border = "none"
    remove.style.outline = "none"

    remove.addEventListener("click", () => {
        removeTask()
    });
}

const editButton = () => {
    edit = document.createElement('button')
    edit.innerHTML = '✎'

    edit.style.marginLeft = "20px"
    edit.style.border = "none"
    edit.style.outline = "none"
}

const addTask = () => {
    removeButton();
    createTask();
    editButton()
    task.appendChild(remove);
    remove.appendChild(edit)
    list.appendChild(task);
}

submit.addEventListener("click", addTask);