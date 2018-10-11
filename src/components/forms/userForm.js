import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class UserForm extends Component {

  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = (e) => {
    e.persist()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
    }
    console.log(newUser);
  }

  handleSignup = (e) => {
    e.preventDefault()
  }

  userHasAccount = () => {
    return (
      <div className="userForm">
        <Form onSubmit={this.handleLogin}>
          <Form.Field>
            <h1 className="formHeader">Log In</h1>
            <div className="formInputs">
              <div>
                <label>Username</label>
                <input type="text" onChange={this.handleChange} name="username" value={this.state.username}/>
              </div>
              <div>
                <label>Password</label>
                <input type="password" onChange={this.handleChange} name="password" value={this.state.password}/>
              </div>
            </div>
          </Form.Field>
        </Form>
        <div className='formButtons'>
          <Button.Group>
            <Button onClick={this.props.handleHide}>Cancel</Button>
            <Button.Or />
            <Button positive onClick={this.handleLogin}>Submit</Button>
          </Button.Group>
        </div>
      </div>
    )
  }

  userNoAccount = () => {
    return (
      <div className="userForm">
        <Form onSubmit={this.handleLogin}>
          <Form.Field>
            <h1 className="formHeader">Sign Up</h1>
            <div className="formInputs">
              <div>
                <label>Username</label>
                <input type="text" onChange={this.handleChange} name="username" value={this.state.username}/>
              </div>
              <div>
                <label>Password</label>
                <input type="password" onChange={this.handleChange} name="password" value={this.state.password}/>
              </div>
              <div>
                <label>Confirm Password</label>
                <input type="password" onChange={this.handleChange} name="confirmPassword" value={this.state.confirmPassword}/>
              </div>
            </div>
          </Form.Field>
        </Form>
        <div className='formButtons'>
          <Button.Group>
            <Button onClick={this.props.handleHide}>Cancel</Button>
            <Button.Or />
            <Button positive onClick={this.handleLogin}>Submit</Button>
          </Button.Group>
        </div>
      </div>
    )
  }

  render() {
    return (
        this.props.hasAccount
        ? this.userHasAccount()
        : this.userNoAccount()
    )
  }
}

export default UserForm;