document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener("click", function() {
        const taskText = prompt("Digite a descrição da tarefa:");
        if (taskText) {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            // Simplesmente adicione a tarefa à lista
            taskList.appendChild(taskItem);
        }
    });

    taskList.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("completed");
        }
    });
});
