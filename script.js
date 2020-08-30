const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let arrTareas = [];

class TareaNueva {
  constructor() {
    this.estado = false;
    this.desc = "";
  }
}

function addTodo() {
    //  Creo una tarea
    miTarea = new TareaNueva();
    miTarea.estado = false;

    let node = document.createElement("LI");  // Creo un elemento <li>
    let inCheck = document.createElement("input"); // Creo un elemento <input type="checkbox">
    inCheck.setAttribute("type", "checkbox");
    inCheck.setAttribute("onclick","uncheckedCountSpan.innerHTML = countUnchecked()"); // Agreco onClick

    let titTarea = prompt("Ingresa el titulo de la tarea: ");
    const span = window.document.createElement('span');
    span.id = arrTareas.length;
    miTarea.desc = "Tarea_" + arrTareas.length + " " + titTarea;
  
    span.innerHTML = miTarea.desc;

    arrTareas.push(miTarea);

    span.onclick= function(){
      let titTareaNew = prompt("Modifica el titulo: ", miTarea.desc);
      let spNew = document.getElementById(span.id);
      console.log(spNew);
      spNew.innerHTML = titTareaNew;
    }

    node.appendChild(inCheck);
    node.appendChild(span);
    list.appendChild(node);

    itemCountSpan.innerHTML = arrTareas.length;   // Cantidad de TAREAS
    uncheckedCountSpan.innerHTML = countUnchecked();  //  Cantidad de UNCHECKED
}

function countUnchecked() {
    let cantUnchecked = 0;
    let lis = document.getElementsByTagName("input");
    let cant = lis.length;
    for (var i = 0; i < cant; i++) { 
      if(lis[i].checked){
          arrTareas[i].estado = true; // Actualizo el array con los CHECKED
      }else{
          arrTareas[i].estado = false; // Actualizo el array con los CHECKED
          cantUnchecked++;
      }
    }
    showArrayEnConsole();
    return cantUnchecked;
}

function showArrayEnConsole(){
  console.clear();
  for(let i = 0; i < arrTareas.length; i++){
    console.log("Estado["+i+"]= " + arrTareas[i].estado + " Desc: " + arrTareas[i].desc);
  };
};