export default function edit(y, todo) {
  const todoListString = localStorage.getItem('todoList');
  const todoList = JSON.parse(todoListString);
  todoList[y].description = todo;
  const newTodoList = JSON.stringify(todoList);
  localStorage.setItem('todoList', newTodoList);
  return todoList;
}
