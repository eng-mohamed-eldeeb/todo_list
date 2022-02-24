// import todoList from './index.js'



// const Current = localStorage.getItem('books');
// bookArray = JSON.parse(Current);
// bookArray.push(this);
// const newList = JSON.stringify(bookArray);
// localStorage.setItem('books', newList);



const todoUL = document.querySelector("#todoUl");
todoUL.innerHTML = "";
export default function add(counter, todo, bool) {
const todoListString = localStorage.getItem("todoList");
let todoList = JSON.parse(todoListString);
  const li = {
    description: todo,
    completed: bool,
    index: counter + 1,
  };
  counter += 1;
  todoList.push(li);
  const newTodoList = JSON.stringify(todoList);
  localStorage.setItem("todoList", newTodoList);
  return counter;
}
