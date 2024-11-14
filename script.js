const taskList = document.getElementById('task-list');
const inputField = document.getElementById('input-cont');
const createBtn = document.getElementById('create-btn');
const totalTasksCount = document.getElementById('p-total');
const completedTasksCount = document.getElementById('Completed-total');
const incompleteTasksCount = document.getElementById('incomplete-total');



// nueva
function addTask() {
  const taskText = inputField.value.trim(); // Trim whitespace
  if (taskText) { // Check if task is not empty
    const newTask = document.createElement('li');
    newTask.classList.add('tarea');

    // CreaR ELIMINAR
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-task-btn');
    deleteBtn.innerHTML = 'X';
    deleteBtn.addEventListener('click', function() {
      taskList.removeChild(newTask);
      updateCounters();
    });
    newTask.appendChild(deleteBtn);

    //DESCRIPCIOIN
    const taskDesc = document.createElement('p');
    taskDesc.id = 'task-desc';
    taskDesc.textContent = taskText;
    newTask.appendChild(taskDesc);

    // CreAR XHECKBOX Y BUTTON
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-task-btn');
    const checkboxLabel = document.createElement('label');
    checkboxLabel.classList.add('checkbox-btn');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';
    const checkmark = document.createElement('span');
    checkmark.classList.add('checkmark');
    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(checkmark);
    completeBtn.appendChild(checkboxLabel);
    newTask.appendChild(completeBtn);

    
    updateCounters();

   
    checkbox.addEventListener('change', function() {
      newTask.classList.toggle('tarea-completa');
      updateCounters();
    });

    taskList.appendChild(newTask);
    inputField.value = ''; // VACIAR INPUT AL FINAL
  } else {
    alert('Please enter a task!');
  }
}

// CONTADORES
function updateCounters() {
  let total = taskList.children.length;
  let completed = 0;
  for (const task of taskList.children) {
    if (task.classList.contains('tarea-completa')) {
      completed++;
    }
  }
  const incomplete = total - completed;
  totalTasksCount.textContent = `Total: ${total}`;
  completedTasksCount.textContent = `Completed: ${completed}`;
  incompleteTasksCount.textContent = `Incomplete: ${incomplete}`;
}


createBtn.addEventListener('click', addTask);

// ACTUALIZAR
updateCounters();



// Instrucciones:
// 1. Debe tener una función de agregar con una simple validación que verifique que la tarea no
// está vacía. SI
// 2. Debe poder eliminar las tareas. SI
// 3. Debe poder chequear las tareas (marcar como completadas).SI
// 4. Los contadores deben funcionar, debe mostrar el total de las tareas, las tareas completadas
// y las tareas incompletas.SI