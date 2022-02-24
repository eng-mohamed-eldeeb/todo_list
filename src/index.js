import './style.css';
import remove from './remove.js';
import add from './add.js';
import show from './show.js';
import edit from './edite.js'
import viewInput from './viewInput.js';
let counter = 0;
const todoUL = document.querySelector('#todoUl');
const todo = document.querySelector('.AddToList');
const form = document.getElementById('todoForm');
let todoList = [];
show(todoUL);
// export default todoList;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  counter = add(counter, todo.value, false);
  show(todoUL);
  todo.value = '';
});

todoUL.addEventListener('click', (e) => {
  if (e.target.className.includes('delete')) {
    todoList = remove(e.target.parentNode.className);
    show(todoUL);
  }
  if (e.target.className.includes('edit')) {
    viewInput(e.target.parentNode, e.target.parentNode.className);
    const antherForm = document.getElementById('editForm');
    antherForm.addEventListener('submit',(e) => {
      e.preventDefault();
      const val = document.querySelector('.newAddToList')
      console.log(val.value);
      todoList = edit( e.target.parentNode.className, val.value);
      show(todoUL);
    })
  }
});
