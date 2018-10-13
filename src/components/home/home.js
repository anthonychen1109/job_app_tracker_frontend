import React, { Component } from 'react'
import Navbar from '../navbar/navbar';
import HomeInfo from './homeInfo';
import Main from '../main/main';
import { Dimmer } from 'semantic-ui-react'
import UserForm from '../forms/userForm';

export default class Home extends Component {
  state = {
    hasAccount: ''
  }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  userSignUp = () => {
    this.setState({
      hasAccount: false
    })
    this.handleShow()
  }

  userLogIn = () => {
    this.setState({
      hasAccount: true
    })
    this.handleShow()
  }

  render() {
    const { active } = this.state

    return (
      <div>
        <Dimmer.Dimmable dimmed={active}>
          <div className="home">
            <div className="overlay">
              <Navbar userLogIn={this.userLogIn} userSignUp={this.userSignUp}/>
              <HomeInfo />
            </div>
            <Main />
          </div>
          <Dimmer active={active} onClickOutside={this.handleHide} verticalAlign='top'>
            <UserForm hasAccount={this.state.hasAccount} handleHide={this.handleHide}/>
          </Dimmer>
        </Dimmer.Dimmable>
      </div>
    )
  }
}
