import React, { Component } from 'react';

export default class StepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {title: "", done: false};
  }

  titleChange(e) {
    this.setState({title: e.target.value});
  }

  save() {
    this.props.createStep(this.props.todo, {step: this.state});
    this.setState({title: "", body: ""});
  }

  render() {
    return (
      <div>
        <label>Step Name</label><br/>
        <input
          type="text"
          onChange={this.titleChange.bind(this)}
          value={this.state.title} /><br/>
        <button onClick={this.save.bind(this)}>Save</button>
      </div>
    );
  }
}
