import React, { Component } from 'react';
import SideNav from './sideNav';
import MainDisplay from './mainDisplay';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="mainApplications">
          <h1>Your Applications</h1>
        </div>
        <div className="mainApplicationsDisplay">
          <div>
            <SideNav />
          </div>
          <div>
            <MainDisplay />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
