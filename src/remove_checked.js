export default function removeCecked() {
  const todoListString = localStorage.getItem('todoList');
  const todoList = JSON.parse(todoListString);
  const newtodoList = todoList.filter((todo) => todo.completed === false);
  const newTodoList = JSON.stringify(newtodoList);
  localStorage.setItem('todoList', newTodoList);
}