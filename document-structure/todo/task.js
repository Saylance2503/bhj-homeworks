const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

function createTask(title) {
  const task = document.createElement('div');
  task.classList.add('task');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task__title');
  taskTitle.textContent = title;

  const removeButton = document.createElement('a');
  removeButton.href = '#';
  removeButton.classList.add('task__remove');
  removeButton.innerHTML = '&times;';

  task.appendChild(taskTitle);
  task.appendChild(removeButton);

  return task;
}

function addTask(event) {
  event.preventDefault();

  const title = taskInput.value.trim();

  if (title !== '') {
    const newTask = createTask(title);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

function removeTask(event) {
  if (event.target.classList.contains('task__remove')) {
    const task = event.target.parentNode;
    taskList.removeChild(task);
  }
}

taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
