import React, { Component } from 'react';

class TodoDetailView extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>{this.props.todo.body}</div>
    );
  }
}

export default TodoDetailView;
