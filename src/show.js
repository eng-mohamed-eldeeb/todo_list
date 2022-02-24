// import todoList from "./index.js";

export default function show(ul) {
const todoListString = localStorage.getItem("todoList");
let todoList = JSON.parse(todoListString);
if(todoList){
  ul.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    // create element
    const todoLi = document.createElement("li");
    const dev = document.createElement("dev");
    const input = document.createElement("input");
    const task = document.createElement("p");
    const delet = `<i id="delete" class="delete fa-solid fa-trash-can"></i>`;
    // add attributes
    todoLi.setAttribute("class", `${todoList[i].index}`);
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", `${todoList[i].completed}`);
    dev.setAttribute("class", "cont");
    task.innerText = todoList[i].description;

    // append elements
    dev.appendChild(input);
    dev.appendChild(task);
    todoLi.appendChild(dev);
    todoLi.innerHTML += delet;
    ul.appendChild(todoLi);
  }
  const newTodoList = JSON.stringify(todoList);
  localStorage.setItem("todoList", newTodoList);
}
}
