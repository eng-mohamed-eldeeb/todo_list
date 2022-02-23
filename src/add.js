import todoList from './index.js'
const todoUL = document.querySelector('#todoUl');
todoUL.innerHTML = '';
export default function add(counter, todo, bool) {
    const li = {
        description: todo,
        completed: bool,
        index: counter
    };
    counter += 1;
    todoList.push(li);
    return counter;
}