// My Tasks Basic
// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let tasksEl = document.getElementById('tasks');

let tasks = loadcontacts();
displayall();

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'add') {
    addcontacts();
  } else if (selection === 'toggle') {
    namecontacts();
  } else if (selection === 'remove') {
    removecontacts();
  } else if (selection === 'clear') {
    clearAll();
  }
}

// MENU FUNCTIONS
function addcontacts() {
  let name = prompt("enter task");
  let number = prompt("enter a number");
  let email = prompt("enter thier email");
  let contry = prompt ("engter the contry");
  tasks.push(newtask(name + number + email + contry));
  tasksEl.innerHTML = `task added`;
  savecontacts();
}

function namecontacts() {
    let divstr = "";
  let index = +prompt("enter name of contacts:");
  let contacts = contacts[index];
  for (let i = 0; i < contacts.length; i++){
    if (contacts.name[i].includes(index.value) ){
      divstr += `<div> ${contacts[i]}</div>`
    }
  }
  savetasks();
}

function removecontacts() {
  let index = +prompt("enter the number of the contact");
  if (index >= 0 && index < contacts.length){
    contacts.splice(index, 1);
    savetasks();
  } else {
    alert("invalid task number");
  }
}

function clearAll() {
  tasks = [];
  savetasks();
  displayall();
}

function newtask(name, number, email, contry){
  return {
    name: name,
    number: number,
    email: email,
    contry: contry,
  };
}

function displayall(){
  let outputstr = '';
  for (let i = 0; i < contacts.length; i++){
    outputstr += gettaskhtmlstr(contacts[i], i);
  }
  tasksEl.innerHTML = outputstr;
}

function gettaskhtmlstr(task, i){
  return `
    <div>
      ${i}: ${contacts.name + contacts.number + contacts.email + contacts.contry}
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