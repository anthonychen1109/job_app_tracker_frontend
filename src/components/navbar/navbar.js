import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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

  renderNav = () => {
    return (
      this.props.hasAccount
      ?
      <div className="navbarNav">
        <div>
          <p onClick={this.handleLogout}>Log Out</p>
        </div>
      </div>
      :
      <div className="navbarNav">
        <div>
          <p onClick={this.props.userSignUp}>Sign Up</p>
        </div>
        <div>
          <p onClick={this.props.userLogIn}>Login</p>
        </div>
      </div>
    )
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbarTitle"><h2>Job App Tracker</h2></div>
        {this.renderNav()}
      </div>
    )
  }
}

export default withRouter(Navbar);
