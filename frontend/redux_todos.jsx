import React from 'react';
import { render } from 'react-dom';
import utils from './util/todo_api_util';
import configureStore from './store/store';
import { allTodos } from './reducers/selector';
import { requestTodos } from './actions/todo_actions';

window.store = configureStore();
window.requestTodos = requestTodos;


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  render(<div>React is working!</div>, root);
});
