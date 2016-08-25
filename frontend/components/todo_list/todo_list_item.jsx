import React, { Component } from 'react';
import TodoDetailView from './todo_detail_view_container';
class TodoListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {detail: false};

  }

  toggleDetail() {
    this.setState({detail: !this.state.detail});
  }

  render() {
     let { todo, toggle, destroy } = this.props;
    return (
      <li>
        {todo.title}
        <button onClick={toggle}>Toggle</button>

        <button onClick={this.toggleDetail.bind(this)}>{this.state.detail ? "Hide Details" : "Show Details" }</button>
        {this.state.detail ? <TodoDetailView todo={todo} destroy={destroy} /> : "" }
      </li>
    )
  }
};

export default TodoListItem;
