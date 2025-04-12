const form = document.getElementById("idForm");
const taskGrid = document.getElementById("grid");

let tasks = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("txtActivity").value.trim();
    const description = document.getElementById("txtDescription").value.trim();
    const dateInput = document.getElementById("txtData").value;
    const status = document.getElementById("idStatus").value;

    if (!title || !description || !dateInput || status === "Select an option") {
        alert("Todos os campos são obrigatórios!");
        return;
    }

    const taskDate = new Date(dateInput);
    const now = new Date();

    if (taskDate < now.setHours(0, 0, 0, 0)) {
        alert("A data tem de ser igual ou posterior à data atual.");
        return;
    }

    const exists = tasks.some(task =>
        task.title === title && task.description === description && task.date === dateInput && task.status === status
    );

    if (exists) {
        alert("Essa tarefa já existe!");
        return;
    }

    const task = {
        title,
        description,
        date: dateInput,
        status
    };

    tasks.push(task);
    renderTasks();
    form.reset();
});

function renderTasks(filterStatus = null) {
    taskGrid.innerHTML = ""; // Limpa o conteúdo antes de renderizar

    let filteredTasks = [...tasks];

    if (filterStatus) {
        filteredTasks = filteredTasks.filter(task => task.status === filterStatus);
    }

    // Ordenar por data (mais antigo primeiro)
    filteredTasks.sort((a, b) => new Date(a.date) - new Date(b.date));

    filteredTasks.forEach(task => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.backgroundColor = getStatusColor(task.status, task.date);

        card.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>${new Date(task.date).toLocaleString()}</p>
            <p>${task.status}</p>
            <button class="btn btn-danger btn-sm" onclick="deleteTask('${task.title}', '${task.date}')">X</button>
        `;

        taskGrid.appendChild(card);
    });
}

function getStatusColor(status, date) {
    const taskDate = new Date(date);
    const now = new Date();

    if (taskDate < now && status === "Done") {
        return "red"; // Vermelho se a tarefa estiver com data no passado e status "Done"
    }

    switch (status) {
        case "ToDo List": return "lightgreen";
        case "In Progress": return "lightblue";
        case "In Review": return "khaki";
        case "Done": return "lightgray";
        default: return "white";
    }
}

window.deleteTask = function (title, date) {
    tasks = tasks.filter(task => !(task.title === title && task.date === date));
    renderTasks();
}

// Filtro por status
const statusFilter = document.createElement("select");
statusFilter.innerHTML = `
    <option value="">Todos</option>
    <option value="ToDo List">ToDo List</option>
    <option value="In Progress">In Progress</option>
    <option value="In Review">In Review</option>
    <option value="Done">Done</option>
`;
statusFilter.classList.add("form-control", "my-2", "w-25", "mx-auto");
statusFilter.addEventListener("change", () => {
    renderTasks(statusFilter.value);
});

document.body.insertBefore(statusFilter, taskGrid);
