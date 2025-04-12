
document.addEventListener("DOMContentLoaded", function () {
    let tasks = []; // array onde vamos guardar as tarefas

    let form = document.getElementById("idForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); 

        let activity = document.getElementById("txtActivity").value.trim();
        let description = document.getElementById("txtDescription").value.trim();
        let date = document.getElementById("txtData").value;
        let status = document.getElementById("idStatus").value;

        // Validação: todos os campos obrigatórios
        if (!activity || !description || !date || status === "Select an option") {
            alert(" Todos os campos são obrigatórios!");
            return;
        }

        // Validação: data atual ou futura
        let now = new Date();
        let inputDate = new Date(date);

        if (inputDate < now) {
            alert(" A data deve ser igual ou posterior à atual.");
            return;
        }

        let exists = tasks.some(task =>
            task.activity === activity &&
            task.date === date &&
            task.status === status
        );

        if (exists) {
            alert("Já existe uma tarefa com os mesmos dados.");
            return;
        }

        let task = {
            activity,
            description,
            date,
            status
        };

        tasks.push(task);

        createCard(task);

        form.reset();
    });

    function createCard(task) {
        let grid = document.getElementById("grid");

        let card = document.createElement("div");
        card.className = "card mt-3 p-3";

        card.innerHTML = `
            <h3>${task.activity}</h3>
            <p><strong>Descrição:</strong> ${task.description}</p>
            <p><strong>Data:</strong> ${task.date}</p>
            <p><strong>Status:</strong> ${task.status}</p>
        `;

        grid.appendChild(card);
    }
    
});
