import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_current_user } from '../profile/actions';
import TodoCard from './todo_card';

const mapStateToProps = (state) => {
  return {
    current_user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_current_user: () => dispatch(get_current_user)
  }
}

class Todo extends Component {

  static defaultProps = {
    task: 'Write a thank you letter to company',
    priority: 'High',
    status: 'Todo',
    notes: 'Do it before 3pm today.'
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.getUser()
    }
  }

  getUser = () => {
    this.props.get_current_user()
  }

  renderTodos = () => {
    if (this.props.current_user.current_user) {
      if (this.props.current_user.current_user.todos.length == 1) {
        return <TodoCard todo={this.props.current_user.current_user.todos[0]}/>
      } else if (this.props.current_user.current_user.todos.length > 1) {
        return this.props.current_user.current_user.todos.map( (todo, index) => <TodoCard key={index} todo={todo}/> )
      }
    } else {
      return (
        <div>
          <div>
            <h2>You must be logged in to see your to-do list.</h2>
            <h2>Example</h2>
          </div>
          <div className="exampleCompany">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{this.props.task}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.props.priority}</h6>
                <p className="card-text">{this.props.status}</p>
                <p className="card-text">{this.props.notes}</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="todo">
        <h1>To Do List</h1>
        <div className="displayTodos">
          {this.renderTodos()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
