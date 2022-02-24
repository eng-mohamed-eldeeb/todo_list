export default function remove(ind) {
  const todoListString = localStorage.getItem('todoList');
  const todoList = JSON.parse(todoListString);
  todoList.splice(ind, 1);
  for (let i = 0; i <= todoList.length - 1; i += 1) {
    const ii = i + 1;
    todoList[i].index = ii;
  }
  const newTodoList = JSON.stringify(todoList);
  localStorage.setItem('todoList', newTodoList);
  return todoList;
}