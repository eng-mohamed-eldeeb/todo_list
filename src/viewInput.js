export default function viewInput(li, val) {
  const todoListString = localStorage.getItem('todoList');
  const todoList = JSON.parse(todoListString);
  // ctreate a form
  const form = document.createElement('form');
  const input = document.createElement('input');
  form.setAttribute('id', 'editForm');
  input.setAttribute('class', 'newAddToList');
  input.setAttribute('type', 'text');
  input.setAttribute('value', `${todoList[val].description}`);
  // append child elements
  form.appendChild(input);
  li.appendChild(form);
}