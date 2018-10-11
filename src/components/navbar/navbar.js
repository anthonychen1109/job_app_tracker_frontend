import React, { Component } from 'react';

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
            <p>Sign Up</p>
          </div>
          <div>
            <p>Login</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
