import React, { Component } from 'react';

class Navbar extends Component {

  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }

  handleFormInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbarTitle"><h2>Job App Tracker</h2></div>
        <div className="navbarNav">
          <div>
            <p onClick={this.props.userSignUp}>Sign Up</p>
          </div>
          <div>
            <p onClick={this.props.userLogIn}>Login</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
