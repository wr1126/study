const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

let arr = [];

function paintTodo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function deleteTodo(todo) {
  const target = todo.target.parentNode;
  target.remove();
  const newArr = arr.filter((item) => item.id !== parseInt(target.id));
  arr = newArr;
  saveTodo(newArr);
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(arr));
}

function handleSubmit(event) {
  event.preventDefault();
  const randomId = Date.now();
  const todoObj = {
    id: randomId,
    text: input.value,
  };
  arr.push(todoObj);
  paintTodo(todoObj);
  saveTodo(todoObj);
  input.value = "";
}

form.addEventListener("submit", handleSubmit);

if (localStorage.length !== 0) {
  arr = JSON.parse(localStorage.getItem("todos"));
  arr.forEach(paintTodo);
}
