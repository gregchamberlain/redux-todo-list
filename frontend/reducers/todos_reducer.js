import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

const TodosReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      let todos = {};
      action.todos.forEach (todo => (todos[todo.id] = todo));
      return todos;

    case RECEIVE_TODO:
      return merge({}, state, {[action.todo.id]: action.todo});

    case REMOVE_TODO:
      console.log(action.todoId);
      let newState = merge({}, state);
      delete newState[action.todoId];
      return newState;

    default:
      return state;
  }
};

export default TodosReducer;
