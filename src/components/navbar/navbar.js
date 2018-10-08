import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbarTitle"><h2>Job App Tracker</h2></div>
        <div className="navbarNav">
          <div>
            <p>JOB INFO</p>
          </div>
          <div>
            <p>COMPANY</p>
          </div>
          <div>
            <p>TO-DO</p>
          </div>
          <div>
            <p>NOTES</p>
          </div>
          <div>
            <p>SIGN UP</p>
          </div>
          <div>
            <p>LOG IN</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
