import './style.css';

const todoUL = document.querySelector('#todoUl');
const todoList = [
  {
    description: 'Go to work',
    completed: false,
    index: 0,
  },
  {
    description: 'Go to the supermarket',
    completed: false,
    index: 1,
  },
  {
    description: 'Eat',
    completed: false,
    index: 2,
  },
];

const todoLiCreation = (ul, list) => {
  list.forEach((e) => {
    const todoLi = `<li id='${e.index}'><input class="${e.completed}" type="checkbox"><p>${e.description}</p></li>`;
    ul.innerHTML += todoLi;
  });
};

todoLiCreation(todoUL, todoList);
