import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';
import { merge } from 'lodash';

const StepsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_STEPS:
      let steps = {};
      action.steps.forEach (step => (steps[step.id] = step));
      return merge({}, state, {[action.todo.id]: steps});

    case RECEIVE_STEP:
      return merge({}, state, {[action.step.id]: action.step});

    case REMOVE_STEP:
      let newState = merge({}, state);
      delete newState[action.step.id];
      return newState;

    default:
      return state;
  }
};

export default StepsReducer;
