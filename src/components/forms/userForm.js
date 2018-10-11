import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class UserForm extends Component {

  state = {
    id: '',
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
    fetch('http://localhost:8000/token-auth/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(newUser)
    })
    .then( r => r.json() )
    .then( json => {
      if (json.user) {
        localStorage.setItem('token', json.token)
        this.setState({
          id: json.user.id,
          username: json.user.username
        }, () => this.loggedInUser(this.state));
      }
    })
  }

  loggedInUser = (user) => {
    this.props.handleHide()
    this.props.history.push({
      pathname: `/profiles/${this.state.id}`,
      state: {
        id: this.state.id,
        username: this.state.username
      }
    })
  }


  handleSignUp = (e) => {
    e.preventDefault()
    this.props.handleHide()
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }
    if (this.state.password === this.state.confirmPassword) {
      fetch('http://localhost:8000/api/users/', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then( r => r.json() )
      .then( json => {
        localStorage.setItem('token', json.token)
        this.setState({
          id: json.id,
          username: json.username,
          first_name: json.first_name,
          last_name: json.last_name
        }, () => this.signedUpUser(newUser))
      })
    } else {
      alert("Passwords don't match")
      this.setState({
        username: '',
        password: '',
        confirmPassword: ''
      })
    }
  }

  signedUpUser = (user) => {
    this.props.handleHide()
    this.props.history.push({
      pathname: `/profiles/${this.state.id}`,
      state: {
        id: this.state.id,
        username: this.state.username
      }
    })
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
            <Button positive onClick={this.handleSignUp}>Submit</Button>
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

export default withRouter(UserForm);
