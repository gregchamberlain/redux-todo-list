import React, { Component } from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.requestSteps(this.props.todo);
  }

  render() {
    return (
      <div>
        <div>{this.props.todo.body}</div>
        <button onClick={this.props.destroy}>Destroy</button>
        <StepListContainer todo={this.props.todo} />
      </div>
    );
  }
}

export default TodoDetailView;
