export default function show(ul) {
  const todoListString = localStorage.getItem('todoList');
  const todoList = JSON.parse(todoListString);
  if (todoList) {
    ul.innerHTML = '';
    for (let i = 0; i < todoList.length; i += 1) {
      for (let i = 0; i < todoList.length; i += 1) {
        todoList[i].id = i;
      }
      const todoLi = document.createElement('li');
      const dev = document.createElement('dev');
      const input = document.createElement('input');
      const task = document.createElement('p');
      const delet = '<i id="delete" class="delete fa-solid fa-trash-can"></i>';
      const edit = '<i id="edit" class="edit fa-solid fa-pen-to-square"></i>';
      // set attributes
      todoLi.setAttribute('id', `${todoList[i].id}`);
      todoLi.setAttribute('class', 'befor');
      input.setAttribute('type', 'checkbox');
      console.log(todoList[i].completed);
      if (todoList[i].completed) {
        input.setAttribute('checked', true);
      }
      input.setAttribute('class', `${todoList[i].completed}`);
      dev.setAttribute('class', 'cont');
      task.innerText = todoList[i].description;

      // append elements
      dev.appendChild(input);
      dev.appendChild(task);
      todoLi.appendChild(dev);
      todoLi.innerHTML += delet;
      todoLi.innerHTML += edit;
      ul.appendChild(todoLi);
    }
    const newTodoList = JSON.stringify(todoList);
    localStorage.setItem('todoList', newTodoList);
  }
}
