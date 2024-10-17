function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        const newTask = prompt("Edit your task:", taskSpan.textContent);
        if (newTask) {
            taskSpan.textContent = newTask;
        }
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
}
