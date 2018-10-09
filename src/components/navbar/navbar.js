import React, { Component } from 'react';
import SignupForm from '../forms/signupForm';
import LoginForm from '../forms/loginForm';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbarTitle"><h2>Job App Tracker</h2></div>
        <div className="navbarNav">
          <div>
            <SignupForm />
          </div>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
