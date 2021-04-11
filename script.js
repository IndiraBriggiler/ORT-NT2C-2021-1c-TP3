const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
let id = 0;
let count = 0;
let countUnchecked = 0;

function addTodo() {
  const texto = prompt("Ingrese una tarea");
  if (texto !== null) {
    count++;
    countUnchecked++;
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var li = document.createElement("li");
    var label = document.createElement("label");
    var t = document.createTextNode(texto);
    li.appendChild(label);
    label.appendChild(checkbox);
    label.appendChild(t);
    document.getElementById("todo-list").appendChild(li);
    label.setAttribute("class", "labelCheckbox");
    checkbox.setAttribute("class", "checkbox");

    li.setAttribute("id", id);
    itemCountSpan.innerHTML = count;
    uncheckedCountSpan.innerHTML = countUnchecked;
    id++;
    checkbox.onchange = toggle;
  }
}

function toggle(e) {
  if (e.target.checked) {
    countUnchecked = countUnchecked - 1;
  } else {
    countUnchecked++;
  }
  uncheckedCountSpan.innerHTML = countUnchecked;
}
