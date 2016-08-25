import React from 'react';

const StepListItem = ({ step, toggle, destroy }) => (
  <div>
    {step.title}
    <button onClick={toggle.bind(null, step)}>Toggle</button>
    <button onClick={destroy.bind(null, step)}>Destroy</button>
  </div>
);

export default StepListItem;
