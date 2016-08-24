import { REQUEST_TODOS, RECEIVE_TODOS } from '../actions/todo_actions';


const TodosReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    default:
      return state;
  }


};

export default TodosReducer;
