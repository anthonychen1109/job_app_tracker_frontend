import React, { Component } from 'react';
import SideNav from './sideNav';
import MainDisplay from './mainDisplay';

class Main extends Component {

  state = {
    term: ''
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.getUser()
    }
  }

  getUser = () => {
    this.setState({ term: 'company' })
    console.log('user');
  }

  handleJobInfo = () => {
    this.setState({
      term: 'jobInfo'
    })
  }

  handleCompany = () => {
    this.setState({
      term: 'company'
    })
  }

  handleTodo = () => {
    this.setState({
      term: 'todo'
    })
  }

  handleNotes = () => {
    this.setState({
      term: 'notes'
    })
  }

  render() {
    return (
      <div className="main">
        <div className="mainApplications">
          <h1>Your Applications</h1>
        </div>
        <div className="mainApplicationsDisplay">
          <div>
            <SideNav handleJobInfo={this.handleJobInfo} handleCompany={this.handleCompany} handleTodo={this.handleTodo} handleNotes={this.handleNotes}/>
          </div>
          <div>
            {
              this.state.term === ''
              ? <MainDisplay term={this.props.term} />
              : <MainDisplay term={this.state.term}/>
            }
          </div>
        </div>
      </div>
    )
  }
}

Main.defaultProps = {
  term: 'jobInfo'
}

export default Main;
