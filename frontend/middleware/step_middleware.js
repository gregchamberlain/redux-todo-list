import {
  REQUEST_STEPS,
  RECEIVE_STEPS,
  receiveSteps,
  CREATE_STEP,
  UPDATE_STEP,
  DESTROY_STEP,
  receiveStep,
  removeStep
} from '../actions/step_actions';
import {
  fetchSteps,
  createStep,
  updateStep,
  destroyStep
} from '../util/step_api_util';

const StepMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case REQUEST_STEPS:
      const success = (data) => dispatch(receiveSteps(action.todo, data));
      fetchSteps(action.todo, success);
      next(action);
      break;

    case CREATE_STEP:
      console.log(action);
      const todoSuccess = (data) => dispatch(receiveStep(action.todo, data));
      createStep(action.todo, action.step, todoSuccess);
      next(action);
      break;

    case UPDATE_STEP:
      const updateSuccess = (step) => dispatch(receiveStep(step));
      updateStep(action.step, updateSuccess);
      next(action);
      break;
    case DESTROY_STEP:
      const destroySuccess = (step) => dispatch(removeStep(step));
      destroyStep(action.step.id, destroySuccess);
      next(action);
      break;
    default:
      next(action);
  }
};

export default StepMiddleware;
