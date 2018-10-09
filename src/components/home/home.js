import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import HomeInfo from './homeInfo';
import Main from '../main/main';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="overlay">
          <Navbar />
          <HomeInfo />
        </div>
        <Main />
      </div>
    )
  }
}

export default Home;
