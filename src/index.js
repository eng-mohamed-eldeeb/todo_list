import './style.css';
import remove from './remove.js';
import add from './add.js';
import show from './show.js';
import viewInput from './viewInput.js';
import edit from './edite.js';
import checkboxs from './check.js';
import removeCecked from './remove_checked.js';

let counter = 0;
const todoUL = document.querySelector('#todoUl');
const todo = document.querySelector('.AddToList');
const form = document.getElementById('todoForm');
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
    remove(e.target.parentNode.className);
    show(todoUL);
  }
  if (e.target.className.includes('edit')) {
    viewInput(e.target.parentNode, e.target.parentNode.className);
    const antherForm = document.getElementById('editForm');
    antherForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = document.querySelector('.newAddToList');
      edit(e.target.parentNode.className, val.value);
      show(todoUL);
    });
  }
  const inputs = document.querySelectorAll('.cont input');

  inputs.forEach((input) => {
    input.addEventListener('change', (e) => {
      checkboxs(e.target.parentNode.parentNode.id, e.target.checked);
    //  show(todoUL);
    });
  });
});

const span = document.querySelector('.clearSpan');

span.addEventListener('click', () => {
  removeCecked();
  show(todoUL);
});
