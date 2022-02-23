import todoList from './index.js'

export default function remove(ind) {
    todoList.splice(ind-1, 1);
    for (let i = 0; i <= todoList.length -1; i = i +1) {
        const ii = i + 1;
        todoList[i].index = ii;
    }
    return todoList;
}