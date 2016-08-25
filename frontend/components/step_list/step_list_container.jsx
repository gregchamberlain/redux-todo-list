import {connect} from 'react-redux';
import StepList from './step_list';
import {createStep} from '../../actions/step_actions';
import { allSteps } from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {
  return {
    steps: allSteps(state.steps[ownProps.todo.id] || {})
  };
};

const mapDispatchToProps = (dispatch) => ({
  createStep: (todo, step) => dispatch(createStep(todo, step))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(StepList);
