import {combineReducers} from 'redux';
import TodosReducer from './todos_reducer';
import StepsReducer from './steps_reducer';



export default combineReducers({
  todos: TodosReducer,
  steps: StepsReducer
});
