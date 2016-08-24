import React, { Component } from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
export default class TodoList extends Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {

    const todos = this.props.todos.map(todo => (
      <TodoListItem
        destroy={this.props.destroyTodo.bind(this, todo)}
        toggle={this.props.toggleTodo.bind(this, todo)}
        todo={todo}
        key={todo.id} />
    ));

    return (
      <div>
        <TodoForm createTodo={this.props.createTodo}/>
        <ul>
          {todos}
        </ul>
    </div>
    );
  }
}
