import {connect} from 'react-redux';
import StepListItem from './step_list_item';
import { toggleStep, destroyStep } from '../../actions/step_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (step) => dispatch(toggleStep(step)),
  destroy: (step) => dispatch(destroyStep(step))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(StepListItem);
