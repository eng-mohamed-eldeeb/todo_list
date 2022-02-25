export default function checkboxs(id, checked) {
  const todoListString = localStorage.getItem('todoList');
  let todoList = JSON.parse(todoListString);
  todoList = todoList.map((e) => {
    if (e.id === id) {
      e.completed = checked;
    }
    return e;
  });
  const newTodoList = JSON.stringify(todoList);
  localStorage.setItem('todoList', newTodoList);
}