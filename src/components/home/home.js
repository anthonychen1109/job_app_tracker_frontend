import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import HomeInfo from './homeInfo';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="overlay">
          <Navbar />
          <HomeInfo />
        </div>
      </div>
    )
  }
}

export default Home;
