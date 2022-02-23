import './style.css';
import remove from './remove.js'
import add from './add.js';
import show from './show.js'
var counter = 0;
const todoUL = document.querySelector('#todoUl');
const todo = document.querySelector('.AddToList');
const form = document.getElementById('todoForm');
let todoList = [];

export default todoList;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  counter = add(counter, todo.value, false);
  show(todoUL)
  todo.value = '';
  console.log(todoList);
})

todoUL.addEventListener('click', (e) => {
  if (e.target.className.includes('delete')){
    todoList = remove(e.target.parentNode.className);
    show(todoUL);
    console.log(todoList)
}
})
