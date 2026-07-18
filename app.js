// State & Document Object Model (DOM) Target Setup
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Ingest initialization tasks from persistent browser local memory storage array
let tasks = JSON.parse(localStorage.getItem('saved_tasks')) || [];

// Render initial workspace array states
function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');

        li.innerHTML = `
            <span onclick="toggleComplete(${index})">${task.text}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">&times;</button>
        `;
        todoList.appendChild(li);
    });
    // Write runtime arrays back down into permanent memory
    localStorage.setItem('saved_tasks', JSON.stringify(tasks));
}

// Logic Handler: Append a task record and celebrate
function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === '') return;

    tasks.push({ text: taskText, completed: false });
    todoInput.value = '';
    renderTasks();

    // Trigger full-screen explosive confetti loop celebration!
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 } // Fires slightly below the screen center
    });
}

// Logic Handler: Toggle task record completion status
window.toggleComplete = function(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

// Logic Handler: Splice array memory keys to discard item
window.deleteTask = function(index) {
    tasks.splice(index, 1);
    renderTasks();
};

// Bind UI triggers to interactive script sequences
addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Run rendering pipeline baseline check loop
renderTasks();