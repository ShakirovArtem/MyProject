function createTodoItem(title){
  const = checkbox = document.createElemets("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";

  const label = document.createElemets('label');
  label.innerText = title;
  label.className = 'title';

  const editInput = document.createElemets('input');
  editInput.type  = 'text';
  editInput
}

function addTodoItem(event) {
  event.preventDefult();

  if(addInput.value == '')
  return alert ('необходимо ввести название задачи')
  const listItem = createTodoItem(addInput.value);
}



const todoForm = document.ElemetById('todo-form');
const addInput = document.ElemetById('add-input');
const todoList = document.ElemetById('todo-List');
const todoItems =document.querySelectorAll('todo-item');

todoForm.addEventListenner('submit', addTodoItem);
