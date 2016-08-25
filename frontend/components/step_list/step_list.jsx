import React, { Component } from 'react';
import StepListItem from './step_list_item';
import StepForm from './step_form';

class StepList extends Component {

  render() {
    const steps = this.props.steps.map(step => (
      <StepList key={step.id} step={step} />
    ));
    return (
      <div>
        <ul>
          {steps}
        </ul>
        <StepForm todo={this.props.todo} createStep={this.props.createStep} />
      </div>
    );
  }
}
export default StepList;
