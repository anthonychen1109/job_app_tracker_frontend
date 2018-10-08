import React, { Component } from 'react';

class HomeInfo extends Component {
  render() {
    return (
      <div className="homeInfo container animated fadeInLeft">
        <div>
          <div>
            <p>Open Doors</p>
          </div>
          <div>
            <h1>A mission to track your job hunting process</h1>
          </div>
          <div>
            <p>See the current status of your applications</p>
          </div>
          <div>
            <button type="button" class="btn btn-primary btn-lg">Sign Up</button>
          </div>
        </div>
        <div className="homeInfoMission">
          <div>
            <p>Mission</p>
          </div>
          <div className="homeInfoLayer">
            <div className="homeInfoLayerText">
              <h2>Help track and organize your job hunting applications. See the status of all your applications along with your own written notes all on one sheet.</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeInfo;
