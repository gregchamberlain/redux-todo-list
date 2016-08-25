export const REQUEST_STEPS = 'REQUEST_STEPS';
export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const CREATE_STEP = 'CREATE_STEP';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const UPDATE_STEP = 'UPDATE_STEP';
export const DESTROY_STEP = 'DESTROY_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';

export const requestSteps = (todo) => ({
  type: REQUEST_STEPS,
  todo
});

export const receiveSteps = (todo, steps) => ({
  type: RECEIVE_STEPS,
  todo,
  steps
});

export const createStep = (todo, step) => ({
  type: CREATE_STEP,
  todo,
  step
});

export const receiveStep = (todo, step) => ({
  type: RECEIVE_STEP,
  todo,
  step
});

export const toggleStep = (step) => ({
  type: UPDATE_STEP,
  step: Object.assign({}, step, {done: !step.done})
});

export const destroyStep = (step) => ({
  type: DESTROY_STEP,
  step
});

export const removeStep = (step) => ({
  type: REMOVE_STEP,
  step
});
