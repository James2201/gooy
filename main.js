// My Tasks Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let tasksEl = document.getElementById('tasks');

let tasks = loadtasks();
displayall();

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'add') {
    addTask();
  } else if (selection === 'toggle') {
    toggleTask();
  } else if (selection === 'remove') {
    removeTask();
  } else if (selection === 'clear') {
    clearAll();
  }
}

// MENU FUNCTIONS
function addTask() {
  let description = prompt("enter task");
  tasks.push(newtask(description));
  tasksEl.innerHTML = `task added: ${description}`;
  savetasks();
  displayall();
}

function toggleTask() {
  let index = +prompt("enter number of task:");
  let task = tasks[index];
  if (task.completed === ""){
    task.completed = "completed";
  } else {
    task.completed = ""
  }
  displayall();
}

function removeTask() {
  console.log('Remove Task');
}

function clearAll() {
  console.log('Clear All');
}

function newtask(taskdescription){
  return {
    description: taskdescription,
    completed: ''
  };
}

function displayall(){
  let outputstr = '';
  for (let i = 0; i < tasks.length; i++){
    outputstr += gettaskhtmlstr(tasks[i], i);
  }
  tasksEl.innerHTML = outputstr;
}

function gettaskhtmlstr(task, i){
  return `
    <div class = "${task.completed}">
      ${i}: ${task.description}
    </div>
  `
}

function savetasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadtasks(){
  let tasksstr = localStorage.getItem('tasks');  
  return JSON.parse(tasksstr) ?? [];   
}
