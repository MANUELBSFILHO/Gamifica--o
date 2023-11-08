document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task");
    let points = 0;
    let level = 1;

    addTaskButton.addEventListener("click", function() {
        const taskText = prompt("Digite a descrição da tarefa:");
        if (taskText) {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;

            // Adicionar um botão para marcar como concluído
            const completeButton = document.createElement("button");
            completeButton.textContent = "Concluído";
            completeButton.addEventListener("click", function() {
                if (!taskItem.classList.contains("completed")) {
                    taskItem.classList.add("completed");
                    points += 10; // Ganhe 10 pontos por tarefa concluída
                    updatePointsAndLevel(); // Atualize a contagem de pontos e níveis
                }
            });

            taskItem.appendChild(completeButton);

            // Simplesmente adicione a tarefa à lista
            taskList.appendChild(taskItem);
        }
    });

    function updatePointsAndLevel() {
        // Atualizar os pontos e o nível
        const pointsDisplay = document.getElementById("points");
        const levelDisplay = document.getElementById("level");

        pointsDisplay.textContent = `Pontos: ${points}`;
        levelDisplay.textContent = `Nível: ${level}`;

        if (points >= 100) {
            level++; // Aumente o nível a cada 100 pontos
            points = 0; // Reinicie os pontos a cada nível
        }
    }

    // Atualizar a contagem de pontos e níveis
    updatePointsAndLevel();
});
