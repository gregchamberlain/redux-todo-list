import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createTodo } from './actions/todo_actions';
const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  render(<Root store={store} />, root);
});


window.store = store;
window.createTodo = createTodo;
