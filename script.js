let tasks = ['Task 1', 'Task 2', 'Task 3']

let removeFunction = () => {
    console.log(tasks)
}

document.getElementById('card').addEventListener('click', myFunction({
    removeFunction()
}));
