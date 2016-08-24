import { REQUEST_TODOS, RECEIVE_TODOS, receiveTodos } from '../actions/todo_actions';
import { fetchTodos } from '../util/todo_api_util';



const TodoMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case REQUEST_TODOS:

    const success = (data) => dispatch(receiveTodos(data));
    fetchTodos(success);
    next(action);
      break;
    default:
      next(action);
  }
};

export default TodoMiddleware;
