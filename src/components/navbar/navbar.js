import React, { Component } from 'react';
import SignupForm from '../forms/signupForm';
import LoginForm from '../forms/loginForm';

class Navbar extends Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
    hasAccount: ''
  }

  handleFormInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup = () => {
    this.setState({
      hasAccount: false
    })
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbarTitle"><h2>Job App Tracker</h2></div>
        <div className="navbarNav">
          <div>
            <SignupForm username={this.state.username} password={this.state.password} confirmPassword={this.state.confirmPassword} handleFormInput={this.handleFormInput} hasAccount={this.state.hasAccount}/>
          </div>
          <div>
            <LoginForm username={this.state.username} password={this.state.password} handleFormInput={this.handleFormInput} hasAccount={this.state.hasAccount}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
