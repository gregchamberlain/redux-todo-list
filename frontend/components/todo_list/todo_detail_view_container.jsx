import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';
import {destroyTodo} from '../../actions/todo_actions';
import {requestSteps} from '../../actions/step_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  destroyTodo: (todo) => dispatch(destroyTodo(todo.id)),
  requestSteps: (todo) => dispatch(requestSteps(todo))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TodoDetailView);
