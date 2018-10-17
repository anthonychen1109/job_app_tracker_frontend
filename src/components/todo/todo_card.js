import React, { Component } from 'react';

class TodoCard extends Component {
  render() {
    return (
      <div className="todoDiv">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.todo.todos.task}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.todo.todos.priority}</h6>
            <p className="card-text">{this.props.todo.todos.status}</p>
            <p className="card-text">{this.props.todo.todos.notes}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoCard;
