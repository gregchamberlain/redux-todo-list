import {
  REQUEST_TODOS,
  RECEIVE_TODOS,
  receiveTodos,
  CREATE_TODO,
  UPDATE_TODO,
  DESTROY_TODO,
  receiveTodo,
  removeTodo
} from '../actions/todo_actions';
import {
  fetchTodos,
  createTodo,
  updateTodo,
  destroyTodo
} from '../util/todo_api_util';



const TodoMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case REQUEST_TODOS:
      const success = (data) => dispatch(receiveTodos(data));
      fetchTodos(success);
      next(action);
      break;

    case CREATE_TODO:
      const todoSuccess = (data) => dispatch(receiveTodo(data));
      createTodo(action.todo, todoSuccess);
      next(action);
      break;

    case UPDATE_TODO:
      const updateSuccess = (todo) => dispatch(receiveTodo(todo));
      updateTodo(action.todo, updateSuccess);
      next(action);
      break;
    case DESTROY_TODO:
      const destroySuccess = (todo) => dispatch(removeTodo(todo.id));
      destroyTodo(action.todoId, destroySuccess);
      next(action);
      break;
    default:
      next(action);
  }
};

export default TodoMiddleware;
