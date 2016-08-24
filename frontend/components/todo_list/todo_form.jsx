import React, { Component } from 'react';

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: "", done: false};
  }

  titleChange(e) {
    this.setState({title: e.target.value});
  }

  bodyChange(e) {
    this.setState({body: e.target.value});
  }

  save() {
    this.props.createTodo({todo: this.state});
    this.setState({title: "", body: ""});
  }

  render() {
    return (
      <div>
        <label>Title</label><br/>
        <input
          type="text"
          onChange={this.titleChange.bind(this)}
          value={this.state.title} /><br/>
        <label>Body</label><br/>
        <textarea
          onChange={this.bodyChange.bind(this)}
          value={this.state.body} />
        <button onClick={this.save.bind(this)}>Save</button>
      </div>
    );
  }
}
