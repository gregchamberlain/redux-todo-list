import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selector';
import { requestTodos, createTodo, destroyTodo, toggleTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state.todos)
});

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  requestTodos: () => dispatch(requestTodos()),
  destroyTodo: (todo) => dispatch(destroyTodo(todo.id)),
  toggleTodo: (todo) => dispatch(toggleTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
