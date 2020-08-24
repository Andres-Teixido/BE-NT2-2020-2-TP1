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

function addTodo() {
    //  Creo una tarea y la agrego en arrTareas
    let tareaNueva = {      
        estado: false,
        desc: 'Tarea_' + arrTareas.length
    };
    arrTareas.push(tareaNueva);

    let node = document.createElement("LI");  // Creo un elemento <li>
    let i = document.createElement("input"); // Creo un elemento <input type="checkbox">
    i.setAttribute("type", "checkbox");
    i.setAttribute("onclick","uncheckedCountSpan.innerHTML = countUnchecked()"); // Agreco onClick
    var textnode = document.createTextNode(" Tarea " + arrTareas.length); // Agrego descripcion

    node.appendChild(i);
    node.appendChild(textnode);
    list.appendChild(node);

    itemCountSpan.innerHTML = arrTareas.length;   // Cantidad de TAREAS
    uncheckedCountSpan.innerHTML = countUnchecked();  //  Cantidad de UNCHECKED
}

function countUnchecked() {
    let cantCH = 0;
    let lis = document.getElementsByTagName("input");
    let cant = lis.length;
    for (var i = 0; i < cant; i++) { 
      if(lis[i].checked){
        arrTareas[i].estado = true; // Actualizo el array con los CHECKED
        cantCH++;
      }
      //console.log(arrTareas[i]);
    }
    return cant - cantCH;
}