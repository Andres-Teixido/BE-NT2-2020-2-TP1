const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function addTodo() {
  //alert('Boton Add TODO clickeado!')
    let pos = 1;
    let node = document.createElement("LI");  // Create a <li> node
    let i = document.createElement("INPUT");
    i.setAttribute("type", "checkbox");
    node.appendChild(i);
    list.appendChild(node);     // Append <li> to <ul> with
}
