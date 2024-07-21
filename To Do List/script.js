const button = document.querySelector("button");

function addTask() {
    const newTask = document.createElement("li");
    const taskList = document.getElementById("taskList");
    newTask.textContent = document.getElementById("inputTask").value;
    
    taskList.appendChild(newTask);
    document.getElementById("inputTask").value = "";

    deleteTask(newTask);
}

button.addEventListener("click", addTask);

function deleteTask(newTask) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    newTask.appendChild(deleteButton);
    deleteButton.onclick = function(){
        newTask.remove();
    }
}